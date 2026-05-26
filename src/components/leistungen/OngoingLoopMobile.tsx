import { ScrollReveal } from "@/components/ScrollReveal";

type OngoingCycleStep = {
  readonly title: string;
  readonly body: string;
};

type OngoingLoopMobileProps = {
  steps: readonly OngoingCycleStep[];
  centerLabel: string;
  diagramTitle: string;
};

function MobileStepConnector({ connectorDelay }: { connectorDelay: number }) {
  return (
    <div
      className="ongoing-loop-mobile-connector connector-grow-y mx-auto w-px flex-none"
      aria-hidden="true"
      style={{
        ["--connector-delay" as string]: `${connectorDelay}ms`,
        minHeight: "1.75rem",
        background:
          "linear-gradient(to bottom, color-mix(in srgb, var(--accent) 45%, transparent) 0%, rgba(227, 6, 19, 0.12) 75%, transparent 100%)",
      }}
    />
  );
}

export function OngoingLoopMobile({
  steps,
  centerLabel,
  diagramTitle,
}: OngoingLoopMobileProps) {
  return (
    <div className="mx-auto w-full max-w-sm">
      <ScrollReveal direction="scale" threshold={0.15}>
        <div className="flex justify-center pb-6">
          <div
            className="ongoing-loop-mobile-hub relative flex size-[4.5rem] items-center justify-center rounded-full border border-accent/40 bg-[rgba(22,23,29,0.95)] font-mono text-sm font-semibold text-white/92 shadow-[0_0_0_1px_rgba(255,255,255,0.12)]"
            aria-hidden="true"
          >
            <span
              className="pointer-events-none absolute inset-0 rounded-full border border-accent/18"
              aria-hidden="true"
            />
            {centerLabel}
          </div>
        </div>
      </ScrollReveal>

      <ol
        className="flex flex-col items-stretch"
        aria-label={diagramTitle}
      >
        {steps.map((step, i) => {
          const connectorDelay = 80 + 70 * i;
          const isLast = i === steps.length - 1;

          return (
            <li key={step.title} className="flex flex-col items-stretch">
              {i > 0 ? (
                <MobileStepConnector connectorDelay={connectorDelay} />
              ) : (
                <div
                  className="ongoing-loop-mobile-connector connector-grow-y mx-auto w-px flex-none"
                  aria-hidden="true"
                  style={{
                    ["--connector-delay" as string]: "80ms",
                    minHeight: "1.25rem",
                    background:
                      "linear-gradient(to bottom, color-mix(in srgb, var(--accent) 45%, transparent) 0%, rgba(227, 6, 19, 0.12) 100%)",
                  }}
                />
              )}

              <ScrollReveal
                direction="up"
                stagger={70}
                index={i}
                delay={120}
              >
                <article className="rounded-xl border border-white/14 bg-white/[0.07] px-4 py-4">
                  <div className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent/6 font-mono text-xs font-semibold text-accent">
                      {i + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-white/88">
                        {step.title}
                      </p>
                      <p className="mt-1 text-sm font-light leading-relaxed text-white/55">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>

              {isLast ? (
                <>
                  <MobileStepConnector
                    connectorDelay={connectorDelay + 70}
                  />
                  <p className="text-center font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-white/40">
                    Der Zyklus beginnt erneut
                  </p>
                </>
              ) : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
