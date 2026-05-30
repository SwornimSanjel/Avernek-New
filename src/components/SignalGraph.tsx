"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

/**
 * Premium animated "inquiry pipeline" dashboard for the hero.
 *
 * The line draws left → right, nodes appear in sequence, labels fade in, and
 * the final node pulses. Labels are SVG <text> inside the viewBox (with right
 * padding past the last node) so they can never clip the card edge. Floating
 * cards animate as whole units — border, background and content move together.
 *
 * `startDelay` lets the hero hold the animation until the intro preloader has
 * lifted, so the draw is actually visible on first load.
 */

const W = 720;
const H = 420;

type Node = { x: number; y: number; label: string; sub: string; hot?: boolean };

// Nodes sit on a clean, slightly-rising diagonal with a very subtle ease toward
// "Report" (steps soften from 56 → 44). It reads as a controlled workflow path,
// not a flat line and not a jagged growth chart.
const nodes: Node[] = [
  { x: 60, y: 348, label: "Inquiry", sub: "message received" },
  { x: 168, y: 292, label: "Reply", sub: "auto reply ready" },
  { x: 276, y: 238, label: "Captured", sub: "saved to CRM" },
  { x: 384, y: 188, label: "Qualified", sub: "intent checked" },
  { x: 492, y: 140, label: "Follow-up", sub: "priority set", hot: true },
  { x: 600, y: 96, label: "Report", sub: "owner view" },
];

// Smooth, monotonic path (control points stay between adjacent nodes, so the
// line never bulges or dips — clean and operational).
const linePath =
  "M60 348 C 100 327, 128 313, 168 292 S 236 258, 276 238 S 344 207, 384 188 S 452 158, 492 140 S 560 112, 600 96";

