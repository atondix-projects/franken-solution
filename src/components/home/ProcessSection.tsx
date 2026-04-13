import type { ProcessSectionContent } from "@/content/homepage";

import { SectionHeading } from "@/components/home/SectionHeading";

type ProcessSectionProps = {
  content: ProcessSectionContent;
};

export function ProcessSection({ content }: ProcessSectionProps) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <ol className="mt-10 grid gap-4 lg:grid-cols-4">
          {content.steps.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-[1.75rem] border border-black/10 bg-[#f7f5f2] p-6 shadow-[0_16px_48px_rgba(5,5,5,0.04)]"
            >
              <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-black/45">
                <span className="flex size-10 items-center justify-center rounded-full bg-accent text-white">
                  0{index + 1}
                </span>
                <span>Schritt</span>
              </div>

              <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#010202]">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-black/68">
                {step.description}
              </p>
              <p className="mt-5 border-t border-black/10 pt-5 text-sm leading-6 text-black/62">
                {step.outcome}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
