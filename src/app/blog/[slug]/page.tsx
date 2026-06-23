import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/Breadcrumb";
import { CTABanner } from "@/components/CTABanner";
import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd } from "@/lib/json-ld";
import { blogPosts, getPostBySlug } from "@/lib/blog";
import { createMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}/`,
    keywords: post.keywords,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { label: "Insights", href: "/blog/" },
            { label: post.title },
          ]),
          articleJsonLd(post),
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <Breadcrumb
          items={[
            { label: "Insights", href: "/blog/" },
            { label: post.title },
          ]}
        />

        <article>
          <header>
            <time dateTime={post.publishedAt} className="text-sm font-medium text-slate-500">
              {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-slate-500">By {post.author}</p>
          </header>

          <div className="prose-content mt-10">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>

        <footer className="mt-12 border-t border-slate-200 pt-8">
          <p className="text-sm text-slate-600">
            Need personalized advice?{" "}
            <Link href="/contact/" className="font-semibold text-gold-700 hover:text-gold-600">
              Contact our team
            </Link>{" "}
            for a free consultation.
          </p>
        </footer>
      </div>

      <CTABanner />
    </>
  );
}
