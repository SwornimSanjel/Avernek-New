import "server-only";
import { Resend } from "resend";

/**
 * Lead-notification email via Resend.
 *
 * Sends a clean HTML summary of a new audit request to LEAD_NOTIFY_TO. If
 * RESEND_API_KEY is missing it logs a warning and returns — a missing email
 * config must never crash the lead route or lose the submission.
 */
export type LeadFields = {
  name: string;
  business: string;
  email: string;
  phone?: string;
  improve?: string;
  source?: string;
  message?: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(label: string, value?: string): string {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:6px 14px 6px 0;color:#8A90A3;font-size:13px;white-space:nowrap;vertical-align:top;">${label}</td>
      <td style="padding:6px 0;color:#11131C;font-size:14px;">${escapeHtml(value)}</td>
    </tr>`;
}

export async function sendLeadNotification(lead: LeadFields): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFY_TO;
  const from = process.env.LEAD_NOTIFY_FROM;

  if (!apiKey || !to || !from) {
    console.warn(
      "[lead] email notification skipped — set RESEND_API_KEY, LEAD_NOTIFY_TO and LEAD_NOTIFY_FROM to enable. See .env.example.",
    );
    return;
  }

  const resend = new Resend(apiKey);
  const receivedAt = new Date().toLocaleString("en-US", { timeZone: "Asia/Kathmandu" });

  const html = `
  <div style="background:#05060A;padding:24px;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:560px;margin:0 auto;background:#ECEEF4;border-radius:12px;overflow:hidden;">
      <div style="background:linear-gradient(120deg,#60A5FA 0%,#8B5CF6 100%);padding:18px 24px;">
        <p style="margin:0;color:#fff;font-size:16px;font-weight:bold;">New audit request</p>
        <p style="margin:4px 0 0;color:#EAF2FF;font-size:13px;">${escapeHtml(lead.business)}</p>
      </div>
      <div style="padding:20px 24px;">
        <table style="width:100%;border-collapse:collapse;">
          ${row("Name", lead.name)}
          ${row("Business", lead.business)}
          ${row("Email", lead.email)}
          ${row("Phone", lead.phone)}
          ${row("Improve first", lead.improve)}
          ${row("Inquiry source", lead.source)}
          ${row("Current process", lead.message)}
          ${row("Received", `${receivedAt} (Kathmandu)`)}
        </table>
      </div>
    </div>
  </div>`;

  // The Resend SDK returns errors instead of throwing — check explicitly so a
  // rejected send (bad sender, sandbox restrictions) is visible in the logs.
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: lead.email,
    subject: `New audit request — ${lead.business}`,
    html,
  });
  if (error) {
    console.error("[lead] email notification rejected:", error.message);
  }
}
