import { homepageContent } from "@/content/homepage";
import { Button } from "./ui/Button";
import { ScrollReveal } from "./ScrollReveal";
import { ServiceCard } from "./ServiceCard";

const content = homepageContent.services;

export function ServicePillars() {
  return (
    <section className="relative overflow-hidden bg-background-muted py-20 lg:py-28">
      <div
        className="section-glow-blob -left-24 -top-24 h-64 w-64 blur-[100px]"
        aria-hidden="true"
        style={{ background: "rgba(227,6,19,0.035)", animationDuration: "20s" }}
      />
      <div
        className="section-glow-blob -bottom-24 -right-24 h-56 w-56 blur-[90px]"
        aria-hidden="true"
        style={{
          background: "rgba(227,6,19,0.03)",
          animationDuration: "26s",
          animationDelay: "-9s",
        }}
      />
      <div
        className="section-glow-blob pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 blur-[120px]"
        aria-hidden="true"
        style={{
          background: "rgba(227,6,19,0.025)",
          animationDuration: "30s",
          animationDelay: "-14s",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <ScrollReveal direction="up" className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {content.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-[1.15] tracking-[-0.04em] text-white/88 sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-base font-light leading-relaxed text-white/55">
            {content.description}
          </p>
        </ScrollReveal>

        <ul
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {content.items.map((item, i) => (
            <ScrollReveal
              key={item.slug}
              as="li"
              direction="premium"
              stagger={80}
              index={i}
              delay={100}
              className="h-full"
            >
              <ServiceCard
                slug={item.slug}
                title={item.title}
                description={item.description}
              />
            </ScrollReveal>
          ))}
        </ul>

        <ScrollReveal
          direction="up"
          delay={300}
          className="mt-16 flex flex-col items-center gap-6 text-center"
        >
          <p className="max-w-xl text-sm font-light leading-relaxed text-white/55">
            {content.supportingStatement}
          </p>
          <Button renderAs="link" href={content.cta.href} variant="primary">
            {content.cta.label}
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
