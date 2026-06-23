#!/usr/bin/env node
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, relative, extname } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const outDir = join(root, "out");

const requiredAssets = [
  "favicon.ico",
  "favicon.svg",
  "favicon-96x96.png",
  "apple-touch-icon.png",
  "site.webmanifest",
  "web-app-manifest-192x192.png",
  "web-app-manifest-512x512.png",
];

const requiredPages = [
  "index.html",
  "404.html",
  "500.html",
  "500/index.html",
  "about/index.html",
  "services/index.html",
  "services/tax-planning/index.html",
  "services/gst-compliance/index.html",
  "services/audit-assurance/index.html",
  "services/bookkeeping/index.html",
  "services/company-incorporation/index.html",
  "services/mutual-fund-wealth/index.html",
  "blog/index.html",
  "contact/index.html",
  "faq/index.html",
  "sitemap.xml",
  "robots.txt",
];

const requiredHeadFragments = [
  'href="/favicon.ico"',
  'href="/favicon-96x96.png"',
  'href="/favicon.svg"',
  'href="/apple-touch-icon.png"',
  'name="apple-mobile-web-app-title"',
  'content="SanjuCA"',
  'href="/site.webmanifest"',
];

const skipLinkPrefixes = ["/_next/", "#", "mailto:", "tel:"];
const skipLinkPaths = new Set([
  "/favicon.ico",
  "/favicon.svg",
  "/favicon-96x96.png",
  "/apple-touch-icon.png",
  "/site.webmanifest",
]);

function walkHtmlFiles(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      walkHtmlFiles(fullPath, files);
    } else if (entry === "index.html") {
      files.push(fullPath);
    }
  }
  return files;
}

function extractInternalHrefs(html) {
  const hrefs = new Set();
  const regex = /href="([^"]+)"/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const href = match[1];
    if (!href.startsWith("/")) continue;
    if (skipLinkPrefixes.some((prefix) => href.startsWith(prefix))) continue;
    if (skipLinkPaths.has(href.split("?")[0])) continue;
    if (extname(href.split("?")[0])) continue;
    hrefs.add(href.split("?")[0]);
  }
  return [...hrefs];
}

function resolvePagePath(href) {
  if (href === "/") return join(outDir, "index.html");
  const normalized = href.endsWith("/") ? href.slice(0, -1) : href;
  return join(outDir, normalized, "index.html");
}

const errors = [];
const warnings = [];

if (!existsSync(outDir)) {
  console.error("FAIL: out/ directory not found. Run `npm run build` first.");
  process.exit(1);
}

for (const asset of requiredAssets) {
  if (!existsSync(join(outDir, asset))) {
    errors.push(`Missing asset: out/${asset}`);
  }
}

for (const page of requiredPages) {
  if (!existsSync(join(outDir, page))) {
    errors.push(`Missing page: out/${page}`);
  }
}

try {
  const manifest = JSON.parse(readFileSync(join(outDir, "site.webmanifest"), "utf8"));
  if (manifest.short_name !== "SanjuCA") {
    warnings.push(`site.webmanifest short_name is "${manifest.short_name}", expected "SanjuCA"`);
  }
} catch {
  errors.push("site.webmanifest is missing or invalid JSON");
}

const sitemapPath = join(outDir, "sitemap.xml");
if (existsSync(sitemapPath)) {
  const sitemapXml = readFileSync(sitemapPath, "utf8");
  const urlCount = (sitemapXml.match(/<loc>/g) || []).length;
  const expectedUrlCount = 17;
  if (urlCount !== expectedUrlCount) {
    errors.push(`sitemap.xml has ${urlCount} URLs, expected ${expectedUrlCount}`);
  }
  if (!sitemapXml.includes("https://www.sanjuassociates.in/")) {
    errors.push("sitemap.xml missing homepage URL");
  }
} else {
  errors.push("Missing sitemap.xml in build output");
}

const homeHtml = readFileSync(join(outDir, "index.html"), "utf8");
for (const fragment of requiredHeadFragments) {
  if (!homeHtml.includes(fragment)) {
    errors.push(`Homepage missing head fragment: ${fragment}`);
  }
}

if (!homeHtml.includes('rel="icon"') || !homeHtml.includes("/favicon")) {
  errors.push("Homepage missing favicon link tags");
}

if (!homeHtml.includes("/apple-touch-icon.png")) {
  errors.push("Homepage missing apple-touch-icon link");
}

const htmlFiles = walkHtmlFiles(outDir).filter(
  (file) => !file.includes(`${join("out", "404")}`) && !file.includes("_not-found")
);
const checkedLinks = new Set();

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  for (const href of extractInternalHrefs(html)) {
    const key = `${relative(outDir, file)} -> ${href}`;
    if (checkedLinks.has(key)) continue;
    checkedLinks.add(key);

    const target = resolvePagePath(href);
    if (!existsSync(target)) {
      errors.push(`Broken page link in ${relative(outDir, file)}: ${href}`);
    }
  }
}

const faviconSvg = join(outDir, "favicon.svg");
if (existsSync(faviconSvg) && statSync(faviconSvg).size > 100_000) {
  warnings.push(
    `favicon.svg is ${Math.round(statSync(faviconSvg).size / 1024)}KB — consider optimizing for faster loads`
  );
}

console.log(
  `Verified static export: ${htmlFiles.length} HTML pages, ${requiredAssets.length} favicon assets, ${checkedLinks.size} internal routes checked`
);

if (warnings.length) {
  console.log("\nWarnings:");
  for (const warning of warnings) console.log(`  ⚠ ${warning}`);
}

if (errors.length) {
  console.log("\nErrors:");
  for (const error of errors) console.log(`  ✗ ${error}`);
  process.exit(1);
}

console.log("\nAll checks passed.");
