import { leistungenContent } from "@/content/leistungen";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FeaturedPillarCard } from "./FeaturedPillarCard";
import { CompactPillarCard } from "./CompactPillarCard";

const content = leistungenContent.pillars;
const [p0, p1, p2, p3, p4, p5] = content.groups;

export function PillarDeepCards() {
  return (
    <section
      id="leistungsgruppen"
      className="relative overflow-hidden bg-background py-20 lg:py-28"
    >
<div
        className="section-glow-blob pointer-events-none absolute -right-32 top-32 h-72 w-72 blur-[100px]"
        aria-hidden="true"
        style={{ background: "rgba(227,6,19,0.03)", animationDuration: "24s" }}
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

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Featured: Identität (spans full width) */}
          <ScrollReveal direction="up" delay={80} className="md:col-span-2">
            <FeaturedPillarCard group={p0} />
          </ScrollReveal>

          {/* Compact row: E-Mail + Backup */}
          <ScrollReveal direction="up" stagger={80} index={0} delay={160}>
            <CompactPillarCard group={p1} />
          </ScrollReveal>
          <ScrollReveal direction="up" stagger={80} index={1} delay={160}>
            <CompactPillarCard group={p2} />
          </ScrollReveal>

          {/* Featured: Endpoint (spans full width) */}
          <ScrollReveal direction="up" delay={240} className="md:col-span-2">
            <FeaturedPillarCard group={p3} />
          </ScrollReveal>

          {/* Compact row: Awareness + Netzwerk */}
          <ScrollReveal direction="up" stagger={80} index={0} delay={320}>
            <CompactPillarCard group={p4} />
          </ScrollReveal>
          <ScrollReveal direction="up" stagger={80} index={1} delay={320}>
            <CompactPillarCard group={p5} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
