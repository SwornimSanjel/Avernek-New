import Image from "next/image";
import Container from "../Container";
import { LinkButton } from "../Button";
import AmbientBackground from "../AmbientBackground";

// Free-to-use Unsplash portraits of urban South Asian / Nepali professionals
// (3 men, 2 women), stored locally in /public/trust as square face-cropped
// images. Already centered on the face, so `position` stays "center".
const trustAvatars = [
  { src: "/resources/trusted/client-male-1.jpg", alt: "Client avatar", position: "50% 18%" },
  { src: "/resources/trusted/client-male-2.jpg", alt: "Client avatar", position: "center" },
  { src: "/resources/trusted/client-female.jpg", alt: "Female client avatar", position: "50% 18%" },
  { src: "/resources/trusted/client-male-3.jpg", alt: "Client avatar", position: "50% 28%" },
  {
    src: "/resources/trusted/vidhya-sagar-mountain-routes.jpg",
    alt: "Vidhya Sagar from Mountain Routes",
    position: "center",
  },
];

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-transparent">
      <AmbientBackground
        variant="hero"
        className="[mask-image:linear-gradient(to_bottom,#000_34%,transparent_96%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_34%,transparent_96%)]"
      />

      <div
        aria-hidden
        className="absolute right-[-18rem] top-[-12rem] h-[46rem] w-[54rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(247,247,248,0.22),rgba(27,22,38,0.08)_48%,transparent_70%)] blur-2xl"
      />

      <div aria-hidden className="space-stars absolute inset-0 h-full w-full opacity-60" />

      <Container className="relative grid items-center gap-12 py-28 sm:py-32 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="relative z-10">
          <span
            aria-hidden
            className="pointer-events-none absolute left-[-10%] top-20 -z-10 h-72 w-[36rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(247,247,248,0.24),rgba(27,22,38,0.15)_44%,transparent_74%)] blur-3xl"
          />
          <span
            className="hud-cut-xs inline-flex animate-fade-up items-center gap-3 border border-line bg-[#171322]/70 px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent-glow shadow-[inset_0_1px_0_rgba(247,247,248,0.06)] backdrop-blur"
          >
            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span className="absolute h-2.5 w-2.5 animate-[ping_2.4s_ease-out_infinite] rounded-full bg-accent/35" />
              <span className="relative h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_rgba(247,247,248,0.85)]" />
            </span>
            Always-on inquiry engine
          </span>

          <h1
            className="mt-8 max-w-4xl animate-fade-up font-playfair text-[2.55rem] font-semibold leading-[1.02] text-ivory [animation-delay:120ms] sm:text-[3.8rem] lg:text-[4.8rem]"
          >
            <span className="block">The first reply</span>
            <span className="block text-[0.86em] italic text-accent-glow">should feel instant.</span>
          </h1>

          <p
            className="mt-7 max-w-xl animate-fade-up text-base leading-relaxed text-slate [animation-delay:220ms] sm:text-lg"
          >
            Avernek answers, qualifies, tracks, and routes every inquiry from your ads, forms, DMs,
            and calls before the lead goes cold.
          </p>

          <div
            className="mt-10 flex animate-fade-up flex-col gap-3 [animation-delay:320ms] sm:flex-row"
          >
            <LinkButton href="#contact">
              Book an Audit
              <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
                <path d="M4 10h12m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </LinkButton>
            <a
              href="#demo"
              className="hud-cut-xs border border-[#F7F7F8]/20 bg-transparent px-5 py-3 text-center text-sm font-medium text-[#F7F7F8] transition-colors hover:border-[#F7F7F8]/40 hover:bg-[#F7F7F8]/5"
            >
              Watch the flow
            </a>
          </div>

          <div
            className="mt-8 flex animate-fade-up items-center gap-3 [animation-delay:420ms]"
          >
            <span className="flex -space-x-2">
              {trustAvatars.map((a, i) => (
                <span
                  key={a.src}
                  className="h-9 w-9 shrink-0 overflow-hidden rounded-full border border-accent/70 bg-obsidian shadow-sm"
                  style={{ zIndex: trustAvatars.length - i }}
                >
                  <Image
                    src={a.src}
                    alt={a.alt}
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                    style={{ objectPosition: a.position }}
                  />
                </span>
              ))}
            </span>
            <span className="text-sm font-medium text-silver">Trusted by 12+ growth-focused businesses</span>
          </div>
        </div>

        <div
          className="holo-ring hud-cut hud-brackets relative min-h-[520px] animate-fade-up overflow-hidden border border-line bg-[#171322]/88 p-4 shadow-[0_40px_120px_-55px_rgba(247,247,248,0.42),inset_0_1px_0_rgba(247,247,248,0.10)] backdrop-blur [animation-delay:180ms]"
        >
          <span aria-hidden className="card-grid pointer-events-none absolute inset-0 opacity-70" />
          <div className="relative flex items-center justify-between border-b border-accent/10 px-2 pb-4">
            <div>
              <p className="hud-tag text-[10px] uppercase text-slate">Avernek command surface</p>
              <p className="mt-1 text-sm font-medium text-ivory">Inquiry routing live</p>
            </div>
            <span className="hud-cut-xs border border-[#F7F7F8]/30 bg-[#F7F7F8]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F7F7F8]">
              Online
            </span>
          </div>

          <div className="relative mt-5 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-3">
              {["Website form", "Instagram DM", "Facebook lead", "Missed call"].map((source, i) => (
                <div
                  key={source}
                  className={`hud-cut-sm border p-4 ${i === 1 ? "border-accent/50 bg-accent/[0.08]" : "border-accent/10 bg-accent/[0.025]"}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs uppercase tracking-[0.18em] text-slate">{source}</span>
                    <span className={`h-2 w-2 rounded-full ${i === 1 ? "bg-accent shadow-[0_0_14px_rgba(247,247,248,0.8)]" : "bg-slate/50"}`} />
                  </div>
                  <p className="mt-3 text-sm text-silver">{i === 1 ? "Weekend class pricing?" : "Captured and queued"}</p>
                </div>
              ))}
            </div>

            <div className="hud-cut-sm relative overflow-hidden border border-line bg-[#09080D]/80 p-5">
              <span aria-hidden className="scanlines pointer-events-none absolute inset-0" />
              <p className="text-xs uppercase tracking-[0.2em] text-slate">Lead pulse</p>
              <div className="mt-5 flex items-end gap-2">
                {[42, 72, 55, 88, 64, 96, 74].map((height, i) => (
                  <span
                    key={height + i}
                    className="block w-full bg-[linear-gradient(180deg,#171322,#09080D)] shadow-[0_0_24px_-8px_rgba(247,247,248,0.8)]"
                    style={{ height }}
                  />
                ))}
              </div>
              <div className="mt-7 grid grid-cols-2 gap-3">
                {[
                  ["00:18", "first reply"],
                  ["Hot", "intent score"],
                  ["CRM", "synced"],
                  ["Owner", "alert sent"],
                ].map(([value, label]) => (
                  <div key={label} className="border border-accent/10 bg-accent/[0.03] p-3">
                    <p className="text-xl font-semibold text-ivory">{value}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 border-l-2 border-accent pl-4">
                <p className="text-sm font-medium text-ivory">AI reply drafted</p>
                <p className="mt-1 text-xs leading-relaxed text-slate">
                  Asked for preferred timing, captured course interest, and queued a counsellor call.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
