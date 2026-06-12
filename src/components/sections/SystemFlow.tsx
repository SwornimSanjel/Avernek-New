"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Container from "../Container";
import { LinkButton } from "../Button";
import AmbientBackground from "../AmbientBackground";
import ScrollReveal from "../ScrollReveal";
import { flowSteps } from "@/lib/content";

const stageNotes = [
  ["Instant source tracking", "Saved to CRM automatically"],
  ["Fast first reply", "Consistent answers every time"],
  ["Intent score added", "Low-quality chats filtered out"],
  ["Warm leads kept alive", "Questions handled before calls"],
  ["Priority alerts sent", "Team knows who to call first"],
  ["Pipeline status visible", "Owner sees what happened"],
];

export default function SystemFlow() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 45%", "end 65%"],
  });
  const railProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.35,
  });
  const railGlowTop = useTransform(railProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      id="system"
      className="relative scroll-mt-24 overflow-clip bg-ink py-24 md:py-32"
    >
      <AmbientBackground variant="section" />
      <Container className="relative">
        <div className="grid items-start gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
          <ScrollReveal className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="max-w-xl font-sans text-4xl font-medium leading-[1.05] text-ivory md:text-[3rem]">
              Turn inquiries into booked{" "}
              <em className="italic">follow-up</em>
            </h2>

            <p className="mt-5 max-w-sm text-base leading-relaxed text-slate">
              One flow for reply speed, lead quality, and next action.
            </p>

            <div className="mt-8">
              <LinkButton href="#contact">Book a system audit</LinkButton>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-slate">
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
                24/7 response
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
                Lead routing
              </span>
            </div>
          </ScrollReveal>

          <div className="relative">
            <span aria-hidden className="timeline-rail hidden md:block">
              <motion.span className="timeline-rail-fill" style={{ scaleY: railProgress }} />
              <motion.span className="timeline-rail-glow" style={{ top: railGlowTop }} />
            </span>

            <div className="flex flex-col gap-5">
              {flowSteps.map((step, i) => (
                <ScrollReveal key={step.step} delay={(i % 2) * 0.08}>
                  <div className="grid gap-4 md:grid-cols-[5rem_1fr]">
                    <div className="relative z-10 hidden pr-7 text-right text-4xl font-semibold leading-none text-white/65 md:block">
                      {step.step}
                    </div>

                    <div className="signal-card rounded-2xl p-5 md:p-6">
                      <span className="inline-flex items-center gap-2 rounded-full border border-line bg-accent/[0.06] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-slate">
                        <span className="h-2 w-2 rounded-full bg-slate" />
                        Stage {step.step}
                      </span>

                      <h3 className="mt-5 text-xl font-medium text-ivory">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate">
                        {step.description}
                      </p>

                      <div className="mt-4 grid gap-2 border-t border-white/10 pt-4 sm:grid-cols-2">
                        {[step.benefit, ...(stageNotes[i] ?? [])].slice(0, 3).map((note) => (
                          <p key={note} className="flex items-start gap-2 text-xs leading-relaxed text-silver">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {note}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
