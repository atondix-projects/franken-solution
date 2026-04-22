"use client";

import { useCallback, useEffect, useRef } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";

interface UseCardSpotlightReturn<T extends HTMLElement> {
  ref: (node: T | null) => void;
  onMouseMove: (event: ReactMouseEvent<T>) => void;
  onMouseLeave: () => void;
}

/**
 * Tracks pointer position within a card element and writes `--pointer-x`
 * and `--pointer-y` CSS variables as percentages on the element's inline
 * style. These power the `.card-spotlight` CSS utility.
 *
 * Returns a callback ref (assignable via ref={ref}) so it can be composed
 * with other callback refs without mutating a hook-owned RefObject.
 *
 * No-ops on touch devices (`pointer: coarse`) and when the user prefers
 * reduced motion.
 */
export function useCardSpotlight<
  T extends HTMLElement,
>(): UseCardSpotlightReturn<T> {
  const nodeRef = useRef<T | null>(null);
  const isDisabledRef = useRef<boolean>(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    isDisabledRef.current = reducedMotion || coarsePointer;
  }, []);

  const ref = useCallback((node: T | null) => {
    nodeRef.current = node;
  }, []);

  const onMouseMove = useCallback(
    (event: ReactMouseEvent<T>) => {
      if (isDisabledRef.current) return;

      const rect = event.currentTarget.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      const element = nodeRef.current;
      if (!element) return;

      element.style.setProperty("--pointer-x", `${x}%`);
      element.style.setProperty("--pointer-y", `${y}%`);
    },
    [],
  );

  const onMouseLeave = useCallback(() => {
    if (isDisabledRef.current) return;

    const element = nodeRef.current;
    if (!element) return;

    element.style.setProperty("--pointer-x", "");
    element.style.setProperty("--pointer-y", "");
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
