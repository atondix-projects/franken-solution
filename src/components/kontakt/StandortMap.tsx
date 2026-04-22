import { kontaktContent } from "@/content/kontakt";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const content = kontaktContent.standort;


export function StandortMap() {
  const { address, map, erreichbarkeit } = content;

  return (
    <section
      className="py-20 lg:py-28"
      aria-labelledby="standort-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: text + address */}
          <div>
            <ScrollReveal direction="up" delay={0}>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
                {content.eyebrow}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={80}>
              <h2
                id="standort-heading"
                className="mt-3 text-2xl font-semibold leading-[1.15] tracking-[-0.03em] text-foreground sm:text-3xl"
              >
                {content.title}
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={160}>
              <p className="mt-4 text-base font-light leading-relaxed text-foreground/65">
                {content.description}
              </p>
            </ScrollReveal>

            {/* Address card */}
            <ScrollReveal direction="up" delay={240}>
              <address className="mt-6 not-italic">
                <div className="glass-card card-depth rounded-2xl p-5">
                  <p className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.16em] text-foreground/35">
                    Geschäftsadresse
                  </p>
                  <p className="mt-3 text-base font-semibold text-foreground">
                    {address.company}
                  </p>

                  <div className="mt-3 space-y-2">
                    <div className="flex items-start gap-2.5 text-sm text-foreground/60">
                      <Icon name="building" className="size-3.5 shrink-0 mt-0.5" />
                      <span>
                        {address.street}
                        <br />
                        {address.zip} {address.city}
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-foreground/50">
                      <Icon name="clock" className="size-3.5 shrink-0" />
                      <span>{erreichbarkeit}</span>
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-foreground/35">{address.region}</p>
                </div>
              </address>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={320}>
              <div className="mt-6">
                <Button
                  renderAs="a"
                  href={map.outboundUrl}
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Franken Solution in Google Maps öffnen"
                >
                  {map.outboundLabel}
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: map */}
          <ScrollReveal direction="premium" delay={100}>
            <a
              href={map.outboundUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={map.alt}
              className="group block overflow-hidden rounded-[22px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <div className="glass-card card-depth premium-card rounded-[22px] p-5 transition-all duration-500 group-hover:shadow-[0_16px_48px_rgba(227,6,19,0.10)]">
                <div className="relative flex aspect-[4/3] items-center justify-center">
                  <Icon
                    name="mapPin"
                    className="size-40 text-accent/15 sm:size-56"
                  />
                  {/* Red pulse dot overlaid near the pin's tip */}
                  <span
                    className="pointer-events-none absolute inset-0 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <span className="relative">
                      <span className="absolute inset-0 -m-3 rounded-full bg-accent/[0.06]" />
                      <span className="absolute inset-0 -m-1.5 rounded-full bg-accent/15" />
                      <span className="relative block size-3 rounded-full bg-accent/95" />
                    </span>
                  </span>
                </div>
                <p className="mt-3 text-center font-mono text-xs text-foreground/30 transition-colors duration-200 group-hover:text-accent/60">
                  {map.outboundLabel} ↗
                </p>
              </div>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
