import Container from "../Container";
import IntegrationNetwork from "../IntegrationNetwork";

/**
 * Quiet credibility band showing the tools connected through Avernek. Not
 * currently mounted in the page; kept in sync with the live band in Proof.tsx.
 */
export default function Technology() {
  return (
    <section className="border-y border-accent/5 bg-obsidian py-12 md:py-14">
      <Container>
        <p className="mb-7 text-center text-xs font-medium uppercase tracking-[0.3em] text-slate/80">
          Built on technology you already trust
        </p>
        <IntegrationNetwork />
      </Container>
    </section>
  );
}
