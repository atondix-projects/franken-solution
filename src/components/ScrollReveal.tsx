"use client";

import { type ElementType, type ReactNode, CSSProperties } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type RevealDirection = "up" | "left" | "right" | "fade" | "scale";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Base delay in ms before animation starts */
  delay?: number;
  /** Direction of the entrance animation */
  direction?: RevealDirection;
  /** Additional delay per index step (for staggered groups) */
  stagger?: number;
  /** Index within a staggered group */
  index?: number;
  /** Intersection observer threshold (0–1) */
  threshold?: number;
  /** Intersection observer root margin */
  rootMargin?: string;
  /** Element type to render as */
  as?: ElementType;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  stagger = 0,
  index = 0,
  threshold,
  rootMargin,
  as: Tag = "div",
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal({ threshold, rootMargin });

  const totalDelay = delay + stagger * index;

  const style: CSSProperties = {
    ["--reveal-delay" as string]: `${totalDelay}ms`,
  };

  return (
    <Tag
      ref={ref}
      className={className}
      style={style}
      data-revealed={isVisible ? "true" : "false"}
      data-reveal-direction={direction}
    >
      {children}
    </Tag>
  );
}
