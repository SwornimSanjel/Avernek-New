import { Fragment } from "react";
import Container from "../Container";
import { LinkButton } from "../Button";
import Mark from "../Mark";
import StarField from "../StarField";
import ShootingStars from "../ShootingStars";
import ShineBorder from "../ui/ShineBorder";

/* The core story in three nodes: marketing → Avernek → sales.
   Only channels the system actually handles — no phone calls. */
const pipeline = [
  { label: "Every channel", meta: "Facebook · Instagram · WhatsApp · website forms" },
  { label: "Avernek system", meta: "Replies · qualifies · tracks · alerts", core: true },
  { label: "Your sales team", meta: "Only conversations worth their time" },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-paper">
      {/* blueprint graph paper + a living starfield / drifting aurora */}
      <div aria-hidden className="grid-paper grid-paper-fade absolute inset-0 -z-10" />
      <StarField className="-z-10" />
      <ShootingStars className="z-0" />

      <Container className="relative z-10 flex flex-col items-center pb-24 pt-36 text-center sm:pt-40 lg:pb-28 lg:pt-48">
        <span className="inline-flex animate-fade-up items-center gap-2.5 rounded-full border border-line bg-card px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-graphite shadow-card">
          <span className="relative flex h-2 w-2 items-center justify-center">
            <span className="absolute h-2.5 w-2.5 animate-[ping_2.4s_ease-out_infinite] rounded-full bg-brass/40" />
            <span className="relative h-2 w-2 rounded-full bg-brass" />
          </span>
          AI inquiry &amp; growth systems · Nepal
        </span>

        <h1 className="mt-8 max-w-4xl animate-fade-up font-display text-[2.9rem] font-medium leading-[1.02] tracking-[-0.015em] text-ink [animation-delay:120ms] sm:text-[4rem] lg:text-[4.9rem]">
          Turn every inquiry into a<br className="hidden sm:block" /> <em className="italic text-brass">tracked sales opportunity.</em>
        </h1>

        <p className="mt-7 max-w-lg animate-fade-up text-base leading-relaxed text-graphite [animation-delay:220ms] sm:text-lg">
          Every Facebook, Instagram and WhatsApp inquiry — answered in seconds, qualified, and handed
          to your team ready to close.
        </p>

        <div className="mt-9 flex animate-fade-up flex-col items-center gap-3 [animation-delay:320ms] sm:flex-row">
          <LinkButton href="#contact">
            Book a Free System Audit
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
              <path
                d="M4 10h12m0 0-5-5m5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </LinkButton>
          <LinkButton href="#demo" variant="secondary">
            Watch the system work
          </LinkButton>
        </div>

        {/* Positioning pipeline — the whole story in one calm row */}
        <div className="mt-16 w-full max-w-4xl animate-fade-up [animation-delay:420ms]">
          <div className="flex flex-col items-stretch gap-2 md:flex-row md:gap-0">
            {pipeline.map((node, i) => (
              <Fragment key={node.label}>
                <div
                  className={`relative flex flex-1 flex-col justify-center overflow-hidden rounded-2xl border px-5 py-4 text-center ${
                    node.core
                      ? "border-brass/25 bg-[linear-gradient(180deg,#24252c,#191a1f)] shadow-[0_18px_44px_-22px_rgba(0,0,0,0.9)]"
                      : "border-line bg-card"
                  }`}
                >
                  {/* the Avernek node is the hero of the row — give it the shine */}
                  {node.core && <ShineBorder borderWidth={1.5} duration={10} />}

                  {node.core ? (
                    <span className="relative flex items-center justify-center gap-2">
                      <Mark className="h-4 w-4 text-brass" />
                      <span className="font-display text-lg font-medium text-ink">{node.label}</span>
                    </span>
                  ) : (
                    <p className="font-display text-lg font-medium text-ink">{node.label}</p>
                  )}
                  <p className="relative mt-1 text-xs leading-relaxed text-muted">{node.meta}</p>
                </div>

                {i < pipeline.length - 1 && (
                  <span
                    aria-hidden
                    className="flex shrink-0 rotate-90 items-center justify-center py-1 text-brass md:rotate-0 md:px-2 md:py-0"
                  >
                    <svg viewBox="0 0 24 16" fill="none" className="h-4 w-6">
                      <path
                        d="M2 8h18m0 0-5-5m5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </Container>

      <div aria-hidden className="rule-fade h-px w-full" />
    </section>
  );
}
