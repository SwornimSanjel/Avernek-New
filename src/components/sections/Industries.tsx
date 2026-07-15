import Container from "../Container";
import SectionHeading from "../SectionHeading";
import ScrollReveal from "../ScrollReveal";
import { industries, industriesNote } from "@/lib/content";

export default function Industries() {
  return (
    <section id="use-cases" className="relative scroll-mt-24 overflow-hidden bg-paper py-32 md:py-48">
      <Container className="relative">
        <SectionHeading
          eyebrow="Use cases"
          title={
            <>
              Built for businesses where every reply is <em>revenue.</em>
            </>
          }
          description="If buyers reach you by message, DM, form, or call — Avernek makes sure none of them slip."
        />

        {/* Editorial index list — deliberately different from the card grids. */}
        <ScrollReveal className="mx-auto mt-10 max-w-4xl">
          <div className="divide-y divide-line border-y border-line">
            {industries.map((industry, i) => (
              <a
                key={industry.name}
                href="#contact"
                className="group -mx-4 grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 rounded-2xl px-4 py-4 transition-colors duration-300 hover:bg-brass-wash/50 sm:grid-cols-[3.5rem_1fr_auto] sm:gap-6"
              >
                <span className="font-display text-2xl font-light leading-none text-ink/15 transition-colors duration-300 group-hover:text-brass sm:text-3xl">
                  0{i + 1}
                </span>

                <div className="min-w-0">
                  <h3 className="font-display text-lg font-medium text-ink transition-colors duration-300 group-hover:text-brass sm:text-xl">
                    {industry.name}
                  </h3>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted">{industry.blurb}</p>
                </div>

                <span
                  aria-hidden
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 group-hover:border-brass group-hover:bg-brass group-hover:text-white"
                >
                  <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5">
                    <path
                      d="M4 10h12m0 0-5-5m5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </ScrollReveal>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-muted">
          {industriesNote}
        </p>
      </Container>
    </section>
  );
}
