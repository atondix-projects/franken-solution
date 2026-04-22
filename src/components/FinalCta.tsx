"use client";

import { homepageContent } from "@/content/homepage";
import { Button } from "./ui/Button";
import { ScrollReveal } from "./ScrollReveal";
import { useMagnetic } from "@/hooks/useMagnetic";
import { Icon } from "./ui/Icon";

const content = homepageContent.finalCta;

const TITLE_PHRASES = content.title.split(". ").map((p) =>
  p.endsWith(".") ? p : p + "."
);

export function FinalCta() {
  const { ref: magneticRef } = useMagnetic<HTMLDivElement>({ strength: 8, radius: 100 });

  return (
    <section
      className="grain-overlay relative overflow-hidden bg-background-muted py-24 lg:py-36"
      aria-labelledby="final-cta-heading"
    >
      {/* Subtle dot-grid texture */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(5,5,5,0.05) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Accent glow — bottom-left corner */}
      <div
        className="section-glow-blob pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 blur-[96px]"
        aria-hidden="true"
        style={{
          background: "rgba(227,6,19,0.18)",
          animationDuration: "18s",
        }}
      />

      {/* Accent glow — top-right corner */}
      <div
        className="section-glow-blob pointer-events-none absolute -right-20 -top-20 h-64 w-64 blur-[80px]"
        aria-hidden="true"
        style={{
          background: "rgba(227,6,19,0.08)",
          animationDuration: "24s",
          animationDelay: "-8s",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Eyebrow */}
        <ScrollReveal direction="up" delay={0}>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {content.eyebrow}
          </p>
        </ScrollReveal>

        {/* Heading — three phrases staggered */}
        <h2
          id="final-cta-heading"
          className="mt-4 text-3xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-4xl lg:text-[2.75rem]"
        >
          {TITLE_PHRASES.map((phrase, i) => (
            <ScrollReveal
              key={phrase}
              as="span"
              direction="up"
              stagger={100}
              index={i}
              delay={80}
              className={
                i === 0
                  ? "text-accent"
                  : i === 1
                    ? "text-foreground/45"
                    : "text-foreground/75"
              }
            >
              {phrase}
              {i < TITLE_PHRASES.length - 1 ? " " : ""}
            </ScrollReveal>
          ))}
        </h2>

        {/* Description */}
        <ScrollReveal direction="up" delay={280}>
          <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-foreground/65">
            {content.description}
          </p>
        </ScrollReveal>

        {/* CTA group */}
        <ScrollReveal
          direction="up"
          delay={380}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-4"
        >
          <div
            ref={magneticRef}
            className="magnetic-target rounded-md"
          >
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

        {/* Reassurance line */}
        <ScrollReveal direction="fade" delay={600}>
          <p className="mt-8 flex items-center justify-center gap-2 text-xs font-light text-foreground/50">
            <Icon name="shieldCheck" className="size-3" />
            Kein Verkaufsdruck. Kein Aktionismus. Nur ein sachliches Erstgespräch.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
