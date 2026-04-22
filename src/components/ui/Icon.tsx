import {
  ArrowRightIcon,
  CheckIcon,
  ShieldCheckIcon,
  SunIcon,
  EnvelopeIcon,
  CircleStackIcon,
  CalendarDaysIcon,
  ArrowPathIcon,
  DocumentCheckIcon,
  UserIcon,
  ClipboardDocumentCheckIcon,
  ScaleIcon,
  MapPinIcon,
  MagnifyingGlassIcon,
  WrenchScrewdriverIcon,
  BuildingOffice2Icon,
  ClockIcon,
  XMarkIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import type { ComponentProps } from "react";

const REGISTRY = {
  arrowRight: ArrowRightIcon,
  check: CheckIcon,
  shieldCheck: ShieldCheckIcon,
  sun: SunIcon,
  mail: EnvelopeIcon,
  database: CircleStackIcon,
  calendar: CalendarDaysIcon,
  refresh: ArrowPathIcon,
  documentCheck: DocumentCheckIcon,
  user: UserIcon,
  clipboardCheck: ClipboardDocumentCheckIcon,
  scale: ScaleIcon,
  mapPin: MapPinIcon,
  magnifier: MagnifyingGlassIcon,
  wrench: WrenchScrewdriverIcon,
  building: BuildingOffice2Icon,
  clock: ClockIcon,
  x: XMarkIcon,
  phone: PhoneIcon,
};

export type IconKey = keyof typeof REGISTRY;

interface IconProps extends ComponentProps<"svg"> {
  name: IconKey;
}

export function Icon({ name, className, ...rest }: IconProps) {
  const Cmp = REGISTRY[name];
  return <Cmp aria-hidden="true" className={className} {...rest} />;
}
