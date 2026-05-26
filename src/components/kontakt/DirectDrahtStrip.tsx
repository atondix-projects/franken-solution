import { kontaktContent } from "@/content/kontakt";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Icon } from "@/components/ui/Icon";

const content = kontaktContent.direkterDraht;

export function DirectDrahtStrip() {
  return (
    <section
      className="relative overflow-hidden bg-foreground py-20 lg:py-28"
      aria-labelledby="direct-draht-heading"
    >
      {/* Dot grid texture */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Heading */}
          <div>
            <ScrollReveal direction="up" delay={0}>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
                {content.vorzeile}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={80}>
              <h2
                id="direct-draht-heading"
                className="mt-4 text-3xl font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-4xl"
              >
                {content.überschrift}
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={160}>
              <p className="mt-5 text-base font-light leading-relaxed text-white/50">
                {content.fließtext}
              </p>
            </ScrollReveal>
          </div>

          {/* Right: What you won't need */}
          <ScrollReveal direction="up" delay={200}>
            <div className="rounded-[20px] border border-white/[0.07] bg-white/[0.04] p-8 backdrop-blur-sm">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-white/30">
                {content.kontrastBeschriftung}
              </p>

              <ul className="mt-6 space-y-4">
                {content.kontrastZeilen.map((label) => (
                  <li
                    key={label}
                    className="flex items-center gap-4 border-b border-white/[0.06] pb-4 last:border-0 last:pb-0"
                  >
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-white/30">
                      <Icon name="x" className="size-3.5" />
                    </span>
                    <span className="text-sm font-light text-white/60">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
