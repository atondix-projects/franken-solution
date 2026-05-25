import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteFrame } from "@/components/SiteFrame";
import { Button } from "@/components/ui/Button";
import { leistungenContent } from "@/content/leistungen";
import type { LeistungenPillarGroup } from "@/content/leistungen";

type PageParams = { slug: string };

const PILLAR_GROUPS: ReadonlyArray<LeistungenPillarGroup> =
  leistungenContent.pillars.groups;

const detail = leistungenContent.pillarDetail;

function findGroup(slug: string): LeistungenPillarGroup | undefined {
  return PILLAR_GROUPS.find((g) => g.slug === slug);
}

export async function generateStaticParams(): Promise<PageParams[]> {
  return PILLAR_GROUPS.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const group = findGroup(slug);
  if (!group) return {};

  const ogTitle = `${group.title} | Franken Solution`;

  return {
    title: group.title,
    description: group.intro,
    alternates: { canonical: `/leistungen/${slug}` },
    openGraph: {
      title: ogTitle,
      description: group.intro,
      url: `/leistungen/${slug}`,
      siteName: "Franken Solution",
      locale: "de_DE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: group.intro,
    },
    robots: { index: true, follow: true },
  };
}

function Eyebrow({ label }: { label: string }) {
  return (
    <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.24em] text-black/45">
      <span aria-hidden="true" className="inline-block size-2 rounded-full bg-accent" />
      {label}
    </p>
  );
}

function EyebrowOnDark({ label }: { label: string }) {
  return (
    <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.24em] text-white/55">
      <span aria-hidden="true" className="inline-block size-2 rounded-full bg-accent" />
      {label}
    </p>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="size-5 shrink-0 text-accent"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10.5 8 14.5 16 6" />
    </svg>
  );
}

export default async function LeistungenDetailPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;
  const group = findGroup(slug);
  if (!group) notFound();

  return (
    <SiteFrame>
      {/* Hero */}
      <section className="bg-background pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-foreground/55 transition-colors hover:text-accent"
          >
            <span aria-hidden="true">&larr;</span>
            {detail.backLink}
          </Link>

          <div className="mt-10 max-w-3xl">
            <Eyebrow label={detail.eyebrowGroup} />
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl">
              {group.title}
            </h1>
            <p className="mt-6 text-lg font-light leading-relaxed text-foreground/70 sm:text-xl">
              {group.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Auslöser */}
      <section className="border-y border-black/5 bg-black/[0.025] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow label={detail.eyebrowTrigger} />
          <figure className="mt-6 max-w-3xl border-l-4 border-accent pl-6 sm:pl-8">
            <blockquote className="text-xl font-light leading-relaxed text-foreground/85 sm:text-2xl">
              {group.triggerText}
            </blockquote>
          </figure>
        </div>
      </section>

      {/* Bausteine */}
      <section className="bg-background py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <Eyebrow label={detail.eyebrowBausteine} />
            <h2 className="mt-5 text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-foreground sm:text-4xl">
              {detail.bausteineHeading}
            </h2>
          </div>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {group.bausteine.map((baustein, index) => (
              <li
                key={baustein}
                className="glass-card flex items-start gap-4 rounded-xl border border-black/8 p-6 sm:p-7"
              >
                <CheckIcon />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-foreground/40">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-base font-medium leading-snug text-foreground sm:text-lg">
                    {baustein}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Ergebnis */}
      <section className="bg-background-muted py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <EyebrowOnDark label={detail.eyebrowErgebnis} />
          <p className="mt-6 max-w-4xl text-3xl font-light leading-[1.2] tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.75rem]">
            {group.outcome}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-24 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Eyebrow label={detail.cta.eyebrow} />
          <h2 className="mt-5 text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-foreground sm:text-4xl">
            {detail.cta.headingPrefix}{" "}{group.title.toLowerCase()}{" "}{detail.cta.headingSuffix}
          </h2>
          <p className="mt-5 text-base font-light leading-relaxed text-foreground/65">
            {detail.cta.body}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button renderAs="link" href={detail.cta.primaryCta.href} variant="primary">
              {detail.cta.primaryCta.label}
            </Button>
            <Button renderAs="link" href={detail.cta.secondaryCta.href} variant="secondary">
              {detail.cta.secondaryCta.label}
            </Button>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
