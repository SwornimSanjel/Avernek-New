import Container from "../Container";
import ScrollReveal from "../ScrollReveal";
import { flowSteps } from "@/lib/content";

/* One-line business outcome per stage — what the owner actually gets. */
const outcomes = [
  "Nothing slips through the cracks",
  "You're the first to reply, every time",
  "Your team only calls real buyers",
  "Fewer deals go cold mid-decision",
  "The hottest lead is always on top",
  "You see exactly what's working",
];

function StepIcon({ i, className }: { i: number; className?: string }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (i) {
    case 0: // Capture — inbound
      return (
        <svg {...common}>
          <path d="M4 13v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
          <path d="M12 3v10m0 0-3.5-3.5M12 13l3.5-3.5" />
        </svg>
      );
    case 1: // Respond — chat + spark
      return (
        <svg {...common}>
          <path d="M4 5h16v10H9l-5 4V5z" />
          <path d="M9 10h6" />
        </svg>
      );
    case 2: // Qualify — funnel
      return (
        <svg {...common}>
          <path d="M4 5h16l-6 7v6l-4 2v-8L4 5z" />
        </svg>
      );
    case 3: // Nurture — heartbeat
      return (
        <svg {...common}>
          <path d="M3 12h4l2-5 3 10 2-5h7" />
        </svg>
      );
    case 4: // Follow Up — bell
      return (
        <svg {...common}>
          <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6z" />
          <path d="M10 20a2 2 0 0 0 4 0" />
        </svg>
      );
    default: // Report — bars
      return (
        <svg {...common}>
          <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
        </svg>
      );
  }
}

export default function SystemFlow() {
  return (
    <section id="how-it-works" className="relative scroll-mt-24 overflow-hidden bg-paper-deep py-32 md:py-48">
      <Container className="relative">
        {/* Centered header + CTA */}
        <ScrollReveal className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <span className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky">
            <span aria-hidden className="h-px w-8 bg-sky/50" />
            How it works
            <span aria-hidden className="h-px w-8 bg-sky/50" />
          </span>
          <h2 className="font-display text-4xl font-medium leading-[1.06] tracking-[-0.01em] text-ink md:text-[3rem]">
            One system, six steps, from <em>inquiry to booked call.</em>
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Every stage runs on its own — so no lead waits, and your team spends time only where it
            pays off.
          </p>
        </ScrollReveal>

        {/* Pipeline grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {flowSteps.map((step, i) => (
            <ScrollReveal key={step.step} delay={(i % 3) * 0.08} className="h-full">
              <div className="card-lift group relative flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover md:p-7">
                {/* number + icon row */}
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ink text-paper transition-colors duration-300 group-hover:bg-sky">
                    <StepIcon i={i} className="h-5 w-5" />
                  </span>
                  <span className="font-display text-4xl font-light leading-none text-ink/12 transition-colors duration-300 group-hover:text-sky/30">
                    {step.step}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl font-medium text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite">{step.description}</p>

                {/* Outcome — the business win */}
                <div className="mt-auto flex items-center gap-2.5 border-t border-line pt-5">
                  <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0 text-brass transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden>
                    <path
                      d="M4 10h11m0 0-4-4m4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[13px] font-medium text-ink">{outcomes[i]}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Flow ribbon */}
        <ScrollReveal className="mt-14 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          {flowSteps.map((step, i) => (
            <span key={step.step} className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                {step.title}
              </span>
              {i < flowSteps.length - 1 && <span aria-hidden className="text-sky">→</span>}
            </span>
          ))}
        </ScrollReveal>
      </Container>
    </section>
  );
}
