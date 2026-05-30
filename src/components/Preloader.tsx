"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Mark from "./Mark";

type Phase = "intro" | "lift";

// System stages shown while the site loads — no fabricated metrics.
const stages = ["Capture", "Qualify", "Report"];

/**
 * Purely visual intro overlay. It does NOT control when the site appears —
 * SiteShell reveals the content on a timer and unmounts this overlay via
 * AnimatePresence (which fades it out through the `exit` prop). Nothing here
 * can block the page.
 */
export default function Preloader() {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("intro");

  useEffect(() => {
    if (reduce) return;
    const tLift = window.setTimeout(() => setPhase("lift"), 1700);
    return () => window.clearTimeout(tLift);
  }, [reduce]);

  const hidden = phase === "lift";

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-obsidian"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      aria-hidden
    >
      {/* slowly drifting signal grid + ambient glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-grid opacity-40"
        animate={reduce ? undefined : { backgroundPosition: ["0px 0px", "64px 64px"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <div className="pointer-events-none absolute left-1/2 top-[38%] h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-iris/12 blur-[130px]" />

      {/* Logo */}
      <motion.div
        className="relative flex flex-col items-center"
        animate={{
          y: hidden ? "-34vh" : 0,
          scale: hidden ? 0.64 : 1,
        }}
        transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
      >
        <motion.div
          className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-panel-light shadow-card"
          initial={{ opacity: reduce ? 1 : 0, scale: reduce ? 1 : 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="pointer-events-none absolute inset-0 rounded-2xl bg-accent-grad opacity-20 blur-lg" />
          <Mark className="relative h-11 w-11 text-ivory" />
        </motion.div>
        <motion.span
          className="mt-5 font-display text-2xl font-bold tracking-[0.34em] text-ivory"
          initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: reduce ? 0 : 0.25 }}
        >
          AVENOR
        </motion.span>
        <motion.span
          className="mt-3 text-[11px] uppercase tracking-[0.28em] text-slate"
          initial={{ opacity: reduce ? 1 : 0 }}
          animate={{ opacity: hidden ? 0 : 1 }}
          transition={{ duration: 0.5, delay: reduce ? 0 : 0.5 }}
        >
          Building inquiry signal…
        </motion.span>
      </motion.div>

      {/* Stage cards */}
      <motion.div
        className="absolute bottom-[20%] w-full max-w-md px-6"
        animate={{ opacity: hidden ? 0 : 1, y: hidden ? 10 : 0 }}
        transition={{ duration: 0.35 }}
      >
        <div className="grid grid-cols-3 gap-3">
          {stages.map((label, i) => (
            <motion.div
              key={label}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-panel/60 p-3 text-center backdrop-blur-sm"
              initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: reduce ? 0 : 0.4 + i * 0.14 }}
            >
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent/20 text-[9px] text-accent-glow">
                ✓
              </span>
              <span className="text-xs font-medium text-silver">{label}</span>
            </motion.div>
          ))}
        </div>
        <p className="mt-4 text-center text-[10px] uppercase tracking-[0.2em] text-slate/70">
          Initializing the inquiry system
        </p>
      </motion.div>

      {/* progress sweep */}
      <div className="absolute bottom-14 h-px w-44 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-1/2 animate-sweep bg-accent-grad" />
      </div>
    </motion.div>
  );
}
