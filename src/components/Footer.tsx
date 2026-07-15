import Container from "./Container";
import Logo from "./Logo";
import { site, nav } from "@/lib/site";
import { legalNote } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-line bg-paper-deep">
      {/* Flow strip */}
      <div className="border-b border-line">
        <Container className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 py-6 text-center">
          {site.flow.map((step, i) => (
            <span key={step} className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/80">
                {step}
              </span>
              {i < site.flow.length - 1 && <span className="text-brass">→</span>}
            </span>
          ))}
        </Container>
      </div>

      {/* Columns */}
      <Container className="grid gap-10 py-14 md:grid-cols-[1.7fr_1fr_1fr] md:py-16">
        <div className="flex flex-col items-start gap-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-muted">{site.tagline}</p>
          <p className="text-xs uppercase tracking-[0.2em] text-muted/70">{site.category}</p>
          <p className="text-sm text-muted">{site.contact.location}</p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/70">
            Explore
          </h3>
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-brass"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/70">
            Get in touch
          </h3>
          <a
            href={`mailto:${site.contact.email}`}
            className="text-sm text-muted transition-colors hover:text-brass"
          >
            {site.contact.email}
          </a>
          <a href="#contact" className="text-sm text-muted transition-colors hover:text-brass">
            Book a Free Audit
          </a>
          <a href="#faq" className="text-sm text-muted transition-colors hover:text-brass">
            Questions &amp; answers
          </a>
          {/*
            Social links intentionally omitted until real profiles exist.
            Add the Instagram / Facebook handles here once they are live.
          */}
        </div>
      </Container>

      {/* Legal / trust disclaimer */}
      <div className="border-t border-line">
        <Container className="py-5">
          <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-muted/70">
            {legalNote}
          </p>
        </Container>
      </div>

      {/* Copyright */}
      <div className="border-t border-line">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-center text-xs text-muted sm:flex-row sm:text-left">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p className="text-muted/70">AI inquiry systems for growth-focused businesses.</p>
        </Container>
      </div>
    </footer>
  );
}
