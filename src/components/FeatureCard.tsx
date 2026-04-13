function LocationPinIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ title, description, className }: FeatureCardProps) {
  return (
    <div className={`feature-card-flow ${className ?? ""}`}>
      <div className="feature-card-surface glass-card flex w-full items-center gap-3 rounded-[18px] py-3 pl-3 pr-3.5 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)]">
        <div className="flex size-16 shrink-0 items-center justify-center rounded-md border border-[#343330] bg-[rgba(52,51,48,0.1)] text-[#343330] shadow-[0px_2px_2px_rgba(0,0,0,0.25)]">
          <LocationPinIcon />
        </div>
        <div className="flex flex-col">
          <p className="text-[22.5px] font-medium leading-[1.2] text-[#010202]">
            {title}
          </p>
          <p className="text-[15px] font-light leading-[1.55] text-[#010202]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
