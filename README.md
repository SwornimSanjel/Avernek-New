# Avernik — Marketing Website

Public marketing website for **Avernik**, an AI Automation & Growth Systems Agency.
Positioning: *Avernik owns the inquiry system between marketing and sales* —
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
│   ├── icon.svg            # favicon (Avernik mark)
│   ├── robots.ts           # robots.txt
│   ├── sitemap.ts          # sitemap.xml
│   └── api/lead/route.ts   # contact form endpoint (backend-ready)
├── components/
│   ├── Mark.tsx            # the Avernik "ascending A" mark (SVG)
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

## Contact form / lead handling

The "Free system audit" form posts to `src/app/api/lead/route.ts`, which
validates input (with a honeypot spam trap) and is ready for a downstream
integration. To connect it to your **n8n / Make / Google Sheet CRM**:

1. Create a webhook in n8n/Make (or a Google Apps Script web app that appends
   a row to the CRM sheet).
2. Add the URL as an environment variable:
   ```
   LEAD_WEBHOOK_URL=https://your-webhook-url
   ```
   (locally in `.env.local`; in production via your host's env settings).
3. The route already forwards validated leads to `LEAD_WEBHOOK_URL` when set.
   Until then, leads are validated and logged server-side so the form works.

## Deployment (recommended: Vercel)

1. Push this folder to a Git repository (GitHub/GitLab).
2. Import the repo at <https://vercel.com/new> — it auto-detects Next.js.
3. Add the `LEAD_WEBHOOK_URL` environment variable (once your CRM webhook
   exists).
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

All outward-facing copy derives from `Avernik_Full_Agency_Blueprint.pdf` (v9).
Internal-only material (margins, unit economics, token costs, hiring triggers,
internal SOPs) is intentionally **excluded**. Pricing is shown as "starting
from" so founding-client terms stay flexible. No fake testimonials are used —
the Proof section uses clearly-labelled sample metrics, a demo report card and
example inquiry scenarios instead.
```

## Security

Production hardening is built in; a few things must be done on the host/domain:

- **Secrets:** set `LEAD_WEBHOOK_URL` (and optionally `TURNSTILE_SECRET_KEY`)
  as **server-side env vars only** — never `NEXT_PUBLIC_*`. Only
  `NEXT_PUBLIC_TURNSTILE_SITE_KEY` (a public site key) may be public.
- **Response headers:** CSP, HSTS, X-Frame-Options: DENY, X-Content-Type-Options,
  Referrer-Policy and Permissions-Policy are set in `next.config.mjs`.
- **/api/lead:** same-origin only, JSON only, per-IP rate limiting, honeypot, and
  optional Cloudflare Turnstile. No PII is logged.
- **Email auth:** before sending mail from the domain, set up **SPF, DKIM and
  DMARC** to prevent spoofing/phishing of the Avernik address.
- **Dependencies:** run `npm audit` periodically and keep packages patched.
- **Bot protection (optional):** create a Cloudflare Turnstile widget and set
  `NEXT_PUBLIC_TURNSTILE_SITE_KEY` + `TURNSTILE_SECRET_KEY`. With no keys, the
  form still works (Turnstile is skipped gracefully).
