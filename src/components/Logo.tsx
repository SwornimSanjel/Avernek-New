import Link from "next/link";
import Mark from "./Mark";

type LogoProps = {
  /** Color of the wordmark. Defaults to ivory (for dark bg). */
  tone?: "ivory" | "ink";
  className?: string;
  href?: string;
};

/**
 * Avenor lockup: the FILTER-A mark inside a rounded-square chip + wordmark.
 * The chip gives the mark the premium "app icon" framing on dark surfaces.
 */
export default function Logo({ tone = "ivory", className = "", href = "/" }: LogoProps) {
  const wordmark = tone === "ivory" ? "text-ivory" : "text-ink";
  return (
    <Link
      href={href}
      aria-label="Avenor home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/10 bg-panel-light shadow-card transition-colors duration-300 group-hover:border-accent/40">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[10px] bg-accent-grad opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-20"
        />
        <Mark className="relative h-5 w-5 text-ivory" />
      </span>
      <span className={`font-display text-2xl font-bold tracking-[0.14em] ${wordmark}`}>
        AVENOR
      </span>
    </Link>
  );
}
