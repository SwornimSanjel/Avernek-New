import Container from "../Container";

/**
 * Quiet credibility band. Recognisable platforms only — the tools businesses
 * already trust. Internal orchestration tooling is deliberately not shown.
 * Wordmarks are plain text (no hotlinked logo files), kept greyscale and small.
 */
const platforms = ["OpenAI", "Meta", "Google", "WhatsApp"];

export default function Technology() {
  return (
    <section className="border-y border-white/5 bg-obsidian py-12 md:py-14">
      <Container className="flex flex-col items-center gap-6">
        <p className="text-center text-xs font-medium uppercase tracking-[0.3em] text-slate/80">
          Built on technology you already trust
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:gap-x-14">
          {platforms.map((name) => (
            <span
              key={name}
              className="font-display text-lg font-semibold tracking-tight text-slate/60 transition-colors duration-200 hover:text-silver sm:text-xl"
            >
              {name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
