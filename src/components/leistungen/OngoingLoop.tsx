import { leistungenContent } from "@/content/leistungen";
import { ScrollReveal } from "@/components/ScrollReveal";

const content = leistungenContent.ongoing;

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
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-20">
          {/* Diagram */}
          <div className="flex shrink-0 justify-center lg:justify-start">
            <ScrollReveal direction="scale" threshold={0.15}>
              <svg
                viewBox="0 0 300 300"
                width="300"
                height="300"
                aria-hidden="true"
                className="overflow-visible"
              >
                <defs>
                  <marker
                    id="ongoing-loop-arrow"
                    markerWidth="7"
                    markerHeight="7"
                    refX="5"
                    refY="3.5"
                    orient="auto"
                  >
                    <path d="M0,0.5 L6,3.5 L0,6.5 Z" fill="rgba(227,6,19,0.7)" />
                  </marker>
                </defs>

                {/* Arcs — connect node surfaces, not centers */}
                <path
                  d="M150,40 Q260,40 260,120"
                  fill="none"
                  stroke="rgba(227,6,19,0.5)"
                  strokeWidth="2"
                  markerEnd="url(#ongoing-loop-arrow)"
                  className="dash-flow-path"
                />
                <path
                  d="M260,180 Q260,260 180,260"
                  fill="none"
                  stroke="rgba(227,6,19,0.5)"
                  strokeWidth="2"
                  markerEnd="url(#ongoing-loop-arrow)"
                  className="dash-flow-path"
                />
                <path
                  d="M120,260 Q40,260 40,180"
                  fill="none"
                  stroke="rgba(227,6,19,0.5)"
                  strokeWidth="2"
                  markerEnd="url(#ongoing-loop-arrow)"
                  className="dash-flow-path"
                />
                <path
                  d="M40,120 Q40,40 120,40"
                  fill="none"
                  stroke="rgba(227,6,19,0.5)"
                  strokeWidth="2"
                  markerEnd="url(#ongoing-loop-arrow)"
                  className="dash-flow-path"
                />

                {/* Center hub — double ring */}
                <circle
                  cx="150"
                  cy="150"
                  r="52"
                  fill="rgba(227,6,19,0.07)"
                  stroke="rgba(227,6,19,0.3)"
                  strokeWidth="1.5"
                />
                <circle
                  cx="150"
                  cy="150"
                  r="42"
                  fill="rgba(227,6,19,0.1)"
                  stroke="rgba(227,6,19,0.5)"
                  strokeWidth="1.5"
                />
                <text
                  x="150"
                  y="150"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="13"
                  fontFamily="IBM Plex Mono, monospace"
                  fontWeight="700"
                  fill="rgb(227,6,19)"
                >
                  {content.centerLabel}
                </text>

                {/* Node 1 — Top (150, 40) */}
                <circle
                  cx="150"
                  cy="40"
                  r="30"
                  fill="rgba(255,255,255,0.88)"
                  stroke="rgba(227,6,19,0.5)"
                  strokeWidth="1.5"
                />
                {/* Number */}
                <text
                  x="150"
                  y="40"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="16"
                  fontFamily="IBM Plex Mono, monospace"
                  fontWeight="700"
                  fill="rgb(227,6,19)"
                >
                  1
                </text>
                {/* Label — above the circle */}
                <text
                  x="150"
                  y="2"
                  textAnchor="middle"
                  fontSize="9.5"
                  fontFamily="IBM Plex Mono, monospace"
                  fontWeight="600"
                  fill="rgba(255,255,255,0.72)"
                >
                  Monitoring und
                </text>
                <text
                  x="150"
                  y="13"
                  textAnchor="middle"
                  fontSize="9.5"
                  fontFamily="IBM Plex Mono, monospace"
                  fontWeight="600"
                  fill="rgba(255,255,255,0.72)"
                >
                  Erkennung
                </text>

                {/* Node 2 — Right (260, 150) */}
                <circle
                  cx="260"
                  cy="150"
                  r="30"
                  fill="rgba(255,255,255,0.88)"
                  stroke="rgba(227,6,19,0.5)"
                  strokeWidth="1.5"
                />
                <text
                  x="260"
                  y="150"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="16"
                  fontFamily="IBM Plex Mono, monospace"
                  fontWeight="700"
                  fill="rgb(227,6,19)"
                >
                  2
                </text>
                {/* Label — right of circle, fits in flex gap between SVG and text column */}
                <text
                  x="294"
                  y="144"
                  textAnchor="start"
                  fontSize="9.5"
                  fontFamily="IBM Plex Mono, monospace"
                  fontWeight="600"
                  fill="rgba(255,255,255,0.72)"
                >
                  Bewertung und
                </text>
                <text
                  x="294"
                  y="156"
                  textAnchor="start"
                  fontSize="9.5"
                  fontFamily="IBM Plex Mono, monospace"
                  fontWeight="600"
                  fill="rgba(255,255,255,0.72)"
                >
                  Priorisierung
                </text>

                {/* Node 3 — Bottom (150, 260) */}
                <circle
                  cx="150"
                  cy="260"
                  r="30"
                  fill="rgba(255,255,255,0.88)"
                  stroke="rgba(227,6,19,0.5)"
                  strokeWidth="1.5"
                />
                <text
                  x="150"
                  y="260"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="16"
                  fontFamily="IBM Plex Mono, monospace"
                  fontWeight="700"
                  fill="rgb(227,6,19)"
                >
                  3
                </text>
                {/* Label — below the circle */}
                <text
                  x="150"
                  y="296"
                  textAnchor="middle"
                  fontSize="9.5"
                  fontFamily="IBM Plex Mono, monospace"
                  fontWeight="600"
                  fill="rgba(255,255,255,0.72)"
                >
                  Umsetzung und
                </text>
                <text
                  x="150"
                  y="307"
                  textAnchor="middle"
                  fontSize="9.5"
                  fontFamily="IBM Plex Mono, monospace"
                  fontWeight="600"
                  fill="rgba(255,255,255,0.72)"
                >
                  Anpassung
                </text>

                {/* Node 4 — Left (40, 150) */}
                <circle
                  cx="40"
                  cy="150"
                  r="30"
                  fill="rgba(255,255,255,0.88)"
                  stroke="rgba(227,6,19,0.5)"
                  strokeWidth="1.5"
                />
                <text
                  x="40"
                  y="150"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="16"
                  fontFamily="IBM Plex Mono, monospace"
                  fontWeight="700"
                  fill="rgb(227,6,19)"
                >
                  4
                </text>
                {/* Label — below the node; arc terminates at circle surface (y=180) so 6px gap */}
                <text
                  x="40"
                  y="192"
                  textAnchor="middle"
                  fontSize="9.5"
                  fontFamily="IBM Plex Mono, monospace"
                  fontWeight="600"
                  fill="rgba(255,255,255,0.72)"
                >
                  Weiterent-
                </text>
                <text
                  x="40"
                  y="203"
                  textAnchor="middle"
                  fontSize="9.5"
                  fontFamily="IBM Plex Mono, monospace"
                  fontWeight="600"
                  fill="rgba(255,255,255,0.72)"
                >
                  wicklung
                </text>
              </svg>
            </ScrollReveal>
          </div>

          {/* Text content */}
          <div className="flex-1">
            <ScrollReveal direction="up">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
                {content.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-[1.15] tracking-[-0.04em] text-white/88 sm:text-4xl">
                {content.headline}
              </h2>
              <p className="mt-4 text-base font-light leading-relaxed text-white/55">
                {content.description}
              </p>
            </ScrollReveal>

            <ol className="mt-8 flex flex-col gap-6" role="list">
              {content.cycle.map((step, i) => (
                <ScrollReveal key={step.title} direction="up" stagger={70} index={i} delay={120}>
                  <li className="flex gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent/6 font-mono text-[11px] font-semibold text-accent">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white/88">{step.title}</p>
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
