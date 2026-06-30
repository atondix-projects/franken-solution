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
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto w-full max-w-4xl px-6">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-foreground/45">
          <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
          <span>{eyebrow}</span>
        </div>

        <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl">
          {title}
        </h1>

        <p className="mt-5 text-lg font-light leading-relaxed text-foreground/70">
          {description}
        </p>

        <div className="mt-10 space-y-4 border-t border-foreground/10 pt-8">
          {notes.map((note) => (
            <p key={note} className="text-base leading-7 text-foreground/75">
              {note}
            </p>
          ))}
        </div>

        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-wrap gap-3">
            {primaryCta ? (
              <Button renderAs="link" href={primaryCta.href} variant="primary">
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
    </section>
  );
}
