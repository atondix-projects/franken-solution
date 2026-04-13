import { homepageContent } from "@/content/homepage";
import type { ProblemSectionContent } from "@/content/homepage";

const content = homepageContent.problem;

const ITEM_ICONS = [
  // Historisch gewachsene IT — branching/tree
  <svg key="0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
  </svg>,
  // Phishing / E-Mail — envelope warning
  <svg key="1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>,
  // Datenverlust / Backup — database
  <svg key="2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>,
  // Fehlende Planbarkeit — calendar off
  <svg key="3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <line x1="10" y1="14" x2="14" y2="18" />
    <line x1="14" y1="14" x2="10" y2="18" />
  </svg>,
  // Dienstleisterwechsel — refresh/arrows
  <svg key="4" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="1 4 1 10 7 10" />
    <path d="M3.51 15a9 9 0 1 0 .49-4.2" />
  </svg>,
  // Versicherungs-/Datenschutzdruck — file shield
  <svg key="5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="M12 18s-4-2-4-5v-3l4-1 4 1v3c0 3-4 5-4 5z" />
  </svg>,
] as const;

type Item = ProblemSectionContent["items"][number];

function TriggerCard({ item, index }: { item: Item; index: number }) {
  return (
    <div className="group relative flex flex-col gap-3 rounded-xl border border-foreground/8 bg-background p-6 transition-shadow duration-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
      {/* Accent top-border reveal on hover */}
      <div
        className="absolute inset-x-0 top-0 h-0.5 rounded-t-xl bg-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        aria-hidden="true"
      />

      {/* Icon */}
      <span className="flex size-9 items-center justify-center rounded-lg bg-accent/8 text-accent">
        {ITEM_ICONS[index]}
      </span>

      <h3 className="text-[1rem] font-semibold leading-snug text-foreground">
        {item.title}
      </h3>
      <p className="text-sm font-light leading-relaxed text-foreground-muted">
        {item.description}
      </p>
    </div>
  );
}

export function ProblemTriggers() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {content.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-[1.15] tracking-[-0.04em] text-foreground sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-base font-light leading-relaxed text-foreground-muted">
            {content.description}
          </p>
        </div>

        {/* Cards grid */}
        <ul
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {content.items.map((item, i) => (
            <li key={item.title}>
              <TriggerCard item={item} index={i} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
