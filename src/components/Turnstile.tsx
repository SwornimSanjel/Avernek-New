"use client";

import Script from "next/script";

/**
 * Optional Cloudflare Turnstile widget. Privacy-friendly, free bot protection.
 *
 * Renders nothing unless NEXT_PUBLIC_TURNSTILE_SITE_KEY is set, so the form
 * works with zero configuration. When enabled, the widget adds a hidden
 * `cf-turnstile-response` field which the form maps to `turnstileToken`, and the
 * API route verifies it server-side (TURNSTILE_SECRET_KEY).
 */
export default function Turnstile() {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  if (!siteKey) return null;
  return (
    <div className="mt-5">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />
      <div className="cf-turnstile" data-sitekey={siteKey} data-theme="dark" />
    </div>
  );
}
