import { FeatureCard } from "./FeatureCard";

export function Hero() {
  return (
    <section className="relative min-h-[523px]">
      {/* Background layer */}
      <img
        src="/hero-background.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-0 w-full"
      />

      {/* Franken map silhouette */}
      <img
        src="/franken-map.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 z-[1] hidden h-[700px] w-auto lg:block"
      />

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
        <div className="relative ml-auto hidden h-[400px] w-[740px] shrink-0 lg:block">
          <FeatureCard
            title="Regional aus Nürnberg"
            description="Sixty zippers were quickly picked from the woven jute bag"
            className="absolute left-[40%] top-[45px] w-[336px]"
          />
          <FeatureCard
            title="Regional aus Nürnberg"
            description="Sixty zippers were quickly picked from the woven jute bag"
            className="absolute left-[20%] top-[230px] w-[336px]"
          />
          <FeatureCard
            title="Regional aus Nürnberg"
            description="Sixty zippers were quickly picked from the woven jute bag"
            className="absolute right-0 top-[140px] w-[336px]"
          />
        </div>
      </div>
    </section>
  );
}
