import { leistungenContent } from "@/content/leistungen";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  diagramNodeRect,
  ringPosition,
  splitDiagramTitle,
} from "./diagram-shared";
import { OngoingLoopMobile } from "./OngoingLoopMobile";

const content = leistungenContent.ongoing;

const CX = 250;
const CY = 250;
const NODE_HALF_W = 76;
const NODE_HALF_H = 60;
const NODE_SIZE_W = NODE_HALF_W * 2;
const NODE_SIZE_H = NODE_HALF_H * 2;
const NODE_RX = 12;
const NODE_LABEL_PAD_X = 2;
const NODE_LABEL_TOP = 30;
const ORBIT_R = 168;
const CONNECTOR_BULGE = 48;

const DEPARTURE_OFFSETS = [
  [NODE_HALF_W, 0],
  [0, NODE_HALF_H],
  [-NODE_HALF_W, 0],
  [0, -NODE_HALF_H],
] as const;

const ARRIVAL_OFFSETS = [
  [-NODE_HALF_W, 0],
  [0, -NODE_HALF_H],
  [NODE_HALF_W, 0],
  [0, NODE_HALF_H],
] as const;
const HUB_INNER_R = 36;
const HUB_MID_R = 46;
const HUB_ORBIT_R = 54;
const HUB_GLOW_R = 66;

const LOOP_LABEL_OVERRIDES: Record<number, [string, string]> = {
  4: ["Weiterent", "wicklung"],
};

function loopLabelLines(index: number, title: string): [string, string] {
  return LOOP_LABEL_OVERRIDES[index + 1] ?? splitDiagramTitle(title);
}

const LOOP_NODES = content.cycle.map((step, index) => {
  const pos = ringPosition(CX, CY, ORBIT_R, index, 4);
  const [line1, line2] = loopLabelLines(index, step.title);
  return {
    ...pos,
    index: index + 1,
    title: step.title,
    lines: [line1, line2] as [string, string],
  };
});

