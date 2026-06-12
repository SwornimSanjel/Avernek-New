import Container from "../Container";
import SectionHeading from "../SectionHeading";
import ScrollReveal from "../ScrollReveal";
import { LinkButton } from "../Button";
import AmbientBackground from "../AmbientBackground";
import { industries, industriesNote } from "@/lib/content";

/* Simple line icons, in the same order as `industries` in content.ts. */
const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-[22px] w-[22px]",
};

const icons = [
  // Education and training — graduation cap
  <svg key="edu" {...iconProps} aria-hidden>
    <path d="M3 9l9-4 9 4-9 4-9-4z" />
    <path d="M7 11v4.5c0 .9 2.2 1.8 5 1.8s5-.9 5-1.8V11" />
    <path d="M21 9v4" />
  </svg>,
  // Clinics and appointments — calendar
  <svg key="clinic" {...iconProps} aria-hidden>
    <rect x="4" y="5" width="16" height="16" rx="2" />
    <path d="M4 9h16M8 3v4M16 3v4" />
    <path d="M12 13v4M10 15h4" />
  </svg>,
  // Gyms and fitness — dumbbell
  <svg key="gym" {...iconProps} aria-hidden>
    <path d="M6.5 9v6M4 8v8M17.5 9v6M20 8v8M6.5 12h11" />
  </svg>,
  // Showrooms and considered buys — tag
  <svg key="shop" {...iconProps} aria-hidden>
    <path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0l-6.8-6.8A2 2 0 0 1 3 12.4V5a2 2 0 0 1 2-2h7.4a2 2 0 0 1 1.4.6l6.8 6.8a2 2 0 0 1 0 2.8z" />
    <path d="M7.5 7.5h.01" />
  </svg>,
  // Real estate and high-ticket — building
  <svg key="estate" {...iconProps} aria-hidden>
    <path d="M4 21V8l8-5 8 5v13" />
    <path d="M9 21v-6h6v6" />
    <path d="M9 10h.01M15 10h.01" />
  </svg>,
  // Local and service businesses — storefront
  <svg key="local" {...iconProps} aria-hidden>
    <path d="M4 9l1.2-4.4A1 1 0 0 1 6.2 4h11.6a1 1 0 0 1 1 .6L20 9" />
    <path d="M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9" />
    <path d="M4 9h16" />
    <path d="M9 20v-5h6v5" />
  </svg>,
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative scroll-mt-24 overflow-hidden bg-ink py-24 md:py-32"
    >
      <AmbientBackground variant="subtle" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Use cases"
          title={
            <>
              Built for businesses where every inquiry is worth{" "}
              <em className="italic">real money.</em>
            </>
          }
          description="If customers message before they buy, speed and follow-up decide who wins."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <ScrollReveal key={industry.name} delay={(i % 3) * 0.08} className="h-full">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-[#0c1532]/80 to-[#070c1e]/55 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2d5bff]/45 hover:shadow-[0_28px_70px_-32px_rgba(45,91,255,0.55)] md:p-7">
                {/* faint blueprint grid, masked toward the bottom */}
                <span aria-hidden className="card-grid pointer-events-none absolute inset-0" />
                {/* blue glow that blooms behind the icon on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -left-8 -top-8 h-32 w-32 rounded-full bg-[#2d5bff]/0 blur-2xl transition-colors duration-500 group-hover:bg-[#2d5bff]/20"
                />
                {/* hairline that draws in across the top on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-[#2d5bff] to-transparent transition-transform duration-300 group-hover:scale-x-100"
                />
                {/* elegant serif index numeral */}
                <span
                  aria-hidden
                  className="absolute right-6 top-5 font-display text-xl italic text-slate/35 transition-colors duration-300 group-hover:text-[#6b8aff]/55"
                >
                  0{i + 1}
                </span>

                <span className="relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#20367f] via-[#16245a] to-[#0b1430] text-[#c2d3ff] shadow-[0_10px_26px_-12px_rgba(45,91,255,0.6),inset_0_1px_0_rgba(255,255,255,0.12)] transition-all duration-300 group-hover:from-[#2a49a8] group-hover:text-white group-hover:shadow-[0_14px_34px_-12px_rgba(45,91,255,0.9),inset_0_1px_0_rgba(255,255,255,0.16)]">
                  {icons[i]}
                </span>
                <h3 className="relative mb-1.5 text-base font-medium text-ivory">
                  {industry.name}
                </h3>
                <p className="relative text-sm leading-relaxed text-slate">{industry.blurb}</p>

                {/* footer cue — slides/fades in on hover, anchored to the bottom */}
                <span
                  aria-hidden
                  className="relative mt-auto flex items-center gap-2 pt-6 text-xs font-medium uppercase tracking-[0.18em] text-slate/0 transition-colors duration-300 group-hover:text-[#7d9bff]"
                >
                  Covered
                  <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
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
            Book a system audit
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
