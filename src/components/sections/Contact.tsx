"use client";

import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import Container from "../Container";
import ScrollReveal from "../ScrollReveal";
import { ActionButton } from "../Button";
import Turnstile from "../Turnstile";
import AmbientBackground from "../AmbientBackground";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const improveOptions = [
  "Faster inquiry replies",
  "Better lead qualification",
  "Follow-up tracking",
  "Missed leads after hours",
  "AI automation for operations",
  "Not sure yet",
];

const sourceOptions = [
  "Website forms",
  "Facebook / Instagram",
  "Phone calls",
  "Paid ads",
  "Multiple channels",
  "Not sure yet",
];

type ContactLink = {
  label: string;
  href: string;
  icon: "mail" | "instagram" | "facebook" | "tiktok";
};

const contactLinks: ContactLink[] = [
  {
    label: "Email",
    href: `mailto:${site.contact.email}`,
    icon: "mail",
  },
  {
    label: "Instagram",
    href: site.social.instagram,
    icon: "instagram",
  },
  {
    label: "Facebook",
    href: site.social.facebook,
    icon: "facebook",
  },
  {
    label: "TikTok",
    href: site.social.tiktok,
    icon: "tiktok",
  },
];

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const data: Record<string, FormDataEntryValue> = Object.fromEntries(fd.entries());
    // Map the Turnstile field (present only when bot protection is enabled).
    const cf = fd.get("cf-turnstile-response");
    if (cf) data.turnstileToken = cf;

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.message ?? "Something went wrong.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const fieldClass =
    "hud-cut-xs w-full border border-accent/15 bg-accent/[0.03] px-4 py-3 text-sm text-ivory placeholder:text-slate/70 transition-colors hover:border-accent/25 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";
  const labelClass = "mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate";

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-navy-deep py-24 md:py-32"
    >
      <AmbientBackground variant="section" />
      <Container className="relative grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <ScrollReveal className="flex flex-col gap-6">
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-slate">
            System audit
          </span>
          <h2 className="font-sans text-4xl font-medium leading-[1.05] text-ivory sm:text-[3rem]">
            See where your inquiries are{" "}
            <em className="italic">leaking.</em>
          </h2>
          <p className="text-base leading-relaxed text-slate">
            One short call to map how inquiries enter, how fast they get handled, and where they
            leak.
          </p>

          <div className="hud-cut-sm mt-2 flex flex-col gap-3 border border-line bg-ink/40 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-slate">Founding-client slots</p>
            <p className="text-sm leading-relaxed text-ivory/85">
              We are onboarding a limited number of early businesses with tailored setup support.
              If your team depends on inquiries, the audit shows where the system can improve.
            </p>
          </div>

          <p className="flex items-start gap-2 text-sm leading-relaxed text-slate">
            <span className="mt-0.5 text-accent-glow">▸</span>
            <span>
              <span className="text-silver">Best fit:</span> businesses that receive inquiries
              through calls, forms, DMs, or ads, and want a clearer system for response,
              qualification, and follow-up.
            </span>
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-3">
            {contactLinks.map((link) => {
              const external = link.href.startsWith("http");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  aria-label={link.label}
                  title={link.label}
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-accent/10 bg-accent/[0.04] text-slate transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent/10 hover:text-accent-glow hover:shadow-[0_0_26px_-10px_var(--primary-glow)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                >
                  <ContactIcon icon={link.icon} />
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-3 text-sm text-slate">
            <span className="h-px w-8 bg-accent/50" />
            <span>{site.contact.location}</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          {status === "success" ? (
            <div className="hud-cut hud-brackets flex h-full flex-col items-center justify-center border border-accent/30 bg-accent/[0.06] p-10 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-2xl text-ink">
                ✓
              </div>
              <h3 className="text-xl font-medium text-ivory">Request received</h3>
              <p className="mt-2 max-w-sm text-sm text-slate">
                Thanks, we will review your inquiry flow and get back to you shortly. Keep an eye on
                your inbox.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm font-medium text-accent-glow hover:underline"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="hud-cut hud-brackets border border-accent/10 bg-ink/40 p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Your name
                  </label>
                  <input id="name" name="name" required className={fieldClass} placeholder="Full name" />
                </div>
                <div>
                  <label htmlFor="business" className={labelClass}>
                    Business name
                  </label>
                  <input
                    id="business"
                    name="business"
                    required
                    className={fieldClass}
                    placeholder="Your business"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={fieldClass}
                    placeholder="you@business.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    className={fieldClass}
                    placeholder="Best contact number"
                  />
                </div>
              </div>

              <div className="mt-5 grid gap-5">
                <SelectField
                  id="improve"
                  label="What do you want to improve first?"
                  placeholder="Select one"
                  options={improveOptions}
                />
                <SelectField
                  id="source"
                  label="Where do most inquiries come from today?"
                  placeholder="Select one"
                  options={sourceOptions}
                />
              </div>

              <div className="mt-5">
                <label htmlFor="message" className={labelClass}>
                  What happens after someone inquires?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={fieldClass}
                  placeholder="Briefly describe your current reply/follow-up process. Example: who replies, how fast, and where leads are tracked."
                />
              </div>

              {/* Honeypot field for basic spam protection */}
              <input
                type="text"
                name="company_website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden
              />

              {/* Optional bot protection — renders only when configured */}
              <Turnstile />

              {status === "error" && (
                <div
                  role="alert"
                  className="mt-4 rounded-lg border border-red-400/30 bg-red-400/[0.06] p-3 text-sm"
                >
                  <p className="text-red-400">{error}</p>
                  <p className="mt-1 text-slate">
                    Trouble sending? Email{" "}
                    <a href={`mailto:${site.contact.email}`} className="font-medium text-accent-glow hover:underline">
                      {site.contact.email}
                    </a>
                    .
                  </p>
                </div>
              )}

              <ActionButton type="submit" className="mt-6 w-full" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending…" : "Book my system audit"}
              </ActionButton>

              <p className="mt-4 text-center text-xs text-slate">
                We only use this information to prepare for your audit. Sensitive business details can
                be discussed on the call.
              </p>
            </form>
          )}
        </ScrollReveal>
      </Container>
    </section>
  );
}

/**
 * Fully custom, on-brand dropdown. A native <select> only lets us style the
 * closed box; this renders the option list ourselves so the open menu matches
 * the dark theme. The chosen value is mirrored into a hidden input so the
 * existing FormData submission still captures the field with no API change.
 */
function SelectField({
  id,
  label,
  placeholder,
  options,
}: {
  id: string;
  label: string;
  placeholder: string;
  options: string[];
}) {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(-1);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Close on outside click and on Escape.
  useEffect(() => {
    if (!open) return;
    function onMouseDown(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: globalThis.KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function openMenu() {
    setHighlight(value ? Math.max(options.indexOf(value), 0) : 0);
    setOpen(true);
  }

  function select(i: number) {
    const opt = options[i];
    if (opt == null) return;
    setValue(opt);
    setOpen(false);
  }

  function onTriggerKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!open) return openMenu();
      setHighlight((h) => Math.min(h + 1, options.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!open) return openMenu();
      setHighlight((h) => Math.max(h - 1, 0));
    } else if (e.key === "Enter" || e.key === " ") {
      if (open && highlight >= 0) {
        e.preventDefault();
        select(highlight);
      } else if (!open) {
        e.preventDefault();
        openMenu();
      }
    }
  }

  return (
    <div ref={wrapRef} className="relative">
      <label htmlFor={id} className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate">
        {label}
      </label>

      <button
        type="button"
        id={id}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => (open ? setOpen(false) : openMenu())}
        onKeyDown={onTriggerKeyDown}
        className={`hud-cut-xs relative w-full border border-accent/15 bg-accent/[0.03] px-4 py-3 pr-10 text-left text-sm transition-colors hover:border-accent/25 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent ${
          value ? "text-ivory" : "text-slate/70"
        }`}
      >
        {value || placeholder}
        <svg
          aria-hidden
          viewBox="0 0 20 20"
          fill="none"
          className={`pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          <path
            d="M5.5 8 10 12.5 14.5 8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Mirror the value for the existing FormData submission */}
      <input type="hidden" name={id} value={value} />

      {/* Conditionally rendered (no AnimatePresence) so the panel always unmounts
          on close. Entrance animation only; closing is instant and reliable. */}
      {open && (
        <div
          role="listbox"
          className="hud-cut-sm absolute left-0 right-0 top-full z-30 mt-2 max-h-64 animate-fade-up overflow-y-auto border border-accent/10 bg-ink p-1.5 shadow-card"
        >
            {options.map((opt, i) => {
              const selected = opt === value;
              return (
                <button
                  key={opt}
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onMouseEnter={() => setHighlight(i)}
                  onClick={() => select(i)}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors hover:bg-accent/5 ${
                    selected ? "text-accent-glow" : "text-silver"
                  } ${highlight === i ? "bg-accent/5" : ""}`}
                >
                  <span>{opt}</span>
                  {selected && (
                    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 text-accent-glow" aria-hidden>
                      <path
                        d="M4 10.5 8 14.5 16 6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              );
            })}
        </div>
      )}
    </div>
  );
}

