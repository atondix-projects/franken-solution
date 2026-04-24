import { Button } from "@/components/ui/Button";

type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  notes: readonly string[];
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
};

export function PlaceholderPage({
  eyebrow,
  title,
  description,
  notes,
  primaryCta,
  secondaryCta,
}: PlaceholderPageProps) {
  return (
    <section className="bg-[linear-gradient(180deg,#fff_0%,#22232B_100%)]">
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-7xl flex-col justify-center px-6 py-16 sm:py-20">
        <div className="max-w-4xl rounded-[2rem] border border-black/10 bg-white/88 p-8 shadow-[0_24px_80px_rgba(5,5,5,0.08)] backdrop-blur-sm sm:p-12">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-black/45">
            <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
            <span>{eyebrow}</span>
          </div>

          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#010202] sm:text-5xl">
            {title}
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-black/70 sm:text-lg">
            {description}
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {notes.map((note) => (
              <div
                key={note}
                className="rounded-[1.5rem] border border-black/10 bg-foreground/[0.05] p-5"
              >
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  Placeholder
                </p>
                <p className="mt-3 text-sm leading-6 text-black/70">{note}</p>
              </div>
            ))}
          </div>

          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryCta ? (
                <Button
                  renderAs="link"
                  href={primaryCta.href}
                  variant="primary"
                >
                  {primaryCta.label}
                </Button>
              ) : null}
              {secondaryCta ? (
                <Button
                  renderAs="link"
                  href={secondaryCta.href}
                  variant="secondary"
                >
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
