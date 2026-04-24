import Image from "next/image";
import { homepageContent } from "@/content/homepage";
import type { FounderItem } from "@/content/homepage";
import { ScrollReveal } from "./ScrollReveal";

const content = homepageContent.founders;

function FounderSilhouette({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-end justify-end pb-12 pr-[15%]">
      <svg
        viewBox="0 0 200 240"
        className="w-[62%] text-foreground/[0.10]"
        fill="currentColor"
        aria-label={label}
        role="img"
      >
        <circle cx="100" cy="75" r="52" />
        <path d="M 100 137 C 50 137, 18 183, 14 240 L 186 240 C 182 183, 150 137, 100 137 Z" />
      </svg>
      <span className="mt-3 font-mono text-[0.6rem] uppercase tracking-widest text-foreground/20">
        Foto folgt
      </span>
    </div>
  );
}

function FounderStage({ item, index }: { item: FounderItem; index: number }) {
  return (
    <article className="group cursor-default">
      {/* Card — full 4:5 frame, overflow-hidden so the portrait stays contained */}
      <div
        className="grain-overlay relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-foreground/[0.06] via-foreground/[0.03] to-background shadow-[0_16px_56px_-20px_rgba(5,5,5,0.22)] transition-shadow duration-500 ease-out group-hover:shadow-[0_28px_72px_-16px_rgba(5,5,5,0.38)] motion-reduce:transition-none"
      >
        {/* Ambient red glow behind the person */}
        <div
          className="section-glow-blob pointer-events-none absolute -bottom-10 left-[10%] h-[70%] w-[80%] blur-[60px]"
          aria-hidden="true"
          style={{
            background: "rgba(227,6,19,0.07)",
            animationDuration: `${18 + index * 4}s`,
            animationDelay: `${index * 3}s`,
          }}
        />

        {/* Large watermark numeral — top-right of card */}
        <span
          className="pointer-events-none absolute -right-4 top-4 select-none font-mono text-[10rem] font-black leading-none text-foreground/[0.04] transition-colors duration-500 group-hover:text-foreground/[0.07] lg:text-[13rem] motion-reduce:transition-none"
          aria-hidden="true"
        >
          {item.number}
        </span>

        {/* Portrait — inset inside card (framed look), with drop-shadow for depth and a contained hover lift */}
        {item.photoSrc ? (
          <div
            className="absolute inset-x-5 inset-y-8 transform-gpu transition duration-500 ease-out drop-shadow-[0_18px_24px_rgba(5,5,5,0.28)] group-hover:-translate-y-2 group-hover:scale-[1.035] group-hover:drop-shadow-[0_30px_38px_rgba(5,5,5,0.42)] motion-reduce:transform-none motion-reduce:transition-none"
          >
            <Image
              src={item.photoSrc}
              alt={item.photoAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain object-bottom"
            />
          </div>
        ) : (
          <FounderSilhouette label={item.photoAlt} />
        )}

        {/* Floor accent line — sits above the portrait at the base of the card */}
        <div
          className="absolute bottom-5 left-1/2 z-10 h-[2px] w-12 -translate-x-1/2 scale-x-75 bg-accent transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none"
          aria-hidden="true"
        />
      </div>

      {/* Caption beneath stage */}
      <div className="pt-6">
        <div className="mb-3 h-px w-8 bg-accent" aria-hidden="true" />

        <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
          {item.role}
        </p>

        <h3 className="mt-1 text-2xl font-semibold leading-tight tracking-[-0.035em] text-foreground sm:text-3xl">
          {item.name}
        </h3>

        {/* Credentials as inline metadata */}
        <ul className="mt-3 flex flex-wrap items-center gap-x-0 gap-y-1" role="list">
          {item.credentials.map((cred, i) => (
            <li key={cred} className="flex items-center">
              {i > 0 && (
                <span
                  className="mx-2.5 size-[3px] rounded-full bg-accent/40 shrink-0"
                  aria-hidden="true"
                />
              )}
              <span className="font-mono text-[0.7rem] uppercase tracking-wide text-foreground-muted">
                {cred}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function Founders() {
  return (
    <section className="overflow-hidden py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section header */}
        <ScrollReveal direction="up" className="mb-14 max-w-xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {content.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-[1.15] tracking-[-0.04em] text-foreground sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-base font-light leading-relaxed text-foreground-muted">
            {content.description}
          </p>
        </ScrollReveal>

        {/* Full-width diptych grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          {content.items.map((item, i) => (
            <ScrollReveal
              key={item.id}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={i * 120}
            >
              <FounderStage item={item} index={i} />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
