import { homepageContent } from "@/content/homepage";
import { Button } from "./ui/Button";
import { ScrollReveal } from "./ScrollReveal";

const content = homepageContent.finalCta;

// Title split into three punchy phrases for visual treatment
// "Sichere hybride IT. Klar priorisiert. Langfristig betreut."
const TITLE_PHRASES = content.title.split(". ").map((p) =>
  p.endsWith(".") ? p : p + "."
);

function ArrowRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function FinalCta() {
  return (
    <section
      className="relative overflow-hidden bg-foreground py-24 lg:py-36"
      aria-labelledby="final-cta-heading"
    >
      {/* Subtle dot-grid texture */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.045) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Accent glow — bottom-left corner (animated drift) */}
      <div
        className="section-glow-blob pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 blur-[96px]"
        aria-hidden="true"
        style={{
          background: "rgba(227,6,19,0.18)",
          animationDuration: "18s",
        }}
      />

      {/* Accent glow — top-right corner, softer (animated drift, offset phase) */}
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
        {/* Eyebrow */}
        <ScrollReveal direction="up" delay={0}>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {content.eyebrow}
          </p>
        </ScrollReveal>

        {/* Heading — three phrases staggered, with opacity treatment */}
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
                i === 1
                  ? "text-white/50"
                  : i === 2
                    ? "text-white/75"
                    : "text-white"
              }
            >
              {phrase}
              {i < TITLE_PHRASES.length - 1 ? " " : ""}
            </ScrollReveal>
          ))}
        </h2>

        {/* Description */}
        <ScrollReveal direction="up" delay={280}>
          <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-white/55">
            {content.description}
          </p>
        </ScrollReveal>

        {/* CTA group */}
        <ScrollReveal
          direction="up"
          delay={380}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-4"
        >
          <div className="cta-glow-ring rounded-md">
            <Button renderAs="link" href={content.primaryCta.href} variant="primary">
              <span className="flex items-center gap-2">
                {content.primaryCta.label}
                <ArrowRight />
              </span>
            </Button>
          </div>
          <Button renderAs="link" href={content.secondaryCta.href} variant="secondary">
            {content.secondaryCta.label}
          </Button>
        </ScrollReveal>

        {/* Reassurance line */}
        <ScrollReveal direction="fade" delay={600}>
          <p className="mt-8 flex items-center justify-center gap-2 text-xs font-light text-white/30">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Kein Verkaufsdruck. Kein Aktionismus. Nur ein sachliches Erstgespraech.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
