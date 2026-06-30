import { Icon } from "@/components/ui/Icon";

interface ComingSoonCardProps {
  name: string;
  description: string;
  eyebrow?: string;
  index?: number;
}

export function ComingSoonCard({
  name,
  description,
  eyebrow = "In Vorbereitung",
  index,
}: ComingSoonCardProps) {
  return (
    <div className="glass-card card-depth relative flex h-full flex-col overflow-hidden rounded-[18px] p-6 opacity-60">
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-[2px] rounded-t-[18px] bg-foreground/10"
        aria-hidden="true"
      />

      {typeof index === "number" ? (
        <span className="absolute right-5 top-5 font-mono text-xs font-medium tracking-[0.14em] text-foreground/20">
          {String(index).padStart(2, "0")}
        </span>
      ) : null}

      <div className="size-14 shrink-0">
        <div className="flex h-full w-full items-center justify-center rounded-2xl border border-foreground/10 bg-foreground/[0.03] text-foreground/30">
          <Icon name="clock" className="size-6" />
        </div>
      </div>

      <div className="mt-6 flex flex-1 flex-col">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-foreground/25">
          {eyebrow}
        </p>

        <p className="mt-2 text-lg font-semibold leading-snug text-foreground/40">
          {name}
        </p>

        <p className="mt-1.5 text-sm font-light leading-relaxed text-foreground/35">
          {description}
        </p>
      </div>

      <div className="mt-5 border-t border-foreground/[0.06] pt-4">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-foreground/10 bg-foreground/[0.03] px-3 py-1 font-mono text-xs font-medium uppercase tracking-[0.12em] text-foreground/30">
          Bald verfügbar
        </span>
      </div>
    </div>
  );
}
