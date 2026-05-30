/**
 * Fixed, non-scrolling ambient glow layer.
 *
 * Two large, very-low-opacity radial blobs anchored to opposite screen corners
 * give the whole site a constant, premium dark-blue / iris finish that stays put
 * while the page scrolls. Centers sit off-screen so only the soft edges bleed in
 * — content stays fully readable. pointer-events-none, so it never blocks input,
 * and it sits below the navbar / floating buttons.
 *
 * Uses existing theme tokens only (accent = electric blue, iris = violet).
 */
export default function AmbientGlow() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* top-right — cool electric blue */}
      <div className="absolute -right-40 -top-48 h-[40rem] w-[40rem] rounded-full bg-accent/[0.06] blur-[170px]" />
      {/* bottom-left — midnight violet */}
      <div className="absolute -bottom-48 -left-40 h-[38rem] w-[38rem] rounded-full bg-iris/[0.05] blur-[180px]" />
    </div>
  );
}
