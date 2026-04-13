type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  tone?: "default" | "inverse";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto text-center items-center" : "items-start";
  const eyebrowTone =
    tone === "inverse" ? "text-white/68" : "text-black/45";
  const titleTone = tone === "inverse" ? "text-white" : "text-[#010202]";
  const descriptionTone =
    tone === "inverse" ? "text-white/76" : "text-black/70";

  return (
    <div className={`flex max-w-3xl flex-col ${alignment}`}>
      <div
        className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] ${eyebrowTone}`}
      >
        <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
        <span>{eyebrow}</span>
      </div>
      <h2
        className={`mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-4xl ${titleTone}`}
      >
        {title}
      </h2>
      <p className={`mt-4 text-base leading-7 sm:text-lg ${descriptionTone}`}>
        {description}
      </p>
    </div>
  );
}
