/**
 * AmbientBackground — the site's "neon in a dark room" lighting layer.
 *
 * Replaces hard line-grids with soft, asymmetric colored light blooms plus a
 * faint diagonal light-ray, so a section reads as glowing-dark rather than
 * flat-dark. Pure CSS gradients + blur (no images), capped at three blurred
 * elements per section to keep paint cheap.
 *
 * Drift is a slow (~24s) CSS keyframe animation; the global reduced-motion
 * rule in globals.css freezes it to a static formed state automatically.
 *
 * Uses theme tokens only: accent = electric blue, iris = violet.
 *
 * variant:
 *   "hero"    — strongest blooms + diagonal ray (above the fold)
 *   "section" — medium blooms + faint ray
 *   "subtle"  — a single faint bloom
 *
 * The host <section> must be `relative overflow-hidden` so blooms don't leak.
 */
type Variant = "hero" | "section" | "subtle";

export default function AmbientBackground({
  variant = "section",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      {variant === "hero" && (
        <>
          <div className="ambient-drift-a absolute right-[-8%] top-[-12%] h-[560px] w-[620px] rounded-full bg-iris/[0.16] blur-[170px]" />
          <div className="ambient-drift-b absolute left-[-10%] top-[34%] h-[480px] w-[520px] rounded-full bg-accent/[0.13] blur-[160px]" />
          <Ray opacity={0.07} />
        </>
      )}

      {variant === "section" && (
        <>
          <div className="ambient-drift-b absolute right-[-6%] top-[8%] h-[420px] w-[480px] rounded-full bg-accent/[0.1] blur-[160px]" />
          <div className="ambient-drift-a absolute bottom-[-10%] left-[-8%] h-[380px] w-[440px] rounded-full bg-iris/[0.08] blur-[170px]" />
          <Ray opacity={0.05} />
        </>
      )}

      {variant === "subtle" && (
        // Static + centered: drift would override the -translate-x-1/2 centering,
        // and a single faint bloom needs no motion to read as premium.
        <div className="absolute left-1/2 top-[18%] h-[420px] w-[560px] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[180px]" />
      )}
    </div>
  );
}

/**
 * A wide, very soft diagonal light-ray crossing the section at ~20deg — the
 * Mach33 "ray of light" streak. Rotated, blurred linear-gradient div.
 */
function Ray({ opacity }: { opacity: number }) {
  return (
    <div
      className="absolute left-1/2 top-1/2 h-[150%] w-[55%] -translate-x-1/2 -translate-y-1/2 rotate-[20deg] blur-[60px]"
      style={{
        background: `linear-gradient(90deg, transparent 0%, rgba(96,165,250,${opacity}) 45%, rgba(139,92,246,${opacity}) 55%, transparent 100%)`,
      }}
    />
  );
}
