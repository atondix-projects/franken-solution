import { leistungenContent } from "@/content/leistungen";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ProjectTile } from "@/components/leistungen/ProjectTile";

const content = leistungenContent.projects;

export function ProjectBridgeStrip() {
  return (
    <section
      id="projektleistungen"
      className="relative overflow-hidden bg-background py-20 lg:py-28"
    >
      {/* Ambient glow — matches PillarDeepCards section treatment */}
      <div
        className="section-glow-blob pointer-events-none absolute -right-32 top-24 h-72 w-72 rounded-full bg-accent/30 blur-[100px]"
        aria-hidden="true"
      />
<div className="relative mx-auto max-w-7xl px-6">
        <ScrollReveal direction="up" className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {content.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-[1.15] tracking-[-0.04em] text-foreground sm:text-4xl">
            {content.headline}
          </h2>
          <p className="mt-4 text-base font-light leading-relaxed text-foreground-muted">
            {content.description}
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100} className="relative mt-12">
          {/* Accent rail */}
          <div
            className="accent-rail-full absolute left-0 top-0 h-full w-0.5 bg-accent/30"
            aria-hidden="true"
          />

          <div className="grid items-stretch gap-6 pl-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.tiles.map((tile, i) => (
              <ScrollReveal
                key={tile.index}
                direction="up"
                stagger={70}
                index={i}
                delay={160}
                className="h-full"
              >
                <ProjectTile index={tile.index} title={tile.title} body={tile.body} />
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
