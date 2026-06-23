import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts } from "@/lib/blog";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Tax & Compliance Insights",
  description:
    "Expert articles on income tax, GST compliance, audit requirements, and business accounting from Chartered Accountants at Sanju & Associates.",
  path: "/blog/",
  keywords: ["tax blog", "GST articles", "CA insights", "income tax guide"],
});

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ label: "Insights" }])} />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Breadcrumb items={[{ label: "Insights" }]} />

        <header className="max-w-3xl">
          <h1 className="section-heading">Insights &amp; Resources</h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Practical guidance on tax planning, GST, audits, and business compliance—written by our
            Chartered Accountants for business owners and professionals.
          </p>
        </header>

        <div className="mt-12 space-y-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="card border-l-4 border-l-gold-600"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <time dateTime={post.publishedAt} className="text-xs font-medium text-slate-500">
                    {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h2 className="mt-2 font-serif text-2xl font-semibold text-navy-900">
                    <Link
                      href={`/blog/${post.slug}/`}
                      className="hover:text-navy-700 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
                  <p className="mt-3 text-xs text-slate-500">By {post.author}</p>
                </div>
                <Link
                  href={`/blog/${post.slug}/`}
                  className="shrink-0 text-sm font-semibold text-gold-700 hover:text-gold-600 transition-colors"
                >
                  Read article &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
