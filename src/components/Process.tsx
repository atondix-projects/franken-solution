import { homepageContent } from "@/content/homepage";
import type { ProcessSectionContent } from "@/content/homepage";
import { ScrollReveal } from "./ScrollReveal";
import { Icon } from "./ui/Icon";

const content = homepageContent.process;

type Step = ProcessSectionContent["steps"][number];

function ProcessConnector({ connectorDelay }: { index: number; connectorDelay: number }) {
  return (
    <div
      className="connector-grow-y mt-3 flex-1 w-px"
      aria-hidden="true"
      style={{
        ["--connector-delay" as string]: `${connectorDelay}ms`,
        minHeight: "3rem",
        background:
          "linear-gradient(to bottom, rgba(227,6,19,0.45) 0%, rgba(227,6,19,0.12) 75%, transparent 100%)",
      }}
    />
  );
}

function ProcessStep({
  step,
  index,
  isLast,
  connectorDelay,
}: {
  step: Step;
  index: number;
  isLast: boolean;
  connectorDelay: number;
}) {
  const tiltDir = index % 2 === 0 ? 0.5 : -0.5;
  return (
    <div className="group flex gap-6 pb-12">
      {/* Left column: badge + icon + connecting line */}
      <div className="flex w-14 shrink-0 flex-col items-center" aria-hidden="true">
        <div className="relative mt-1">
          {/* Step number badge */}
          <span className="absolute -top-2.5 -left-2.5 z-10 flex size-[1.25rem] items-center justify-center rounded-full bg-accent font-mono text-[0.58rem] font-bold leading-none text-white ring-2 ring-background">
            {index + 1}
          </span>
          <div className="icon-chip-glow icon-pop-in flex size-12 shrink-0 items-center justify-center rounded-xl border border-accent/25 bg-accent/8 text-accent">
            <Icon name={step.iconKey} className="size-5" />
          </div>
        </div>

        {/* Animated SVG gradient connector */}
        {!isLast && (
          <ProcessConnector index={index} connectorDelay={connectorDelay} />
        )}
      </div>

      {/* Right column: step card on subtle perspective rail */}
      <div className="flex-1 pt-5" style={{ perspective: "800px" }}>
        <div
          className="premium-card rounded-xl border border-foreground/10 bg-background px-6 py-5 transition-[transform,border-color] duration-300 hover:border-foreground/18"
          style={{ transform: `rotateY(${tiltDir}deg)` }}
        >
          <h3 className="text-[1rem] font-semibold tracking-tight text-foreground">
            {step.title}
          </h3>
          <p className="mt-2 text-sm font-light leading-relaxed text-foreground-muted">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Process() {
  return (
    <section className="cv-auto-section bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
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

        <ol
          className="relative mt-14 mx-auto max-w-3xl flex flex-col gap-0"
          aria-label="Prozessschritte"
        >
          {content.steps.map((step, i) => {
            const totalDelay = 80 + 120 * i;
            return (
              <ScrollReveal
                key={step.title}
                as="li"
                direction="premium"
                stagger={120}
                index={i}
                delay={80}
              >
                <ProcessStep
                  step={step}
                  index={i}
                  isLast={i === content.steps.length - 1}
                  connectorDelay={totalDelay + 300}
                />
              </ScrollReveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