export function OngoingLoop() {
  return (
    <section
      id="laufende-betreuung"
      className="relative overflow-hidden bg-background-muted py-20 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-12 md:gap-16 lg:flex-row lg:items-center lg:gap-20">
          {/* md+: ring diagram — same language as Leistungen hero hub */}
          <div className="order-2 hidden w-full min-w-0 justify-center md:order-1 md:block md:max-w-[440px] lg:justify-start">
            <ScrollReveal direction="scale" threshold={0.15}>
              <svg
                viewBox="0 0 500 500"
                role="img"
                aria-labelledby="ongoing-loop-diagram-title"
                className="ongoing-loop-diagram h-auto w-full overflow-visible"
              >
                <title id="ongoing-loop-diagram-title">
                  {content.diagramTitle}
                </title>

                <defs>
                  <marker
                    id="ongoing-loop-arrow"
                    markerWidth="7"
                    markerHeight="7"
                    refX="5"
                    refY="3.5"
                    orient="auto"
                  >
                    <path
                      d="M0,0.5 L6,3.5 L0,6.5 Z"
                      fill="rgba(227,6,19,0.55)"
                    />
                  </marker>
                </defs>

                {/* Cycle connectors — outer edge-center to outer edge-center */}
                {LOOP_NODES.map((node, i) => {
                  const next = LOOP_NODES[(i + 1) % LOOP_NODES.length];
                  const [dox, doy] = DEPARTURE_OFFSETS[i];
                  const [aox, aoy] = ARRIVAL_OFFSETS[(i + 1) % 4];
                  const sx = node.x + dox;
                  const sy = node.y + doy;
                  const ex = next.x + aox;
                  const ey = next.y + aoy;
                  const midX = (sx + ex) / 2;
                  const midY = (sy + ey) / 2;
                  const ddx = midX - CX;
                  const ddy = midY - CY;
                  const len = Math.hypot(ddx, ddy) || 1;
                  const qx = midX + (ddx / len) * CONNECTOR_BULGE;
                  const qy = midY + (ddy / len) * CONNECTOR_BULGE;
                  return (
                    <path
                      key={`arc-${node.index}`}
                      d={`M${sx},${sy} Q${qx},${qy} ${ex},${ey}`}
                      fill="none"
                      stroke="rgba(227,6,19,0.35)"
                      strokeWidth="1.5"
                      markerEnd="url(#ongoing-loop-arrow)"
                      className="dash-flow-path"
                    />
                  );
                })}

                {/* Center hub — readable on dark section */}
                <g className="ongoing-loop-hub">
                  <circle
                    cx={CX}
                    cy={CY}
                    r={HUB_GLOW_R}
                    fill="rgba(227,6,19,0.05)"
                    className="ongoing-loop-hub-glow"
                  />
                  <circle
                    cx={CX}
                    cy={CY}
                    r={HUB_ORBIT_R}
                    fill="none"
                    stroke="rgba(227,6,19,0.18)"
                    strokeWidth="1"
                    className="ongoing-loop-hub-ring"
                  />
                  <circle
                    cx={CX}
                    cy={CY}
                    r={HUB_MID_R}
                    fill="rgba(255,255,255,0.04)"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="1"
                  />
                  <circle
                    cx={CX}
                    cy={CY}
                    r={HUB_INNER_R}
                    fill="rgba(22,23,29,0.95)"
                    stroke="rgba(227,6,19,0.4)"
                    strokeWidth="1.5"
                  />
                  <text
                    x={CX}
                    y={CY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="ongoing-loop-hub-label font-mono text-[15px] font-semibold"
                    fill="rgba(255,255,255,0.92)"
                  >
                    {content.centerLabel}
                  </text>
                </g>

                {/* Process steps */}
                {LOOP_NODES.map((node) => {
                  const body = diagramNodeRect(
                    node.x,
                    node.y,
                    NODE_HALF_W,
                    NODE_HALF_H,
                    NODE_RX,
                  );

                  return (
                    <g
                      key={node.index}
                      aria-label={`Schritt ${node.index}: ${node.title}`}
                    >
                      <rect
                        {...body}
                        fill="rgba(255,255,255,0.07)"
                        stroke="rgba(255,255,255,0.14)"
                        strokeWidth="1.5"
                        className="hub-node-surface"
                      />

                      <text
                        x={node.x}
                        y={node.y - NODE_HALF_H + 18}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="font-mono text-[16px] font-semibold"
                        fill="rgba(227,6,19,0.88)"
                      >
                        {node.index}
                      </text>

                      <foreignObject
                        x={node.x - NODE_HALF_W + NODE_LABEL_PAD_X}
                        y={node.y - NODE_HALF_H + NODE_LABEL_TOP}
                        width={NODE_SIZE_W - NODE_LABEL_PAD_X * 2}
                        height={NODE_SIZE_H - NODE_LABEL_TOP - 6}
                        className="overflow-hidden"
                      >
                        <div
                          {...{ xmlns: "http://www.w3.org/1999/xhtml" }}
                          className="ongoing-loop-label hub-node-label-html flex h-full flex-col items-center justify-center gap-px px-0.5 text-center font-mono text-[16px] leading-tight text-white/82"
                        >
                          <span>{node.lines[0]}</span>
                          {node.lines[1] ? <span>{node.lines[1]}</span> : null}
                        </div>
                      </foreignObject>
                    </g>
                  );
                })}
              </svg>
            </ScrollReveal>
          </div>

          {/* Text content */}
          <div className="order-1 flex flex-1 flex-col md:order-2">
            <ScrollReveal direction="up">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
                {content.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-[1.15] tracking-[-0.04em] text-white/88 sm:text-3xl">
                {content.headline}
              </h2>
              <p className="mt-4 text-base font-light leading-relaxed text-white/55">
                {content.description}
              </p>
            </ScrollReveal>

            <div className="mt-10 md:hidden">
              <OngoingLoopMobile
                steps={content.cycle}
                centerLabel={content.centerLabel}
                diagramTitle={content.diagramTitle}
              />
            </div>

            <ol className="mt-8 hidden flex-col gap-6 md:flex" role="list">
              {content.cycle.map((step, i) => (
                <ScrollReveal
                  key={step.title}
                  direction="up"
                  stagger={70}
                  index={i}
                  delay={120}
                >
                  <li className="flex gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent/6 font-mono text-xs font-semibold text-accent">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white/88">
                        {step.title}
                      </p>
                      <p className="mt-1 text-sm font-light leading-relaxed text-white/55">
                        {step.body}
                      </p>
                    </div>
                  </li>
                </ScrollReveal>
              ))}
            </ol>

            <ScrollReveal direction="up" delay={400} className="mt-8">
              <blockquote className="border-l-2 border-accent pl-4 text-sm font-light leading-relaxed text-white/55">
                {content.callout}
              </blockquote>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
