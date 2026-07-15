import Container from "../Container";
import SectionHeading from "../SectionHeading";
import ScrollReveal from "../ScrollReveal";
import { caseStudies } from "@/lib/content";

/**
 * Real proof section — case studies / outcomes.
 *
 * Renders NOTHING while `caseStudies` is empty (Avernek has no clients yet).
 * This keeps the structure ready: once a real, permissioned case study is added
 * to content.ts, this section appears automatically with no redesign.
 *
 * Do not populate with invented results. Real, permissioned data only.
 */
export default function CaseStudies() {
  if (caseStudies.length === 0) return null;

  return (
    <section id="results" className="scroll-mt-24 bg-ink py-32 md:py-48">
      <Container>
        <SectionHeading
          eyebrow="Results"
          title="What our work looks like in practice"
          description="Real outcomes from businesses we work with, shared with their permission."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <ScrollReveal
              key={cs.client}
              delay={i * 0.08}
              className="hud-cut hud-brackets flex h-full flex-col border border-accent/10 bg-panel/50 p-7"
            >
              <p className="text-xs uppercase tracking-wide text-slate">{cs.sector}</p>
              <h3 className="mt-1 text-lg font-medium text-ivory">{cs.client}</h3>
              <p className="mt-3 text-sm text-slate">{cs.challenge}</p>
              <p className="mt-3 text-sm text-silver">{cs.whatWeDid}</p>
              <p className="mt-4 border-t border-accent/10 pt-4 text-sm font-medium text-accent-glow">
                {cs.result}
              </p>
              {cs.quote && (
                <blockquote className="mt-4 text-sm italic text-silver">
                  {cs.quote.text}
                  <footer className="mt-2 text-xs not-italic text-slate">
                    {cs.quote.attribution}
                  </footer>
                </blockquote>
              )}
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
