import { ressourcenContent } from "@/content/ressourcen";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ComingSoonCard } from "./ComingSoonCard";

const content = ressourcenContent.weitereHilfsmittel;

export function WeitereHilfsmittel() {
  return (
    <section
      className="py-20 lg:py-28"
      aria-labelledby="weitere-hilfsmittel-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <ScrollReveal direction="up" delay={0}>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
              {content.vorzeile}
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={80}>
            <h2
              id="weitere-hilfsmittel-heading"
              className="mt-3 text-2xl font-semibold leading-[1.15] tracking-[-0.03em] text-foreground sm:text-3xl"
            >
              {content.überschrift}
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {content.karten.map((karte, i) => (
            <ScrollReveal
              key={karte.überschrift}
              direction="premium"
              stagger={100}
              index={i}
              delay={80}
            >
              <ComingSoonCard
                name={karte.überschrift}
                description={karte.beschreibung}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
