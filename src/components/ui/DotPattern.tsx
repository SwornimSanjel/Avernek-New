"use client";

import { useId } from "react";

type DotPatternProps = {
  width?: number;
  height?: number;
  cx?: number;
  cy?: number;
  cr?: number;
  /** Set the dot colour with a `fill-*` class, and fade it with a mask class. */
  className?: string;
};

/**
 * Tiled dot field. Pair with a mask so it dissolves instead of tiling to a hard
 * edge, e.g.
 *   className="fill-white/[0.12] [mask-image:radial-gradient(420px_circle_at_center,white,transparent)]"
 *
 * Client-side only for `useId`, which keeps the pattern id stable across
 * hydration (no SSR mismatch).
 */
export default function DotPattern({
  width = 18,
  height = 18,
  cx = 1,
  cy = 1,
  cr = 1,
  className = "",
}: DotPatternProps) {
  const id = useId();

  return (
    <svg
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
        >
          <circle cx={cx} cy={cy} r={cr} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  );
}
