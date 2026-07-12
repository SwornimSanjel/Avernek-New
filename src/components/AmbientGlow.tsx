/**
 * Fixed, non-scrolling ambient glow layer.
 *
 * Two large, very-low-opacity radial blobs anchored to opposite screen corners
 * give the whole site a constant, premium monochrome finish that stays put
 * while the page scrolls. Centers sit off-screen so only the soft edges bleed in
 * — content stays fully readable. pointer-events-none, so it never blocks input,
 * and it sits below the navbar / floating buttons.
 *
 * Uses existing theme tokens only (accent = pearl, iris = graphite).
 */
export default function AmbientGlow() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* top-right — pearl */}
      <div className="absolute -right-40 -top-48 h-[40rem] w-[40rem] rounded-full bg-accent/[0.07] blur-[170px]" />
      {/* bottom-left — graphite haze */}
      <div className="absolute -bottom-48 -left-40 h-[38rem] w-[38rem] rounded-full bg-iris/[0.055] blur-[180px]" />
    </div>
  );
}
