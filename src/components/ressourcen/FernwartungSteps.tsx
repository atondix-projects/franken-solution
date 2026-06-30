import { ressourcenContent } from "@/content/ressourcen";
import { ScrollReveal } from "@/components/ScrollReveal";

const content = ressourcenContent.fernwartungsAblauf;

export function FernwartungSteps() {
  return (
    <section
      className="border-y border-foreground/6 bg-foreground/[0.02] py-20 lg:py-28"
      aria-labelledby="fernwartung-steps-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <ScrollReveal direction="up" delay={0}>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
              {content.vorzeile}
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={80}>
            <h2
              id="fernwartung-steps-heading"
              className="mt-3 text-2xl font-semibold leading-[1.15] tracking-[-0.03em] text-foreground sm:text-3xl"
            >
              {content.überschrift}
            </h2>
          </ScrollReveal>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3" role="list">
          {content.schritte.map((schritt, i) => (
            <ScrollReveal
              key={schritt.nummer}
              direction="up"
              stagger={100}
              index={i}
              delay={80}
            >
              <li className="glass-card card-depth flex h-full flex-col rounded-[18px] border border-foreground/6 p-6">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-accent/25 bg-accent/6 font-mono text-sm font-semibold text-accent">
                  {schritt.nummer}
                </span>
                <h3 className="mt-5 text-lg font-semibold leading-snug text-foreground">
                  {schritt.überschrift}
                </h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-foreground/55">
                  {schritt.fließtext}
                </p>
              </li>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
