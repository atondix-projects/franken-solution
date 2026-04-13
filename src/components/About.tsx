import { homepageContent } from "@/content/homepage";
import { Button } from "./ui/Button";
import { ScrollReveal } from "./ScrollReveal";

const content = homepageContent.about;

function ShieldCheckIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function CheckmarkIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const differentiators = [
  "Klare Standards und nachvollziehbare Dokumentation",
  "Feste Ansprechpartner, die Ihre Umgebung kennen",
  "Herstellerneutrale Empfehlungen",
] as const;

export function About() {
  return (
    <section className="overflow-hidden py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Left: image + counters */}
          <ScrollReveal
            direction="left"
            className="relative w-full lg:w-[52%] lg:shrink-0"
          >
            {/* Ambient accent glow behind image */}
            <div
              className="section-glow-blob pointer-events-none -right-16 -top-12 h-48 w-48 blur-[80px]"
              aria-hidden="true"
              style={{
                background: "rgba(227,6,19,0.07)",
                animationDuration: "22s",
              }}
            />

            {/* Image area */}
            <div
              className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-foreground/5"
              aria-hidden="true"
            >
              {/* Placeholder visual — replace with <Image> once a real photo is available */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-foreground/20">
                <ShieldCheckIcon />
                <span className="font-mono text-xs tracking-widest uppercase">
                  Placeholder: Bild folgt
                </span>
              </div>
              {/* Subtle accent gradient overlay */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(227,6,19,0.06) 0%, transparent 60%)",
                }}
              />
            </div>

            {/* Counters — overlapping bottom edge of image */}
            <div className="absolute -bottom-6 left-4 right-4 grid grid-cols-3 gap-3 sm:left-6 sm:right-6">
              {content.counters.map((counter, i) => (
                <ScrollReveal
                  key={counter.label}
                  direction="up"
                  stagger={80}
                  index={i}
                  delay={200}
                  className="premium-card glass-card flex flex-col items-center rounded-xl px-3 py-4 shadow-[0px_4px_16px_rgba(0,0,0,0.12)] text-center"
                >
                  <span className="font-mono text-xl font-bold leading-none text-accent sm:text-2xl">
                    {counter.value}
                  </span>
                  <span className="mt-1.5 text-xs font-medium leading-tight text-foreground-muted">
                    {counter.label}
                  </span>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* Right: text content */}
          <ScrollReveal direction="right" delay={120} className="pt-10 lg:pt-0">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
              {content.eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-[1.15] tracking-[-0.04em] text-foreground sm:text-4xl xl:text-[2.75rem]">
              {content.title}
            </h2>

            <p className="mt-5 text-base font-light leading-relaxed text-foreground-muted">
              {content.description}
            </p>

            {/* Differentiator checklist */}
            <ul className="mt-7 space-y-3" role="list">
              {differentiators.map((item) => (
                <li key={item} className="group flex items-start gap-3">
                  <span className="icon-chip-glow mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <CheckmarkIcon />
                  </span>
                  <span className="text-sm font-medium leading-snug text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button renderAs="link" href={content.cta.href} variant="secondary">
                {content.cta.label}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
