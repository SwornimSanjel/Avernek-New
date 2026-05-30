"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Mark from "./Mark";

/**
 * Visitor-facing floating quick-action button (bottom-right).
 *
 * Branded with the Avenor "A" mark, NOT any framework/dev icon. Opens a small
 * premium panel with the two highest-intent actions: book a system audit, and
 * see the live demo. Subtle constant animation (breathing + glow pulse),
 * respects prefers-reduced-motion, keyboard accessible, mobile-safe.
 */
export default function QuickActions() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Close on outside click + Escape; focus the close button when opening.
  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    function onMouseDown(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={wrapRef}
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end sm:bottom-6 sm:right-6"
    >
      {/* Quick-action panel (conditionally rendered so it always unmounts) */}
      {open && (
        <motion.div
          role="dialog"
          aria-label="Avenor quick actions"
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="mb-3 w-[17.5rem] max-w-[calc(100vw-2.5rem)] rounded-2xl border border-white/12 bg-ink/95 p-5 shadow-card backdrop-blur-md"
        >
          <button
            ref={closeRef}
            type="button"
            aria-label="Close quick actions"
            onClick={() => setOpen(false)}
            className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-md text-slate transition-colors hover:bg-white/5 hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
              <path
                d="M5 5l10 10M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <h3 className="pr-6 font-display text-base font-semibold text-ivory">
            Quick actions
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-slate">
            Jump to the audit form or see how the inquiry flow works.
          </p>

          <div className="mt-4 flex flex-col gap-2.5">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ivory shadow-glow transition-colors duration-200 hover:bg-accent-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Start with audit
            </a>
            <a
              href="#demo"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-ivory transition-colors duration-200 hover:border-accent/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              See live demo
            </a>
          </div>
        </motion.div>
      )}

      {/* The floating Avenor "A" button */}
      <motion.button
        type="button"
        aria-label="Open Avenor quick actions"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={
          reduce
            ? { opacity: 1, scale: 1 }
            : { opacity: 1, scale: open ? 1 : [1, 1.02, 1] }
        }
        transition={
          reduce
            ? { duration: 0.3 }
            : { scale: { duration: 4, repeat: open ? 0 : Infinity, ease: "easeInOut" } }
        }
        className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-panel/80 shadow-card backdrop-blur-md transition-colors duration-200 hover:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian"
      >
        {/* Soft blue/purple glow halo — slow opacity pulse */}
        <motion.span
          aria-hidden
          className="pointer-events-none absolute -inset-1 -z-10 rounded-full bg-accent-grad blur-md"
          initial={{ opacity: 0.35 }}
          animate={reduce ? { opacity: 0.35 } : { opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <Mark className="relative h-6 w-6 text-ivory" />
      </motion.button>
    </div>
  );
}
