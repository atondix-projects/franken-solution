"use client";

import type { CSSProperties } from "react";
import { SiteFrame } from "@/components/SiteFrame";
import { Button } from "@/components/ui/Button";
import { errorContent as content } from "@/content/error";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorPageProps) {
  return (
    <SiteFrame>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fff_0%,#22232B_100%)]">
        <span
          aria-hidden
          className="section-glow-blob pointer-events-none absolute -left-32 -top-32 size-96"
          style={{ background: "var(--accent-glow)" } as CSSProperties}
        />
        <span
          aria-hidden
          className="section-glow-blob pointer-events-none absolute -bottom-32 -right-32 size-96"
          style={
            {
              background: "var(--accent-glow)",
              animationDelay: "9s",
            } as CSSProperties
          }
        />

        <div className="mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-7xl flex-col justify-center px-6 py-16 sm:py-20">
          <div className="max-w-4xl rounded-[2rem] border border-black/10 bg-white/88 p-8 shadow-[0_24px_80px_rgba(5,5,5,0.08)] backdrop-blur-sm sm:p-12">
            <div
              className="hero-load hero-load-up flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-black/45"
              style={
                {
                  "--hero-load-delay": "0ms",
                  "--hero-load-duration": "480ms",
                } as CSSProperties
              }
            >
              <span
                className="size-2 rounded-full bg-accent"
                aria-hidden="true"
              />
              <span>{content.vorzeile}</span>
            </div>

            <h1
              className="hero-load hero-load-up mt-5 max-w-3xl text-3xl font-semibold leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-5xl"
              style={
                {
                  "--hero-load-delay": "100ms",
                  "--hero-load-duration": "560ms",
                } as CSSProperties
              }
            >
              {content.überschrift}
            </h1>

            <p
              className="hero-load hero-load-up mt-5 max-w-2xl text-base font-light leading-relaxed text-foreground-muted"
              style={
                {
                  "--hero-load-delay": "200ms",
                  "--hero-load-duration": "560ms",
                } as CSSProperties
              }
            >
              {content.einleitung}
            </p>

            {error.digest && (
              <div
                className="hero-load hero-load-up mt-5"
                style={
                  {
                    "--hero-load-delay": "260ms",
                    "--hero-load-duration": "480ms",
                  } as CSSProperties
                }
              >
                <span
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/[0.04] px-3 py-1.5 font-mono text-xs text-foreground/60"
                  aria-label={`${content.referenzBeschriftung}: ${error.digest}`}
                >
                  {content.referenzBeschriftung} · {error.digest}
                </span>
              </div>
            )}

            <div
              className="hero-load hero-load-up mt-8 flex flex-wrap gap-3"
              style={
                {
                  "--hero-load-delay": "300ms",
                  "--hero-load-duration": "560ms",
                } as CSSProperties
              }
            >
              <Button variant="primary" onClick={reset}>
                {content.wiederholenBeschriftung}
              </Button>
              <Button renderAs="link" href="/" variant="secondary">
                {content.startseiteBeschriftung}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
