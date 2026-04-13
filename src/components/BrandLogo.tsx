import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  animateOnLoad?: boolean;
};

const LOGO_OUTLINE_PATH =
  "M39.5298 11.534H101.122V51.5106C101.122 51.5106 101.122 83.4543 69.9336 83.451C39.5298 83.4479 39.5298 51.7118 39.5298 51.7118V11.534Z";

const LOGO_LEFT_CONNECTOR_PATH =
  "M-0.638199 52.4681H15.3614L22.7517 39.3193L25.397 57.568L28.572 52.4681H39.1309";

const LOGO_RIGHT_CONNECTOR_PATH =
  "M101.445 52.4681H108.347L116.493 33.8586L118.063 57.568L121.241 52.4681H125.396H142.417L145.403 47.266L147.101 65.1478L153.958 52.0341H179.933";

const LOGO_SIZES = "(min-width: 768px) 192px, 144px";

export function BrandLogo({
  className = "",
  animateOnLoad = true,
}: BrandLogoProps) {
  const wrapperClassName = `relative inline-block aspect-[192/90] overflow-visible ${className}`.trim();

  if (!animateOnLoad) {
    return (
      <span className={wrapperClassName}>
        <Image
          src="/logo.svg"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes={LOGO_SIZES}
          className="object-contain"
        />
      </span>
    );
  }

  return (
    <span className={`${wrapperClassName} brand-logo-shell`.trim()}>
      <Image
        src="/logo.svg"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes={LOGO_SIZES}
        className="brand-logo-layer brand-logo-reveal object-contain"
      />

      <svg
        viewBox="0 0 192 90"
        xmlns="http://www.w3.org/2000/svg"
        className="brand-logo-layer brand-logo-draw"
        aria-hidden="true"
      >
        <path
          d={LOGO_OUTLINE_PATH}
          pathLength={1}
          className="brand-logo-draw-path brand-logo-draw-path--outline"
        />
        <path
          d={LOGO_LEFT_CONNECTOR_PATH}
          pathLength={1}
          className="brand-logo-draw-path brand-logo-draw-path--connector"
        />
        <path
          d={LOGO_RIGHT_CONNECTOR_PATH}
          pathLength={1}
          className="brand-logo-draw-path brand-logo-draw-path--connector"
        />
      </svg>
    </span>
  );
}
