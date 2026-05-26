import { ueberFrankenSolutionContent } from "@/content/ueber-franken-solution";
import { homepageContent } from "@/content/homepage";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Icon } from "@/components/ui/Icon";

const content = ueberFrankenSolutionContent.werte;
const items = homepageContent.vertrauen.einträge;

export function UeberWerte() {
  return (
    <section
      className="bg-background-muted py-20 lg:py-28"
      aria-labelledby="ueber-werte-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal direction="up" className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {content.vorzeile}
          </p>
          <h2
            id="ueber-werte-heading"
            className="mt-3 text-3xl font-semibold leading-[1.15] tracking-[-0.04em] text-white/88 sm:text-4xl"
          >
            {content.überschrift}
          </h2>
          <p className="mt-4 text-base font-light leading-relaxed text-white/55">
            {content.beschreibung}
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {items.map((item, i) => (
            <ScrollReveal
              key={item.überschrift}
              direction="up"
              stagger={100}
              index={i}
              delay={80}
            >
              <article className="group flex h-full gap-5 rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-accent/40 hover:bg-white/[0.05] motion-reduce:transition-none">
                <span
                  className="icon-chip-glow flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <Icon name={item.symbolName} className="size-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold leading-snug tracking-[-0.02em] text-white/88">
                    {item.überschrift}
                  </h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-white/55">
                    {item.beschreibung}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