function ContactIcon({ icon }: { icon: ContactLink["icon"] }) {
  if (icon === "mail") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
        <path
          d="M4.5 6.5h15v11h-15v-11Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="m5 7 7 6 7-6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (icon === "instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
        <rect
          x="5"
          y="5"
          width="14"
          height="14"
          rx="4"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M15.4 11.56a3.4 3.4 0 1 1-6.8.88 3.4 3.4 0 0 1 6.8-.88Z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path d="M16.4 7.8h.01" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "tiktok") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M15.46 3.2c.27 2.05 1.42 3.42 3.44 3.55v3.12a6.7 6.7 0 0 1-3.42-.9v5.88c0 3.82-3.02 6.12-6.18 5.07-4.53-1.5-4.12-8.16.67-9.05.62-.12 1.21-.1 1.82.03v3.27a2.7 2.7 0 0 0-1.4-.17c-2.1.43-1.96 3.46.03 3.76 1.28.19 2.09-.56 2.09-1.93V3.2h2.95Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M13.5 21v-8h2.68l.4-3.11H13.5V7.9c0-.9.25-1.51 1.54-1.51h1.65V3.6A22 22 0 0 0 14.29 3c-2.38 0-4 1.45-4 4.11v2.78H7.6V13h2.69v8h3.21Z" />
    </svg>
  );
}
