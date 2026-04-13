import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonBase = {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = ButtonBase &
  Omit<ComponentPropsWithoutRef<"button">, keyof ButtonBase> & {
    renderAs?: "button";
    href?: never;
  };

type ButtonAsAnchor = ButtonBase &
  Omit<ComponentPropsWithoutRef<"a">, keyof ButtonBase> & {
    renderAs: "a";
    href: string;
  };

type ButtonAsLink = ButtonBase &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof ButtonBase> & {
    renderAs: "link";
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLink;

const shared =
  "relative overflow-hidden rounded-md border border-black/50 px-4 py-2 text-[20px] font-medium tracking-[0.4px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] inline-flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-white hover:bg-[#c00510]",
  secondary:
    "bg-white backdrop-blur-xl text-foreground/80 hover:border-accent hover:text-accent",
};

const textures: Record<ButtonVariant, string> = {
  primary: "/textures/button-texture-light.svg",
  secondary: "/textures/button-texture-dark.svg",
};

function ButtonTexture({ variant }: { variant: ButtonVariant }) {
  return (
    <img
      src={textures[variant]}
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full object-cover"
    />
  );
}

export function Button(props: ButtonProps) {
  const { variant = "primary", className = "", children, ...rest } = props;
  const classes = `${shared} ${variants[variant]} ${className}`;

  const content = (
    <>
      <ButtonTexture variant={variant} />
      <span className="relative z-[1]">{children}</span>
    </>
  );

  if (props.renderAs === "link") {
    const { renderAs, variant: _, ...linkProps } = props;
    return (
      <Link {...linkProps} className={classes}>
        {content}
      </Link>
    );
  }

  if (props.renderAs === "a") {
    const { renderAs, variant: _, ...anchorProps } = props;
    return (
      <a {...anchorProps} className={classes}>
        {content}
      </a>
    );
  }

  const { renderAs, ...buttonProps } = rest as Omit<
    ButtonAsButton,
    keyof ButtonBase
  >;
  return (
    <button {...buttonProps} className={classes}>
      {content}
    </button>
  );
}
