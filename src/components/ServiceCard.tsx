"use client";

import Link from "next/link";

import type { LeistungenPillarGroup } from "@/content/leistungen";
import { useCardSpotlight } from "@/hooks/useCardSpotlight";
import { PillarIcon } from "./leistungen/pillar-icons";

interface ServiceCardProps {
  slug: LeistungenPillarGroup["slug"];
  title: string;
  description: string;
}

export function ServiceCard({ slug, title, description }: ServiceCardProps) {
  const { ref, onMouseMove, onMouseLeave } = useCardSpotlight<HTMLAnchorElement>();

  return (
    <Link
      ref={ref}
      href={`/leistungen#${slug}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group premium-card card-spotlight card-depth relative flex h-full flex-col gap-3 rounded-xl border border-foreground/6 bg-white/90 p-6"
    >
      <span
        className="accent-bar-grow absolute inset-x-0 top-0 h-0.5 rounded-t-xl bg-accent"
        aria-hidden="true"
      />
      <span className="icon-chip-glow flex size-9 items-center justify-center rounded-lg bg-accent/8 text-accent">
        <PillarIcon slug={slug} className="size-5" />
      </span>
      <h4 className="text-[1rem] font-semibold leading-snug text-foreground">
        {title}
      </h4>
      <p className="text-sm font-light leading-relaxed text-foreground-muted">
        {description}
      </p>
    </Link>
  );
}
