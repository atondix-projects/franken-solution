import type { CSSProperties, ReactNode } from "react";
import { leistungenContent } from "@/content/leistungen";
import type { LeistungenPillarGroup } from "@/content/leistungen";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Icon } from "@/components/ui/Icon";

const content = leistungenContent.kopfbereich;
const pillarGroups = leistungenContent.leistungsgruppen.gruppen;

function heroLoadStyle(delay: string, duration: string): CSSProperties {
  return {
    "--hero-load-delay": delay,
    "--hero-load-duration": duration,
  } as CSSProperties;
}

// Hub diagram constants
const CX = 250;
const CY = 250;
const NODE_HALF_W = 68;
const NODE_HALF_H = 52;
const NODE_SIZE_W = NODE_HALF_W * 2;
const NODE_SIZE_H = NODE_HALF_H * 2;
const NODE_LABEL_PAD_X = 2;
const NODE_LABEL_TOP = 30;
const NODE_RX = 12;
const NODE_ORBIT_R = 200;
const HUB_SPOKE_R = 40;
const HUB_INNER_R = 36;
const HUB_MID_R = 46;
const HUB_ORBIT_R = 54;
const HUB_GLOW_R = 66;
const ICON_SCALE = 0.38;
const ICON_HALF = 24 * ICON_SCALE;
const ICON_TOP_OFFSET = 14;

type Slug = LeistungenPillarGroup["pfadKennung"];

function nodeRect(
  cx: number,
  cy: number,
  pad = 0,
): { x: number; y: number; width: number; height: number; rx: number } {
  const halfW = NODE_HALF_W + pad;
  const halfH = NODE_HALF_H + pad;
  return {
    x: cx - halfW,
    y: cy - halfH,
    width: halfW * 2,
    height: halfH * 2,
    rx: NODE_RX + pad * 0.25,
  };
}

function spokePoint(
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  insetX: number,
  insetY: number,
): { x: number; y: number } {
  const dx = toX - fromX;
  const dy = toY - fromY;
  const len = Math.hypot(dx, dy);
  if (len === 0) {
    return { x: toX, y: toY };
  }
  const ux = dx / len;
  const uy = dy / len;
  const t = Math.min(
    insetX / Math.abs(ux || Number.POSITIVE_INFINITY),
    insetY / Math.abs(uy || Number.POSITIVE_INFINITY),
  );
  return { x: toX - ux * t, y: toY - uy * t };
}

/** Short two-line labels for diagram cells (full title stays in aria-label) */
const DIAGRAM_LABEL_OVERRIDES: Partial<Record<string, [string, string]>> = {
  "identitaet-und-zugriffsschutz": ["Identität", "& Zugriff"],
  "email-sicherheit-und-archivierung": ["E-Mail-", "Sicherheit"],
  "backup-und-wiederherstellung": ["Backup", "& Recovery"],
  "netzwerk-und-infrastruktur": ["Netzwerk", "& Infrastruktur"],
};

/** Two display lines per cell — splits on " und " without showing it */
function diagramLabelLines(slug: Slug, title: string): [string, string] {
  const override = DIAGRAM_LABEL_OVERRIDES[slug];
  if (override) {
    return override;
  }
  const und = title.indexOf(" und ");
  if (und !== -1) {
    return [title.slice(0, und), title.slice(und + 5)];
  }
  const space = title.indexOf(" ");
  if (space !== -1) {
    return [title.slice(0, space), title.slice(space + 1)];
  }
  return [title, ""];
}

/** Six nodes on a ring — index order matches pillarGroups */
function orbitPosition(index: number): { x: number; y: number } {
  const angle = (-90 + index * 60) * (Math.PI / 180);
  return {
    x: CX + NODE_ORBIT_R * Math.cos(angle),
    y: CY + NODE_ORBIT_R * Math.sin(angle),
  };
}