export default function SignalGraph({
  className = "",
  startDelay = 0,
}: {
  className?: string;
  startDelay?: number;
}) {
  const reduce = useReducedMotion();
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (reduce) {
      setPlay(true);
      return;
    }
    const t = window.setTimeout(() => setPlay(true), startDelay);
    return () => window.clearTimeout(t);
  }, [reduce, startDelay]);

  // duration helper (0 when reduced motion)
  const dur = (s: number) => (reduce ? 0 : s);

  return (
    <div className={`relative ${className}`}>
      {/* radial glow behind the dashboard */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 -z-10 rounded-[40px] bg-[radial-gradient(60%_60%_at_60%_40%,rgba(139,92,246,0.18),transparent_70%)]"
      />

      {/* main graph card */}
      <div className="glass relative overflow-hidden rounded-2xl shadow-card">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent/80" />
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-slate">
              Inquiry pipeline · live view
            </span>
          </div>
          <span className="flex items-center gap-1.5 text-xs text-slate">
            <span className="h-1.5 w-1.5 animate-node rounded-full bg-accent-glow" />
            Always on
          </span>
        </div>

        <div className="px-3 py-3">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Animated inquiry pipeline flow">
            <defs>
              <linearGradient id="sigStroke" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0" stopColor="#3B82F6" />
                <stop offset="1" stopColor="#8B5CF6" />
              </linearGradient>
              <linearGradient id="sigArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#3B82F6" stopOpacity="0.20" />
                <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* axis grid — present immediately so the panel never looks blank */}
            <g stroke="rgba(255,255,255,0.05)" strokeWidth="1">
              {[90, 175, 260, 345].map((y) => (
                <line key={y} x1="0" y1={y} x2={W} y2={y} />
              ))}
              {[180, 360, 540].map((x) => (
                <line key={x} x1={x} y1="0" x2={x} y2={H} />
              ))}
            </g>

            {/* area under the line */}
            <motion.path
              d={`${linePath} L600 ${H} L60 ${H} Z`}
              fill="url(#sigArea)"
              initial={{ opacity: 0 }}
              animate={{ opacity: play ? 1 : 0 }}
              transition={{ duration: dur(0.9), delay: dur(1.1) }}
            />

            {/* signal line draw */}
            <motion.path
              d={linePath}
              fill="none"
              stroke="url(#sigStroke)"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: reduce ? 1 : 0 }}
              animate={{ pathLength: play ? 1 : 0 }}
              transition={{ duration: dur(1.8), ease: "easeInOut" }}
            />

            {/* axis labels — present immediately so the panel reads as live from frame 1 */}
            <g>
              {nodes.map((n) => (
                <g key={n.label}>
                  <text x={n.x} y={n.y + 30} textAnchor="middle" fill="#ECEEF4" fontSize="14" fontWeight="600">
                    {n.label}
                  </text>
                  <text x={n.x} y={n.y + 48} textAnchor="middle" fill="#8A90A3" fontSize="12">
                    {n.sub}
                  </text>
                </g>
              ))}
            </g>

            {/* data points — draw in on top of the already-present structure */}
            {nodes.map((n, i) => (
              <motion.g
                key={n.label}
                initial={{ opacity: reduce ? 1 : 0 }}
                animate={{ opacity: play ? 1 : 0 }}
                transition={{ duration: 0.4, delay: dur(0.5 + i * 0.28) }}
              >
                {/* pulse ring on the final node */}
                {n.label === "Report" && !reduce && play && (
                  <motion.circle
                    cx={n.x}
                    cy={n.y}
                    r="6"
                    fill="none"
                    stroke="#8B5CF6"
                    strokeWidth="1.5"
                    initial={{ scale: 1, opacity: 0.7 }}
                    animate={{ scale: [1, 2.4], opacity: [0.7, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, delay: 2.2, ease: "easeOut" }}
                    style={
                      { transformOrigin: `${n.x}px ${n.y}px`, transformBox: "fill-box" } as React.CSSProperties
                    }
                  />
                )}
                <circle cx={n.x} cy={n.y} r="10" fill={n.hot ? "#8B5CF6" : "#3B82F6"} opacity="0.18" />
                <circle cx={n.x} cy={n.y} r="4.5" fill={n.hot ? "#A78BFA" : "#60A5FA"} />
              </motion.g>
            ))}
          </svg>
        </div>
      </div>

      {/* floating dashboard cards (each animates as one unit) — sit below the
          header so they never cover the "Inquiry pipeline · live view" title */}
      <FloatCard
        className="left-3 top-[72px] sm:left-5"
        delay={dur(1.2)}
        play={play}      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent-glow" />
        <span className="text-xs text-silver">24/7 auto reply ready</span>
      </FloatCard>

      <FloatCard
        className="left-3 top-[112px] sm:left-5 sm:top-[128px]"
        delay={dur(1.7)}
        play={play}      >
        <span className="flex h-5 w-5 items-center justify-center rounded-md bg-accent/15 text-[10px] text-accent-glow">
          ✓
        </span>
        <span className="text-xs text-silver">
          Lead captured <span className="text-slate">· Rajesh T.</span>
        </span>
      </FloatCard>

      <FloatCard
        className="bottom-6 right-3 sm:right-5"
        delay={dur(2.2)}
        play={play}        accent="iris"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-iris/20 text-iris-glow">
          !
        </span>
        <span className="flex flex-col">
          <span className="text-xs font-semibold text-ivory">Qualified lead</span>
          <span className="text-[10px] text-slate">Priority follow-up</span>
        </span>
      </FloatCard>
    </div>
  );
}

function FloatCard({
  children,
  className,
  delay,
  play,
  accent = "accent",
}: {
  children: ReactNode;
  className: string;
  delay: number;
  play: boolean;
  accent?: "accent" | "iris";
}) {
  const border = accent === "iris" ? "border-iris/30" : "border-white/[0.12]";
  return (
    // Static position. The card fades/scales in once on reveal, then stays
    // anchored — no continuous float, so it never drifts while scrolling.
    <div className={`absolute z-10 ${className}`}>
      <motion.div
        className={`flex items-center gap-2 rounded-xl border ${border} bg-panel/90 px-3 py-2 shadow-card backdrop-blur-md`}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={play ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}
