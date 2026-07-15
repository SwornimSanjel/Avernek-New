/**
 * Hero "Inquiry Control Center" — one realistic inquiry moving through the
 * system. Deliberately low-information: a single Nepali-context message, one
 * reply, then a compact status rail. Labelled as an illustrative preview.
 *
 * Entrance uses CSS (animate-fade-up) so it is SSR-safe and the content is
 * always visible — no Framer/hydration flash above the fold. Scroll-triggered
 * motion elsewhere on the page is handled by ScrollReveal.
 */

const steps = [
  { label: "Reply sent", meta: "in 6 seconds", icon: "reply" },
  { label: "Interest captured", meta: "IELTS · weekend batch", icon: "tag" },
  { label: "Qualified", meta: "High intent", icon: "star" },
  { label: "Team alerted", meta: "Follow-up scheduled · 11 AM", icon: "bell" },
] as const;

function StepIcon({ name }: { name: string }) {
  const p = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-3.5 w-3.5",
    "aria-hidden": true,
  };
  if (name === "reply") return (<svg {...p}><path d="M9 7 4 12l5 5" /><path d="M4 12h11a5 5 0 0 1 5 5v1" /></svg>);
  if (name === "tag") return (<svg {...p}><path d="M4 4h8l8 8-8 8-8-8V4z" /><circle cx="8.5" cy="8.5" r="1.2" /></svg>);
  if (name === "star") return (<svg {...p}><path d="m12 4 2.3 4.9 5.2.7-3.8 3.6.9 5.1L12 15.9 7.4 18.3l.9-5.1-3.8-3.6 5.2-.7L12 4z" /></svg>);
  return (<svg {...p}><path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6z" /><path d="M10 20a2 2 0 0 0 4 0" /></svg>);
}

export default function HeroConsole() {
  return (
    <div className="card-lift relative overflow-hidden p-5 sm:p-6">
      {/* header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2 items-center justify-center">
            <span className="absolute h-2.5 w-2.5 animate-[ping_2.6s_ease-out_infinite] rounded-full bg-brass/40" />
            <span className="relative h-2 w-2 rounded-full bg-brass" />
          </span>
          <p className="text-sm font-semibold text-ink">Inquiry control center</p>
        </div>
        <span className="rounded-full bg-brass-wash px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-brass">
          Preview
        </span>
      </div>

      <div aria-hidden className="rule-fade my-5 h-px w-full" />

      {/* one inquiry — Messenger, Nepali context */}
      <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-paper">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden>
            <path d="M12 2.5C6.7 2.5 2.5 6.5 2.5 11.4c0 2.7 1.3 5.1 3.4 6.7v3.4l3.1-1.7c.9.2 1.9.4 3 .4 5.3 0 9.5-4 9.5-8.8S17.3 2.5 12 2.5Zm1 11.4-2.4-2.6-4.7 2.6L11.6 9l2.5 2.6L18.7 9l-5.7 4.9Z" />
          </svg>
        </span>
        Messenger · 8:42 PM
      </div>

      <div className="mt-3 flex flex-col gap-2">
        <div className="max-w-[80%] self-start rounded-2xl rounded-tl-md bg-paper-deep px-4 py-2.5 text-sm leading-relaxed text-graphite">
          Weekend IELTS class ko fee kati ho?
        </div>
        <div className="max-w-[85%] self-end rounded-2xl rounded-tr-md bg-[linear-gradient(180deg,#e7cf99,#cbaa6b)] px-4 py-2.5 text-sm leading-relaxed text-[#1c1509] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
          Namaste! Weekend batch runs Sat–Sun. Want me to share the fee and hold a seat?
        </div>
      </div>

      <div aria-hidden className="rule-fade my-5 h-px w-full" />

      {/* status rail */}
      <ul className="relative flex flex-col gap-4 pl-1">
        <span aria-hidden className="absolute bottom-3 left-[15px] top-3 w-px bg-line" />
        {steps.map((s, i) => (
          <li
            key={s.label}
            className="relative flex animate-fade-up items-center gap-3"
            style={{ animationDelay: `${360 + i * 120}ms` }}
          >
            <span
              className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                i === steps.length - 1 ? "bg-brass text-white" : "bg-brass-wash text-brass"
              }`}
            >
              <StepIcon name={s.icon} />
            </span>
            <div className="flex flex-1 items-center justify-between gap-3">
              <span className="text-sm font-semibold text-ink">{s.label}</span>
              <span className="text-[11px] font-medium text-muted">{s.meta}</span>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-5 text-center text-xs text-muted">
        <span className="font-semibold text-ink">0 leads missed</span> after hours — every
        conversation logged.
      </p>
    </div>
  );
}
