import Image from "next/image";
import { kontaktContent } from "@/content/kontakt";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const content = kontaktContent.standort;

export function StandortMap() {
  const { adresse, karte, erreichbarkeit } = content;

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
                {content.vorzeile}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={80}>
              <h2
                id="standort-heading"
                className="mt-3 text-2xl font-semibold leading-[1.15] tracking-[-0.03em] text-foreground sm:text-3xl"
              >
                {content.überschrift}
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={160}>
              <p className="mt-4 text-base font-light leading-relaxed text-foreground/65">
                {content.beschreibung}
              </p>
            </ScrollReveal>

            {/* Address card */}
            <ScrollReveal direction="up" delay={240}>
              <address className="mt-6 not-italic">
                <div className="glass-card card-depth rounded-2xl p-5">
                  <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-foreground/35">
                    Geschäftsadresse
                  </p>
                  <p className="mt-3 text-base font-semibold text-foreground">
                    {adresse.firma}
                  </p>

                  <div className="mt-3 space-y-2">
                    <div className="flex items-start gap-2.5 text-sm text-foreground/60">
                      <Icon name="building" className="size-3.5 shrink-0 mt-0.5" />
                      <span>
                        {adresse.straße}
                        <br />
                        {adresse.postleitzahl} {adresse.stadt}
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-foreground/50">
                      <Icon name="clock" className="size-3.5 shrink-0" />
                      <span>{erreichbarkeit}</span>
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-foreground/35">{adresse.region}</p>
                </div>
              </address>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={320}>
              <div className="mt-6">
                <Button
                  renderAs="a"
                  href={karte.externerLink}
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Franken Solution in Google Maps öffnen"
                >
                  {karte.externerLinkText}
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: map */}
          <ScrollReveal direction="premium" delay={100}>
            <div className="glass-card card-depth premium-card group rounded-[22px] p-5 transition-all duration-500 hover:shadow-[0_16px_48px_var(--accent-glow)]">
              <a
                href={karte.externerLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={karte.bildBeschreibung}
                className="block overflow-hidden rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Image
                  src={karte.bildQuelle}
                  alt={karte.bildBeschreibung}
                  width={karte.bildBreite}
                  height={karte.bildHöhe}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                  className="aspect-[4/3] w-full rounded-xl border border-foreground/8 object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                />
                <p className="mt-3 text-center font-mono text-xs text-foreground/30 transition-colors duration-200 group-hover:text-accent/60">
                  {karte.externerLinkText} ↗
                </p>
              </a>
              <p className="mt-2 text-center font-mono text-[10px] text-foreground/30">
                <a
                  href={karte.bildnachweisLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-2 hover:text-foreground/50 hover:underline"
                >
                  {karte.bildnachweis}
                </a>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
