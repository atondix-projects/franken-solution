import { leistungenContent } from "@/content/leistungen";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Icon } from "@/components/ui/Icon";

const content = leistungenContent.situations;

export function SituationMatrix() {
  return (
    <section className="relative overflow-hidden bg-background-muted py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <ScrollReveal direction="up" className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {content.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-[1.15] tracking-[-0.04em] text-white/88 sm:text-4xl">
            {content.headline}
          </h2>
          <p className="mt-4 text-base font-light leading-relaxed text-white/55">
            {content.description}
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={120} className="mt-12">
          <div className="overflow-hidden rounded-xl border border-foreground/6 bg-white/90">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-foreground/6 bg-foreground/5">
                  <th
                    scope="col"
                    className="px-6 py-4 text-left font-mono text-xs font-medium uppercase tracking-[0.12em] text-foreground-muted"
                  >
                    Situation
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left font-mono text-xs font-medium uppercase tracking-[0.12em] text-foreground-muted"
                  >
                    Ansatz
                  </th>
                </tr>
              </thead>
              <tbody>
                {content.rows.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-foreground/5 transition-colors duration-300 last:border-0 hover:bg-foreground/[0.04]"
                  >
                    <td className="px-6 py-4 font-light leading-relaxed text-foreground-muted">
                      {row.situation}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-2">
                        {row.pillars.map((pillar) => (
                          <a
                            key={pillar.anchor}
                            href={pillar.anchor}
                            className="inline-flex items-center gap-1 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 font-mono text-xs font-medium text-accent transition-colors duration-200 hover:border-accent/40 hover:bg-accent/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                          >
                            {pillar.label}
                            <Icon name="arrowRight" className="size-2.5" />
                          </a>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
