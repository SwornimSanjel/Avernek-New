import Container from "../Container";
import AmbientBackground from "../AmbientBackground";
import ScrollReveal from "../ScrollReveal";
import Mark from "../Mark";

// Max 7–8 words per cell — these read as a scan, not prose.
const rows = [
  ["Inquiries sit unanswered during busy hours", "Every inquiry gets an instant reply"],
  ["Leads scattered across Messenger, Instagram, WhatsApp", "Every lead lands in one system"],
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
            Marketing creates attention. Avernik makes sure it does not{" "}
            <em className="italic">leak.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate sm:text-lg">
            The system after the click decides what your ad spend is worth.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mx-auto mt-14 max-w-5xl">
          {/* Column header with the V/S badge floating between the two sides */}
          <div className="relative mb-8 grid grid-cols-2 items-center">
            {/* Both labels centred within their half, so they sit toward the
                middle flanking the badge rather than at the extreme edges */}
            <h3 className="px-2 text-center text-sm font-bold tracking-tight text-white sm:text-2xl">
              Traditional setup
            </h3>
            <div className="flex items-center justify-center gap-2.5 sm:gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-[9px] border border-white/10 bg-[#0a1126] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:h-9 sm:w-9">
                <Mark className="h-4 w-4 text-ivory sm:h-5 sm:w-5" />
              </span>
              <span className="text-sm font-bold tracking-tight text-white sm:text-2xl">
                Avernik System
              </span>
            </div>

            {/* V/S badge — compact Mach33-style: a small dark navy orb, lit
                from the top, with two faint rings that fade out toward the
                bottom so the badge melts into the dark below. */}
            <span className="pointer-events-none absolute left-1/2 top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:h-12 sm:w-12">
              {/* two tight rings, masked so they fade away at the bottom */}
              <span
                aria-hidden
                className="absolute h-[134%] w-[134%] rounded-full border border-[#6f8cff]/12 [mask-image:linear-gradient(to_bottom,#000_30%,transparent_88%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_30%,transparent_88%)]"
              />
              <span
                aria-hidden
                className="absolute h-[116%] w-[116%] rounded-full border border-[#6f8cff]/22 [mask-image:linear-gradient(to_bottom,#000_35%,transparent_92%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_35%,transparent_92%)]"
              />

              {/* top-lit rim — bright at the top edge, transparent at the bottom */}
              <span className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-b from-[#7d93e6]/55 to-transparent p-px">
                {/* dark navy orb — deep, dim glow biased to the top */}
                <span className="flex h-full w-full items-center justify-center rounded-full bg-[radial-gradient(circle_at_50%_30%,#27408c,#152452_55%,#0a1230_100%)] text-[10px] font-semibold tracking-wide text-[#cdd6f5] shadow-[inset_0_1px_2px_rgba(160,180,255,0.22)] sm:text-[12px]">
                  V/S
                </span>
              </span>
            </span>
          </div>

          {/* Each row is its own floating band — the page background shows
              through, so no heavy outer container is needed. */}
          <div className="flex flex-col gap-2.5 sm:gap-3">
            {rows.map(([without, withAvernik]) => (
              <div key={without} className="grid grid-cols-2">
                {/* Traditional — muted, diagonally hatched, grey ✗ */}
                <div className="relative flex items-center gap-2.5 overflow-hidden rounded-l-xl border border-r-0 border-white/[0.06] bg-white/[0.015] px-3 py-3.5 sm:gap-3 sm:px-5 sm:py-4">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-70 [background-image:repeating-linear-gradient(135deg,rgba(255,255,255,0.022)_0px,rgba(255,255,255,0.022)_1px,transparent_1px,transparent_8px)]"
                  />
                  <span className="relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-slate sm:h-6 sm:w-6">
                    <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" aria-hidden>
                      <path d="M7 7l10 10M17 7 7 17" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span className="relative text-xs leading-relaxed text-slate sm:text-sm">{without}</span>
                </div>

                {/* Avernik — blue-tinted, glowing ✓, accent-bar divider + bloom */}
                <div className="group relative flex items-center gap-2.5 overflow-hidden rounded-r-xl border border-l-0 border-accent/20 bg-[linear-gradient(90deg,rgba(45,91,255,0.16),rgba(45,91,255,0.045)_62%,transparent)] px-3 py-3.5 transition-colors duration-300 hover:border-accent/40 sm:gap-3 sm:px-5 sm:py-4">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute left-0 top-1/2 h-20 w-24 -translate-y-1/2 rounded-full bg-accent/25 blur-2xl"
                  />
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 h-full w-[2px] bg-accent shadow-[0_0_14px_2px_rgba(45,91,255,0.7)]"
                  />
                  <span className="relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-white shadow-[0_0_16px_rgba(45,91,255,0.6)] sm:h-6 sm:w-6">
                    <svg viewBox="0 0 20 20" fill="none" className="h-3 w-3" aria-hidden>
                      <path d="M4 10.5 8 14 16 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
                    </svg>
                  </span>
                  <span className="relative text-xs font-medium leading-relaxed text-ivory sm:text-sm">{withAvernik}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
