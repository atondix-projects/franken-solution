import { leistungenContent } from "@/content/leistungen";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Icon } from "@/components/ui/Icon";

const content = leistungenContent.situations;

type SituationPillar = (typeof content.rows)[number]["pillars"][number];

function SituationPillarLinks({ pillars }: { pillars: readonly SituationPillar[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {pillars.map((pillar) => (
        <a
          key={pillar.anchor}
          href={pillar.anchor}
          className="inline-flex max-w-full items-center gap-1 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 font-mono text-xs font-medium text-accent transition-colors duration-200 hover:border-accent/40 hover:bg-accent/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {pillar.label}
          <Icon name="arrowRight" className="size-2.5 shrink-0" />
        </a>
      ))}
    </div>
  );
}

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
          <div className="overflow-hidden rounded-xl border border-foreground/6 bg-white/90 text-sm">
            <div className="divide-y divide-foreground/5 md:hidden">
              {content.rows.map((row, i) => (
                <article
                  key={i}
                  className="px-4 py-4"
                  aria-label={`${row.situation}. ${content.tableHeaders.approach}: ${row.pillars.map((p) => p.label).join(", ")}`}
                >
                  <p className="font-light leading-relaxed text-foreground-muted">
                    {row.situation}
                  </p>
                  <p className="mt-3 font-mono text-xs font-medium uppercase tracking-[0.12em] text-foreground-muted">
                    {content.tableHeaders.approach}
                  </p>
                  <div className="mt-2">
                    <SituationPillarLinks pillars={row.pillars} />
                  </div>
                </article>
              ))}
            </div>

            <table className="hidden w-full md:table">
              <thead>
                <tr className="border-b border-foreground/6 bg-foreground/5">
                  <th
                    scope="col"
                    className="px-6 py-4 text-left font-mono text-xs font-medium uppercase tracking-[0.12em] text-foreground-muted"
                  >
                    {content.tableHeaders.situation}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left font-mono text-xs font-medium uppercase tracking-[0.12em] text-foreground-muted"
                  >
                    {content.tableHeaders.approach}
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
                      <SituationPillarLinks pillars={row.pillars} />
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
