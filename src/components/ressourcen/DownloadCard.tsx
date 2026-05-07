"use client";

import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { useCardSpotlight } from "@/hooks/useCardSpotlight";
import { Icon } from "@/components/ui/Icon";

interface DownloadCardProps {
  label: string;
  name: string;
  description: string;
  helper: string;
  action: {
    href: string;
    ariaLabel: string;
    downloadFilename: string;
  };
}

export function DownloadCard({ label, name, description, helper, action }: DownloadCardProps) {
  const { ref, onMouseMove, onMouseLeave } = useCardSpotlight<HTMLAnchorElement>();

  return (
    <a
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      href={action.href}
      download={action.downloadFilename}
      aria-label={action.ariaLabel}
      className="group glass-card card-spotlight card-depth premium-card relative flex h-full cursor-pointer flex-col overflow-hidden rounded-[18px] p-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <span
        className="accent-bar-grow pointer-events-none absolute inset-x-0 top-0 h-[2px] rounded-t-[18px] bg-accent"
        aria-hidden="true"
      />

      <span className="absolute right-5 top-5 font-mono text-xs font-medium tracking-[0.14em] text-foreground/20 transition-colors duration-300 group-hover:text-accent/50">
        01
      </span>

      <div className="icon-tilt-idle-active size-14 shrink-0">
        <div className="icon-chip-glow flex h-full w-full items-center justify-center rounded-2xl border border-foreground/12 bg-foreground/[0.05] text-accent">
          <ArrowDownTrayIcon className="size-6" aria-hidden="true" />
        </div>
      </div>

      <div className="mt-6 flex flex-1 flex-col">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-foreground/35">
          {label}
        </p>

        <p className="mt-2 text-lg font-semibold leading-snug text-foreground transition-colors duration-200 group-hover:text-accent">
          {name}
        </p>

        <p className="mt-1.5 text-sm font-light leading-relaxed text-foreground/50">
          {description}
        </p>

        <p className="mt-2 font-mono text-xs text-foreground/30">
          {helper}
        </p>
      </div>

      <div className="mt-5 flex items-center gap-1.5 border-t border-foreground/[0.06] pt-4 text-xs font-medium text-foreground/40 transition-colors duration-200 group-hover:text-accent">
        <span>Herunterladen</span>
        <Icon name="arrowRight" className="size-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </a>
  );
}
