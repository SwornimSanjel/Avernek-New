import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";
import { sendLeadNotification } from "@/lib/notifyEmail";

/**
 * Lead intake endpoint for the "Book a system audit" form.
 *
 * Validates the payload, then delivers it. Hardened for public deployment:
 * same-origin only, JSON only, per-IP rate limiting, honeypot, optional
 * Cloudflare Turnstile, and no PII in logs.
 *
 * Delivery (all independent, none can break the user's success response):
 *   1. Save to Supabase (`leads` table, service-role insert).
 *   2. Email a notification to the team via Resend.
 *   3. Optional legacy webhook if `LEAD_WEBHOOK_URL` is set.
 * With env vars unset, the form still returns success and logs a warning.
 */

export const runtime = "nodejs";

type LeadPayload = {
  name?: string;
  business?: string;
  email?: string;
  phone?: string;
  improve?: string; // "What do you want to improve first?"
  source?: string; // "Where do most inquiries come from today?"
  message?: string; // current reply/follow-up process
  company_website?: string; // honeypot — must stay empty
  turnstileToken?: string; // optional bot-protection token
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ---- Lightweight in-memory rate limiter (per IP, fixed window) -------------
// Note: per server instance. Good enough as a first line of defence alongside
// the honeypot + Turnstile. For multi-instance hosting, back this with a shared
// store (e.g. Upstash Redis).
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;
const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_REQUESTS;
}

function clientIp(request: Request): string {
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

function sameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true; // no Origin header (e.g. server-side) — allow
  try {
    const host = request.headers.get("host");
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

async function verifyTurnstile(token: string | undefined, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // not configured — skip gracefully
  if (!token) return false;
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token, remoteip: ip }),
    });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

type Lead = {
  name: string;
  business: string;
  email: string;
  phone?: string;
  improve?: string;
  source?: string;
  message?: string;
};

/** Save the lead to Supabase. Never throws — DB hiccups must not lose the lead. */
async function saveToSupabase(lead: Lead): Promise<void> {
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.warn(
      "[lead] Supabase not configured — lead NOT saved. Set SUPABASE_URL and " +
        "SUPABASE_SERVICE_ROLE_KEY to persist leads. See .env.example.",
    );
    return;
  }
  try {
    const { error } = await getSupabaseAdmin()
      .from("leads")
      .insert({ ...lead, origin: "website:system-audit" });
    if (error) {
      // Log a non-PII error only (code/message describe the DB op, not the user).
      console.error("[lead] Supabase insert failed:", error.message);
    }
  } catch {
    console.error("[lead] Supabase insert threw");
  }
}

/** Optional legacy webhook delivery (n8n / Make / Apps Script). */
async function forwardToWebhook(lead: Lead): Promise<void> {
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (!webhookUrl) return;
  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...lead,
        source: "website:system-audit",
        receivedAt: new Date().toISOString(),
      }),
    });
  } catch {
    console.error("[lead] webhook forwarding failed");
  }
}

/**
 * Deliver a validated lead. Each channel is isolated so one failure (DB, email,
 * or webhook) never breaks the others or the user's success response.
 */
async function forwardLead(lead: Lead) {
  await Promise.allSettled([
    saveToSupabase(lead),
    sendLeadNotification(lead).catch(() => console.error("[lead] email notification failed")),
    forwardToWebhook(lead),
  ]);
}

export async function POST(request: Request) {
  // Same-origin only.
  if (!sameOrigin(request)) {
    return NextResponse.json({ message: "Forbidden." }, { status: 403 });
  }

  // JSON only.
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ message: "Unsupported content type." }, { status: 415 });
  }

  // Rate limit.
  const ip = clientIp(request);
  if (rateLimited(ip)) {
    return NextResponse.json(
      { message: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  let payload: LeadPayload;
  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: silently accept bots without forwarding.
  if (payload.company_website) {
    return NextResponse.json({ ok: true });
  }

  // Optional bot protection.
  if (!(await verifyTurnstile(payload.turnstileToken, ip))) {
    return NextResponse.json({ message: "Verification failed. Please try again." }, { status: 403 });
  }

  const name = payload.name?.trim();
  const business = payload.business?.trim();
  const email = payload.email?.trim();

  if (!name || !business || !email) {
    return NextResponse.json(
      { message: "Please fill in your name, business and email." },
      { status: 422 },
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 422 });
  }

  const lead = {
    name,
    business,
    email,
    phone: payload.phone?.trim() || undefined,
    improve: payload.improve?.trim() || undefined,
    source: payload.source?.trim() || undefined,
    message: payload.message?.trim() || undefined,
  };

  // forwardLead isolates each channel and never throws, so a delivery hiccup
  // never costs the user their success response.
  await forwardLead(lead);

  // Non-identifying event log (no name/email/phone).
  console.info("[lead] received", {
    db: Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY),
    email: Boolean(process.env.RESEND_API_KEY),
    webhook: Boolean(process.env.LEAD_WEBHOOK_URL),
  });

  return NextResponse.json({ ok: true });
}