const NODE_ICON_PATHS: ReactNode[] = [
  <>
    <circle cx="24" cy="20" r="8" />
    <line x1="29.6" y1="25.6" x2="38" y2="34" />
    <line x1="35" y1="31" x2="38" y2="34" />
    <line x1="35" y1="34" x2="38" y2="31" />
  </>,
  <>
    <rect x="6" y="10" width="28" height="20" rx="2" />
    <polyline points="6,10 20,22 34,10" />
    <path d="M30 28 L30 36 Q34 38 38 36 L38 28 Q34 26 30 28 Z" />
    <polyline points="32,32 34,34 36,30" />
  </>,
  <>
    <ellipse cx="24" cy="16" rx="12" ry="4" />
    <path d="M12 16 L12 24 Q12 28 24 28 Q36 28 36 24 L36 16" />
    <path d="M12 20 Q12 24 24 24 Q36 24 36 20" />
    <path d="M24 32 A8 8 0 0 0 32 24" strokeLinecap="round" />
    <polyline points="32,20 32,24 28,24" />
  </>,
  <>
    <rect x="6" y="8" width="30" height="22" rx="2" />
    <line x1="16" y1="38" x2="32" y2="38" />
    <line x1="24" y1="30" x2="24" y2="38" />
    <polyline
      points="10,19 15,19 17,14 20,24 23,17 26,22 29,19 38,19"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>,
  <>
    <circle cx="24" cy="14" r="6" />
    <path d="M10 38 Q10 28 24 28 Q38 28 38 38" />
    <path d="M19 20 L19 32 Q24 35 29 32 L29 20 Q24 18 19 20 Z" />
    <polyline points="21,26 23,28 27,23" />
  </>,
  <>
    <circle cx="12" cy="24" r="4" />
    <circle cx="36" cy="12" r="4" />
    <circle cx="36" cy="36" r="4" />
    <line x1="16" y1="24" x2="32" y2="14" />
    <line x1="16" y1="24" x2="32" y2="34" />
    <line x1="36" y1="16" x2="36" y2="32" />
  </>,
];

const DIAGRAM_NODES = pillarGroups.map((group, index) => {
  const { x, y } = orbitPosition(index);
  const [line1, line2] = diagramLabelLines(group.pfadKennung as Slug, group.überschrift);
  return {
    x,
    y,
    slug: group.pfadKennung as Slug,
    title: group.überschrift,
    href: `#${group.pfadKennung}`,
    lines: [line1, line2] as [string, string],
    iconPaths: NODE_ICON_PATHS[index],
  };
});

