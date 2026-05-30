"use client";

import { motion } from "framer-motion";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { LinkButton } from "../Button";
import { industries, industriesNote } from "@/lib/content";

export default function Industries() {
  return (
    <section id="industries" className="scroll-mt-24 bg-ink py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Use cases"
          title="Built for businesses where every inquiry is worth real money."
          description="If customers message before they buy, speed and follow-up decide who wins. Avenor is built for exactly that moment."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
              className="rounded-xl border border-white/10 bg-navy-deep/40 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40"
            >
              <h3 className="mb-2 font-display text-base font-semibold text-ivory">
                {industry.name}
              </h3>
              <p className="text-sm leading-relaxed text-slate">{industry.blurb}</p>
            </motion.div>
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
