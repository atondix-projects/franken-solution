import type { CSSProperties, ReactNode } from "react";
import { leistungenContent } from "@/content/leistungen";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Icon } from "@/components/ui/Icon";

const content = leistungenContent.hero;

function heroLoadStyle(delay: string, duration: string): CSSProperties {
  return {
    "--hero-load-delay": delay,
    "--hero-load-duration": duration,
  } as CSSProperties;
}

// Hub diagram constants
const CX = 250;
const CY = 250;
const NODE_R = 38;
const HUB_INNER_R = 36;
const HUB_MID_R = 46;
const HUB_ORBIT_R = 54;
const HUB_GLOW_R = 66;
const ICON_SCALE = 0.375;
const ICON_HALF = 24 * ICON_SCALE; // 9px

// Node positions: original 300×300 coords scaled by 1.5 from center (150,150) → (250,250)
type NodeDef = {
  x: number;
  y: number;
  lines: [string, string];
  iconPaths: ReactNode;
};

const NODE_DEFS: NodeDef[] = [
  {
    x: 250, y: 70,
    lines: ["Identität &", "Zugriff"],
    iconPaths: (
      <>
        <circle cx="24" cy="20" r="8" />
        <line x1="29.6" y1="25.6" x2="38" y2="34" />
        <line x1="35" y1="31" x2="38" y2="34" />
        <line x1="35" y1="34" x2="38" y2="31" />
      </>
    ),
  },
  {
    x: 430, y: 160,
    lines: ["E-Mail-", "Sicherheit"],
    iconPaths: (
      <>
        <rect x="6" y="10" width="28" height="20" rx="2" />
        <polyline points="6,10 20,22 34,10" />
        <path d="M30 28 L30 36 Q34 38 38 36 L38 28 Q34 26 30 28 Z" />
        <polyline points="32,32 34,34 36,30" />
      </>
    ),
  },
  {
    x: 430, y: 340,
    lines: ["Backup &", "Wiederherst."],
    iconPaths: (
      <>
        <ellipse cx="24" cy="16" rx="12" ry="4" />
        <path d="M12 16 L12 24 Q12 28 24 28 Q36 28 36 24 L36 16" />
        <path d="M12 20 Q12 24 24 24 Q36 24 36 20" />
        <path d="M24 32 A8 8 0 0 0 32 24" strokeLinecap="round" />
        <polyline points="32,20 32,24 28,24" />
      </>
    ),
  },
  {
    x: 250, y: 430,
    lines: ["Endpoint", "Monitoring"],
    iconPaths: (
      <>
        <rect x="6" y="8" width="30" height="22" rx="2" />
        <line x1="16" y1="38" x2="32" y2="38" />
        <line x1="24" y1="30" x2="24" y2="38" />
        <polyline points="10,19 15,19 17,14 20,24 23,17 26,22 29,19 38,19" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    x: 70, y: 340,
    lines: ["Security", "Awareness"],
    iconPaths: (
      <>
        <circle cx="24" cy="14" r="6" />
        <path d="M10 38 Q10 28 24 28 Q38 28 38 38" />
        <path d="M19 20 L19 32 Q24 35 29 32 L29 20 Q24 18 19 20 Z" />
        <polyline points="21,26 23,28 27,23" />
      </>
    ),
  },
  {
    x: 70, y: 160,
    lines: ["Netzwerk &", "Infrastruktur"],
    iconPaths: (
      <>
        <circle cx="12" cy="24" r="4" />
        <circle cx="36" cy="12" r="4" />
        <circle cx="36" cy="36" r="4" />
        <line x1="16" y1="24" x2="32" y2="14" />
        <line x1="16" y1="24" x2="32" y2="34" />
        <line x1="36" y1="16" x2="36" y2="32" />
      </>
    ),
  },
];

export function LeistungenHero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div
        className="section-glow-blob pointer-events-none absolute -left-32 -top-32 h-80 w-80 blur-[120px]"
        aria-hidden="true"
        style={{ background: "rgba(227,6,19,0.04)", animationDuration: "22s" }}
      />
      <div
        className="section-glow-blob pointer-events-none absolute -right-20 top-20 h-64 w-64 blur-[100px]"
        aria-hidden="true"
        style={{
          background: "rgba(227,6,19,0.03)",
          animationDuration: "28s",
          animationDelay: "-10s",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Left — text content */}
          <div className="min-w-0 flex-1">
            <p
              className="hero-load hero-load-up font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent"
              style={heroLoadStyle("80ms", "480ms")}
            >
              {content.eyebrow}
            </p>

            <h1
              className="hero-load hero-load-up mt-3 text-3xl font-semibold leading-[1.1] tracking-[-0.04em] text-foreground sm:text-4xl lg:text-5xl"
              style={heroLoadStyle("140ms", "560ms")}
            >
              {content.headline}
            </h1>

            <p
              className="hero-load hero-load-up mt-5 max-w-lg text-base font-light leading-relaxed text-foreground-muted"
              style={heroLoadStyle("220ms", "560ms")}
            >
              {content.lead}
            </p>

            <div
              className="hero-load hero-load-up mt-8 flex flex-wrap gap-3"
              style={heroLoadStyle("300ms", "560ms")}
            >
              <Button renderAs="link" href={content.primaryCta.href} variant="primary">
                <span className="flex items-center gap-2">
                  {content.primaryCta.label}
                  <Icon name="arrowRight" className="size-4 shrink-0" />
                </span>
              </Button>
              <Button renderAs="link" href={content.secondaryCta.href} variant="secondary">
                {content.secondaryCta.label}
              </Button>
            </div>

            {/* Anchor chips */}
            <div
              className="hero-load hero-load-up mt-8 flex flex-wrap gap-2"
              style={heroLoadStyle("380ms", "560ms")}
            >
              {content.anchorChips.map((chip) => (
                <a
                  key={chip.anchor}
                  href={chip.anchor}
                  className="icon-chip-glow rounded-full border border-foreground/8 bg-foreground/[0.05] px-3 py-1 font-mono text-xs font-medium text-foreground-muted transition-colors duration-200 hover:border-accent/30 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {chip.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — hub-and-spoke SVG diagram */}
          <div className="hidden shrink-0 lg:block">
            <ScrollReveal direction="scale" threshold={0.1}>
              <svg
                viewBox="0 0 500 500"
                width="480"
                height="480"
                aria-hidden="true"
                className="overflow-visible"
              >
                {/* Center ambient glow — pulses with glow-pulse keyframe */}
                <circle
                  cx={CX} cy={CY} r={HUB_GLOW_R}
                  fill="rgba(227,6,19,0.07)"
                  className="hub-center-glow"
                />

                {/* Spoke lines */}
                {NODE_DEFS.map((node) => (
                  <line
                    key={node.lines[0]}
                    x1={CX} y1={CY}
                    x2={node.x} y2={node.y}
                    stroke="rgba(227,6,19,0.35)"
                    strokeWidth="1.5"
                    className="dash-flow-path"
                  />
                ))}

                {/* Orbital ring — slowly rotates via hub-ring-rotate */}
                <circle
                  cx={CX} cy={CY} r={HUB_ORBIT_R}
                  fill="none"
                  stroke="rgba(227,6,19,0.22)"
                  strokeWidth="1"
                  className="hub-orbit-ring"
                />

                {/* Hub mid ring */}
                <circle
                  cx={CX} cy={CY} r={HUB_MID_R}
                  fill="rgba(227,6,19,0.05)"
                  stroke="rgba(227,6,19,0.16)"
                  strokeWidth="1"
                />

                {/* Hub inner filled circle */}
                <circle
                  cx={CX} cy={CY} r={HUB_INNER_R}
                  fill="rgba(227,6,19,0.12)"
                  stroke="rgba(227,6,19,0.45)"
                  strokeWidth="1.5"
                />

                {/* Center label */}
                <text
                  x={CX} y={CY - 7}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="12"
                  fontFamily="IBM Plex Mono, monospace"
                  fontWeight="600"
                  fill="rgba(227,6,19,0.88)"
                >
                  {content.diagramCenterLabel.split(" ")[0]}
                </text>
                <text
                  x={CX} y={CY + 8}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="12"
                  fontFamily="IBM Plex Mono, monospace"
                  fontWeight="600"
                  fill="rgba(227,6,19,0.88)"
                >
                  {content.diagramCenterLabel.split(" ")[1]}
                </text>

                {/* Outer nodes */}
                {NODE_DEFS.map((node) => (
                  <g key={node.lines[0]}>
                    {/* Node circle */}
                    <circle
                      cx={node.x} cy={node.y} r={NODE_R}
                      fill="rgba(255,255,255,0.96)"
                      stroke="rgba(5,5,5,0.1)"
                      strokeWidth="1.5"
                    />

                    {/* Pillar icon — centered at (cx, cy-10) */}
                    <g
                      transform={`translate(${node.x - ICON_HALF}, ${node.y - ICON_HALF - 10}) scale(${ICON_SCALE})`}
                      stroke="rgba(5,5,5,0.48)"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {node.iconPaths}
                    </g>

                    {/* Label line 1 */}
                    <text
                      x={node.x} y={node.y + 6}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="10"
                      fontFamily="IBM Plex Mono, monospace"
                      fill="rgba(5,5,5,0.58)"
                    >
                      {node.lines[0]}
                    </text>

                    {/* Label line 2 */}
                    <text
                      x={node.x} y={node.y + 18}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="10"
                      fontFamily="IBM Plex Mono, monospace"
                      fill="rgba(5,5,5,0.58)"
                    >
                      {node.lines[1]}
                    </text>
                  </g>
                ))}
              </svg>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
