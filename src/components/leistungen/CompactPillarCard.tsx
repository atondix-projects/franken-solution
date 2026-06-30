"use client";

import { useCardSpotlight } from "@/hooks/useCardSpotlight";
import { useMagnetic } from "@/hooks/useMagnetic";
import type { LeistungenPillarGroup } from "@/content/leistungen";
import { leistungenContent } from "@/content/leistungen";
import { PillarIcon } from "./pillar-icons";
import { pillarCardTitleClass } from "./pillar-card-styles";
import { Icon } from "@/components/ui/Icon";

const detailLinkLabel = leistungenContent.leistungsgruppen.detailLinkText;

interface CompactPillarCardProps {
  group: LeistungenPillarGroup;
}

export function CompactPillarCard({ group }: CompactPillarCardProps) {
  const {
    ref: cardRef,
    onMouseMove,
    onMouseLeave,
  } = useCardSpotlight<HTMLDivElement>();
  const { ref: magneticRef } = useMagnetic<HTMLDivElement>({
    strength: 4,
    radius: 60,
  });

  return (
    <div
      id={group.pfadKennung}
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="glass-card card-depth card-spotlight group relative flex h-full flex-col rounded-xl border border-foreground/6 p-6"
    >
      <div
        className="accent-bar-grow absolute inset-x-0 top-0 h-0.5 rounded-t-xl bg-accent"
        aria-hidden="true"
      />

      {/* Header: icon above title */}
      <div className="mb-5 flex flex-col gap-3">
        <div className="icon-chip-glow flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-foreground/8 bg-foreground/4 sm:h-11 sm:w-11">
          <PillarIcon
            slug={group.pfadKennung}
            className="h-5 w-5 text-foreground/50"
          />
        </div>
        <h3 className={pillarCardTitleClass}>{group.überschrift}</h3>
      </div>

      {/* Trigger */}
      <div className="mb-4">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-foreground-muted">
          Auslöser
        </p>
        <p className="mt-1 text-sm font-light leading-relaxed text-foreground-muted">
          {group.auslöserText}
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
        <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-foreground-muted">
          Ergebnis
        </p>
        <p className="mt-1 text-sm font-light leading-relaxed text-foreground-muted">
          {"ergebnisKurz" in group ? group.ergebnisKurz : group.ergebnis}
        </p>
      </div>

      {/* Detail link */}
      <div ref={magneticRef} className="magnetic-target self-start">
        <a
          href={group.verlinkung}
          className="inline-flex items-center gap-2 font-mono text-xs font-medium text-accent transition-opacity duration-300 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          {detailLinkLabel}
          <Icon name="arrowRight" className="size-3" />
        </a>
      </div>
    </div>
  );
}
