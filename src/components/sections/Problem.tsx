import Container from "../Container";
import ScrollReveal from "../ScrollReveal";
import SectionHeading from "../SectionHeading";

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
    <section className="relative overflow-hidden bg-paper py-32 md:py-48">
      <Container className="relative">
        <SectionHeading
          title={
            <>
              Marketing creates attention. Avernek makes sure it does not <em>leak.</em>
            </>
          }
          description="The system after the click decides what your ad spend is worth."
        />

        <ScrollReveal className="card-lift relative mx-auto mt-14 max-w-5xl overflow-hidden">
          {/* Column headers */}
          <div className="grid grid-cols-2 border-b border-line">
            <div className="px-4 py-5 text-center sm:px-6">
              <h3 className="text-sm font-semibold text-muted sm:text-lg">Typical setup</h3>
            </div>
            <div className="border-l border-line bg-sky-wash/50 px-4 py-5 text-center sm:px-6">
              <h3 className="text-sm font-semibold text-ink sm:text-lg">With Avernek</h3>
            </div>
          </div>

          {rows.map(([without, withAvernek], i) => (
            <div
              key={without}
              className={`grid grid-cols-2 ${i > 0 ? "border-t border-line" : ""}`}
            >
              {/* Typical — muted, grey ✗ */}
              <div className="flex items-center gap-2.5 px-4 py-4 sm:gap-3 sm:px-6 sm:py-5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink/[0.06] text-muted sm:h-6 sm:w-6">
                  <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" aria-hidden>
                    <path d="M7 7l10 10M17 7 7 17" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="text-xs leading-relaxed text-muted sm:text-sm">{without}</span>
              </div>

              {/* Avernek — sky tint, filled check */}
              <div className="flex items-center gap-2.5 border-l border-line bg-sky-wash/50 px-4 py-4 sm:gap-3 sm:px-6 sm:py-5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky text-white sm:h-6 sm:w-6">
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
                <span className="text-xs font-medium leading-relaxed text-ink sm:text-sm">
                  {withAvernek}
                </span>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </Container>
    </section>
  );
}
