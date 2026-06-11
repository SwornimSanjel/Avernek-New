"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Floating ambient particles — the Mach33-style "dust in a lit room" layer.
 *
 * A single full-bleed canvas of tiny glowing accent/iris dots that drift slowly
 * upward with a gentle sway and twinkle. Pure 2D canvas, ~No DOM churn; one
 * rAF loop that stops when the tab is hidden and renders a single static frame
 * under prefers-reduced-motion.
 *
 * Parent must be `relative`; this layer is pointer-events-none.
 */
type P = {
  x: number; // 0..1 of width
  y: number; // 0..1 of height
  r: number; // radius px
  vy: number; // upward speed (fraction of height per second)
  sway: number; // horizontal sway amplitude (fraction of width)
  phase: number; // sway phase offset
  twinkle: number; // twinkle phase offset
  blue: boolean; // accent blue vs iris violet
};

export default function Particles({
  count = 56,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: P[] = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.8 + Math.random() * 1.6,
      vy: 0.008 + Math.random() * 0.018,
      sway: 0.004 + Math.random() * 0.01,
      phase: Math.random() * Math.PI * 2,
      twinkle: Math.random() * Math.PI * 2,
      blue: Math.random() < 0.72,
    }));

    let w = 0;
    let h = 0;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = (t: number) => {
      // Self-heal if layout changed without a resize event (cheap check).
      if (canvas.clientWidth !== w || canvas.clientHeight !== h) resize();
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        const y = ((p.y - t * p.vy) % 1 + 1) % 1; // wraps top → bottom
        const x = p.x + Math.sin(t * 0.4 + p.phase) * p.sway;
        const a = 0.25 + 0.45 * (0.5 + 0.5 * Math.sin(t * 1.1 + p.twinkle));
        ctx.beginPath();
        ctx.arc(x * w, y * h, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.blue
          ? `rgba(96, 165, 250, ${a})`
          : `rgba(167, 139, 250, ${a * 0.85})`;
        ctx.fill();
      }
    };

    if (reduce) {
      // Static formed state: one frame, redrawn only on resize.
      draw(0);
      const redraw = () => draw(0);
      window.addEventListener("resize", redraw);
      return () => {
        window.removeEventListener("resize", redraw);
        window.removeEventListener("resize", resize);
      };
    }

    let raf = 0;
    const start = performance.now();
    const loop = (now: number) => {
      draw((now - start) / 1000);
      raf = requestAnimationFrame(loop);
    };
    // Paint the first frame synchronously so the layer isn't blank in hidden /
    // rAF-throttled tabs (e.g. while prerendered in a background tab).
    draw(0);
    raf = requestAnimationFrame(loop);

    const onVis = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) raf = requestAnimationFrame(loop);
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("resize", resize);
    };
  }, [count, reduce]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
