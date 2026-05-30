import Container from "./Container";
import Logo from "./Logo";
import { site, nav } from "@/lib/site";
import { legalNote } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-ink">
      {/* Flow strip */}
      <div className="border-b border-white/10 bg-navy-deep/40">
        <Container className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 py-5 text-center">
          {site.flow.map((step, i) => (
            <span key={step} className="flex items-center gap-3">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-ivory/90">
                {step}
              </span>
              {i < site.flow.length - 1 && <span className="text-accent">→</span>}
            </span>
          ))}
        </Container>
      </div>

      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <Logo tone="ivory" />
          <p className="max-w-xs text-sm leading-relaxed text-slate">
            {site.tagline}
          </p>
          <p className="text-sm text-slate">Avenor · {site.contact.location}</p>
          <p className="text-xs uppercase tracking-[0.2em] text-slate/80">{site.category}</p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-ivory/70">Explore</h3>
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate transition-colors hover:text-accent-glow"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-ivory/70">Contact</h3>
          <a
            href={`mailto:${site.contact.email}`}
            className="text-sm text-slate transition-colors hover:text-accent-glow"
          >
            {site.contact.email}
          </a>
          <span className="text-sm text-slate">{site.contact.location}</span>
          {/*
            Social links intentionally omitted until real profiles exist.
            site.social.* are still placeholders — add the links back here
            once the Instagram / Facebook handles are live.
          */}
        </div>
      </Container>

      {/* Legal / trust disclaimer */}
      <div className="border-t border-white/10">
        <Container className="py-5">
          <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-slate/80">
            {legalNote}
          </p>
        </Container>
      </div>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-center text-xs text-slate sm:flex-row sm:text-left">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
