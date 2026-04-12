"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

interface NetworkBackgroundProps {
  className?: string;
  particleCount?: number;
  connectionDistance?: number;
  mouseRadius?: number;
  particleColor?: string;
  lineColor?: string;
  accentColor?: string;
  speed?: number;
}

export function NetworkBackground({
  className = "",
  particleCount = 80,
  connectionDistance = 150,
  mouseRadius = 200,
  particleColor = "rgba(0, 0, 0, 0.6)",
  lineColor = "rgba(0, 0, 0, 0.12)",
  accentColor = "rgba(0, 0, 0, 0.35)",
  speed = 0.4,
}: NetworkBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animFrameRef = useRef<number>(0);
  const dimensionsRef = useRef({ width: 0, height: 0 });

  // Props refs for stable animation loop without resetting particles
  const configRef = useRef({
    particleColor,
    lineColor,
    accentColor,
    speed,
    connectionDistance,
    mouseRadius,
  });

  // Update config ref when props change
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

  const initParticles = useCallback(
    (width: number, height: number, count: number) => {
      const particles: Particle[] = [];
      const currentSpeed = configRef.current.speed;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * currentSpeed,
          vy: (Math.random() - 0.5) * currentSpeed,
          radius: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.3,
        });
      }
      particlesRef.current = particles;
    },
    [] // Stable
  );

  const drawParticles = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      ctx.clearRect(0, 0, width, height);
      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      const {
        particleColor,
        lineColor,
        accentColor,
        mouseRadius,
        connectionDistance,
      } = configRef.current;

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Keep in bounds
        p.x = Math.max(0, Math.min(width, p.x));
        p.y = Math.max(0, Math.min(height, p.y));

        // Mouse interaction — gentle attraction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouseRadius) {
          const force = (mouseRadius - dist) / mouseRadius;
          p.vx += dx * force * 0.0008;
          p.vy += dy * force * 0.0008;
        }

        // Dampen velocity
        p.vx *= 0.999;
        p.vy *= 0.999;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor.replace(
          /[\d.]+\)$/,
          `${p.opacity})`
        );
        ctx.fill();

        // Glow effect for particles near mouse
        if (dist < mouseRadius) {
          const glowOpacity = ((mouseRadius - dist) / mouseRadius) * 0.4;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
          ctx.fillStyle = accentColor.replace(
            /[\d.]+\)$/,
            `${glowOpacity})`
          );
          ctx.fill();
        }
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = lineColor.replace(
              /[\d.]+\)$/,
              `${opacity})`
            );
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw connections to mouse
      for (let i = 0; i < particles.length; i++) {
        const dx = mouse.x - particles[i].x;
        const dy = mouse.y - particles[i].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseRadius) {
          const opacity = (1 - dist / mouseRadius) * 0.25;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = accentColor.replace(
            /[\d.]+\)$/,
            `${opacity})`
          );
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    },
    [] // Stable reference
  );

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = dimensionsRef.current;
    drawParticles(ctx, width, height);
  }, [drawParticles]);

  const animationLoop = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    animate();
  }, [animate]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.scale(dpr, dpr);
      dimensionsRef.current = { width: rect.width, height: rect.height };
      initParticles(rect.width, rect.height, particleCount);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    animFrameRef.current = requestAnimationFrame(animationLoop);

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [animationLoop, initParticles, particleCount]); // Stabilized

  useEffect(() => {
    // Re-initialize particles only if particleCount changes
    const parent = canvasRef.current?.parentElement;
    if (parent) {
      const rect = parent.getBoundingClientRect();
      initParticles(rect.width, rect.height, particleCount);
    }
  }, [particleCount, initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 ${className}`}
      aria-hidden="true"
    />
  );
}
