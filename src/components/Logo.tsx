import Link from "next/link";
import Mark from "./Mark";

type LogoProps = {
  /** Color of the wordmark. Defaults to ivory (for dark bg). */
  tone?: "ivory" | "ink";
  className?: string;
  href?: string;
};

/**
 * Avernek lockup: the FILTER-A mark inside a rounded-square chip + wordmark.
 * The chip gives the mark the premium "app icon" framing on dark surfaces.
 */
export default function Logo({ tone = "ivory", className = "", href = "/" }: LogoProps) {
  const wordmark = tone === "ivory" ? "text-ivory" : "text-ink";
  return (
    <Link
      href={href}
      aria-label="Avernek home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="hud-cut-xs relative flex h-9 w-9 items-center justify-center border border-accent/10 bg-[#171322] shadow-[inset_0_1px_0_rgba(247,247,248,0.06)] transition-colors duration-300 group-hover:border-[#F7F7F8]/50">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#F7F7F8,#171322)] opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-25"
        />
        <Mark className="relative h-5 w-5 text-ivory" />
      </span>
      <span className={`text-xl font-semibold tracking-[0.14em] ${wordmark}`}>
        AVERNEK
      </span>
    </Link>
  );
}
