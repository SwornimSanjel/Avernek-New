import Container from "../Container";
import AmbientBackground from "../AmbientBackground";
import ScrollReveal from "../ScrollReveal";

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
          <h2 className="mt-5 font-display text-4xl font-normal leading-[1.05] text-ivory md:text-[3rem]">
            Marketing creates attention. Avernik makes sure it does not{" "}
            <em className="italic">leak.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate sm:text-lg">
            The system after the click decides what your ad spend is worth.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-14 overflow-hidden rounded-2xl border border-line bg-[#091022]/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          <div className="grid grid-cols-2 border-b border-line text-sm font-medium text-ivory sm:text-base">
            <div className="bg-white/[0.015] px-4 py-5 sm:px-7">
              Traditional setup
            </div>
            <div className="border-l border-accent-glow/25 bg-accent/10 px-4 py-5 text-accent-glow sm:px-7">
              Avernik system
            </div>
          </div>

          <div className="divide-y divide-white/[0.07]">
            {rows.map(([without, withAvernik]) => (
              <div key={without} className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex items-start gap-3 px-4 py-5 text-sm leading-relaxed text-slate sm:px-7 sm:text-base">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[11px] text-slate">
                    X
                  </span>
                  {without}
                </div>
                <div className="flex items-start gap-3 border-t border-white/[0.06] bg-accent/[0.055] px-4 py-5 text-sm leading-relaxed text-silver md:border-l md:border-t-0 md:border-accent-glow/[0.18] sm:px-7 sm:text-base">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/25 text-accent-glow shadow-[0_0_18px_rgba(96,130,255,0.28)]">
                    <svg viewBox="0 0 20 20" fill="none" className="h-3 w-3" aria-hidden>
                      <path
                        d="M4 10.5 8 14 16 6"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.4"
                      />
                    </svg>
                  </span>
                  {withAvernik}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
