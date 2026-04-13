import type { FinalCtaSectionContent } from "@/content/homepage";

import { SectionHeading } from "@/components/home/SectionHeading";
import { Button } from "@/components/ui/Button";

type FinalCtaSectionProps = {
  content: FinalCtaSectionContent;
};

export function FinalCtaSection({ content }: FinalCtaSectionProps) {
  return (
    <section className="bg-[#050505] py-20 text-white sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(227,6,19,0.24)_0%,rgba(255,255,255,0.02)_100%)] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:p-12">
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
            tone="inverse"
          />

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              renderAs="link"
              href={content.primaryCta.href}
              variant="primary"
            >
              {content.primaryCta.label}
            </Button>
            <Button
              renderAs="link"
              href={content.secondaryCta.href}
              variant="secondary"
              className="border-white/25 bg-white/8 text-white hover:border-white hover:text-white"
            >
              {content.secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
