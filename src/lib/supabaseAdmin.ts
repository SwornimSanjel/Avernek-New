import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client using the SERVICE ROLE key.
 *
 * The service role bypasses Row Level Security, so this MUST never reach the
 * browser. The `server-only` import above makes the build fail loudly if this
 * module is ever imported into a client component. Neither env var is prefixed
 * with NEXT_PUBLIC, so they are never bundled client-side.
 *
 * Created lazily so the app still builds when the env vars are unset (the lead
 * route degrades gracefully and logs a warning instead of crashing).
 */
let client: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient {
  if (client) return client;

  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error(
      "Supabase is not configured: set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local. See .env.example.",
    );
  }

  client = createClient(url, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return client;
}
