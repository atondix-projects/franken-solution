"use client";

import { useCardSpotlight } from "@/hooks/useCardSpotlight";
import { useMagnetic } from "@/hooks/useMagnetic";
import { ProjectIcon } from "./project-icons";

type Props = { index: string; title: string; body: string };

export function ProjectTile({ index, title, body }: Props) {
  const { ref: cardRef, onMouseMove, onMouseLeave } = useCardSpotlight<HTMLDivElement>();
  const { ref: iconRef } = useMagnetic<HTMLDivElement>({ strength: 3, radius: 50 });

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="glass-card card-depth card-spotlight group relative flex h-full flex-col overflow-hidden rounded-xl border border-foreground/6 p-6"
    >
      {/* Top accent bar — scales from center on hover */}
      <div
        className="accent-bar-grow absolute inset-x-0 top-0 h-0.5 rounded-t-xl bg-accent"
        aria-hidden="true"
      />
      {/* Watermark number — dimensional depth layer */}
      <span
        className="pointer-events-none absolute -right-1 -top-3 select-none font-mono text-[5.5rem] font-black leading-none text-foreground/[0.04] transition-colors duration-500 group-hover:text-foreground/[0.07]"
        aria-hidden="true"
      >
        {index}
      </span>

      {/* Header: icon chip + sequence label */}
      <div className="mb-4 flex items-center gap-3">
        <div
          ref={iconRef}
          className="magnetic-target icon-chip-glow flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-foreground/8 bg-foreground/4"
        >
          <ProjectIcon index={index} className="h-4 w-4 text-foreground/50" />
        </div>
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-foreground-muted/70 transition-colors duration-300 group-hover:text-accent/70">
          Projekt {index}
        </span>
      </div>

      {/* Structural separator */}
      <div className="mb-4 border-t border-foreground/6" aria-hidden="true" />

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2">
        <h3 className="text-sm font-semibold leading-snug tracking-[-0.02em] text-foreground">
          {title}
        </h3>
        <p className="text-sm font-light leading-relaxed text-foreground-muted">{body}</p>
      </div>
    </div>
  );
}
