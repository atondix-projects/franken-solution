import { homepageContent } from "@/content/homepage";
import type { ProcessSectionContent } from "@/content/homepage";
import { ScrollReveal } from "./ScrollReveal";

const content = homepageContent.process;

type Step = ProcessSectionContent["steps"][number];

const STEP_ICONS = [
  // Bestandsaufnahme — magnifying glass / search
  <svg key="0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>,
  // Massnahmenplan — list with checkmark
  <svg key="1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>,
  // Umsetzung — wrench / settings
  <svg key="2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>,
  // Laufende Betreuung — shield with refresh
  <svg key="3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>,
] as const;

function StepNumber({ n }: { n: number }) {
  return (
    <span
      className="font-mono text-[0.65rem] font-semibold leading-none tracking-[0.12em] text-accent"
      aria-hidden="true"
    >
      {String(n).padStart(2, "0")}
    </span>
  );
}

function OutcomeCallout({ text }: { text: string }) {
  return (
    <div className="mt-4 flex items-start gap-2.5 rounded-lg border border-foreground/6 bg-background-muted px-4 py-3">
      {/* checkmark */}
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mt-0.5 shrink-0 text-accent"
        aria-hidden="true"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <p className="text-xs font-medium leading-snug text-foreground-muted">{text}</p>
    </div>
  );
}

// Desktop connector arrow between steps — animates in when parent reveals
function StepConnector({ delay }: { delay: number }) {
  return (
    <div
      className="hidden lg:flex items-center justify-center pt-[3.25rem] shrink-0"
      aria-hidden="true"
    >
      <svg
        width="32"
        height="16"
        viewBox="0 0 32 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="connector-grow-x text-foreground/15"
        style={{ ["--connector-delay" as string]: `${delay}ms` }}
      >
        <line x1="0" y1="8" x2="24" y2="8" />
        <polyline points="18,3 24,8 18,13" />
      </svg>
    </div>
  );
}

function ProcessStep({ step, index }: { step: Step; index: number }) {
  return (
    <div className="flex flex-col gap-0">
      {/* Step number + icon row */}
      <div className="flex items-center gap-3">
        <span className="icon-chip-glow flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/8 text-accent">
          {STEP_ICONS[index]}
        </span>
        <StepNumber n={index + 1} />
      </div>

      {/* Content */}
      <div className="mt-4">
        <h3 className="text-[1rem] font-semibold leading-snug tracking-[-0.02em] text-foreground">
          {step.title}
        </h3>
        <p className="mt-2 text-sm font-light leading-relaxed text-foreground-muted">
          {step.description}
        </p>
        <OutcomeCallout text={step.outcome} />
      </div>
    </div>
  );
}

export function Process() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
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

        {/* Steps */}
        <div className="mt-14">
          {/*
            Mobile:  vertical stack, each step separated by a dotted connector line
            Desktop: horizontal row of 4 steps with arrow connectors between them
          */}

          {/* Desktop layout: horizontal row */}
          <div className="hidden lg:flex lg:items-start lg:gap-0">
            {content.steps.map((step, i) => (
              <ScrollReveal
                key={step.title}
                direction="up"
                stagger={140}
                index={i}
                delay={100}
                className="flex items-start gap-0 flex-1"
              >
                <div className="group premium-card flex-1 rounded-xl border border-foreground/6 bg-background p-6 shadow-sm">
                  <ProcessStep step={step} index={i} />
                </div>
                {i < content.steps.length - 1 && (
                  <StepConnector delay={160 + i * 140} />
                )}
              </ScrollReveal>
            ))}
          </div>

          {/* Mobile layout: vertical list with dotted connectors */}
          <ol className="relative flex flex-col gap-0 lg:hidden" aria-label="Prozessschritte">
            {content.steps.map((step, i) => (
              <ScrollReveal
                key={step.title}
                as="li"
                direction="left"
                stagger={120}
                index={i}
                delay={80}
                className="relative flex gap-5"
              >
                {/* Vertical connector track */}
                <div className="flex flex-col items-center" aria-hidden="true">
                  {/* Track dot at top */}
                  <div className="mt-[1.125rem] size-2.5 shrink-0 rounded-full border-2 border-accent bg-background" />
                  {/* Dotted line — hidden on last item */}
                  {i < content.steps.length - 1 && (
                    <div className="mt-1 w-px flex-1 border-l-2 border-dashed border-foreground/12" />
                  )}
                </div>

                {/* Step content */}
                <div className="flex-1 pb-10">
                  <div className="group rounded-xl border border-foreground/6 bg-background p-5 shadow-sm">
                    <ProcessStep step={step} index={i} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
