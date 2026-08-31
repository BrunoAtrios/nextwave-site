import sharp from "sharp";
import fs from "fs";

const svg = fs.readFileSync("public/favicon.svg");
const sizes = [16, 32, 48, 64, 128, 192, 256, 512];

for (const s of sizes) {
  await sharp(svg).resize(s, s).png().toFile(`public/favicon-${s}.png`);
  console.log(`Gerado favicon-${s}.png`);
}