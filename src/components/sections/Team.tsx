import Container from "../Container";
import SectionHeading from "../SectionHeading";
import ScrollReveal from "../ScrollReveal";
import { founders } from "@/lib/content";

/** First two letters of the first name, first letter capitalised (e.g. "Sw"). */
function initials(name: string) {
  const first = name.split(" ")[0] ?? "";
  return first.slice(0, 2).replace(/^./, (c) => c.toUpperCase());
}

/** LinkedIn link — renders only when a URL is provided. */
function LinkedIn({ url, name }: { url?: string; name: string }) {
  if (!url) return null;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} on LinkedIn`}
      className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-white/10 text-slate transition-colors duration-200 hover:border-accent/50 hover:text-accent-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
    >
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
        <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.4 8.65 22 10.5 22 14v7h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21H9V9Z" />
      </svg>
    </a>
  );
}

export default function Team() {
  const lead = founders.find((f) => f.featured) ?? founders[0];
  const rest = founders.filter((f) => f !== lead);

  return (
    <section className="bg-ink py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="The team"
          title="A small senior team. No hand-offs."
          description="Every founding client works directly with the people who build and run their system."
        />

        {/* Featured lead */}
        <ScrollReveal className="mt-14">
          <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-panel-light p-8 shadow-glow md:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-iris/15 blur-[90px]"
            />
            <div className="relative grid gap-6 md:grid-cols-[auto_1fr] md:items-center">
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-accent/15 font-display text-xl font-bold text-accent-glow">
                  {initials(lead.name)}
                </div>
                <div>
                  <span className="mb-1 inline-block rounded-full bg-accent/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent-glow">
                    Leads the business
                  </span>
                  <h3 className="font-display text-2xl font-bold text-ivory">{lead.name}</h3>
                  <div className="flex items-center gap-3">
                    <p className="text-sm font-medium text-accent">{lead.role}</p>
                    <LinkedIn url={lead.linkedin} name={lead.name} />
                  </div>
                </div>
              </div>

              <p className="max-w-xl text-sm leading-relaxed text-silver">{lead.focus}</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Supporting leads */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((person, i) => (
            <ScrollReveal
              key={person.name}
              delay={i * 0.1}
              className="rounded-2xl border border-white/10 bg-panel/50 p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] font-display text-base font-bold text-silver">
                  {initials(person.name)}
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold text-ivory">{person.name}</h3>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-medium text-accent">{person.role}</p>
                    <LinkedIn url={person.linkedin} name={person.name} />
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate">{person.focus}</p>
            </ScrollReveal>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-[58ch] text-center text-sm leading-relaxed text-slate">
          We are taking on a small number of founding clients this quarter. Each one works directly
          with the people above. Senior attention, no hand-offs.
        </p>
      </Container>
    </section>
  );
}
