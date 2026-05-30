"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type CountUpProps = {
  to: number;
  /** Animation duration in ms. */
  duration?: number;
  /** Delay before starting, in ms. */
  delay?: number;
  prefix?: string;
  suffix?: string;
  /** Decimal places. */
  decimals?: number;
  /** Start counting immediately (true) or when scrolled into view (false). */
  immediate?: boolean;
  className?: string;
};

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export default function CountUp({
  to,
  duration = 1400,
  delay = 0,
  prefix = "",
  suffix = "",
  decimals = 0,
  immediate = false,
  className,
}: CountUpProps) {
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);
  const [active, setActive] = useState(immediate);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (immediate || active) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate, active]);

  useEffect(() => {
    if (!active) return;
    if (reduce) {
      setValue(to);
      return;
    }
    let raf = 0;
    let start = 0;
    const timer = window.setTimeout(() => {
      const tick = (now: number) => {
        if (!start) start = now;
        const t = Math.min((now - start) / duration, 1);
        setValue(to * easeOutCubic(t));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [active, to, duration, delay, reduce]);

  const display = value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
