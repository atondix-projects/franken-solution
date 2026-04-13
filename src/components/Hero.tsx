import type { CSSProperties } from "react";

import { FeatureCard } from "./FeatureCard";
import { FrankenMap } from "./FrankenMap";
import { InteractiveNetworkBackground } from "./InteractiveNetworkBackground";
import { TypewriterAccent } from "./TypewriterAccent";
import { Button } from "./ui/Button";

const ACCENT_TEXTS = [
  "IT-Service",
  "Cloud-Lösungen",
  "IT-Sicherheit",
  "Support",
] as const;

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
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.02) 76%, rgba(227,6,19,0.13) 100%)",
          }}
          aria-hidden="true"
        />
        {/* Interactive particle network */}
        <InteractiveNetworkBackground
          particleCount={70}
          connectionDistance={140}
          mouseRadius={180}
          speed={0.25}
        />
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

      {/* Franken map silhouette — inline SVG */}
      <div
        className="hero-load hero-load-right pointer-events-none absolute right-0 top-0 z-1 h-11/12 max-w-full"
        style={heroLoadStyle("220ms", "700ms")}
      >
        <FrankenMap className="h-full w-auto" />
      </div>

      {/* Content layer */}
      <div className="relative z-10 mx-auto flex h-full lg:min-h-175 w-full max-w-7xl items-center justify-center px-6">
        {/* Left side - text content */}
        <div className="min-w-0 shrink lg:max-w-185 lg:shrink-0">
          <h1
            className="hero-load hero-load-up text-3xl font-semibold leading-[1.1] tracking-[-1.37px] text-[#010202] sm:text-4xl md:text-5xl xl:text-[68.66px]"
            style={heroLoadStyle("140ms", "560ms")}
          >
            Ihr {" "}
            <TypewriterAccent texts={ACCENT_TEXTS} />
            {" "}Partner aus Franken
          </h1>

          <p
            className="hero-load hero-load-up mt-4 max-w-185 text-lg font-light leading-normal text-[#010202]"
            style={heroLoadStyle("240ms", "560ms")}
          >
            Wir betreuen die IT von Unternehmen in Franken: persönlich,
            sicher und zuverlässig im Alltag.
          </p>

          <div
            className="hero-load hero-load-up mt-8 flex flex-wrap gap-2.5"
            style={heroLoadStyle("320ms", "560ms")}
          >
            <Button renderAs="link" href="/kontakt" variant="primary">
              Beratung vereinbaren
            </Button>
            <Button renderAs="link" href="/leistungen" variant="secondary">
              Leistungen ansehen
            </Button>
          </div>
        </div>

        {/* Right side - feature cards */}
        <div className="relative ml-auto hidden h-150 lg:block">
          <div
            className="hero-load hero-load-up absolute right-[36%] top-45 w-84"
            style={heroLoadStyle("300ms", "620ms")}
          >
            <FeatureCard
              title="Direkt aus Nürnberg"
              description="Kurze Wege. Schnelle Hilfe."
              className="[--feature-duration:19s] [--feature-delay:-2s] [--feature-float-x:10px] [--feature-float-y:7px] [--feature-rotate:0.35deg]"
            />
          </div>
          <div
            className="hero-load hero-load-up absolute right-[25%] top-102 w-84"
            style={heroLoadStyle("380ms", "620ms")}
          >
            <FeatureCard
              title="Persönlicher Kontakt"
              description="Ein Team, das Ihre IT kennt."
              className="[--feature-duration:22s] [--feature-delay:-8s] [--feature-float-x:-8px] [--feature-float-y:9px] [--feature-rotate:0.45deg]"
            />
          </div>
          <div
            className="hero-load hero-load-up absolute right-20 top-76 w-84"
            style={heroLoadStyle("460ms", "620ms")}
          >
            <FeatureCard
              title="Stabil im Alltag"
              description="Saubere Lösungen für den Alltag."
              className="[--feature-duration:21s] [--feature-delay:-5s] [--feature-float-x:7px] [--feature-float-y:-8px] [--feature-rotate:0.3deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
