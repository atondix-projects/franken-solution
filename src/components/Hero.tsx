import type { CSSProperties } from "react";
import { Suspense } from "react";
import dynamic from "next/dynamic";

import {
  MapPinIcon,
  ShieldCheckIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

import { homepageContent } from "@/content/homepage";
import { FeatureCard } from "./FeatureCard";
import { FrankenMap } from "./FrankenMap";
import { ParallaxLayer } from "./ParallaxLayer";
import { TypewriterAccent } from "./TypewriterAccent";
import { Button } from "./ui/Button";

const InteractiveNetworkBackground = dynamic(() =>
  import("./InteractiveNetworkBackground").then(
    (m) => m.InteractiveNetworkBackground,
  ),
);

const content = homepageContent.hero;

const ICON_MAP = {
  mapPin: MapPinIcon,
  users: UsersIcon,
  shieldCheck: ShieldCheckIcon,
} as const;

function heroLoadStyle(delay: string, duration: string): CSSProperties {
  return {
    "--hero-load-delay": delay,
    "--hero-load-duration": duration,
  } as CSSProperties;
}

export function Hero() {
  return (
    <section
      className="relative min-h-150 lg:min-h-175 overflow-hidden"
      data-network-interaction-root
    >
      {/* Animated network background layer */}
      <div
        className="hero-load hero-load-scale absolute inset-0 z-0 overflow-hidden"
        style={heroLoadStyle("60ms", "700ms")}
      >
        {/* Subtle gradient overlay — fades to accent at bottom */}
        <div
          className="hero-accent-wash pointer-events-none absolute inset-0"
          aria-hidden="true"
        />
        {/* Interactive particle network — lazy-loaded, ssr: false */}
        <Suspense fallback={<div className="absolute inset-0" />}>
          <InteractiveNetworkBackground
            particleCount={70}
            connectionDistance={140}
            mouseRadius={180}
            speed={0.25}
          />
        </Suspense>
      </div>

      {/* Zigzag bottom border with drop shadow — inline SVG */}
      <div
        className="hero-load hero-load-fade pointer-events-none absolute bottom-0 left-0 z-2 w-full"
        style={heroLoadStyle("180ms", "420ms")}
      >
        <svg
          className="w-full"
          viewBox="0 0 1928 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          aria-hidden="true"
          style={{ height: "48px", marginBottom: "-1px" }}
        >
          <path
            d="M0 100L0 56L333.219 5L647.878 56L965.561 5L1277.31 56L1600.81 5L1928 56V100H0Z"
            fill="white"
          />
          <defs>
            <filter id="zigzag-blur">
              <feGaussianBlur stdDeviation="15" />
            </filter>
            <clipPath id="zigzag-clip">
              <path d="M0 100L0 56L333.219 5L647.878 56L965.561 5L1277.31 56L1600.81 5L1928 56V100H0Z" />
            </clipPath>
          </defs>
          <g filter="url(#zigzag-blur)" clipPath="url(#zigzag-clip)">
            <path d="M0 100V0H1928V100H0Z" />
            <path
              d="M-8 49L333.219 5L647.878 56L965.561 5L1277.31 56L1600.81 5L1936 49"
              stroke="black"
              strokeWidth="10"
            />
          </g>
        </svg>
      </div>

      {/* Franken map silhouette — parallaxed background layer */}
      <ParallaxLayer
        speed={0.06}
        enabledMediaQuery="(min-width: 1024px)"
        className="hero-load hero-load-right pointer-events-none absolute -right-10 top-8 z-1 hidden h-[86%] w-[min(52vw,660px)] lg:block"
      >
        <FrankenMap className="h-full" />
      </ParallaxLayer>

      {/* Content layer */}
      <div className="relative z-10 mx-auto flex h-full lg:min-h-175 w-full max-w-7xl items-start justify-center px-6 pt-24 sm:pt-28 lg:items-center lg:pt-0">
        {/* Left side - text content */}
        <div className="min-w-0 shrink lg:max-w-185 lg:shrink-0">
          <h1
            className="hero-load hero-load-up text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-[#010202] sm:text-4xl md:text-5xl"
            style={heroLoadStyle("140ms", "560ms")}
          >
            {content.headlinePrefix}{" "}
            <TypewriterAccent texts={content.accentTexts} />
          </h1>

          <p
            className="hero-load hero-load-up mt-4 max-w-185 text-lg font-light leading-normal text-[#010202]"
            style={heroLoadStyle("240ms", "560ms")}
          >
            {content.subtitle}
          </p>

          <div
            className="hero-load hero-load-up mt-8 flex flex-wrap gap-2.5"
            style={heroLoadStyle("320ms", "560ms")}
          >
            <Button renderAs="link" href={content.primaryCta.href} variant="primary">
              {content.primaryCta.label}
            </Button>
            <Button renderAs="link" href={content.secondaryCta.href} variant="secondary">
              {content.secondaryCta.label}
            </Button>
          </div>
        </div>

        {/* Right side - feature cards with parallax lift */}
        <ParallaxLayer
          speed={0.18}
          className="ml-auto hidden h-150 lg:block relative"
        >
          {content.featureCards.map((card, i) => {
            const IconComponent = ICON_MAP[card.iconKey as keyof typeof ICON_MAP];
            const positions = [
              "hero-load hero-load-up absolute right-[36%] top-45 w-84",
              "hero-load hero-load-up absolute right-[25%] top-102 w-84",
              "hero-load hero-load-up absolute right-20 top-76 w-84",
            ] as const;
            const delays = ["300ms", "380ms", "460ms"] as const;
            const animations = [
              "[--feature-duration:19s] [--feature-delay:-2s] [--feature-float-x:10px] [--feature-float-y:7px] [--feature-rotate:0.35deg]",
              "[--feature-duration:22s] [--feature-delay:-8s] [--feature-float-x:-8px] [--feature-float-y:9px] [--feature-rotate:0.45deg]",
              "[--feature-duration:21s] [--feature-delay:-5s] [--feature-float-x:7px] [--feature-float-y:-8px] [--feature-rotate:0.3deg]",
            ] as const;
            return (
              <div
                key={card.iconKey}
                className={positions[i]}
                style={heroLoadStyle(delays[i], "620ms")}
              >
                <FeatureCard
                  icon={<IconComponent className="size-8" />}
                  title={card.title}
                  description={card.description}
                  className={animations[i]}
                />
              </div>
            );
          })}
        </ParallaxLayer>
      </div>
    </section>
  );
}
