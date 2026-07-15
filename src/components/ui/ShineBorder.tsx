import type { CSSProperties } from "react";

type ShineBorderProps = {
  /** Stroke thickness in px. */
  borderWidth?: number;
  /** Seconds for one full travel of the gradient. */
  duration?: number;
  /** One colour, or a ramp. Defaults to the Avernek bronze ramp. */
  shineColor?: string | string[];
  className?: string;
};

/**
 * Animated shine on a card's outer stroke.
 *
 * Drop inside any `position: relative` + `overflow-hidden` card; it inherits the
 * card's radius and paints only the border (the two masks cancel out the
 * middle). Tuned to the Avernek palette — deep bronze → champagne → highlight —
 * so it reads as brushed metal catching the light, not a neon gradient.
 *
 * `motion-safe:` means it holds still for prefers-reduced-motion users.
 */
export default function ShineBorder({
  borderWidth = 1,
  duration = 14,
  shineColor = ["#8A6A3B", "#CBAA6B", "#E7CF99"],
  className = "",
}: ShineBorderProps) {
  return (
    <div
      aria-hidden
      style={
        {
          "--border-width": `${borderWidth}px`,
          "--duration": `${duration}s`,
          backgroundImage: `radial-gradient(transparent, transparent, ${
            Array.isArray(shineColor) ? shineColor.join(",") : shineColor
          }, transparent, transparent)`,
          backgroundSize: "300% 300%",
          WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMaskComposite: "xor",
          mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          maskComposite: "exclude",
          padding: "var(--border-width)",
        } as CSSProperties
      }
      className={`pointer-events-none absolute inset-0 size-full rounded-[inherit] will-change-[background-position] motion-safe:animate-shine ${className}`}
    />
  );
}
