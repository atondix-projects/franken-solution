"use client";

import { useCardSpotlight } from "@/hooks/useCardSpotlight";
import { useMagnetic } from "@/hooks/useMagnetic";
import type { LeistungenPillarGroup } from "@/content/leistungen";
import { leistungenContent } from "@/content/leistungen";
import { PillarIcon } from "./pillar-icons";
import { Icon } from "@/components/ui/Icon";

const detailLinkLabel = leistungenContent.pillars.detailLinkLabel;

interface CompactPillarCardProps {
  group: LeistungenPillarGroup;
}

export function CompactPillarCard({ group }: CompactPillarCardProps) {
  const { ref: cardRef, onMouseMove, onMouseLeave } = useCardSpotlight<HTMLDivElement>();
  const { ref: magneticRef } = useMagnetic<HTMLDivElement>({ strength: 4, radius: 60 });

  return (
    <div
      id={group.slug}
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="glass-card card-depth card-spotlight group relative flex h-full flex-col rounded-xl border border-foreground/6 p-6"
    >
      <div
        className="accent-bar-grow absolute inset-x-0 top-0 h-0.5 rounded-t-xl bg-accent"
        aria-hidden="true"
      />

      {/* Header: icon + title */}
      <div className="mb-5 flex items-start gap-3">
        <div className="icon-chip-glow mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-foreground/8 bg-foreground/4">
          <PillarIcon slug={group.slug} className="h-4 w-4 text-foreground/50" />
        </div>
        <h3 className="text-sm font-semibold leading-snug tracking-[-0.02em] text-foreground">
          {group.title}
        </h3>
      </div>

      {/* Trigger */}
      <div className="mb-4">
        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-foreground-muted">
          Auslöser
        </p>
        <p className="mt-1 text-sm font-light leading-relaxed text-foreground-muted">
          {group.triggerText}
        </p>
      </div>

      {/* Bausteine */}
      <ul className="mb-5 flex flex-col gap-2" role="list">
        {group.bausteine.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm font-light leading-relaxed text-foreground-muted"
          >
            <Icon name="check" className="mt-0.5 size-3 shrink-0 text-accent" />
            {item}
          </li>
        ))}
      </ul>

      {/* Outcome */}
      <div className="mb-5 flex-1">
        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-foreground-muted">
          Ergebnis
        </p>
        <p className="mt-1 text-sm font-light leading-relaxed text-foreground-muted">
          {group.outcome}
        </p>
      </div>

      {/* Detail link */}
      <div ref={magneticRef} className="magnetic-target self-start">
        <a
          href={group.href}
          className="inline-flex items-center gap-2 font-mono text-xs font-medium text-accent transition-opacity duration-300 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          {detailLinkLabel}
          <Icon name="arrowRight" className="size-3" />
        </a>
      </div>
    </div>
  );
}
