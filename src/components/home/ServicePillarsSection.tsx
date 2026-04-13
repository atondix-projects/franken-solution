import type { ServicePillarsSectionContent } from "@/content/homepage";

import { SectionHeading } from "@/components/home/SectionHeading";
import { Button } from "@/components/ui/Button";

type ServicePillarsSectionProps = {
  content: ServicePillarsSectionContent;
};

export function ServicePillarsSection({
  content,
}: ServicePillarsSectionProps) {
  return (
    <section className="bg-[linear-gradient(180deg,#f7f5f2_0%,#fff_100%)] py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-2 xl:grid-cols-5">
          {content.cards.map((card) => (
            <article
              key={card.title}
              className="flex h-full flex-col rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-[0_18px_56px_rgba(5,5,5,0.05)]"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl border border-black/10 bg-[#f7f5f2]">
                <span
                  className="h-4 w-4 rounded-full border-4 border-accent/70"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-5 text-xl font-semibold leading-tight tracking-[-0.03em] text-[#010202]">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-black/68">
                {card.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-5 rounded-[1.75rem] border border-black/10 bg-white/82 p-6 shadow-[0_18px_56px_rgba(5,5,5,0.05)] backdrop-blur-sm lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-3xl text-base leading-7 text-black/68">
            {content.supportingStatement}
          </p>
          <Button renderAs="link" href={content.cta.href} variant="secondary">
            {content.cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
