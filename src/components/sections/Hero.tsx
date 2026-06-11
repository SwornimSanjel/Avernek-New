"use client";

import { motion } from "framer-motion";
import Container from "../Container";
import { LinkButton } from "../Button";
import AmbientBackground from "../AmbientBackground";
import Particles from "../Particles";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

/**
 * Hero — text-focused and atmospheric, Mach33-style: a large centered headline
 * vertically centered in a full-height near-black section, lit by ambient
 * blooms, a diagonal light-ray, and a slow drift of glowing particles. No
 * centerpiece graphic — the live messenger demo lives lower down in #demo.
 */
export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-obsidian">
      {/* Ambient light blooms + diagonal ray — the "neon in a dark room" finish. */}
      <AmbientBackground variant="hero" />
      {/* Floating glow particles over the blooms. */}
      <Particles className="opacity-70" />

      <Container className="relative flex flex-col items-center py-32 text-center">
        {/* 1. Availability pill */}
        <motion.span
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-silver"
        >
          <span className="h-1.5 w-1.5 animate-node rounded-full bg-accent-glow" />
          Now onboarding founding clients
        </motion.span>

        {/* 2. H1 — larger now that it carries the hero alone */}
        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-7 max-w-4xl font-display text-[2.25rem] font-bold leading-[1.08] tracking-tight text-ivory sm:text-[3rem] md:text-[3.6rem] lg:text-[4.25rem]"
        >
          We answer, qualify and follow up on every inquiry —{" "}
          <span className="text-gradient">even at 2 a.m.</span>
        </motion.h1>

        {/* 3. Subhead */}
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-silver sm:text-lg"
        >
          Avernik captures every customer message, replies in seconds, scores intent, and hands
          your team a clear follow-up list. Around the clock.
        </motion.p>

        {/* 4. CTA row */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <LinkButton href="#contact">Book a system audit</LinkButton>
          <a
            href="#demo"
            className="text-sm text-silver underline-offset-4 transition-colors hover:text-ivory hover:underline"
          >
            See how it handles a live inquiry →
          </a>
        </motion.div>
      </Container>

      {/* Scroll cue — understated, bounces gently, hidden under reduced motion */}
      <a
        href="#demo"
        aria-label="Scroll to the live demo"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate/50 transition-colors duration-200 hover:text-slate motion-reduce:hidden"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 animate-bounce" aria-hidden>
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}
