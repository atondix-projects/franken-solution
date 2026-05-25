/** Shared SVG diagram helpers (Leistungen hero + ongoing loop) */

export function spokePoint(
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

export function diagramNodeRect(
  cx: number,
  cy: number,
  halfW: number,
  halfH: number,
  rx: number,
  pad = 0,
): { x: number; y: number; width: number; height: number; rx: number } {
  const w = halfW + pad;
  const h = halfH + pad;
  return {
    x: cx - w,
    y: cy - h,
    width: w * 2,
    height: h * 2,
    rx: rx + pad * 0.25,
  };
}

/** Two lines — splits on " und " without showing it */
export function splitDiagramTitle(title: string): [string, string] {
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

export function ringPosition(
  cx: number,
  cy: number,
  radius: number,
  index: number,
  count: number,
  startDeg = -90,
): { x: number; y: number } {
  const angle = (startDeg + (360 / count) * index) * (Math.PI / 180);
  return {
    x: cx + radius * Math.cos(angle),
    y: cy + radius * Math.sin(angle),
  };
}

export function curvedConnectorPath(
  from: { x: number; y: number },
  to: { x: number; y: number },
  halfW: number,
  halfH: number,
  centerX: number,
  centerY: number,
  bulge = 36,
): string {
  const start = spokePoint(from.x, from.y, to.x, to.y, halfW, halfH);
  const end = spokePoint(to.x, to.y, from.x, from.y, halfW, halfH);
  const midX = (start.x + end.x) / 2;
  const midY = (start.y + end.y) / 2;
  const dx = midX - centerX;
  const dy = midY - centerY;
  const len = Math.hypot(dx, dy) || 1;
  const qx = midX + (dx / len) * bulge;
  const qy = midY + (dy / len) * bulge;
  return `M${start.x},${start.y} Q${qx},${qy} ${end.x},${end.y}`;
}
