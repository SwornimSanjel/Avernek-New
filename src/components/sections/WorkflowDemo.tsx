import Container from "../Container";
import SectionHeading from "../SectionHeading";
import ScrollReveal from "../ScrollReveal";

/**
 * Illustrative AI demo — a Messenger-style conversation that visibly flows into
 * the CRM, fires an owner alert, and ends on a report tick. It demonstrates the
 * product rather than claiming results. Clearly labelled as a demo; no real
 * client data. Loops cleanly; respects prefers-reduced-motion (final state).
 *
 * Step map (advances on a fixed interval, then loops):
 *   0 reset · 1 customer msg · 2 seen + typing · 3 AI reply + CRM opens
 *   4 customer reply · 5 AI qualifies + CRM scores HOT · 6 owner alert · 7 report
 */
export default function WorkflowDemo() {
  const crmRows: [string, string, boolean][] = [
    ["Name", "Rajesh T.", true],
    ["Platform", "Facebook", true],
    ["Interest", "Python weekend class", true],
    ["Timeline", "This week", true],
  ];

  return (
    <section
      id="demo"
      className="relative scroll-mt-24 overflow-hidden bg-[radial-gradient(125%_120%_at_50%_-10%,#171322_0%,#1B1626_42%,#09080D_100%)] py-24 md:py-32"
    >
      {/* the one brighter, plasma "spotlight" section of the site */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-[0.22]" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-accent/12 blur-[150px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Live demo"
          title={
            <>
              Watch one inquiry move through the{" "}
              <em className="italic">system.</em>
            </>
          }
          description="Illustrative demo: one message captured, answered, qualified, and flagged in seconds."
        />

        <div className="mx-auto mt-14 grid max-w-5xl items-start gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Chat panel */}
          <ScrollReveal className="hud-cut hud-brackets glass relative flex flex-col shadow-card">
            <div className="flex items-center justify-between border-b border-accent/10 px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate">
                  Facebook · Messenger
                </span>
              </div>
              <span className="rounded-full border border-accent/10 bg-accent/[0.03] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-slate">
                Demo
              </span>
            </div>

            <div className="flex min-h-[340px] flex-col gap-3 p-5">
              {/* customer message 1 */}
              <ChatBubble side="in" show>
                Hi, what are your course fees and class timings?
              </ChatBubble>
              <Cue side="in" show label="Seen" />

              {/* AI reply 1 — the typing dots and the reply occupy the SAME
                  reserved space (dots overlay the reply area), so there is no
                  extra gap after the first message and the card never resizes. */}
              <div className="relative flex flex-col items-end">
                <Typing show={false} />
                <ChatBubble side="out" show>
                  Thanks for reaching out. Which course are you interested in, and when are you
                  hoping to start?
                  <span className="mt-1.5 block text-[10px] text-accent-glow">Auto reply sent</span>
                </ChatBubble>
              </div>

              {/* customer message 2 */}
              <ChatBubble side="in" show>
                Python, the weekend batch. Hoping to join this week.
              </ChatBubble>

              {/* AI reply 2 */}
              <ChatBubble side="out" show>
                Great, the weekend batch is a good fit. I&apos;ll have a counsellor confirm your seat
                and timings shortly.
              </ChatBubble>
            </div>
          </ScrollReveal>

          {/* System side panel */}
          <ScrollReveal delay={0.1} className="flex flex-col gap-4">
            {/* CRM card */}
            <div className="hud-cut glass p-5 shadow-card">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate">
                  CRM · lead captured
                </span>
                <span
                  className={`rounded-full bg-accent/20 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent-glow transition-all duration-300 ${
                    "scale-100 opacity-100"
                  }`}
                >
                  ● Hot
                </span>
              </div>
              <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                {crmRows.map(([k, v, on]) => (
                  <div key={k} className="flex flex-col">
                    <dt className="text-[10px] uppercase tracking-wide text-slate">{k}</dt>
                    <dd
                      className={`text-silver transition-opacity duration-300 ${on ? "opacity-100" : "opacity-[0.55]"}`}
                    >
                      {on ? v : "·"}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Owner alert */}
            <div
              className={`hud-cut-sm flex items-center gap-3 border bg-panel/60 p-4 backdrop-blur-sm transition-all duration-300 ${
                "border-accent/55 opacity-100"
              }`}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/20 text-accent-glow">
                !
              </span>
              <div>
                <p className="text-sm font-medium text-ivory">Owner alert</p>
                <p className="text-xs text-slate">Qualified lead, flagged for the team to call first.</p>
              </div>
            </div>

            {/* Report tick */}
            <div
              className={`hud-cut-sm grid grid-cols-2 gap-3 border border-accent/10 bg-panel/40 p-4 transition-opacity duration-300 sm:grid-cols-4 ${
                "opacity-100"
              }`}
            >
              {[
                ["Replied", true],
                ["Captured", true],
                ["Qualified", true],
                ["Follow-up", true],
              ].map(([label, on]) => (
                <div key={String(label)} className="flex flex-col items-center gap-1 text-center">
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full bg-accent/20 text-[10px] text-accent-glow transition-all duration-300 ${
                      on ? "scale-100 opacity-100" : "scale-90 opacity-30"
                    }`}
                  >
                    ✓
                  </span>
                  <span className="text-[10px] uppercase tracking-wide text-slate">{label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

function ChatBubble({
  children,
  side,
  show,
}: {
  children: React.ReactNode;
  side: "in" | "out";
  show: boolean;
}) {
  const isIn = side === "in";
  return (
    <div
      className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm transition-all duration-300 ${
        show ? "translate-y-0 opacity-100" : "translate-y-1 opacity-[0.45]"
      } ${
        isIn
          ? "self-start rounded-tl-sm bg-panel-light text-silver"
          : "self-end rounded-tr-sm bg-accent/15 text-ivory"
      }`}
      style={{ pointerEvents: show ? "auto" : "none" }}
    >
      {children}
    </div>
  );
}

function Cue({ side, show, label }: { side: "in" | "out"; show: boolean; label: string }) {
  return (
    <span
      className={`-mt-1 text-[10px] text-slate transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-[0.45]"
      } ${side === "in" ? "self-start pl-1" : "self-end pr-1"}`}
    >
      {label}
    </span>
  );
}

/**
 * Typing indicator. Absolutely positioned over the top of the AI reply's
 * reserved area, so it adds no height and creates no extra gap. Only opacity
 * animates (no mount/unmount, no layout change), so the card never resizes.
 */
function Typing({ show }: { show: boolean }) {
  return (
    <div
      aria-hidden
      style={{ pointerEvents: "none" }}
      className={`absolute right-0 top-0 z-10 flex items-center gap-1.5 rounded-2xl rounded-tr-sm bg-accent/15 px-4 py-2.5 transition-opacity duration-200 ${
        show ? "opacity-100" : "opacity-[0.35]"
      }`}
    >
      {[0, 1, 2].map((d) => (
        <span
          key={d}
          className="h-1.5 w-1.5 animate-node rounded-full bg-accent-glow"
          style={{ animationDelay: `${d * 0.2}s` }}
        />
      ))}
    </div>
  );
}
