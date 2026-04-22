import { kontaktContent } from "@/content/kontakt";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ContactMethodCard } from "./ContactMethodCard";

const content = kontaktContent.methods;

export function ContactMethodsGrid() {
  return (
    <section
      className="py-20 lg:py-28"
      aria-labelledby="contact-methods-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-12 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <ScrollReveal direction="up" delay={0}>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
                {content.eyebrow}
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={80}>
              <h2
                id="contact-methods-heading"
                className="mt-3 text-2xl font-semibold leading-[1.15] tracking-[-0.03em] text-foreground sm:text-3xl"
              >
                {content.title}
              </h2>
            </ScrollReveal>
          </div>

          {/* Decorative count */}
          <ScrollReveal direction="fade" delay={200}>
            <p className="font-mono text-xs text-foreground/25 lg:text-right">
              03 Kontaktwege
            </p>
          </ScrollReveal>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {content.items.map((item, i) => (
            <ScrollReveal
              key={item.iconKey}
              direction="premium"
              stagger={100}
              index={i}
              delay={80}
            >
              <ContactMethodCard
                iconKey={item.iconKey}
                title={item.title}
                value={item.value}
                helper={item.helper}
                action={item.action}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
