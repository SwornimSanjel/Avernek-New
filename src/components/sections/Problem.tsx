import Container from "../Container";
import AmbientBackground from "../AmbientBackground";
import ScrollReveal from "../ScrollReveal";
import Mark from "../Mark";

// Max 7–8 words per cell — these read as a scan, not prose.
const rows = [
  ["Inquiries sit unanswered during busy hours", "Every inquiry gets an instant reply"],
  ["Leads scattered across inboxes, DMs, and forms", "Every lead lands in one system"],
  ["Your team replies to every random message", "AI filters serious buyers first"],
  ["Follow-ups depend on memory", "Follow-ups are structured and tracked"],
  ["Slow replies lose good prospects", "Hot leads flagged while interest is high"],
  ["Marketing spend leaks after the click", "Your backend converts more of every campaign"],
  ["No visibility on lead quality or status", "Clear pipeline: new, qualified, booked, lost"],
];

export default function Problem() {
  return (
    <section className="relative overflow-hidden bg-obsidian py-24 md:py-32">
      <AmbientBackground variant="section" />
      <Container className="relative">
        <ScrollReveal className="mx-auto max-w-4xl text-center">
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-slate">
            The backend gap
          </span>
          <h2 className="mt-5 font-sans text-4xl font-medium leading-[1.05] text-ivory md:text-[3rem]">
            Marketing creates attention. Avernek makes sure it does not{" "}
            <em className="italic">leak.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate sm:text-lg">
            The system after the click decides what your ad spend is worth.
          </p>
        </ScrollReveal>

        <ScrollReveal className="hud-cut hud-brackets relative mx-auto mt-14 max-w-5xl border border-line bg-[#1B1626]/72 p-5 shadow-[0_34px_110px_-70px_rgba(247,247,248,0.45)] sm:p-8">
          {/* Column header with the V/S badge floating between the two sides */}
          <div className="relative mb-8 grid grid-cols-2 items-center">
            {/* Both labels centred within their half, so they sit toward the
                middle flanking the badge rather than at the extreme edges */}
            <h3 className="px-2 text-center text-sm font-bold tracking-tight text-ivory sm:text-2xl">
              Traditional setup
            </h3>
            <div className="flex items-center justify-center gap-2.5 sm:gap-3">
              <span className="hud-cut-xs flex h-7 w-7 items-center justify-center border border-accent/10 bg-[#171322] shadow-[inset_0_1px_0_rgba(247,247,248,0.06)] sm:h-9 sm:w-9">
                <Mark className="h-4 w-4 text-ivory sm:h-5 sm:w-5" />
              </span>
              <span className="text-sm font-bold tracking-tight text-ivory sm:text-2xl">
                Avernek System
              </span>
            </div>

            {/* V/S badge — signal orb ringed by clean, full concentric circles at very low
                opacity (barely-there sonar rings, no fades or masks). */}
            <span className="pointer-events-none absolute left-1/2 top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:h-12 sm:w-12">
              {/* faint, evenly-spaced full rings — barely visible */}
              <span aria-hidden className="absolute h-[172%] w-[172%] rounded-full border border-[#F7F7F8]/[0.05]" />
              <span aria-hidden className="absolute h-[148%] w-[148%] rounded-full border border-[#F7F7F8]/[0.07]" />
              <span aria-hidden className="absolute h-[124%] w-[124%] rounded-full border border-[#F7F7F8]/[0.10]" />

              {/* orb — pearl bloom in the upper-centre shading into a graphite edge */}
              <span className="relative flex h-full w-full items-center justify-center rounded-full bg-[radial-gradient(circle_at_50%_38%,#171322,#1B1626_58%,#09080D_100%)] text-[10px] font-semibold tracking-wide text-[#F7F7F8] shadow-[inset_0_1px_2px_rgba(247,247,248,0.4)] ring-1 ring-[#F7F7F8]/20 sm:text-[12px]">
                V/S
              </span>
            </span>
          </div>

          {/* Each row is its own floating band — the page background shows
              through, so no heavy outer container is needed. */}
          <div className="flex flex-col gap-2.5 sm:gap-3">
            {rows.map(([without, withAvernek]) => (
              <div key={without} className="grid grid-cols-2">
                {/* Traditional — muted, diagonally hatched, grey ✗ */}
                <div className="relative flex items-center gap-2.5 overflow-hidden border border-r-0 border-accent/[0.06] bg-accent/[0.015] px-3 py-3.5 sm:gap-3 sm:px-5 sm:py-4">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-70 [background-image:repeating-linear-gradient(135deg,rgba(247,247,248,0.022)_0px,rgba(247,247,248,0.022)_1px,transparent_1px,transparent_8px)]"
                  />
                  <span className="relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/[0.06] text-slate sm:h-6 sm:w-6">
                    <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" aria-hidden>
                      <path d="M7 7l10 10M17 7 7 17" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span className="relative text-xs leading-relaxed text-slate sm:text-sm">{without}</span>
                </div>

                {/* Avernek signal tint, glowing check, accent-bar divider + bloom */}
                <div className="group relative flex items-center gap-2.5 overflow-hidden border border-l-0 border-accent/20 bg-[linear-gradient(90deg,rgba(247,247,248,0.17),rgba(27,22,38,0.05)_62%,transparent)] px-3 py-3.5 transition-colors duration-300 hover:border-accent/40 sm:gap-3 sm:px-5 sm:py-4">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute left-0 top-1/2 h-20 w-24 -translate-y-1/2 rounded-full bg-accent/25 blur-2xl"
                  />
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 h-full w-[2px] bg-accent shadow-[0_0_14px_2px_rgba(247,247,248,0.7)]"
                  />
                  <span className="relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-[#09080D] shadow-[0_0_16px_rgba(247,247,248,0.45)] sm:h-6 sm:w-6">
                    <svg viewBox="0 0 20 20" fill="none" className="h-3 w-3" aria-hidden>
                      <path d="M4 10.5 8 14 16 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
                    </svg>
                  </span>
                  <span className="relative text-xs font-medium leading-relaxed text-ivory sm:text-sm">{withAvernek}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
