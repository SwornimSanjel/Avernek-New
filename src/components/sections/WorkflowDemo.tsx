import Container from "../Container";
import ScrollReveal from "../ScrollReveal";
import HeroConsole from "./HeroConsole";

/**
 * Live demo — the dark spotlight section. One inquiry moving through the
 * Inquiry Control Center (reused from the hero brief), paired with a short,
 * calm explanation. No crowded chat wall.
 */

const capabilities = [
  { title: "Replies in the moment", body: "A fast, on-brand first answer on the channel the customer used." },
  { title: "Qualifies real intent", body: "Structured questions separate serious buyers from browsers." },
  { title: "Routes with context", body: "Hot leads land in your CRM and your team is alerted to follow up." },
];

export default function WorkflowDemo() {
  return (
    <section id="demo" className="surface-dark relative scroll-mt-24 overflow-hidden py-32 md:py-48">
      <div aria-hidden className="grid-lines-dark pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-brass-bright/10 blur-[140px]"
      />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <ScrollReveal className="flex flex-col">
          <span className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brass-deep">
            <span aria-hidden className="h-px w-8 bg-brass-deep/50" />
            Live demo
          </span>
          <h2 className="mt-5 max-w-md font-display text-4xl font-medium leading-[1.06] tracking-[-0.01em] text-char-text md:text-[3rem]">
            Watch one inquiry move through the <em>system.</em>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-char-muted">
            An illustrative preview of the moment a message arrives — answered, understood, and
            handed to your team, without anyone lifting a finger.
          </p>

          <ul className="mt-8 flex flex-col gap-5">
            {capabilities.map((c) => (
              <li key={c.title} className="flex gap-3.5">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brass-deep/12 text-brass-deep">
                  <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5" aria-hidden>
                    <path
                      d="M4 10.5 8 14 16 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-char-text">{c.title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-char-muted">{c.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <HeroConsole />
        </ScrollReveal>
      </Container>
    </section>
  );
}
