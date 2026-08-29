import { copyFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const dist = resolve(root, "dist");
const pub = resolve(root, "public");

const files = [".htaccess", "robots.txt", "sitemap.xml"];

for (const f of files) {
  const src = resolve(pub, f);
  const dest = resolve(dist, f);
  if (existsSync(src)) {
    copyFileSync(src, dest);
    console.log(`copied: ${f}`);
  }
}