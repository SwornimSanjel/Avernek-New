# Avernek — Marketing Website

Public marketing website for **Avernek**, an AI Automation & Growth Systems Agency.
Positioning: *Avernek owns the inquiry system between marketing and sales* —
**Generate → Reply → Save → Qualify → Follow Up → Report**.

Visual direction: a dark, futuristic **"AI command center"** identity — obsidian
background, charcoal glass panels, silver text, and an electric-blue → violet
accent. The mark is the **FILTER-A** glyph (a sharp "A" with stacked crossbar
notches + apex node).

## Tech stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript** (strict)
- **Tailwind CSS 3** (brand tokens in `tailwind.config.ts`)
- **Framer Motion** (scroll + entrance animations)
- **ESLint** (`next/core-web-vitals`)
- Fonts: **Sora** (display) + **Hanken Grotesk** (body) via `next/font`

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # fonts, SEO metadata, JSON-LD
│   ├── page.tsx            # homepage (composes all sections)
│   ├── globals.css         # Tailwind layers + base styles
│   ├── icon.svg            # favicon (Avernek mark)
│   ├── robots.ts           # robots.txt
│   ├── sitemap.ts          # sitemap.xml
│   └── api/lead/route.ts   # contact form endpoint (backend-ready)
├── components/
│   ├── Mark.tsx            # the Avernek "ascending A" mark (SVG)
│   ├── Logo.tsx, Navbar.tsx, Footer.tsx
│   ├── Button.tsx, Container.tsx, SectionHeading.tsx
│   ├── ScrollReveal.tsx    # Framer Motion reveal wrapper
│   ├── JsonLd.tsx          # Organization structured data
│   └── sections/           # Hero, Problem, SystemFlow, IsIsNot,
│                           # Industries, Pricing, Proof, Faq, Team,
│                           # CtaBanner, Contact
└── lib/
    ├── site.ts             # site config + contact details (PLACEHOLDERS)
    └── content.ts          # all copy/data (packages, faqs, scenarios…)
```

## Running locally

> **Note:** A standalone Node.js install was not found on this machine's PATH.
> A working Node v24 binary exists in the Codex runtime and was used to build.
> For normal development, **install Node.js 18.18+ (LTS recommended)** from
> <https://nodejs.org> so `node` and `npm` are on your PATH. Then:

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint
```

## Lead pipeline

The "Book a system audit" form posts to `src/app/api/lead/route.ts`, which
validates input (honeypot + optional Turnstile, per-IP rate limit, same-origin)
then delivers the lead through three independent channels. Each is isolated, so
a failure in one never breaks the others or the user's success response — with
**no env vars set the form still returns success** and logs a warning.

1. **Supabase** — saves every lead to a `leads` table (primary storage).
2. **Resend** — emails a notification to the team on every submission.
3. **Webhook** (optional) — legacy POST to `LEAD_WEBHOOK_URL` if set.

### Environment variables

Add to `.env.local` (see `.env.example` for the annotated copy):

```
SUPABASE_URL=                       # Supabase → Settings → API → Project URL
SUPABASE_SERVICE_ROLE_KEY=          # Settings → API → service_role (SERVER-ONLY)
RESEND_API_KEY=                     # resend.com → API Keys
LEAD_NOTIFY_TO=avenor.system@gmail.com   # inbox that gets the notification
LEAD_NOTIFY_FROM=onboarding@resend.dev   # verified sender (domain for prod)
LEAD_WEBHOOK_URL=                   # optional legacy webhook
```

The service-role key bypasses Row Level Security and is imported only through
`src/lib/supabaseAdmin.ts`, which is marked `server-only` — it can never reach
the browser. Never prefix it with `NEXT_PUBLIC`.

### Supabase table

Run this once in the Supabase **SQL editor**:

