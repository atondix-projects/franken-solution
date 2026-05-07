"use client";

import { useEffect, useRef } from "react";
import type { RefObject } from "react";

interface UseParallaxOptions {
  /** Fraction of scroll offset translated to movement: 0.1 = slow, 0.4 = fast. Default 0.2 */
  speed?: number;
  /** Which axis to parallax. Default "y". */
  axis?: "x" | "y";
  /**
   * CSS media query string that must match for parallax to be active.
   * When the query stops matching the effect tears down and resets the CSS var.
   * Example: "(min-width: 1024px)" disables parallax below lg.
   */
  enabledMediaQuery?: string;
}

interface UseParallaxReturn<T extends HTMLElement> {
  ref: RefObject<T | null>;
}

/**
 * Scroll-linked parallax: writes `--parallax-y` (or `--parallax-x`) as px
 * onto the element. Consumers apply it via `translateY(var(--parallax-y, 0px))`.
 *
 * Uses IntersectionObserver to gate the scroll listener so it only fires when
 * the element is in the viewport. No-ops under `prefers-reduced-motion`.
 * Optionally disabled via `enabledMediaQuery` when the query doesn't match.
 */
export function useParallax<T extends HTMLElement>(
  options: UseParallaxOptions = {},
): UseParallaxReturn<T> {
  const { speed = 0.2, axis = "y", enabledMediaQuery } = options;
  const ref = useRef<T | null>(null);
  const isVisibleRef = useRef(false);
  const frameRef = useRef<number | null>(null);
  const propName = axis === "y" ? "--parallax-y" : "--parallax-x";

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const node = ref.current;
    if (!node) return;

    const attach = (): (() => void) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          isVisibleRef.current = entry.isIntersecting;
          if (!entry.isIntersecting) {
            node.style.setProperty(propName, "0px");
          }
        },
        { rootMargin: "120px 0px" },
      );

      observer.observe(node);

      const handleScroll = () => {
        if (!isVisibleRef.current) return;
        if (frameRef.current !== null) return;

        frameRef.current = window.requestAnimationFrame(() => {
          frameRef.current = null;
          const el = ref.current;
          if (!el || !isVisibleRef.current) return;

          const rect = el.getBoundingClientRect();
          const viewportCenter = window.innerHeight / 2;
          const elementCenter = rect.top + rect.height / 2;
          const offset = (elementCenter - viewportCenter) * speed;

          el.style.setProperty(propName, `${offset.toFixed(2)}px`);
        });
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();

      return () => {
        window.removeEventListener("scroll", handleScroll);
        observer.disconnect();
        if (frameRef.current !== null) {
          cancelAnimationFrame(frameRef.current);
          frameRef.current = null;
        }
        node.style.setProperty(propName, "0px");
      };
    };

    if (enabledMediaQuery) {
      let cleanup: (() => void) | null = null;
      const mq = window.matchMedia(enabledMediaQuery);

      const apply = () => {
        cleanup?.();
        cleanup = null;
        if (mq.matches) {
          cleanup = attach();
        } else {
          node.style.setProperty(propName, "0px");
        }
      };

      apply();
      mq.addEventListener("change", apply);

      return () => {
        mq.removeEventListener("change", apply);
        cleanup?.();
      };
    }

    return attach();
  }, [speed, axis, propName, enabledMediaQuery]);

  return { ref };
}