export function LeistungenHero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div
        className="section-glow-blob pointer-events-none absolute -left-32 -top-32 h-80 w-80 blur-[120px]"
        aria-hidden="true"
        style={{ background: "var(--accent-glow)", animationDuration: "22s" }}
      />
      <div
        className="section-glow-blob pointer-events-none absolute -right-20 top-20 h-64 w-64 blur-[100px]"
        aria-hidden="true"
        style={{
          background: "var(--accent-glow)",
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
              {content.vorzeile}
            </p>

            <h1
              className="hero-load hero-load-up mt-3 text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-foreground sm:text-4xl"
              style={heroLoadStyle("140ms", "560ms")}
            >
              {content.überschrift}
            </h1>

            <p
              className="hero-load hero-load-up mt-5 max-w-lg text-base font-light leading-relaxed text-foreground-muted sm:text-lg"
              style={heroLoadStyle("220ms", "560ms")}
            >
              {content.einleitung}
            </p>

            <div
              className="hero-load hero-load-up mt-8 flex flex-wrap gap-3"
              style={heroLoadStyle("300ms", "560ms")}
            >
              <Button
                renderAs="link"
                href={content.primärerAufruf.verlinkung}
                variant="primary"
              >
                <span className="flex items-center gap-2">
                  {content.primärerAufruf.beschriftung}
                  <Icon name="arrowRight" className="size-4 shrink-0" />
                </span>
              </Button>
              <Button
                renderAs="link"
                href={content.sekundärerAufruf.verlinkung}
                variant="secondary"
              >
                {content.sekundärerAufruf.beschriftung}
              </Button>
            </div>

            {/* Anchor chips */}
            <div
              className="hero-load hero-load-up mt-8 flex flex-wrap gap-2"
              style={heroLoadStyle("380ms", "560ms")}
            >
              {content.sprungMarken.map((chip) => (
                <a
                  key={chip.sprungZiel}
                  href={chip.sprungZiel}
                  className="icon-chip-glow rounded-full border border-foreground/8 bg-foreground/[0.05] px-3 py-1 font-mono text-xs font-medium text-foreground-muted transition-colors duration-200 hover:border-accent/30 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {chip.beschriftung}
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
                role="img"
                aria-labelledby="leistungen-hub-diagram-title"
                className="overflow-visible"
              >
                <title id="leistungen-hub-diagram-title">
                  {content.diagrammTitel}
                </title>

                {/* Center ambient glow — pulses with glow-pulse keyframe */}
                <circle
                  cx={CX}
                  cy={CY}
                  r={HUB_GLOW_R}
                  fill="var(--accent-glow)"
                  className="hub-center-glow"
                />

                {/* Spoke lines — hub edge to cell edge */}
                {DIAGRAM_NODES.map((node) => {
                  const hub = spokePoint(
                    node.x,
                    node.y,
                    CX,
                    CY,
                    HUB_SPOKE_R,
                    HUB_SPOKE_R,
                  );
                  const cell = spokePoint(
                    CX,
                    CY,
                    node.x,
                    node.y,
                    NODE_HALF_W,
                    NODE_HALF_H,
                  );
                  return (
                    <line
                      key={node.slug}
                      x1={hub.x}
                      y1={hub.y}
                      x2={cell.x}
                      y2={cell.y}
                      stroke="var(--accent-deep)"
                      strokeOpacity="0.35"
                      strokeWidth="1.5"
                      className="dash-flow-path"
                    />
                  );
                })}

                {/* Orbital ring — slowly rotates via hub-ring-rotate */}
                <circle
                  cx={CX}
                  cy={CY}
                  r={HUB_ORBIT_R}
                  fill="none"
                  stroke="var(--accent-deep)"
                  strokeOpacity="0.22"
                  strokeWidth="1"
                  className="hub-orbit-ring"
                />

                {/* Hub mid ring */}
                <circle
                  cx={CX}
                  cy={CY}
                  r={HUB_MID_R}
                  fill="var(--accent-deep)"
                  fillOpacity="0.05"
                  stroke="var(--accent-deep)"
                  strokeOpacity="0.16"
                  strokeWidth="1"
                />

                {/* Hub inner filled circle */}
                <circle
                  cx={CX}
                  cy={CY}
                  r={HUB_INNER_R}
                  fill="var(--accent-deep)"
                  fillOpacity="0.12"
                  stroke="var(--accent)"
                  strokeOpacity="0.45"
                  strokeWidth="1.5"
                />

                {/* Center label */}
                <text
                  x={CX}
                  y={CY - 7}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="font-mono text-[14px] font-semibold"
                  fill="var(--accent)"
                  fillOpacity="0.88"
                >
                  {content.diagrammMittelbeschriftung.split(" ")[0]}
                </text>
                <text
                  x={CX}
                  y={CY + 8}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="font-mono text-[14px] font-semibold"
                  fill="var(--accent)"
                  fillOpacity="0.88"
                >
                  {content.diagrammMittelbeschriftung.split(" ")[1]}
                </text>

                {/* Outer nodes — each links to the matching detail card */}
                {DIAGRAM_NODES.map((node) => {
                  const hit = nodeRect(node.x, node.y, 6);
                  const focus = nodeRect(node.x, node.y, 4);
                  const body = nodeRect(node.x, node.y);

                  return (
                    <a
                      key={node.slug}
                      href={node.href}
                      className="hub-node-link"
                      aria-label={`${node.title} — Details ansehen`}
                    >
                      <rect
                        {...hit}
                        fill="transparent"
                        className="pointer-events-auto"
                      />

                      <rect {...focus} className="hub-node-focus-ring" />

                      <rect
                        {...body}
                        fill="rgba(255,255,255,0.96)"
                        stroke="rgba(5,5,5,0.1)"
                        strokeWidth="1.5"
                        className="hub-node-surface"
                      />

                      <g
                        transform={`translate(${node.x - ICON_HALF}, ${node.y - NODE_HALF_H + ICON_TOP_OFFSET}) scale(${ICON_SCALE})`}
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="hub-node-icon"
                      >
                        {node.iconPaths}
                      </g>

                      <foreignObject
                        x={node.x - NODE_HALF_W + NODE_LABEL_PAD_X}
                        y={node.y - NODE_HALF_H + NODE_LABEL_TOP}
                        width={NODE_SIZE_W - NODE_LABEL_PAD_X * 2}
                        height={NODE_SIZE_H - NODE_LABEL_TOP - 6}
                        className="overflow-visible"
                      >
                        <div
                          {...{ xmlns: "http://www.w3.org/1999/xhtml" }}
                          className="hub-node-label-html flex h-full flex-col items-center justify-center gap-px px-0.5 text-center font-mono text-[14px] leading-tight text-foreground/60"
                        >
                          <span>{node.lines[0]}</span>
                          {node.lines[1] ? <span>{node.lines[1]}</span> : null}
                        </div>
                      </foreignObject>
                    </a>
                  );
                })}
              </svg>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
