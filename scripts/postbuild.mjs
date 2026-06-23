#!/usr/bin/env node
import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const outDir = join(root, "out");

const fiveHundredSrc = join(outDir, "500", "index.html");
const fiveHundredDest = join(outDir, "500.html");
const sitemap = join(outDir, "sitemap.xml");

if (!existsSync(outDir)) {
  console.error("postbuild: out/ not found — run next build first.");
  process.exit(1);
}

if (existsSync(fiveHundredSrc)) {
  copyFileSync(fiveHundredSrc, fiveHundredDest);
  console.log("postbuild: copied out/500/index.html → out/500.html");
} else {
  console.warn("postbuild: out/500/index.html not found — skipping 500.html copy");
}

if (existsSync(sitemap)) {
  console.log("postbuild: sitemap.xml generated at out/sitemap.xml");
} else {
  console.error("postbuild: sitemap.xml missing from build output.");
  process.exit(1);
}
