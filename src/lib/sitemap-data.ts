import { blogPosts } from "@/lib/blog";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export type SitemapEntry = {
  path: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
  lastModified?: Date;
};

/** All indexable pages — error pages (404, 500) are intentionally excluded. */
export function getSitemapEntries(): SitemapEntry[] {
  return [
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    { path: "/services/", changeFrequency: "monthly", priority: 0.9 },
    { path: "/about/", changeFrequency: "monthly", priority: 0.8 },
    { path: "/blog/", changeFrequency: "weekly", priority: 0.8 },
    { path: "/faq/", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact/", changeFrequency: "yearly", priority: 0.8 },
    { path: "/privacy-policy/", changeFrequency: "yearly", priority: 0.4 },
    { path: "/terms-and-conditions/", changeFrequency: "yearly", priority: 0.4 },
    ...services.map((service) => ({
      path: `/services/${service.slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...blogPosts.map((post) => ({
      path: `/blog/${post.slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      lastModified: new Date(post.updatedAt),
    })),
  ];
}

export function getSitemapUrls(): string[] {
  return getSitemapEntries().map((entry) => `${siteConfig.url}${entry.path}`);
}
