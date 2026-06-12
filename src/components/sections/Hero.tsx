"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../Container";
import { LinkButton } from "../Button";
import AmbientBackground from "../AmbientBackground";
import Particles from "../Particles";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

// TODO: placeholder avatars — swap for real client photos when available.
const trustAvatars = [11, 12, 13, 14, 15].map(
  (n) => `https://i.pravatar.cc/80?img=${n}`,
);

function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`} aria-label="5 star rating">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-gold" aria-hidden>
          <path d="M10 1.5l2.47 5.26 5.53.7-4.07 3.95.99 5.59L10 14.27 5.08 17l.99-5.59L2 7.46l5.53-.7L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}

/**
 * Hero — Mach33-style: a large centered editorial-serif headline vertically
 * centered in a full-height deep-navy section, lit by a planet-horizon glow
 * arc rising behind the content, a subtle starfield, and drifting particles.
 */
export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-transparent">
      <AmbientBackground variant="hero" />
      <Particles className="opacity-50" count={48} />

      {/* Saturated royal-blue crown glow behind the headline — deep, not washed */}
      <div
        aria-hidden
        className="absolute left-1/2 top-[-22%] h-[42rem] w-[80rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(45,91,255,0.2),rgba(20,45,150,0.08)_45%,transparent_70%)] blur-2xl"
      />

      <Container className="relative flex flex-col items-center py-32 text-center sm:py-36">
        {/* 1. Availability pill */}
        <motion.span
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-slate backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 animate-node rounded-full bg-accent-glow" />
          AI inquiry systems for always-on growth
        </motion.span>

        {/* 2. H1 — editorial serif, one italic phrase, no gradients */}
        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-8 max-w-4xl font-sans text-[2.7rem] font-medium leading-[1.05] text-ivory sm:text-[3.6rem] md:text-[4.4rem] lg:text-[5rem]"
        >
          Every inquiry answered, qualified, and followed up by{" "}
          <em className="italic">future-ready AI.</em>
        </motion.h1>

        {/* 3. Subhead — one sentence */}
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-slate sm:text-lg"
        >
          One AI system that answers, qualifies, and follows up every inquiry —
          across every channel.
        </motion.p>

        {/* 4. CTA row */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <LinkButton href="#contact">
            Book a system audit
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
          <a
            href="#demo"
            className="rounded-full border border-line bg-white/[0.03] px-5 py-3 text-sm font-medium text-silver transition-colors hover:border-accent/50 hover:text-ivory"
          >
            See the live inquiry flow
          </a>
        </motion.div>

        {/* 5. Trust row — avatars + stars + honest claim (no invented counts) */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-3"
        >
          <span className="flex -space-x-2.5">
            {trustAvatars.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 rounded-full border-2 border-obsidian object-cover"
                style={{ zIndex: trustAvatars.length - i }}
              />
            ))}
          </span>
          <span className="flex flex-col items-start gap-0.5">
            <Stars />
            <span className="text-xs text-slate">Trusted by growing businesses</span>
          </span>
        </motion.div>
      </Container>

      {/* Scroll cue — understated, bounces gently, hidden under reduced motion */}
      <a
        href="#demo"
        aria-label="Scroll to the live demo"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-slate/60 transition-colors duration-200 hover:text-slate motion-reduce:hidden"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 animate-bounce" aria-hidden>
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
        </svg>
      </a>
    </section>
  );
}
