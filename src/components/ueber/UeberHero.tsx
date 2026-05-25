import type { CSSProperties } from "react";
import { ueberFrankenSolutionContent } from "@/content/ueber-franken-solution";
import { homepageContent } from "@/content/homepage";

const content = ueberFrankenSolutionContent.hero;
const counters = homepageContent.about.counters;

function heroStyle(delay: string, duration = "560ms"): CSSProperties {
  return {
    "--hero-load-delay": delay,
    "--hero-load-duration": duration,
  } as CSSProperties;
}

export function UeberHero() {
  return (
    <section
      className="relative overflow-hidden py-24 lg:py-36"
      aria-labelledby="ueber-hero-heading"
    >
      {/* Glow blob — top right */}
      <div
        className="section-glow-blob pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] blur-[120px]"
        aria-hidden="true"
        style={{ background: "var(--accent-glow)", animationDuration: "22s" }}
      />
      {/* Glow blob — bottom left */}
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
        {/* Eyebrow */}
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

        {/* Main heading */}
        <h1
          id="ueber-hero-heading"
          className="hero-load hero-load-up mt-5 text-3xl font-semibold leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-5xl"
          style={heroStyle("140ms", "620ms")}
        >
          {content.title}
        </h1>

        {/* Lead */}
        <p
          className="hero-load hero-load-up mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-foreground/60 sm:text-lg"
          style={heroStyle("240ms")}
        >
          {content.lead}
        </p>

        {/* Counters */}
        <div
          className="hero-load hero-load-up mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
          style={heroStyle("360ms", "560ms")}
        >
          {counters.map((counter) => (
            <div
              key={counter.label}
              className="glass-card flex flex-col items-center rounded-xl px-4 py-5 text-center"
              style={{ boxShadow: "var(--elev-1)" }}
            >
              <span className="font-mono text-2xl font-bold leading-none text-accent sm:text-3xl">
                {counter.value}
              </span>
              <span className="mt-2 text-xs font-medium leading-tight text-foreground-muted">
                {counter.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
