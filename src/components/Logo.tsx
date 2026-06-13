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
      <span className="relative flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/10 bg-[#0c1334] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-colors duration-300 group-hover:border-[#2d5bff]/45">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[10px] bg-[#2d5bff] opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-15"
        />
        <Mark className="relative h-5 w-5 text-ivory" />
      </span>
      <span className={`text-xl font-semibold tracking-[0.14em] ${wordmark}`}>
        AVERNEK
      </span>
    </Link>
  );
}
