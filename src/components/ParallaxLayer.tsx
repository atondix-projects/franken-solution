"use client";

import type { ReactNode } from "react";
import { useParallax } from "@/hooks/useParallax";

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  enabledMediaQuery?: string;
}

export function ParallaxLayer({ children, speed = 0.15, className, enabledMediaQuery }: ParallaxLayerProps) {
  const { ref } = useParallax<HTMLDivElement>({ speed, enabledMediaQuery });
  return (
    <div
      ref={ref}
      className={className}
      style={{ transform: "translateY(var(--parallax-y, 0px))" }}
    >
      {children}
    </div>
  );
}
