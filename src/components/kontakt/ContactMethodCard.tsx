"use client";

import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { useCardSpotlight } from "@/hooks/useCardSpotlight";
import { Icon } from "@/components/ui/Icon";

type IconKey = "phone" | "mail" | "mapPin";

const ICONS: Record<IconKey, React.ReactNode> = {
  phone: <PhoneIcon className="size-6" aria-hidden="true" />,
  mail: <EnvelopeIcon className="size-6" aria-hidden="true" />,
  mapPin: <MapPinIcon className="size-6" aria-hidden="true" />,
};

const NUMBERS: Record<IconKey, string> = {
  phone: "01",
  mail: "02",
  mapPin: "03",
};

interface ContactMethodCardProps {
  iconKey: IconKey;
  title: string;
  value: string;
  helper: string;
  action: {
    href: string;
    ariaLabel: string;
  };
}

function isOutbound(href: string) {
  return href.startsWith("http");
}

export function ContactMethodCard({
  iconKey,
  title,
  value,
  helper,
  action,
}: ContactMethodCardProps) {
  const { ref, onMouseMove, onMouseLeave } = useCardSpotlight<HTMLAnchorElement>();
  const outbound = isOutbound(action.href);

  return (
    <a
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      href={action.href}
      aria-label={action.ariaLabel}
      className="group glass-card card-spotlight card-depth premium-card relative flex h-full cursor-pointer flex-col overflow-hidden rounded-[18px] p-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      {...(outbound ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {/* Hover: thin top accent border grows from center */}
      <span
        className="accent-bar-grow pointer-events-none absolute inset-x-0 top-0 h-[2px] rounded-t-[18px] bg-accent"
        aria-hidden="true"
      />

      {/* Card number badge */}
      <span className="absolute right-5 top-5 font-mono text-xs font-medium tracking-[0.14em] text-foreground/20 transition-colors duration-300 group-hover:text-accent/50">
        {NUMBERS[iconKey]}
      </span>

      {/* Icon chip — animation wrapper is separate so group-hover scale composes */}
      <div className="icon-tilt-idle-active size-14 shrink-0">
        <div className="icon-chip-glow flex h-full w-full items-center justify-center rounded-2xl border border-foreground/12 bg-foreground/[0.05] text-accent">
          {ICONS[iconKey]}
        </div>
      </div>

      {/* Content */}
      <div className="mt-6 flex flex-1 flex-col">
        <p className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.18em] text-foreground/35">
          {title}
        </p>

        <p className="mt-2 text-lg font-semibold leading-snug text-foreground transition-colors duration-200 group-hover:text-accent">
          {value}
        </p>

        <p className="mt-1.5 text-sm font-light leading-relaxed text-foreground/50">
          {helper}
        </p>
      </div>

      {/* CTA row */}
      <div className="mt-5 flex items-center gap-1.5 border-t border-foreground/[0.06] pt-4 text-xs font-medium text-foreground/40 transition-colors duration-200 group-hover:text-accent">
        <span>{outbound ? "In Karte öffnen" : iconKey === "mail" ? "E-Mail schreiben" : "Anrufen"}</span>
        <Icon name="arrowRight" className="size-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </a>
  );
}
