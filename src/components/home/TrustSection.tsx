import type { TrustSectionContent } from "@/content/homepage";

import { SectionHeading } from "@/components/home/SectionHeading";

type TrustSectionProps = {
  content: TrustSectionContent;
};

export function TrustSection({ content }: TrustSectionProps) {
  return (
    <section className="bg-[linear-gradient(180deg,#fff_0%,#f7f5f2_100%)] py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {content.items.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-[0_18px_56px_rgba(5,5,5,0.05)]"
            >
              <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-black/45">
                <span className="size-3 rounded-full bg-accent" aria-hidden="true" />
                <span>Vertrauen</span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#010202]">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-black/68">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
