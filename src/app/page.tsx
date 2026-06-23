import type { Metadata } from "next";
import Link from "next/link";
import { CTABanner } from "@/components/CTABanner";
import { FaqSection } from "@/components/FaqSection";
import { GstCalculator } from "@/components/GstCalculator";
import { HomeSeoContent } from "@/components/HomeSeoContent";
import { ServiceCard } from "@/components/ServiceCard";
import { blogPosts } from "@/lib/blog";
import { gstFaqs } from "@/lib/faq";
import { createMetadata } from "@/lib/seo";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Chartered Accountant Services",
  description:
    "Expert Chartered Accountant Services — GST calculator, GST registration & verification, tax planning and management, tax audit, wealth planning, and accounting & bookkeeping services across India.",
  path: "/",
  keywords: [
    "Chartered Accountant Services",
    "gst calculator",
    "gst verification",
    "gst registration",
    "tax planning",
    "tax planning and management",
    "importance of tax planning",
    "wealth planner",
    "financial wealth planner",
    "wealth planning",
    "tax audit",
    "accounting and bookkeeping services",
  ],
});

export default function HomePage() {
  const latestPosts = blogPosts.slice(0, 2);

  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-800/40 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
            ICAI Registered · Serving All of India
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Chartered Accountant Services — Tax, GST, Audit &amp; Wealth Planning
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            {siteConfig.description}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact/" className="btn-gold">
              Book Free Consultation
            </Link>
            <Link
              href="/services/"
              className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:border-slate-400 hover:bg-white/5 transition-colors"
            >
              Explore Services
            </Link>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-slate-700/50 pt-10 sm:grid-cols-4">
            {[
              { value: "5+", label: "Years Experience" },
              { value: "20+", label: "Clients Served" },
              { value: "6", label: "Core Practice Areas" },
              { value: "100%", label: "Compliance Focus" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-serif text-3xl font-semibold text-gold-400">{stat.value}</dt>
                <dd className="mt-1 text-sm text-slate-400">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
        aria-labelledby="gst-calculator-heading"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 id="gst-calculator-heading" className="section-heading">
              GST Calculator &amp; Compliance Tools
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Use our free GST calculator to estimate tax on any invoice amount. For GST
              registration, return filing, and verification, our Chartered Accountants are here to
              help.
            </p>
          </div>
          <GstCalculator />
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <FaqSection
            id="gst-faq"
            title="GST FAQ — Registration, Returns & Verification"
            description="Common questions about GST in India — what is GST, how to get a GST number, file returns, download your certificate, and verify a GSTIN."
            faqs={gstFaqs}
            showViewAll
            idPrefix="home-gst"
            pagePath="/"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6" aria-labelledby="services-heading">
        <div className="max-w-2xl">
          <h2 id="services-heading" className="section-heading">
            Our Chartered Accountant Services
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Comprehensive accounting and advisory services tailored for individuals, startups, and
            established businesses across India.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-slate-200" aria-labelledby="why-heading">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 id="why-heading" className="section-heading">
                Why Choose {siteConfig.name}?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                We combine deep technical expertise with practical business understanding. Every
                engagement is led by qualified Chartered Accountants who take ownership of your
                compliance and proactively flag opportunities to save tax and reduce risk.
              </p>
            </div>
            <ul className="space-y-4">
              {[
                "Pan-India service — clients in every state and union territory",
                "ICAI-registered CA and AMFI-registered Mutual Fund Distributor",
                "ICAI-registered professionals on every engagement",
                "Proactive deadline management — never miss a filing date",
                "Plain-language explanations, not jargon",
                "Transparent fees with no hidden charges",
                "Dedicated point of contact for your account",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-600/15 text-gold-700 text-xs font-bold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className="bg-slate-50 border-y border-slate-200"
        aria-labelledby="seo-content-heading"
      >
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <HomeSeoContent />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6" aria-labelledby="insights-heading">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 id="insights-heading" className="section-heading">
              Latest Insights
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Practical tax and compliance guidance from our team.
            </p>
          </div>
          <Link
            href="/blog/"
            className="text-sm font-semibold text-gold-700 hover:text-gold-600 transition-colors"
          >
            View all articles &rarr;
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {latestPosts.map((post) => (
            <article key={post.slug} className="card">
              <time dateTime={post.publishedAt} className="text-xs font-medium text-slate-500">
                {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h3 className="mt-2 font-serif text-xl font-semibold text-navy-900">
                <Link href={`/blog/${post.slug}/`} className="hover:text-navy-700 transition-colors">
                  {post.title}
                </Link>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
