import {
  ServerStackIcon,
  CloudArrowUpIcon,
  MagnifyingGlassIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import type { ComponentProps, ComponentType } from "react";

const iconMap: Record<string, ComponentType<ComponentProps<"svg">>> = {
  "01": ServerStackIcon,
  "02": CloudArrowUpIcon,
  "03": MagnifyingGlassIcon,
  "04": UserPlusIcon,
};

interface ProjectIconProps {
  index: string;
  className?: string;
}

export function ProjectIcon({ index, className }: ProjectIconProps) {
  const Cmp = iconMap[index] ?? ServerStackIcon;
  return <Cmp aria-hidden="true" className={className} />;
}
