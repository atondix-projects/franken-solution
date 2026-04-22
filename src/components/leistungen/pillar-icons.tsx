import {
  KeyIcon,
  EnvelopeIcon,
  ArchiveBoxIcon,
  ComputerDesktopIcon,
  AcademicCapIcon,
  ServerStackIcon,
} from "@heroicons/react/24/outline";
import type { ComponentProps, ComponentType } from "react";
import type { LeistungenPillarGroup } from "@/content/leistungen";

type Slug = LeistungenPillarGroup["slug"];

const iconMap: Record<Slug, ComponentType<ComponentProps<"svg">>> = {
  "identitaet-und-zugriffsschutz": KeyIcon,
  "email-sicherheit-und-archivierung": EnvelopeIcon,
  "backup-und-wiederherstellung": ArchiveBoxIcon,
  "endpoint-schutz-und-monitoring": ComputerDesktopIcon,
  "security-awareness": AcademicCapIcon,
  "netzwerk-und-infrastruktur": ServerStackIcon,
};

interface PillarIconProps {
  slug: Slug;
  className?: string;
}

export function PillarIcon({ slug, className }: PillarIconProps) {
  const Cmp = iconMap[slug];
  return <Cmp aria-hidden="true" className={className} />;
}
