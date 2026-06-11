"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import ScrollReveal from "../ScrollReveal";
import AmbientBackground from "../AmbientBackground";
import { faqs } from "@/lib/content";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative scroll-mt-24 overflow-hidden bg-navy-deep py-24 md:py-32"
    >
      <AmbientBackground variant="subtle" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Questions"
          title={
            <>
              Straight answers to the questions we hear{" "}
              <em className="italic">most</em>
            </>
          }
        />

        <div className="mx-auto mt-12 max-w-3xl">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <ScrollReveal key={faq.question} delay={(i % 6) * 0.05} className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-base font-medium text-ivory sm:text-lg">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/20 text-accent-glow transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-10 text-sm leading-relaxed text-slate sm:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
