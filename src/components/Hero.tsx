import { FeatureCard } from "./FeatureCard";
import { FrankenMap } from "./FrankenMap";
import { NetworkBackground } from "./NetworkBackground";
import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-200">
      {/* Animated network background layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
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
        <NetworkBackground
          particleCount={70}
          connectionDistance={140}
          mouseRadius={180}
          speed={0.35}
        />
      </div>

      {/* Zigzag bottom border with drop shadow — inline SVG */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0 z-2 w-full"
        viewBox="0 0 1928 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{ height: "48px", marginBottom: "-1px" }}
      >
        <path
          d="M0 100L0 48L333.219 20L647.878 48L965.561 20L1277.31 48L1600.81 20L1928 48V100H0Z"
          fill="white"
        />
        <defs>
          <filter id="zigzag-blur">
            <feGaussianBlur stdDeviation="15" />
          </filter>
          <clipPath id="zigzag-clip">
            <path d="M0 100L0 48L333.219 20L647.878 48L965.561 20L1277.31 48L1600.81 20L1928 48V100H0Z" />
          </clipPath>
        </defs>
        <g
          filter="url(#zigzag-blur)"
          clipPath="url(#zigzag-clip)"
        >
          <path d="M0 100V0H1928V100H0Z" />
          <path
            d="M-8 49L333.219 20L647.878 48L965.561 20L1277.31 48L1600.81 20L1936 49"
            stroke="black"
            strokeWidth="10"
          />
        </g>
      </svg>

      {/* Franken map silhouette — inline SVG */}
      <FrankenMap className="pointer-events-none absolute right-0 top-0 z-1 hidden h-11/12 w-auto lg:block" />

      {/* Content layer */}
      <div className="relative z-10 flex items-center justify-center w-full max-w-7xl mx-auto h-full min-h-200">
        {/* Left side - text content */}
        <div className="min-w-0 shrink lg:max-w-185 lg:shrink-0">
          <h1 className="text-3xl font-semibold leading-[1.1] tracking-[-1.37px] text-[#010202] sm:text-4xl md:text-5xl xl:text-[68.66px]">
            Ihr{" "}
            <span className="font-accent text-accent">IT-Service</span>
            {" "}Partner aus Franken
          </h1>

          <p className="mt-4 max-w-185 text-lg font-light leading-normal text-[#010202]">
            Zephtor provides ongoing support and training to ensure you maximize
            the value of our software. Our experts are here to assist you at
            every step of your digital transformation journey.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            <Button renderAs="link" href="/kontakt" variant="primary">
              Beratung anfragen
            </Button>
            <Button renderAs="link" href="/leistungen" variant="secondary">
              Unsere Leistungen
            </Button>
          </div>
        </div>

        {/* Right side - feature cards */}
        <div className="relative ml-auto hidden h-150 w-185 shrink-0 lg:block">
          <FeatureCard
            title="Regional aus Nürnberg"
            description="Sixty zippers were quickly picked from the woven jute bag"
            className="absolute left-[40%] top-10 w-84"
          />
          <FeatureCard
            title="Regional aus Nürnberg"
            description="Sixty zippers were quickly picked from the woven jute bag"
            className="absolute left-[20%] top-115 w-84"
          />
          <FeatureCard
            title="Regional aus Nürnberg"
            description="Sixty zippers were quickly picked from the woven jute bag"
            className="absolute right-0 top-62.5 w-84"
          />
        </div>
      </div>
    </section>
  );
}
