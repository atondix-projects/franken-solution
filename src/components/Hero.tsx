import { FeatureCard } from "./FeatureCard";
import { FrankenMap } from "./FrankenMap";
import { NetworkBackground } from "./NetworkBackground";

export function Hero() {
  return (
    <section className="relative min-h-[523px]">
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
        className="pointer-events-none absolute bottom-0 left-0 z-[2] w-full"
        viewBox="0 0 1928 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{ height: "48px", marginBottom: "-1px" }}
      >
        <defs>
          <filter
            id="zigzag-shadow"
            x="-4"
            y="0"
            width="1936"
            height="58"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-4" />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
        <g filter="url(#zigzag-shadow)">
          <path
            d="M0 54L0 20L333.219 48L647.878 20L965.561 48L1277.31 20L1600.81 48L1928 20V54H0Z"
            fill="white"
          />
        </g>
      </svg>

      {/* Franken map silhouette — inline SVG */}
      <FrankenMap className="pointer-events-none absolute right-0 top-0 z-[1] hidden h-full w-auto lg:block" />

      {/* Content layer */}
      <div className="relative z-10 flex items-center px-6 py-16 md:px-16 md:py-20 xl:px-[250px]">
        {/* Left side - text content */}
        <div className="min-w-0 shrink lg:max-w-[740px] lg:shrink-0">
          <h1 className="text-3xl font-semibold leading-[1.1] tracking-[-1.37px] text-[#010202] sm:text-4xl md:text-5xl xl:text-[68.66px]">
            Ihr{" "}
            <span className="font-accent text-accent">IT-Service</span>
            {" "}Partner aus Franken
          </h1>

          <p className="mt-4 max-w-[740px] text-lg font-light leading-[1.5] text-[#010202]">
            Zephtor provides ongoing support and training to ensure you maximize
            the value of our software. Our experts are here to assist you at
            every step of your digital transformation journey.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            <a
              href="/kontakt"
              className="rounded-md bg-accent px-4 py-2 text-[20px] font-medium tracking-[0.4px] text-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition-colors hover:bg-[#c00510]"
            >
              Beratung anfragen
            </a>
            <a
              href="/leistungen"
              className="rounded-md border border-foreground/50 bg-white/10 px-4 py-2 text-[20px] font-medium tracking-[0.4px] text-foreground/80 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition-colors hover:border-accent hover:text-accent"
            >
              Unsere Leistungen
            </a>
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
