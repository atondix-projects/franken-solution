"use client";

import { useEffect, useRef, useState } from "react";

interface UseCountUpOptions {
  durationMs?: number;
  enabled?: boolean;
}

/**
 * Animate an integer from 0 to `target` using requestAnimationFrame with
 * easeOutCubic easing. Respects `prefers-reduced-motion` by snapping
 * immediately to the target.
 */
export function useCountUp(
  target: number,
  options: UseCountUpOptions = {},
): number {
  const { durationMs = 1200, enabled = true } = options;

  const [value, setValue] = useState<number>(0);
  const frameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (!enabled) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      frameRef.current = window.requestAnimationFrame(() => {
        setValue(target);
        frameRef.current = null;
      });
      return () => {
        if (frameRef.current !== null) {
          cancelAnimationFrame(frameRef.current);
          frameRef.current = null;
        }
      };
    }

    startTimeRef.current = null;

    const step = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;

      if (elapsed >= durationMs) {
        setValue(target);
        if (frameRef.current !== null) {
          cancelAnimationFrame(frameRef.current);
          frameRef.current = null;
        }
        return;
      }

      const t = elapsed / durationMs;
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * target));

      frameRef.current = window.requestAnimationFrame(step);
    };

    frameRef.current = window.requestAnimationFrame(step);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
      startTimeRef.current = null;
    };
  }, [target, durationMs, enabled]);

  return Math.round(value);
}
