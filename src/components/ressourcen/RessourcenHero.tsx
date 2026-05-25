import type { CSSProperties } from "react";
import { ressourcenContent } from "@/content/ressourcen";
import { Icon } from "@/components/ui/Icon";

const content = ressourcenContent.hero;

function heroStyle(delay: string, duration = "560ms"): CSSProperties {
  return {
    "--hero-load-delay": delay,
    "--hero-load-duration": duration,
  } as CSSProperties;
}

function ConnectorLine() {
  return (
    <svg
      viewBox="0 0 480 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto w-full max-w-sm opacity-30"
      aria-hidden="true"
    >
      <line
        x1="0"
        y1="24"
        x2="480"
        y2="24"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="4 3"
      />
      <circle cx="60" cy="24" r="5" fill="currentColor" opacity="0.6" />
      <circle
        cx="60"
        cy="24"
        r="9"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.25"
      />
      <circle cx="240" cy="24" r="7" fill="var(--accent)" fillOpacity="0.9" />
      <circle
        cx="240"
        cy="24"
        r="13"
        stroke="var(--accent)"
        strokeOpacity="0.4"
        strokeWidth="1"
      />
      <circle cx="420" cy="24" r="5" fill="currentColor" opacity="0.6" />
      <circle
        cx="420"
        cy="24"
        r="9"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.25"
      />
    </svg>
  );
}

export function RessourcenHero() {
  return (
    <section
      className="relative overflow-hidden py-24 lg:py-36"
      aria-labelledby="ressourcen-hero-heading"
    >
      <div
        className="section-glow-blob pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] blur-[120px]"
        aria-hidden="true"
        style={{ background: "var(--accent-glow)", animationDuration: "22s" }}
      />
      <div
        className="section-glow-blob pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 blur-[96px]"
        aria-hidden="true"
        style={{
          background: "var(--accent-glow)",
          animationDuration: "30s",
          animationDelay: "-12s",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div
          className="hero-load hero-load-up inline-flex items-center gap-2"
          style={heroStyle("60ms", "440ms")}
        >
          <span className="h-px w-6 bg-accent/70" aria-hidden="true" />
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
            {content.eyebrow}
          </p>
          <span className="h-px w-6 bg-accent/70" aria-hidden="true" />
        </div>

        <h1
          id="ressourcen-hero-heading"
          className="hero-load hero-load-up mt-5 text-3xl font-semibold leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-5xl"
          style={heroStyle("140ms", "620ms")}
        >
          {content.title}
        </h1>

        <p
          className="hero-load hero-load-up mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-foreground/60 sm:text-lg"
          style={heroStyle("240ms")}
        >
          {content.lead}
        </p>

        <div
          className="hero-load hero-load-up mt-10 text-foreground"
          style={heroStyle("320ms", "500ms")}
        >
          <ConnectorLine />
        </div>

        <div
          className="hero-load hero-load-up mt-6 flex flex-wrap items-center justify-center gap-3"
          style={heroStyle("400ms", "500ms")}
        >
          {content.trustChips.map((chip) => (
            <span
              key={chip}
              className="inline-flex items-center gap-1.5 rounded-full border border-foreground/10 bg-foreground/[0.04] px-3.5 py-1.5 font-mono text-xs font-medium tracking-[0.08em] text-foreground/60"
            >
              <Icon name="check" className="size-3 shrink-0" />
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
