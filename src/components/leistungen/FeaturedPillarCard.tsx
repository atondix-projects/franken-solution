"use client";

import { useCardSpotlight } from "@/hooks/useCardSpotlight";
import { useMagnetic } from "@/hooks/useMagnetic";
import type { LeistungenPillarGroup } from "@/content/leistungen";
import { leistungenContent } from "@/content/leistungen";
import { PillarIcon } from "./pillar-icons";
import { Icon } from "@/components/ui/Icon";

const detailLinkLabel = leistungenContent.pillars.detailLinkLabel;

interface FeaturedPillarCardProps {
  group: LeistungenPillarGroup;
}

export function FeaturedPillarCard({ group }: FeaturedPillarCardProps) {
  const { ref: cardRef, onMouseMove, onMouseLeave } = useCardSpotlight<HTMLDivElement>();
  const { ref: magneticRef } = useMagnetic<HTMLDivElement>({ strength: 6, radius: 80 });

  return (
    <div
      id={group.slug}
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="glass-card card-depth card-spotlight group relative rounded-xl border border-foreground/6 p-6 sm:p-8"
    >
      <div
        className="accent-bar-grow absolute inset-x-0 top-0 h-0.5 rounded-t-xl bg-accent"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
        {/* Icon column */}
        <div className="shrink-0">
          <div className="icon-chip-glow flex h-14 w-14 items-center justify-center rounded-lg border border-foreground/8 bg-foreground/4 sm:h-20 sm:w-20">
            <PillarIcon slug={group.slug} className="h-7 w-7 text-foreground/50 sm:h-10 sm:w-10" />
          </div>
        </div>

        {/* Content column */}
        <div className="flex flex-1 flex-col gap-5">
          {/* Title + Trigger */}
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold leading-snug tracking-[-0.03em] text-foreground sm:text-xl">
                {group.title}
              </h3>
              <div>
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-foreground-muted">
                  Auslöser
                </p>
                <p className="mt-1 text-sm font-light leading-relaxed text-foreground-muted">
                  {group.triggerText}
                </p>
              </div>
            </div>

            {/* Bausteine: 2-col on lg */}
            <div>
              <ul
                className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2"
                role="list"
              >
                {group.bausteine.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm font-light leading-relaxed text-foreground-muted"
                  >
                    <Icon name="check" className="mt-0.5 size-3.5 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Outcome + CTA */}
          <hr className="border-foreground/8" />
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col gap-1">
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-foreground-muted">
                Ergebnis
              </p>
              <p className="max-w-xl text-sm font-light leading-relaxed text-foreground-muted">
                {group.outcome}
              </p>
            </div>

            <div ref={magneticRef} className="magnetic-target shrink-0">
              <a
                href={group.href}
                className="inline-flex items-center gap-2 font-mono text-xs font-medium text-accent transition-opacity duration-300 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {detailLinkLabel}
                <Icon name="arrowRight" className="size-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