```sql
create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null,
  business    text not null,
  email       text not null,
  phone       text,
  improve     text,
  source      text,
  message     text,
  origin      text default 'website:system-audit'
);

-- Lock the table down: RLS on, and NO policies. Only the service_role key
-- (used server-side in this app) can read/write; anon/public cannot.
alter table public.leads enable row level security;
```

### Testing locally

1. `cp .env.example .env.local` and fill in the Supabase + Resend values.
2. `npm run dev`, open the site, and submit the audit form.
3. Confirm a new row appears in Supabase (Table editor → `leads`) **and** a
   "New audit request — {business}" email lands in `LEAD_NOTIFY_TO`.
4. With the env vars left blank, the form still succeeds — the server logs
   `[lead] Supabase not configured…` / `email notification skipped…` instead.

> **Production email:** `onboarding@resend.dev` works for testing but may land
> in spam. Verify a domain in Resend and set `LEAD_NOTIFY_FROM` to e.g.
> `notify@avernek.com` so notifications deliver cleanly.

## Deployment (recommended: Vercel)

1. Push this folder to a Git repository (GitHub/GitLab).
2. Import the repo at <https://vercel.com/new> — it auto-detects Next.js.
3. Add the lead-pipeline environment variables (Supabase + Resend; see the
   **Lead pipeline** section above) in the host's project settings.
4. Deploy. Set your custom domain and update `site.url` in `src/lib/site.ts`.

Netlify works equally well (Next.js runtime auto-detected).

## ⚠️ Replace before launch

These are **placeholders** — search and replace before going live:

- `src/lib/site.ts`
  - `url` — real domain (also used for SEO/sitemap/OG)
  - `contact.phone`, `contact.whatsapp` — real numbers
  - `contact.location` — confirm
  - `social.instagram`, `social.facebook` — real profile URLs
  - `contact.email` — currently the temporary `avenor.system@gmail.com`;
    swap for a domain email when ready
- **Logo:** `src/components/Mark.tsx` and `src/app/icon.svg` use the
  **FILTER-A** mark (from `logo brainstorm/10/avernik_combos.svg`) as a
  **working placeholder**. If a different final mark is chosen, update those two
  files (`Mark.tsx` is reused in the navbar, footer, preloader and report card;
  `icon.svg` is the favicon). The `Logo.tsx` lockup wraps the mark in a
  rounded-square chip.

## Content source

All outward-facing copy derives from `Avernek_Full_Agency_Blueprint.pdf` (v9).
Internal-only material (margins, unit economics, token costs, hiring triggers,
internal SOPs) is intentionally **excluded**. Pricing is shown as "starting
from" so founding-client terms stay flexible. No fake testimonials are used —
the Proof section uses clearly-labelled sample metrics, a demo report card and
example inquiry scenarios instead.
```

## Security

Production hardening is built in; a few things must be done on the host/domain:

- **Secrets:** set `SUPABASE_SERVICE_ROLE_KEY`, `RESEND_API_KEY`,
  `LEAD_WEBHOOK_URL` (and optionally `TURNSTILE_SECRET_KEY`) as **server-side
  env vars only** — never `NEXT_PUBLIC_*`. Only `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
  (a public site key) may be public. The service-role key is `server-only`.
- **Response headers:** CSP, HSTS, X-Frame-Options: DENY, X-Content-Type-Options,
  Referrer-Policy and Permissions-Policy are set in `next.config.mjs`.
- **/api/lead:** same-origin only, JSON only, per-IP rate limiting, honeypot, and
  optional Cloudflare Turnstile. No PII is logged.
- **Email auth:** before sending mail from the domain, set up **SPF, DKIM and
  DMARC** to prevent spoofing/phishing of the Avernek address.
- **Dependencies:** run `npm audit` periodically and keep packages patched.
- **Bot protection (optional):** create a Cloudflare Turnstile widget and set
  `NEXT_PUBLIC_TURNSTILE_SITE_KEY` + `TURNSTILE_SECRET_KEY`. With no keys, the
  form still works (Turnstile is skipped gracefully).
