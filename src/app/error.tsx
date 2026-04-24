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
          style={{ background: "rgba(227,6,19,0.04)" } as CSSProperties}
        />
        <span
          aria-hidden
          className="section-glow-blob pointer-events-none absolute -bottom-32 -right-32 size-96"
          style={{ background: "rgba(227,6,19,0.04)", animationDelay: "9s" } as CSSProperties}
        />

        <div className="mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-7xl flex-col justify-center px-6 py-16 sm:py-20">
          <div className="max-w-4xl rounded-[2rem] border border-black/10 bg-white/88 p-8 shadow-[0_24px_80px_rgba(5,5,5,0.08)] backdrop-blur-sm sm:p-12">
            <div
              className="hero-load hero-load-up flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-black/45"
              style={{ "--hero-load-delay": "0ms", "--hero-load-duration": "480ms" } as CSSProperties}
            >
              <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
              <span>{content.eyebrow}</span>
            </div>

            <h1
              className="hero-load hero-load-up mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-foreground sm:text-5xl"
              style={{ "--hero-load-delay": "100ms", "--hero-load-duration": "560ms" } as CSSProperties}
            >
              {content.title}
            </h1>

            <p
              className="hero-load hero-load-up mt-5 max-w-2xl text-base font-light leading-relaxed text-foreground-muted"
              style={{ "--hero-load-delay": "200ms", "--hero-load-duration": "560ms" } as CSSProperties}
            >
              {content.lead}
            </p>

            {error.digest && (
              <div
                className="hero-load hero-load-up mt-5"
                style={{ "--hero-load-delay": "260ms", "--hero-load-duration": "480ms" } as CSSProperties}
              >
                <span
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/[0.04] px-3 py-1.5 font-mono text-xs text-foreground/60"
                  aria-label={`${content.digestLabel}: ${error.digest}`}
                >
                  {content.digestLabel} · {error.digest}
                </span>
              </div>
            )}

            <div
              className="hero-load hero-load-up mt-8 flex flex-wrap gap-3"
              style={{ "--hero-load-delay": "300ms", "--hero-load-duration": "560ms" } as CSSProperties}
            >
              <Button variant="primary" onClick={reset}>
                {content.retryLabel}
              </Button>
              <Button renderAs="link" href="/" variant="secondary">
                {content.homeLabel}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
