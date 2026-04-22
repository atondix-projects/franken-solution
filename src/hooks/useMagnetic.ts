"use client";

import { useEffect, useRef } from "react";
import type { RefObject } from "react";

interface UseMagneticOptions {
  /** Maximum translation distance in pixels. Defaults to 6. */
  strength?: number;
  /** Activation radius in pixels around the element's center. Defaults to 120. */
  radius?: number;
}

interface UseMagneticReturn<T extends HTMLElement> {
  ref: RefObject<T | null>;
}

const LERP_FACTOR = 0.12;
const RESET_THRESHOLD_MULTIPLIER = 1.5;

/**
 * Creates a magnetic pull effect: when the pointer approaches the element
 * within `radius`, the element translates toward the pointer up to
 * `strength` pixels. Smoothed via a rAF lerp loop. Writes the result as
 * `--magnetic-x` and `--magnetic-y` CSS variables — consumers should use
 * the `.magnetic-target` utility to read these values.
 *
 * No-ops on touch devices (`pointer: coarse`) and when the user prefers
 * reduced motion.
 */
export function useMagnetic<T extends HTMLElement>(
  options: UseMagneticOptions = {},
): UseMagneticReturn<T> {
  const { strength = 6, radius = 120 } = options;

  const ref = useRef<T | null>(null);
  const targetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const currentRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

    if (reducedMotion || coarsePointer) {
      return;
    }

    const element = ref.current;
    if (!element) {
      return;
    }

    const resetTarget = () => {
      targetRef.current = { x: 0, y: 0 };
    };

    const handlePointerMove = (event: PointerEvent) => {
      const node = ref.current;
      if (!node) {
        return;
      }

      const rect = node.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = event.clientX - centerX;
      const dy = event.clientY - centerY;
      const dist = Math.hypot(dx, dy);

      if (dist > radius * RESET_THRESHOLD_MULTIPLIER) {
        resetTarget();
        return;
      }

      if (dist <= radius) {
        const intensity = Math.min(1, Math.max(0, 1 - dist / radius));
        const scale = strength / radius;
        targetRef.current = {
          x: dx * intensity * scale,
          y: dy * intensity * scale,
        };
      }
    };

    const CONVERGENCE_THRESHOLD = 0.05;

    const loop = () => {
      const node = ref.current;
      if (!node) {
        frameRef.current = window.requestAnimationFrame(loop);
        return;
      }

      const target = targetRef.current;
      const current = currentRef.current;

      const nextX = current.x + (target.x - current.x) * LERP_FACTOR;
      const nextY = current.y + (target.y - current.y) * LERP_FACTOR;

      currentRef.current = { x: nextX, y: nextY };

      // Skip style write when converged at rest — avoids continuous DOM mutations
      const atRest =
        Math.abs(nextX) < CONVERGENCE_THRESHOLD &&
        Math.abs(nextY) < CONVERGENCE_THRESHOLD &&
        Math.abs(target.x) < CONVERGENCE_THRESHOLD &&
        Math.abs(target.y) < CONVERGENCE_THRESHOLD;

      if (!atRest) {
        node.style.setProperty("--magnetic-x", `${nextX}px`);
        node.style.setProperty("--magnetic-y", `${nextY}px`);
      }

      frameRef.current = window.requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", resetTarget);

    frameRef.current = window.requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", resetTarget);
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
      targetRef.current = { x: 0, y: 0 };
      currentRef.current = { x: 0, y: 0 };
      if (ref.current) {
        ref.current.style.setProperty("--magnetic-x", "0px");
        ref.current.style.setProperty("--magnetic-y", "0px");
      }
    };
  }, [strength, radius]);

  return { ref };
}
