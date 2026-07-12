import Container from "../Container";
import SectionHeading from "../SectionHeading";
import ScrollReveal from "../ScrollReveal";
import { LinkButton } from "../Button";
import AmbientBackground from "../AmbientBackground";
import { industries, industriesNote } from "@/lib/content";

export default function Industries() {
  return (
    <section
      id="use-cases"
      className="relative scroll-mt-24 overflow-hidden bg-ink py-24 md:py-32"
    >
      <AmbientBackground variant="subtle" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Use cases"
          title={
            <>
              Built for businesses where every reply is{" "}
              <em className="italic">revenue.</em>
            </>
          }
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <ScrollReveal key={industry.name} delay={(i % 3) * 0.08} className="h-full">
              <div className="hud-cut hud-brackets group relative flex h-full flex-col overflow-hidden border border-line bg-gradient-to-b from-[#171322]/80 to-[#09080D]/60 p-6 shadow-[inset_0_1px_0_rgba(247,247,248,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F7F7F8]/45 hover:shadow-[0_28px_70px_-32px_rgba(247,247,248,0.45)] md:p-7">
                {/* faint blueprint grid, masked toward the bottom */}
                <span aria-hidden className="card-grid pointer-events-none absolute inset-0" />
                {/* plasma glow that blooms behind the index on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -left-8 -top-8 h-32 w-32 rounded-full bg-[#171322]/0 blur-2xl transition-colors duration-500 group-hover:bg-[#171322]/18"
                />
                {/* hairline that draws in across the top on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-[#F7F7F8] to-transparent transition-transform duration-300 group-hover:scale-x-100"
                />
                {/* oversized ghost index, replacing the icon badge */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-5 top-2 font-display text-6xl italic leading-none text-ivory/[0.035] transition-colors duration-300 group-hover:text-[#F7F7F8]/12 md:right-6 md:top-3 md:text-7xl"
                >
                  0{i + 1}
                </span>

                <span aria-hidden className="relative mb-8 h-12 md:mb-9" />
                <h3 className="relative mb-1.5 text-base font-medium text-ivory">
                  {industry.name}
                </h3>
                <p className="relative text-sm leading-relaxed text-slate">{industry.blurb}</p>

                {/* footer cue anchored to the bottom */}
                <span
                  aria-hidden
                  className="relative mt-auto flex items-center gap-2 pt-6 text-xs font-medium uppercase tracking-[0.18em] text-slate transition-colors duration-300 group-hover:text-[#F7F7F8]"
                >
                  Covered
                  <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5">
                    <path d="M4 10h12m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-5 text-center">
          <p className="text-sm leading-relaxed text-slate">{industriesNote}</p>
          <LinkButton href="#contact" variant="secondary">
            Book an Audit
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
