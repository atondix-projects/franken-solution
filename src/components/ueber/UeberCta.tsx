import { ueberFrankenSolutionContent } from "@/content/ueber-franken-solution";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Icon } from "@/components/ui/Icon";

const content = ueberFrankenSolutionContent.nächsterSchritt;

export function UeberCta() {
  return (
    <section
      className="grain-overlay relative bg-background py-24 lg:py-36 border-t border-foreground/6"
      aria-labelledby="ueber-cta-heading"
    >
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <ScrollReveal direction="up" delay={0}>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {content.vorzeile}
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={120}>
          <h2
            id="ueber-cta-heading"
            className="mt-4 text-3xl font-semibold leading-[1.1] tracking-[-0.04em] text-foreground sm:text-4xl"
          >
            {content.überschrift}
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={240}>
          <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-foreground/65">
            {content.beschreibung}
          </p>
        </ScrollReveal>

        <ScrollReveal
          direction="up"
          delay={360}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-4"
        >
          <Button
            renderAs="link"
            href={content.primärerAufruf.verlinkung}
            variant="primary"
          >
            <span className="flex items-center gap-2">
              {content.primärerAufruf.beschriftung}
              <Icon name="arrowRight" className="size-4 shrink-0" />
            </span>
          </Button>
          <Button
            renderAs="link"
            href={content.sekundärerAufruf.verlinkung}
            variant="secondary"
          >
            {content.sekundärerAufruf.beschriftung}
          </Button>
        </ScrollReveal>

        <ScrollReveal direction="fade" delay={560}>
          <p className="mt-8 flex items-center justify-center gap-2 text-xs font-light text-foreground/65">
            <Icon name="shieldCheck" className="size-3" />
            {content.hinweis}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
