import type { CSSProperties } from "react";

import type { HeroSectionContent } from "@/content/homepage";

import { FrankenMap } from "@/components/FrankenMap";
import { InteractiveNetworkBackground } from "@/components/InteractiveNetworkBackground";
import { Button } from "@/components/ui/Button";

type HeroSectionProps = {
  content: HeroSectionContent;
};

function heroLoadStyle(delay: string, duration: string): CSSProperties {
  return {
    "--hero-load-delay": delay,
    "--hero-load-duration": duration,
  } as CSSProperties;
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(180deg,#fff_0%,#f7f5f2_100%)]"
      data-network-interaction-root
    >
      <div
        className="hero-load hero-load-scale absolute inset-0"
        style={heroLoadStyle("80ms", "700ms")}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(227,6,19,0.1) 100%)",
          }}
          aria-hidden="true"
        />
        <InteractiveNetworkBackground
          particleCount={52}
          connectionDistance={150}
          mouseRadius={170}
          speed={0.26}
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(5,5,5,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(5,5,5,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0) 100%)",
        }}
        aria-hidden="true"
      />

      <div
        className="hero-load hero-load-right pointer-events-none absolute right-[-7rem] top-[-1rem] hidden h-[42rem] text-accent/30 lg:block"
        style={heroLoadStyle("180ms", "700ms")}
      >
        <FrankenMap className="h-full w-auto" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-16 sm:pb-24 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(20rem,0.9fr)] lg:items-center">
          <div className="max-w-3xl">
            <div
              className="hero-load hero-load-up inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/80 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.24em] text-black/55 backdrop-blur-sm"
              style={heroLoadStyle("120ms", "560ms")}
            >
              <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
              <span>{content.eyebrow}</span>
            </div>

            <p
              className="hero-load hero-load-up mt-5 max-w-2xl font-mono text-xs uppercase tracking-[0.22em] text-black/45"
              style={heroLoadStyle("190ms", "560ms")}
            >
              {content.regionLabel}
            </p>

            <h1
              className="hero-load hero-load-up mt-5 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#010202] sm:text-5xl lg:text-[4.4rem]"
              style={heroLoadStyle("240ms", "560ms")}
            >
              {content.title}
            </h1>

            <p
              className="hero-load hero-load-up mt-6 max-w-3xl text-lg leading-8 text-black/72"
              style={heroLoadStyle("300ms", "560ms")}
            >
              {content.description}
            </p>

            <ul
              className="hero-load hero-load-up mt-8 grid gap-3 text-sm leading-6 text-black/72 sm:grid-cols-3"
              style={heroLoadStyle("340ms", "560ms")}
            >
              {content.supportingPoints.map((point) => (
                <li
                  key={point}
                  className="rounded-2xl border border-black/10 bg-white/75 px-4 py-3 backdrop-blur-sm"
                >
                  {point}
                </li>
              ))}
            </ul>

            <div
              className="hero-load hero-load-up mt-8 flex flex-wrap gap-3"
              style={heroLoadStyle("380ms", "560ms")}
            >
              <Button
                renderAs="link"
                href={content.primaryCta.href}
                variant="primary"
              >
                {content.primaryCta.label}
              </Button>
              <Button
                renderAs="link"
                href={content.secondaryCta.href}
                variant="secondary"
              >
                {content.secondaryCta.label}
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            {content.highlights.map((highlight, index) => (
              <article
                key={highlight.title}
                className="hero-load hero-load-up rounded-[1.75rem] border border-black/10 bg-white/86 p-6 shadow-[0_24px_80px_rgba(5,5,5,0.08)] backdrop-blur-sm"
                style={heroLoadStyle(`${420 + index * 70}ms`, "620ms")}
              >
                <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-black/45">
                  <span
                    className="flex size-9 items-center justify-center rounded-full border border-black/10 bg-[#f7f5f2] text-accent"
                    aria-hidden="true"
                  >
                    0{index + 1}
                  </span>
                  <span>Signal</span>
                </div>
                <h2 className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#010202]">
                  {highlight.title}
                </h2>
                <p className="mt-3 text-base leading-7 text-black/68">
                  {highlight.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
