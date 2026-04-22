"use client";

import { homepageContent } from "@/content/homepage";
import { useCountUp } from "@/hooks/useCountUp";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "./ui/Button";
import { ScrollReveal } from "./ScrollReveal";
import { Icon } from "./ui/Icon";

const content = homepageContent.about;

const differentiators = [
  "Klare Standards und nachvollziehbare Dokumentation",
  "Feste Ansprechpartner, die Ihre Umgebung kennen",
  "Herstellerneutrale Empfehlungen",
] as const;

interface CounterCardProps {
  value: string;
  label: string;
  index: number;
}

function parseCounterValue(value: string): { num: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { num: 0, suffix: value };
  return { num: parseInt(match[1], 10), suffix: match[2] };
}

function CounterCard({ value, label }: CounterCardProps) {
  const { num, suffix } = parseCounterValue(value);
  const { ref, isVisible } = useScrollReveal({ threshold: 0.5 });
  const animated = useCountUp(num, { durationMs: 1400, enabled: isVisible });

  return (
    <div
      ref={ref as (node: HTMLDivElement | null) => void}
      className="counter-card-breath card-depth premium-card glass-card flex flex-col items-center rounded-xl px-3 py-4 text-center"
      style={{ boxShadow: "var(--elev-1)" }}
    >
      <span
        className="font-mono text-xl font-bold leading-none text-accent sm:text-2xl"
        aria-label={value}
        aria-live="off"
      >
        {animated}{suffix}
      </span>
      <span className={`count-up-underline ${isVisible ? "is-visible" : ""}`} aria-hidden="true" />
      <span className="mt-1.5 text-xs font-medium leading-tight text-foreground-muted">
        {label}
      </span>
    </div>
  );
}

export function About() {
  return (
    <section className="overflow-hidden py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Left: diorama + counters */}
          <ScrollReveal
            direction="left"
            className="relative w-full lg:w-[52%] lg:shrink-0"
          >
            {/* Ambient accent glow behind image */}
            <div
              className="section-glow-blob pointer-events-none -right-16 -top-12 h-48 w-48 blur-[80px]"
              aria-hidden="true"
              style={{
                background: "rgba(227,6,19,0.07)",
                animationDuration: "22s",
              }}
            />

            {/* Image placeholder */}
            <div
              className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-background-muted grain-overlay flex flex-col items-center justify-center gap-3"
              style={{ boxShadow: "var(--elev-1)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-16 text-foreground-muted/40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
                aria-label="Bild folgt"
                role="img"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="8.5" cy="8.5" r="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="21 15 16 10 5 21" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-mono text-xs uppercase tracking-widest text-foreground-muted/40">
                Bild folgt
              </span>
            </div>

            {/* Counters — overlapping bottom edge of diorama */}
            <div className="absolute -bottom-6 left-4 right-4 grid grid-cols-3 gap-3 sm:left-6 sm:right-6">
              {content.counters.map((counter, i) => (
                <CounterCard
                  key={counter.label}
                  value={counter.value}
                  label={counter.label}
                  index={i}
                />
              ))}
            </div>
          </ScrollReveal>

          {/* Right: text content */}
          <ScrollReveal direction="right" delay={120} className="pt-10 lg:pt-0">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
              {content.eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-[1.15] tracking-[-0.04em] text-foreground sm:text-4xl xl:text-[2.75rem]">
              {content.title}
            </h2>

            <p className="mt-5 text-base font-light leading-relaxed text-foreground-muted">
              {content.description}
            </p>

            {/* Differentiator checklist */}
            <ul className="mt-7 space-y-3" role="list">
              {differentiators.map((item) => (
                <li key={item} className="group flex items-start gap-3">
                  <span className="icon-chip-glow mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon name="check" className="size-3" />
                  </span>
                  <span className="text-sm font-medium leading-snug text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button renderAs="link" href={content.cta.href} variant="secondary">
                {content.cta.label}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
