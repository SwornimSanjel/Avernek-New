import Mark from "./Mark";

// System stages shown while the site loads — no fabricated metrics.
const stages = ["Capture", "Qualify", "Report"];

/**
 * Purely visual intro overlay. It does NOT control when the site appears —
 * SiteShell reveals the content on a timer and unmounts this overlay via
 * AnimatePresence (which fades it out through the `exit` prop). Nothing here
 * can block the page.
 */
export default function Preloader() {
  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-obsidian"
      aria-hidden
    >
      {/* slowly drifting signal grid + ambient glow */}
      <div className="pointer-events-none absolute inset-0 animate-[starDrift_8s_linear_infinite] bg-grid opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-[38%] h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-iris/12 blur-[130px]" />

      {/* Logo */}
      <div className="relative flex animate-fade-up flex-col items-center">
        <div className="hud-cut holo-ring relative flex h-20 w-20 items-center justify-center border border-accent/10 bg-panel-light shadow-card">
          <span className="pointer-events-none absolute inset-0 bg-accent-grad opacity-20 blur-lg" />
          <Mark className="relative h-11 w-11 text-ivory" />
        </div>
        <span className="mt-5 text-2xl font-semibold tracking-[0.34em] text-ivory">
          AVERNEK
        </span>
        <span className="mt-3 text-[11px] uppercase tracking-[0.28em] text-slate">
          Building inquiry signal…
        </span>
      </div>

      {/* Stage cards */}
      <div className="absolute bottom-[20%] w-full max-w-md animate-fade-up px-6 [animation-delay:240ms]">
        <div className="grid grid-cols-3 gap-3">
          {stages.map((label, i) => (
            <div
              key={label}
              className="hud-cut-sm flex items-center justify-center gap-2 border border-accent/10 bg-panel/60 p-3 text-center backdrop-blur-sm"
              style={{ animationDelay: `${0.4 + i * 0.14}s` }}
            >
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent/20 text-[9px] text-accent-glow">
                ✓
              </span>
              <span className="text-xs font-medium text-silver">{label}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-[10px] uppercase tracking-[0.2em] text-slate/70">
          Initializing the inquiry system
        </p>
      </div>

      {/* progress sweep */}
      <div className="absolute bottom-14 h-px w-44 overflow-hidden rounded-full bg-accent/10">
        <div className="h-full w-1/2 animate-sweep bg-accent-grad" />
      </div>
    </div>
  );
}
