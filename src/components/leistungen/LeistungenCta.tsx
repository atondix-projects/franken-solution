"use client";

import { leistungenContent } from "@/content/leistungen";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useMagnetic } from "@/hooks/useMagnetic";
import { Icon } from "@/components/ui/Icon";

const content = leistungenContent.cta;

export function LeistungenCta() {
  const { ref: magneticRef } = useMagnetic<HTMLDivElement>({ strength: 8, radius: 100 });

  return (
    <section
      id="naechster-schritt"
      className="relative overflow-hidden bg-foreground py-24 lg:py-36"
      aria-labelledby="leistungen-cta-heading"
    >
      <div className="aurora-band" aria-hidden="true" />

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.045) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div
        className="section-glow-blob pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 blur-[96px]"
        aria-hidden="true"
        style={{ background: "rgba(227,6,19,0.18)", animationDuration: "18s" }}
      />

      <div
        className="section-glow-blob pointer-events-none absolute -right-20 -top-20 h-64 w-64 blur-[80px]"
        aria-hidden="true"
        style={{
          background: "rgba(227,6,19,0.08)",
          animationDuration: "24s",
          animationDelay: "-8s",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <ScrollReveal direction="up" delay={0}>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {content.eyebrow}
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={80}>
          <h2
            id="leistungen-cta-heading"
            className="gradient-text-sweep-active mt-4 text-3xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-4xl lg:text-[2.75rem]"
          >
            {content.headline}
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={200}>
          <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-white/55">
            {content.description}
          </p>
        </ScrollReveal>

        <ScrollReveal
          direction="up"
          delay={320}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <div ref={magneticRef} className="cta-glow-ring magnetic-target rounded-md">
            <Button renderAs="link" href={content.primaryCta.href} variant="primary">
              <span className="flex items-center gap-2">
                {content.primaryCta.label}
                <Icon name="arrowRight" className="size-4 shrink-0" />
              </span>
            </Button>
          </div>
          <Button renderAs="link" href={content.secondaryCta.href} variant="secondary">
            {content.secondaryCta.label}
          </Button>
        </ScrollReveal>

        <ScrollReveal direction="fade" delay={520}>
          <p className="mt-8 text-xs font-light text-white/30">
            {content.note}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
