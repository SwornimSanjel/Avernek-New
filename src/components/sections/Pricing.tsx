"use client";

import Container from "../Container";
import SectionHeading from "../SectionHeading";
import ScrollReveal from "../ScrollReveal";
import { LinkButton } from "../Button";
import AmbientBackground from "../AmbientBackground";
import { packages, packagesNote } from "@/lib/content";

export default function Pricing() {
  return (
    <section id="pricing" className="relative scroll-mt-24 overflow-hidden bg-obsidian py-24 md:py-32">
      <AmbientBackground variant="section" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Packages"
          title={
            <>
              Three depths of the same <em className="italic text-accent-glow">system</em>
            </>
          }
          description="Each package builds on the last — the audit picks the fit."
        />

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <ScrollReveal key={pkg.id} delay={i * 0.1} className="h-full">
              <div
                className={`border-sweep relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-200 hover:-translate-y-1 md:p-8 ${
                  pkg.featured
                    ? "border-[#3d5af1]/55 bg-[#0d1630]/85 hover:border-[#5b74f5]/70 lg:z-10 lg:scale-[1.04]"
                    : "border-line bg-panel/40 hover:border-[#3d5af1]/42"
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-medium uppercase tracking-wide text-ivory">
                    Recommended
                  </span>
                )}

                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate">
                  {pkg.tier}
                </span>
                <h3 className="mt-2 text-2xl font-medium text-ivory">{pkg.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{pkg.summary}</p>

                <div className="mt-6 flex flex-col gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-xs">
                  <div className="flex gap-2">
                    <span className="shrink-0 text-slate">Best for:</span>
                    <span className="text-silver">{pkg.whoFor}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="shrink-0 text-slate">System depth:</span>
                    <span className="text-silver">{pkg.depth}</span>
                  </div>
                </div>

                <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.18em] text-slate">
                  Key inclusions
                </p>
                <ul className="mt-3 flex flex-1 flex-col gap-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-silver">
                      <span className="mt-0.5 text-[#93a5ff]">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <LinkButton
                    href="#contact"
                    variant={pkg.featured ? "primary" : "secondary"}
                    className="w-full"
                  >
                    See if it&apos;s a fit
                  </LinkButton>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl rounded-xl border border-white/10 bg-panel/40 p-5 text-center text-sm leading-relaxed text-slate">
          {packagesNote}
        </p>
      </Container>
    </section>
  );
}
