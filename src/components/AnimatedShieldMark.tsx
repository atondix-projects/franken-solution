"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export function AnimatedShieldMark() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });

  return (
    <svg
      ref={ref as (node: SVGSVGElement | null) => void}
      width="120"
      height="140"
      viewBox="0 0 120 140"
      fill="none"
      aria-hidden="true"
      className="text-foreground/6"
      data-shield-revealed={isVisible ? "true" : "false"}
    >
      {/* Outer shield */}
      <path
        d="M60 6L10 26v44c0 30 21.5 58 50 66 28.5-8 50-36 50-66V26L60 6z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className="shield-draw-path"
      />
      {/* Inner shield (smaller, offset) */}
      <path
        d="M60 22L24 38v30c0 20 14.3 38.6 36 44 21.7-5.4 36-24 36-44V38L60 22z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        fill="none"
        className="shield-draw-path shield-draw-path--delay-1"
      />
      {/* Checkmark */}
      <polyline
        points="44,68 54,78 76,54"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="shield-draw-path shield-draw-path--delay-2"
      />
    </svg>
  );
}
