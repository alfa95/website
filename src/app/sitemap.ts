import type { MetadataRoute } from "next";
import { getSitemapEntries } from "@/lib/sitemap-data";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return getSitemapEntries().map((entry) => ({
    url: `${siteConfig.url}${entry.path}`,
    lastModified: entry.lastModified ?? new Date(),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
