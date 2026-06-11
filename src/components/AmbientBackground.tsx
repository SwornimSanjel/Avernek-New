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
      <div className={`space-atmosphere space-atmosphere-${variant}`} />
      <div className="space-stars" />

      {variant === "hero" && (
        <>
          <div className="space-ray space-ray-a" />
          <div className="space-ray space-ray-b" />
          <div className="space-horizon" />
        </>
      )}

      {variant === "section" && <div className="space-ray space-ray-soft" />}
    </div>
  );
}
