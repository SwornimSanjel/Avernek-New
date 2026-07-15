import type { ComponentPropsWithoutRef, ReactNode } from "react";

type MarqueeProps = ComponentPropsWithoutRef<"div"> & {
  className?: string;
  /** Scroll right-to-left instead of left-to-right. */
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: ReactNode;
  vertical?: boolean;
  /** How many times the children repeat, to fill wide screens seamlessly. */
  repeat?: number;
};

/**
 * Infinite marquee. Duration and gap are CSS vars so callers can tune them per
 * instance, e.g. `className="[--duration:34s]"`.
 *
 * Uses `motion-safe:` so the track sits still for prefers-reduced-motion users
 * rather than scrolling past them.
 */
export default function Marquee({
  className = "",
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={`group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] ${
        vertical ? "flex-col" : "flex-row"
      } ${className}`}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          style={reverse ? { animationDirection: "reverse" } : undefined}
          className={`flex shrink-0 justify-around [gap:var(--gap)] ${
            vertical
              ? "motion-safe:animate-marquee-vertical flex-col"
              : "motion-safe:animate-marquee flex-row"
          } ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
