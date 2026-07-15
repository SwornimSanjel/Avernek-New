"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay in seconds before the reveal starts (use for grid stagger). */
  delay?: number;
};

/**
 * Viewport-triggered reveal (Framer Motion). Content fades in and rises a short
 * distance as it scrolls into view, once.
 *
 * SSR-safe: until mounted on the client — and under prefers-reduced-motion — it
 * renders a plain, fully-visible div. That keeps the server HTML and the first
 * client render identical (no hydration mismatch) and guarantees content is
 * never stuck hidden if JS is slow or disabled. Every ScrollReveal on the page
 * sits below the initial fold, so the swap to the animated version is unseen.
 */
export default function ScrollReveal({ children, className = "", delay = 0 }: ScrollRevealProps) {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (reduce || !mounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
