"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../Container";
import { LinkButton } from "../Button";
import AmbientBackground from "../AmbientBackground";
import { SparklesCore } from "../ui/sparkles";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

// Free-to-use Unsplash portraits of urban South Asian / Nepali professionals
// (3 men, 2 women), stored locally in /public/trust as square face-cropped
// images. Already centered on the face, so `position` stays "center".
const trustAvatars = [
  { src: "/resources/trusted/client-male-1.jpg", alt: "Client avatar", position: "50% 18%" },
  { src: "/resources/trusted/client-male-2.jpg", alt: "Client avatar", position: "center" },
  { src: "/resources/trusted/client-female.jpg", alt: "Female client avatar", position: "50% 18%" },
  { src: "/resources/trusted/client-male-3.jpg", alt: "Client avatar", position: "50% 28%" },
  {
    src: "/resources/trusted/vidhya-sagar-mountain-routes.jpg",
    alt: "Vidhya Sagar from Mountain Routes",
    position: "center",
  },
];

/**
 * Hero — Mach33-style: a large centered editorial-serif headline vertically
 * centered in a full-height deep-navy section, lit by a planet-horizon glow
 * arc rising behind the content, a subtle starfield, and drifting particles.
 */
export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-transparent">
      {/* The hero atmosphere is masked to fade out toward the bottom, so the
          lower hero reveals the same continuous page-wash the next section sits
          on — lit near the nav, darkening smoothly into "The backend gap" with
          no visible seam. */}
      <AmbientBackground
        variant="hero"
        className="[mask-image:linear-gradient(to_bottom,#000_34%,transparent_96%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_34%,transparent_96%)]"
      />

      {/* Saturated royal-blue crown glow behind the headline — deep, not washed */}
      <div
        aria-hidden
        className="absolute left-1/2 top-[-22%] h-[42rem] w-[80rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(45,91,255,0.2),rgba(20,45,150,0.08)_45%,transparent_70%)] blur-2xl"
      />

      {/* Ambient starfield (Aceternity SparklesCore) — white stars twinkle over
          the atmosphere; content paints on top. */}
      <SparklesCore
        background="transparent"
        minSize={0.3}
        maxSize={0.8}
        particleDensity={80}
        particleColor="#FFFFFF"
        className="absolute inset-0 h-full w-full"
      />

      <Container className="relative flex flex-col items-center py-32 text-center sm:py-36">
        {/* 1. Availability pill */}
        <motion.span
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="inline-flex items-center gap-3 rounded-full bg-[#202844]/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur"
        >
          <span className="relative flex h-2.5 w-2.5 items-center justify-center">
            <span className="absolute h-2.5 w-2.5 animate-[ping_2.4s_ease-out_infinite] rounded-full bg-emerald-300/35" />
            <span className="relative h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.85)]" />
          </span>
          AI inquiry systems for always-on growth
        </motion.span>

        {/* 2. H1 — editorial serif, one italic phrase, no gradients */}
        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-8 max-w-4xl font-playfair text-[2.1rem] font-semibold leading-[1.1] text-ivory sm:text-[2.8rem] md:text-[3.4rem] lg:text-[3.9rem]"
        >
          <span className="block">Stop losing leads to</span>
          <span className="block text-[0.8em] font-medium italic">slow replies.</span>
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
            Book an Audit
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
          className="mt-6 flex items-center justify-center gap-3"
        >
          <span className="flex -space-x-2">
            {trustAvatars.map((a, i) => (
              <span
                key={a.src}
                className="h-8 w-8 shrink-0 overflow-hidden rounded-full border border-white/65 bg-slate-900 shadow-sm"
                style={{ zIndex: trustAvatars.length - i }}
              >
                <Image
                  src={a.src}
                  alt={a.alt}
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: a.position }}
                />
              </span>
            ))}
          </span>
          <span className="flex flex-col items-start leading-none">
            <span className="flex items-center gap-0.5 text-gold" aria-label="5 star rating">
              {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current" aria-hidden>
                  <path d="M10 1.5l2.47 5.26 5.53.7-4.07 3.95.99 5.59L10 14.27 5.08 17l.99-5.59L2 7.46l5.53-.7L10 1.5z" />
                </svg>
              ))}
            </span>
            <span className="mt-1 text-xs font-medium text-slate-300">
              Trusted by 12+ businesses
            </span>
          </span>
        </motion.div>
      </Container>
    </section>
  );
}
