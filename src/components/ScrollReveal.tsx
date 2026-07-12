import { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay in seconds before the reveal starts (use for grid stagger). */
  delay?: number;
};

/**
 * Lightweight reveal wrapper: content fades in while rising a short
 * distance up into its final position (a clean "settle into place from just
 * below"). Fires once.
 *
 * Under prefers-reduced-motion it fades only (no transform).
 */
export default function ScrollReveal({ children, className = "", delay = 0 }: ScrollRevealProps) {
  return (
    <div
      className={`${className} animate-fade-up`}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
