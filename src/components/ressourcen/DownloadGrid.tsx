import { ressourcenContent } from "@/content/ressourcen";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Icon } from "@/components/ui/Icon";
import { DownloadCard } from "./DownloadCard";

const content = ressourcenContent.download;

function PlaceholderCard() {
  return (
    <div className="glass-card card-depth relative flex h-full flex-col overflow-hidden rounded-[18px] p-6 opacity-50">
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-[2px] rounded-t-[18px] bg-foreground/10"
        aria-hidden="true"
      />

      <span className="absolute right-5 top-5 font-mono text-xs font-medium tracking-[0.14em] text-foreground/20">
        02
      </span>

      <div className="size-14 shrink-0">
        <div className="flex h-full w-full items-center justify-center rounded-2xl border border-foreground/10 bg-foreground/[0.03] text-foreground/30">
          <Icon name="clock" className="size-6" />
        </div>
      </div>

      <div className="mt-6 flex flex-1 flex-col">
        <p className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.18em] text-foreground/25">
          In Vorbereitung
        </p>

        <p className="mt-2 text-lg font-semibold leading-snug text-foreground/40">
          {content.placeholder.title}
        </p>

        <p className="mt-1.5 text-sm font-light leading-relaxed text-foreground/35">
          {content.placeholder.description}
        </p>
      </div>

      <div className="mt-5 border-t border-foreground/[0.06] pt-4">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-foreground/10 bg-foreground/[0.03] px-3 py-1 font-mono text-[0.6rem] font-medium uppercase tracking-[0.12em] text-foreground/30">
          Bald verfügbar
        </span>
      </div>
    </div>
  );
}

export function DownloadGrid() {
  return (
    <section
      className="py-20 lg:py-28"
      aria-labelledby="download-grid-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <ScrollReveal direction="up" delay={0}>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
                {content.eyebrow}
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={80}>
              <h2
                id="download-grid-heading"
                className="mt-3 text-2xl font-semibold leading-[1.15] tracking-[-0.03em] text-foreground sm:text-3xl"
              >
                {content.title}
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="fade" delay={200}>
            <p className="font-mono text-xs text-foreground/25 lg:text-right">
              02 Einträge
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {content.items.map((item, i) => (
            <ScrollReveal
              key={item.label}
              direction="premium"
              stagger={100}
              index={i}
              delay={80}
            >
              <DownloadCard
                label={item.label}
                name={item.name}
                description={item.description}
                helper={item.helper}
                action={item.action}
              />
            </ScrollReveal>
          ))}
          <ScrollReveal direction="premium" stagger={100} index={content.items.length} delay={80}>
            <PlaceholderCard />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
