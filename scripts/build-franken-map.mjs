import fs from "fs";
import path from "path";

const root = path.resolve(import.meta.dirname, "..");
const src = fs.readFileSync(path.join(root, "map.svg"), "utf8");

const REGION_GROUP_IDS = [
  "filter0_d_14_1522",
  "filter1_d_14_1522",
  "filter2_d_14_1522",
];

const regionPaths = REGION_GROUP_IDS.map((filterId) => {
  const groupMatch = src.match(
    new RegExp(`<g filter="url\\(#${filterId}\\)">([\\s\\S]*?)<\\/g>`),
  );
  if (!groupMatch) {
    throw new Error(`Missing region group ${filterId} in map.svg`);
  }
  const fillMatch = groupMatch[1].match(/<path\s+d="(M[^"]+)"\s+fill="white"/i);
  if (!fillMatch) {
    throw new Error(`Missing region fill path in ${filterId}`);
  }
  return fillMatch[1];
});

const labelMatch = src.match(
  /<g filter="url\(#filter3_d_14_1522\)">([\s\S]*?)<\/g>\s*<defs>/,
);
if (!regionPaths.length || !labelMatch) {
  throw new Error("Failed to parse map.svg");
}

function normalizePathMarkup(raw) {
  return raw
    .replace(/\s*fill="#700007"/gi, "")
    .replace(/\s*fill-opacity="[^"]*"/gi, "")
    .replace(/\s*stroke="#700007"/gi, "")
    .replace(/\s*stroke-opacity="[^"]*"/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

function isPinPath(pathMarkup) {
  if (/stroke-width="2"/.test(pathMarkup)) {
    return true;
  }
  const dMatch = pathMarkup.match(/\sd="([^"]+)"/);
  if (!dMatch) {
    return false;
  }
  return dMatch[1].length < 600;
}

function normalizePinPath(raw) {
  let path = raw
    .replace(/\s*fill="[^"]*"/gi, "")
    .replace(/\s*fill-opacity="[^"]*"/gi, "")
    .replace(/\s*stroke="[^"]*"/gi, "")
    .replace(/\s*stroke-width="[^"]*"/gi, "")
    .replace(/\s*stroke-linecap="[^"]*"/gi, "")
    .replace(/\s*stroke-linejoin="[^"]*"/gi, "")
    .replace(/\s*\/\s*>$/, "")
    .trim();

  return `${path} stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
}

const allLabelGroupPaths = [...labelMatch[1].matchAll(/<path[\s\S]*?\/>/gi)].map(
  (m) => normalizePathMarkup(m[0]),
);

const pinPaths = allLabelGroupPaths.filter(isPinPath);
const labelPaths = allLabelGroupPaths.filter((p) => !isPinPath(p));

const clipPaths = regionPaths.map((d) => `    <path d="${d}"/>`).join("\n");
const fillPaths = regionPaths.map((d) => `    <path d="${d}"/>`).join("\n");
const outlinePaths = regionPaths.map((d) => `    <path d="${d}"/>`).join("\n");

const labelLines = labelPaths.map((p) => `      ${p}`).join("\n");
const pinLines = pinPaths.map((p) => `      ${normalizePinPath(p)}`).join("\n");

const ACCENT_DEEP = "#9a050e";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1348 1086" fill="none" aria-hidden="true">
  <defs>
    <style>
      .franken-map__fill path { fill: url(#franken-fill); }
      .franken-map__outline path {
        fill: none;
        stroke: ${ACCENT_DEEP};
        stroke-width: 1.8;
        stroke-opacity: 0.28;
        stroke-linejoin: round;
        stroke-linecap: round;
      }
      .franken-map__labels path { fill: ${ACCENT_DEEP}; fill-opacity: 0.12; }
      .franken-map__labels path[stroke] {
        fill: ${ACCENT_DEEP};
        stroke: ${ACCENT_DEEP};
        stroke-opacity: 0.18;
      }
      .franken-map__pin path {
        fill: none;
        stroke: #ffffff;
        stroke-opacity: 0.5;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
    </style>
    <linearGradient id="franken-fill" x1="674" y1="40" x2="674" y2="1046" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${ACCENT_DEEP}" stop-opacity="0.11"/>
      <stop offset="52%" stop-color="${ACCENT_DEEP}" stop-opacity="0.07"/>
      <stop offset="100%" stop-color="${ACCENT_DEEP}" stop-opacity="0.02"/>
    </linearGradient>
    <clipPath id="franken-clip">
${clipPaths}
    </clipPath>
    <filter id="franken-region-shadow" x="0" y="0" width="1348" height="1086" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
    </filter>
  </defs>
  <g clip-path="url(#franken-clip)">
    <g class="franken-map__fill" filter="url(#franken-region-shadow)">
${fillPaths}
    </g>
    <g class="franken-map__labels">
${labelLines}
    </g>
    <g class="franken-map__pin">
${pinLines}
    </g>
  </g>
  <g class="franken-map__outline">
${outlinePaths}
  </g>
</svg>
`;

fs.writeFileSync(path.join(root, "public", "franken-map.svg"), svg);
console.log(
  `Wrote public/franken-map.svg (${regionPaths.length} regions, ${labelPaths.length} labels, ${pinPaths.length} pin paths)`,
);
