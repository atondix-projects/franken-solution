interface FrankenMapProps {
  className?: string;
}

export function FrankenMap({ className = "" }: FrankenMapProps) {
  return (
    <div
      className={`franken-map-shell relative h-full w-full ${className}`.trim()}
      aria-hidden
    >
      <div className="franken-map-glow pointer-events-none absolute inset-0" />
      <img
        src="/franken-map.svg"
        alt=""
        width={1348}
        height={1086}
        className="franken-map-artwork relative h-full w-auto max-w-none object-contain object-right"
        decoding="async"
      />
    </div>
  );
}
