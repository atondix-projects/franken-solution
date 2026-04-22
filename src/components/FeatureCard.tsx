"use client";

import type { ReactNode } from "react";

import { useCardSpotlight } from "@/hooks/useCardSpotlight";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  const { ref, onMouseMove, onMouseLeave } = useCardSpotlight<HTMLDivElement>();

  return (
    <div className={`feature-card-flow ${className ?? ""}`}>
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="feature-card-surface glass-card card-spotlight card-depth flex w-full items-center gap-3 rounded-[18px] py-3 pl-3 pr-3.5"
      >
        <div className="flex size-16 shrink-0 items-center justify-center rounded-md border border-foreground/35 bg-foreground/10 text-foreground shadow-[0px_2px_2px_rgba(0,0,0,0.25)]">
          {icon}
        </div>
        <div className="flex flex-col">
          <p className="text-[22.5px] font-medium leading-[1.2] text-[#010202]">
            {title}
          </p>
          <p className="text-[15px] font-light leading-[1.55] text-[#010202]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
