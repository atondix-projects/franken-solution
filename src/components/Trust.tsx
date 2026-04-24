import { homepageContent } from "@/content/homepage";
import type { TrustSectionContent } from "@/content/homepage";
import { ScrollReveal } from "./ScrollReveal";
import { Icon } from "./ui/Icon";

const content = homepageContent.trust;

type TrustItem = TrustSectionContent["items"][number];

function TrustConnector({ index }: { index: number }) {
  const gradId = `trust-grad-${index}`;
  return (
    <svg
      className="connector-grow-y mt-2 flex-1"
      aria-hidden="true"
      viewBox="0 0 8 100"
      preserveAspectRatio="none"
      fill="none"
      style={{
        ["--connector-delay" as string]: `${80 + index * 120}ms`,
        minHeight: "3rem",
        width: "2px",
      }}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(227,6,19,0.25)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.12)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
        </linearGradient>
      </defs>
      {/* Sinuous bezier path */}
      <path
        d="M 4 0 C 7 20, 1 40, 4 60 S 7 80, 4 100"
        stroke={`url(#${gradId})`}
        strokeWidth="1.5"
        className="dash-flow-path"
      />
      {/* Pulsing node at midpoint */}
      <circle cx="4" cy="50" r="2.5" fill="rgba(227,6,19,0.18)" />
    </svg>
  );
}

function TrustItemRow({ item, index }: { item: TrustItem; index: number }) {
  return (
    <div className="group flex gap-5">
      {/* Left: icon + sinuous connector line */}
      <div className="flex flex-col items-center gap-0">
        <span
          className="icon-chip-glow flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/8 text-accent"
          style={{ transitionDelay: `${index * 120}ms` }}
        >
          <Icon name={item.iconKey} className="size-5" />
        </span>
        {index < content.items.length - 1 && (
          <TrustConnector index={index} />
        )}
      </div>

      {/* Right: text */}
      <div className={index < content.items.length - 1 ? "pb-8" : "pb-0"}>
        <h3 className="text-[1rem] font-semibold leading-snug tracking-[-0.02em] text-white/88">
          {item.title}
        </h3>
        <p className="mt-1.5 text-sm font-light leading-relaxed text-white/55">
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
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
                {content.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-[1.15] tracking-[-0.04em] text-white/88 sm:text-4xl lg:text-[2.1rem] xl:text-4xl">
                {content.title}
              </h2>
              <p className="mt-4 text-base font-light leading-relaxed text-white/55">
                {content.description}
              </p>

            </div>
          </ScrollReveal>

          {/* ── Right column: trust items ── */}
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
