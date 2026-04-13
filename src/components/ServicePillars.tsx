import { homepageContent } from "@/content/homepage";
import type { ServicePillarsSectionContent } from "@/content/homepage";
import { Button } from "./ui/Button";
import { ScrollReveal } from "./ScrollReveal";

const content = homepageContent.services;

// One icon per service pillar — topic-matched, Lucide/Heroicons style
const CARD_ICONS = [
  // Identity & Access Control — padlock
  <svg key="0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    <circle cx="12" cy="16" r="1.2" fill="currentColor" stroke="none" />
  </svg>,
  // Email Security & Archiving — envelope with shield badge
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
    <path d="M18 14l2 2 4-4" strokeWidth="2" />
  </svg>,
  // Backup & Recovery — database with circular arrow
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <polyline points="15,17 18,20 21,17" />
    <line x1="18" y1="14" x2="18" y2="20" />
  </svg>,
  // Endpoint Protection & Monitoring — monitor with pulse
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
    <polyline points="6,11 9,8 12,11 15,7 18,11" />
  </svg>,
  // Security Awareness — people + lightbulb
  <svg key="4" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>,
] as const;

type Card = ServicePillarsSectionContent["cards"][number];

function ServiceCard({ card, index }: { card: Card; index: number }) {
  return (
    <div className="group premium-card relative flex h-full flex-col gap-4 rounded-xl bg-background p-6 shadow-sm ring-1 ring-foreground/6">
      {/* Left accent border — reveals on hover, grows from top */}
      <div
        className="accent-border-left absolute inset-y-0 left-0 w-[3px] rounded-l-xl bg-accent"
        aria-hidden="true"
      />

      {/* Icon chip */}
      <span className="icon-chip-glow flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/8 text-accent">
        {CARD_ICONS[index]}
      </span>

      <h3 className="text-[1rem] font-semibold leading-snug text-foreground">
        {card.title}
      </h3>
      <p className="text-sm font-light leading-relaxed text-foreground-muted">
        {card.description}
      </p>
    </div>
  );
}

export function ServicePillars() {
  return (
    <section className="relative overflow-hidden bg-background-muted py-20 lg:py-28">
      {/* Subtle dot-grid texture overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.022) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <ScrollReveal direction="up" className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {content.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-[1.15] tracking-[-0.04em] text-foreground sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-base font-light leading-relaxed text-foreground-muted">
            {content.description}
          </p>
        </ScrollReveal>

        {/*
          Cards grid — 5 cards:
          mobile:  1 column
          sm:      2 columns
          lg:      6-col grid, each card spans 2 cols.
                   Cards 4+5 are offset to center them in the last row:
                   row 1 → [card1][card2][card3]
                   row 2 →   [card4][card5]
        */}
        <ul
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6"
          role="list"
        >
          {content.cards.map((card, i) => {
            let lgColClass = "lg:col-span-2";
            if (i === 3) lgColClass = "lg:col-span-2 lg:col-start-2";
            if (i === 4) lgColClass = "lg:col-span-2 lg:col-start-4";

            return (
              <ScrollReveal
                key={card.title}
                as="li"
                direction="up"
                stagger={100}
                index={i}
                delay={100}
                className={lgColClass}
              >
                <ServiceCard card={card} index={i} />
              </ScrollReveal>
            );
          })}
        </ul>

        {/* Supporting statement + CTA */}
        <ScrollReveal
          direction="up"
          delay={300}
          className="mt-14 flex flex-col items-center gap-6 text-center"
        >
          <p className="max-w-xl text-sm font-light leading-relaxed text-foreground-muted">
            {content.supportingStatement}
          </p>
          <Button renderAs="link" href={content.cta.href} variant="primary">
            {content.cta.label}
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
