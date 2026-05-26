/**
 * Builds a self-hosted static map preview from OpenStreetMap raster tiles.
 * Run: node scripts/build-standort-map.mjs
 *
 * Coordinates: Winzelbürgstr. 9, 90491 Nürnberg
 * @see https://operations.osmfoundation.org/policies/tiles/
 */
import fs from "fs";
import path from "path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const publicDir = path.join(root, "public");

const LAT = 49.4527;
const LON = 11.0775;
const ZOOM = 18;
const OUTPUT_WIDTH = 1200;
const OUTPUT_HEIGHT = 900;
const TILE_SIZE = 256;
const USER_AGENT =
  "FrankenSolutionWebsite/1.0 (kontakt@franken-solution.de; standort map build)";

const webpPath = path.join(publicDir, "standort-map.webp");

function lonToPixel(lon, zoom) {
  return ((lon + 180) / 360) * TILE_SIZE * 2 ** zoom;
}

function latToPixel(lat, zoom) {
  const rad = (lat * Math.PI) / 180;
  return (
    ((1 - Math.log(Math.tan(rad) + 1 / Math.cos(rad)) / Math.PI) / 2) *
    TILE_SIZE *
    2 ** zoom
  );
}

function tileUrl(x, y, zoom) {
  return `https://tile.openstreetmap.org/${zoom}/${x}/${y}.png`;
}

async function fetchTile(x, y, zoom) {
  const response = await fetch(tileUrl(x, y, zoom), {
    headers: { "User-Agent": USER_AGENT },
  });
  if (!response.ok) {
    throw new Error(`Tile ${zoom}/${x}/${y} failed (${response.status})`);
  }
  return Buffer.from(await response.arrayBuffer());
}

async function main() {
  fs.mkdirSync(publicDir, { recursive: true });

  const centerX = lonToPixel(LON, ZOOM);
  const centerY = latToPixel(LAT, ZOOM);

  const left = Math.floor(centerX - OUTPUT_WIDTH / 2);
  const top = Math.floor(centerY - OUTPUT_HEIGHT / 2);

  const tileLeft = Math.floor(left / TILE_SIZE);
  const tileTop = Math.floor(top / TILE_SIZE);
  const tileRight = Math.floor((left + OUTPUT_WIDTH - 1) / TILE_SIZE);
  const tileBottom = Math.floor((top + OUTPUT_HEIGHT - 1) / TILE_SIZE);

  const gridWidth = tileRight - tileLeft + 1;
  const gridHeight = tileBottom - tileTop + 1;
  const canvasWidth = gridWidth * TILE_SIZE;
  const canvasHeight = gridHeight * TILE_SIZE;

  const composites = [];

  for (let ty = tileTop; ty <= tileBottom; ty += 1) {
    for (let tx = tileLeft; tx <= tileRight; tx += 1) {
      const buffer = await fetchTile(tx, ty, ZOOM);
      composites.push({
        input: buffer,
        left: (tx - tileLeft) * TILE_SIZE,
        top: (ty - tileTop) * TILE_SIZE,
      });
    }
  }

  const cropLeft = left - tileLeft * TILE_SIZE;
  const cropTop = top - tileTop * TILE_SIZE;

  const markerRadius = 14;
  const markerX = Math.round(centerX - left - markerRadius);
  const markerY = Math.round(centerY - top - markerRadius);

  const markerSvg = Buffer.from(
    `<svg width="${markerRadius * 2}" height="${markerRadius * 2}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${markerRadius}" cy="${markerRadius}" r="10" fill="#E30613" stroke="white" stroke-width="3"/>
    </svg>`,
  );

  const mapBuffer = await sharp({
    create: {
      width: canvasWidth,
      height: canvasHeight,
      channels: 3,
      background: { r: 240, g: 240, b: 240 },
    },
  })
    .composite(composites)
    .extract({
      left: cropLeft,
      top: cropTop,
      width: OUTPUT_WIDTH,
      height: OUTPUT_HEIGHT,
    })
    .png()
    .toBuffer();

  await sharp(mapBuffer)
    .composite([{ input: markerSvg, left: markerX, top: markerY }])
    .webp({ quality: 82 })
    .toFile(webpPath);

  const { size } = fs.statSync(webpPath);
  console.log(
    `Wrote ${webpPath} (${OUTPUT_WIDTH}x${OUTPUT_HEIGHT}, ${size} bytes)`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
