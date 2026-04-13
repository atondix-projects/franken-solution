"use client";

import { useEffect, useRef, useState } from "react";

const OFFSCREEN_POSITION = -10_000;
const MAX_FRAME_DELTA = 32;
const DEFAULT_FRAME_DELTA = 16.67;
const POINTER_EASING = 0.16;
const SPEED_BASELINE = 0.4;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

interface Point {
  x: number;
  y: number;
}

interface InteractiveNetworkBackgroundProps {
  className?: string;
  particleCount?: number;
  connectionDistance?: number;
  mouseRadius?: number;
  particleColor?: string;
  lineColor?: string;
  accentColor?: string;
  speed?: number;
}

function withAlpha(color: string, alpha: number) {
  return color.replace(/[\d.]+\)$/, `${alpha})`);
}

function isPointerActive(point: Point) {
  return point.x > OFFSCREEN_POSITION / 2 && point.y > OFFSCREEN_POSITION / 2;
}

export function InteractiveNetworkBackground({
  className = "",
  particleCount = 80,
  connectionDistance = 150,
  mouseRadius = 200,
  particleColor = "rgba(0, 0, 0, 0.3)",
  lineColor = "rgba(0, 0, 0, 0.06)",
  accentColor = "rgba(0, 0, 0, 0.15)",
  speed = 0.4,
}: InteractiveNetworkBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const pointerRef = useRef<Point>({
    x: OFFSCREEN_POSITION,
    y: OFFSCREEN_POSITION,
  });
  const pointerTargetRef = useRef<Point>({
    x: OFFSCREEN_POSITION,
    y: OFFSCREEN_POSITION,
  });
  const animationFrameRef = useRef<number>(0);
  const lastFrameTimeRef = useRef<number>(0);
  const dimensionsRef = useRef({ width: 0, height: 0 });
  const configRef = useRef({
    particleColor,
    lineColor,
    accentColor,
    speed,
    connectionDistance,
    mouseRadius,
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    configRef.current = {
      particleColor,
      lineColor,
      accentColor,
      speed,
      connectionDistance,
      mouseRadius,
    };
  }, [
    particleColor,
    lineColor,
    accentColor,
    speed,
    connectionDistance,
    mouseRadius,
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const surface = canvas?.parentElement;
    const interactionRoot =
      canvas?.closest<HTMLElement>("[data-network-interaction-root]") ?? surface;

    if (!canvas || !surface || !interactionRoot) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const resetPointer = () => {
      const offscreenPointer = {
        x: OFFSCREEN_POSITION,
        y: OFFSCREEN_POSITION,
      };

      pointerRef.current = offscreenPointer;
      pointerTargetRef.current = offscreenPointer;
    };

    const initializeParticles = (width: number, height: number) => {
      const particles: Particle[] = [];

      for (let index = 0; index < particleCount; index += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * SPEED_BASELINE,
          vy: (Math.random() - 0.5) * SPEED_BASELINE,
          radius: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.3,
        });
      }

      particlesRef.current = particles;
    };

    const syncCanvasSize = (width: number, height: number) => {
      const roundedWidth = Math.max(1, Math.round(width));
      const roundedHeight = Math.max(1, Math.round(height));
      const dpr = window.devicePixelRatio || 1;

      canvas.width = roundedWidth * dpr;
      canvas.height = roundedHeight * dpr;
      canvas.style.width = `${roundedWidth}px`;
      canvas.style.height = `${roundedHeight}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      dimensionsRef.current = {
        width: roundedWidth,
        height: roundedHeight,
      };

      initializeParticles(roundedWidth, roundedHeight);
    };

    const drawFrame = (deltaMs: number) => {
      const { width, height } = dimensionsRef.current;
      if (!width || !height) {
        return;
      }

      const {
        particleColor: currentParticleColor,
        lineColor: currentLineColor,
        accentColor: currentAccentColor,
        mouseRadius: currentMouseRadius,
        connectionDistance: currentConnectionDistance,
        speed: currentSpeed,
      } = configRef.current;

      const frameScale =
        (Math.min(deltaMs, MAX_FRAME_DELTA) || DEFAULT_FRAME_DELTA) /
        DEFAULT_FRAME_DELTA;
      const speedScale = currentSpeed / SPEED_BASELINE;
      const particles = particlesRef.current;
      const pointer = pointerRef.current;
      const pointerTarget = pointerTargetRef.current;

      pointer.x += (pointerTarget.x - pointer.x) * POINTER_EASING;
      pointer.y += (pointerTarget.y - pointer.y) * POINTER_EASING;

      if (!isPointerActive(pointerTarget)) {
        pointer.x = pointerTarget.x;
        pointer.y = pointerTarget.y;
      }

      context.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i];

        particle.x += particle.vx * frameScale * speedScale;
        particle.y += particle.vy * frameScale * speedScale;

        if (particle.x < 0 || particle.x > width) {
          particle.vx *= -1;
        }

        if (particle.y < 0 || particle.y > height) {
          particle.vy *= -1;
        }

        particle.x = Math.max(0, Math.min(width, particle.x));
        particle.y = Math.max(0, Math.min(height, particle.y));

        let pointerDistance = Number.POSITIVE_INFINITY;

        if (isPointerActive(pointer)) {
          const dx = pointer.x - particle.x;
          const dy = pointer.y - particle.y;
          pointerDistance = Math.hypot(dx, dy);

          if (pointerDistance < currentMouseRadius) {
            const force = (currentMouseRadius - pointerDistance) / currentMouseRadius;
            particle.vx += dx * force * 0.0008 * frameScale;
            particle.vy += dy * force * 0.0008 * frameScale;
          }
        }

        particle.vx *= 0.999;
        particle.vy *= 0.999;

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = withAlpha(currentParticleColor, particle.opacity);
        context.fill();

        if (pointerDistance < currentMouseRadius) {
          const glowOpacity =
            ((currentMouseRadius - pointerDistance) / currentMouseRadius) * 0.4;

          context.beginPath();
          context.arc(particle.x, particle.y, particle.radius * 3, 0, Math.PI * 2);
          context.fillStyle = withAlpha(currentAccentColor, glowOpacity);
          context.fill();
        }
      }

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.hypot(dx, dy);

          if (distance >= currentConnectionDistance) {
            continue;
          }

          const opacity = (1 - distance / currentConnectionDistance) * 0.15;
          context.beginPath();
          context.moveTo(particles[i].x, particles[i].y);
          context.lineTo(particles[j].x, particles[j].y);
          context.strokeStyle = withAlpha(currentLineColor, opacity);
          context.lineWidth = 0.8;
          context.stroke();
        }
      }

      if (!isPointerActive(pointer)) {
        return;
      }

      for (let i = 0; i < particles.length; i += 1) {
        const dx = pointer.x - particles[i].x;
        const dy = pointer.y - particles[i].y;
        const distance = Math.hypot(dx, dy);

        if (distance >= currentMouseRadius) {
          continue;
        }

        const opacity = (1 - distance / currentMouseRadius) * 0.25;
        context.beginPath();
        context.moveTo(particles[i].x, particles[i].y);
        context.lineTo(pointer.x, pointer.y);
        context.strokeStyle = withAlpha(currentAccentColor, opacity);
        context.lineWidth = 1;
        context.stroke();
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = surface.getBoundingClientRect();
      const nextX = event.clientX - rect.left;
      const nextY = event.clientY - rect.top;
      const insideBounds =
        nextX >= 0 &&
        nextX <= rect.width &&
        nextY >= 0 &&
        nextY <= rect.height;

      pointerTargetRef.current = insideBounds
        ? { x: nextX, y: nextY }
        : { x: OFFSCREEN_POSITION, y: OFFSCREEN_POSITION };
    };

    const resizeSurface = () => {
      const rect = surface.getBoundingClientRect();
      if (!rect.width || !rect.height) {
        return;
      }

      syncCanvasSize(rect.width, rect.height);
    };

    const loop = (time: number) => {
      const previousTime = lastFrameTimeRef.current || time;
      const delta = time - previousTime;
      lastFrameTimeRef.current = time;

      drawFrame(delta);
      animationFrameRef.current = window.requestAnimationFrame(loop);
    };

    resizeSurface();

    const resizeObserver = new ResizeObserver(() => {
      resizeSurface();

      if (prefersReducedMotion) {
        resetPointer();
        drawFrame(DEFAULT_FRAME_DELTA);
      }
    });

    resizeObserver.observe(surface);

    if (prefersReducedMotion) {
      resetPointer();
      drawFrame(DEFAULT_FRAME_DELTA);

      return () => {
        resizeObserver.disconnect();
        resetPointer();
        lastFrameTimeRef.current = 0;
      };
    }

    interactionRoot.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    interactionRoot.addEventListener("pointerleave", resetPointer);
    interactionRoot.addEventListener("pointercancel", resetPointer);

    animationFrameRef.current = window.requestAnimationFrame(loop);

    return () => {
      resizeObserver.disconnect();
      interactionRoot.removeEventListener("pointermove", handlePointerMove);
      interactionRoot.removeEventListener("pointerleave", resetPointer);
      interactionRoot.removeEventListener("pointercancel", resetPointer);
      resetPointer();
      lastFrameTimeRef.current = 0;
      window.cancelAnimationFrame(animationFrameRef.current);
    };
  }, [particleCount, prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden="true"
    />
  );
}
