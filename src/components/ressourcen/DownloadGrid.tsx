import { ressourcenContent } from "@/content/ressourcen";
import { ScrollReveal } from "@/components/ScrollReveal";
import { DownloadCard } from "./DownloadCard";
import { ComingSoonCard } from "./ComingSoonCard";

const content = ressourcenContent.download;

export function DownloadGrid() {
  return (
    <section
      className="py-20 lg:py-28"
      aria-labelledby="download-grid-heading"
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
              id="download-grid-heading"
              className="mt-3 text-2xl font-semibold leading-[1.15] tracking-[-0.03em] text-foreground sm:text-3xl"
            >
              {content.überschrift}
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={160}>
            <p className="mt-4 text-base font-light leading-relaxed text-foreground/60">
              {content.einleitung}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {content.einträge.map((item, i) => (
            <ScrollReveal
              key={item.plattform}
              direction="premium"
              stagger={100}
              index={i}
              delay={80}
            >
              {item.verfügbar ? (
                <DownloadCard
                  index={i + 1}
                  label={item.plattform}
                  name={item.name}
                  description={item.beschreibung}
                  helper={item.hilfetext}
                  ctaLabel={item.feldText}
                  action={{
                    href: item.aktion.verlinkung,
                    ariaLabel: item.aktion.barriereBeschriftung,
                    downloadFilename: item.aktion.downloadDateiname,
                  }}
                />
              ) : (
                <ComingSoonCard
                  index={i + 1}
                  eyebrow={item.plattform}
                  name={item.name}
                  description={item.beschreibung}
                />
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
