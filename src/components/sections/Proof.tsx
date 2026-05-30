"use client";

import Container from "../Container";
import SectionHeading from "../SectionHeading";
import ScrollReveal from "../ScrollReveal";

const capabilities = [
  { figure: "Under 60 seconds", sub: "Target first-reply time, day or night." },
  { figure: "100% logged", sub: "Every inquiry captured to your CRM automatically." },
  { figure: "24 / 7", sub: "Coverage while your team is offline or asleep." },
];

const platforms = ["OpenAI", "Meta", "Google", "WhatsApp"];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-slate">
      {children}
    </span>
  );
}

export default function Proof() {
  return (
    <section id="proof" className="scroll-mt-24 bg-navy-deep py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Proof"
          title="What the system is built to do."
          description="We are onboarding founding clients now, so we are showing how the system performs, not invented results."
        />

        {/* Capability cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {capabilities.map((c, i) => (
            <ScrollReveal
              key={c.figure}
              delay={i * 0.08}
              className="rounded-2xl border border-white/10 bg-panel/50 p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40"
            >
              <p className="font-display text-3xl font-bold text-accent-glow sm:text-[2rem]">
                {c.figure}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate">{c.sub}</p>
            </ScrollReveal>
          ))}
        </div>

        {/* Before / after + case studies */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <ScrollReveal className="relative rounded-2xl border border-white/10 bg-panel/50 p-7">
            <span className="absolute right-6 top-6">
              <Badge>Illustrative</Badge>
            </span>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate">
                  Before Avenor
                </p>
                <p className="text-sm leading-relaxed text-slate">
                  9:40 pm message. Seen the next morning. Replied at 11 am. Buyer already booked
                  elsewhere.
                </p>
              </div>
              <div>
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  With Avenor
                </p>
                <p className="text-sm leading-relaxed text-ivory/90">
                  9:40 pm message. Replied in 30 seconds. Qualified. Flagged for the team to call
                  first thing.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal
            delay={0.1}
            className="flex flex-col rounded-2xl border border-white/10 bg-panel/50 p-7"
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="font-display text-lg font-semibold text-ivory">Case studies</h3>
              <Badge>Coming soon</Badge>
            </div>
            <p className="text-sm leading-relaxed text-slate">
              Real, permissioned client results will appear here as our founding clients complete
              their first cycles. We will never publish numbers we cannot stand behind.
            </p>
          </ScrollReveal>
        </div>

        {/* Technology band */}
        <div className="mt-16 flex flex-col items-center gap-6 border-t border-white/10 pt-12">
          <p className="text-center text-xs font-medium uppercase tracking-[0.3em] text-slate/80">
            Built on technology you already trust
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:gap-x-14">
            {platforms.map((name) => (
              <span
                key={name}
                className="font-display text-lg font-semibold tracking-tight text-slate/60 transition-colors duration-200 hover:text-silver sm:text-xl"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
