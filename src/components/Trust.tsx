import { homepageContent } from "@/content/homepage";
import type { TrustSectionContent } from "@/content/homepage";
import { ScrollReveal } from "./ScrollReveal";
import { AnimatedShieldMark } from "./AnimatedShieldMark";

const content = homepageContent.trust;

type TrustItem = TrustSectionContent["items"][number];

// One topic-matched icon per trust item
const ITEM_ICONS = [
  // Feste Ansprechpartner — person with headset
  <svg key="0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
    <path d="M22 15.5c0 1.4-.6 2.6-1.5 3.5" strokeWidth="1.75" />
    <path d="M22 12v3.5" strokeWidth="1.75" />
  </svg>,
  // Klare Standards und Dokumentation — clipboard check
  <svg key="1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
    <rect x="9" y="3" width="6" height="4" rx="2" ry="2" />
    <path d="m9 12 2 2 4-4" />
  </svg>,
  // Herstellerneutral — scales / balance
  <svg key="2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="12" y1="3" x2="12" y2="21" />
    <path d="M5 7l7-4 7 4" />
    <path d="M3 12l4 5H3l4-5z" />
    <path d="M21 12l-4 5h4l-4-5z" />
    <line x1="4" y1="19" x2="20" y2="19" />
  </svg>,
  // Franken lokal + remote — map pin + wifi
  <svg key="3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>,
] as const;

function TrustItemRow({ item, index }: { item: TrustItem; index: number }) {
  return (
    <div className="group flex gap-5">
      {/* Left: icon + vertical line */}
      <div className="flex flex-col items-center gap-0">
        <span className="icon-chip-glow flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/8 text-accent">
          {ITEM_ICONS[index]}
        </span>
        {/* connector line — hidden on last item, grows downward on reveal */}
        {index < content.items.length - 1 && (
          <div
            className="connector-grow-y mt-2 w-px flex-1 bg-foreground/8"
            style={{ ["--connector-delay" as string]: `${80 + index * 120}ms` }}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Right: text */}
      <div className={index < content.items.length - 1 ? "pb-8" : "pb-0"}>
        <h3 className="text-[1rem] font-semibold leading-snug tracking-[-0.02em] text-foreground">
          {item.title}
        </h3>
        <p className="mt-1.5 text-sm font-light leading-relaxed text-foreground-muted">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export function Trust() {
  return (
    <section className="bg-background-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20 xl:gap-28">

          {/* ── Left column: section intro + decorative shield ── */}
          <ScrollReveal direction="left" className="lg:w-[42%] lg:shrink-0">
            {/* Sticky on scroll for wide viewports so header stays in view while items scroll */}
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
                {content.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-[1.15] tracking-[-0.04em] text-foreground sm:text-4xl lg:text-[2.1rem] xl:text-4xl">
                {content.title}
              </h2>
              <p className="mt-4 text-base font-light leading-relaxed text-foreground-muted">
                {content.description}
              </p>

              {/* Shield decoration — animated draw */}
              <div className="mt-10 hidden lg:flex items-center gap-5">
                <AnimatedShieldMark />
                <p className="max-w-[18ch] text-xs font-medium leading-snug text-foreground/30 uppercase tracking-[0.12em]">
                  Strukturiert.{"\n"}Nachvollziehbar.{"\n"}Persoenlich.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* ── Right column: trust items as connected rows ── */}
          <div className="flex flex-col lg:flex-1">
            {/* Thin top accent rule */}
            <div
              className="mb-8 h-px w-12 bg-accent"
              aria-hidden="true"
            />

            <div role="list" aria-label="Vertrauenssignale">
              {content.items.map((item, i) => (
                <ScrollReveal
                  key={item.title}
                  direction="right"
                  stagger={120}
                  index={i}
                  delay={80}
                  className="group"
                >
                  <div role="listitem">
                    <TrustItemRow item={item} index={i} />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
