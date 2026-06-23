import type { Metadata } from "next";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/Breadcrumb";
import { CTABanner } from "@/components/CTABanner";
import { JsonLd } from "@/components/JsonLd";
import { RegistrationsBlock } from "@/components/AmfiDisclaimer";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "About Us",
  description: `Learn about ${siteConfig.name} — ICAI-registered Chartered Accountants and AMFI Mutual Fund Distributors (ARN-163501) led by ${siteConfig.founder.name}, serving clients across India.`,
  path: "/about/",
  keywords: [
    "about CA firm",
    "chartered accountant India",
    "mutual fund distributor ARN",
    "pan-India CA services",
    "ICAI member",
  ],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ label: "About Us" }])} />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Breadcrumb items={[{ label: "About Us" }]} />

        <header className="max-w-3xl">
          <h1 className="section-heading">About {siteConfig.name}</h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Headquartered in Sikar, Rajasthan, we are an ICAI-registered Chartered Accountancy
            firm serving clients across India. We help individuals and businesses navigate
            India&apos;s tax and regulatory landscape with clarity and confidence — whether you
            meet us in person or connect remotely.
          </p>
        </header>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <section aria-labelledby="story-heading">
            <h2 id="story-heading" className="font-serif text-2xl font-semibold text-navy-900">
              Our Story
            </h2>
            <div className="prose-content mt-4">
              <p>
                Founded with a simple belief—that every business deserves access to high-quality
                financial advice—{siteConfig.name} has grown from a solo practice into a trusted
                advisory firm serving 20+ clients across industries.
              </p>
              <p>
                We work with startups navigating their first GST registration, family businesses
                planning generational transitions, and established companies requiring statutory
                audits and complex tax structuring. Our approach is always the same: understand your
                goals first, then build a compliance and advisory plan around them.
              </p>
            </div>
          </section>

          <section aria-labelledby="founder-heading" className="card">
            <h2 id="founder-heading" className="font-serif text-2xl font-semibold text-navy-900">
              {siteConfig.founder.name}
            </h2>
            <p className="mt-1 text-sm font-medium text-gold-700">{siteConfig.founder.title}</p>
            <p className="mt-1 text-xs text-slate-500">{siteConfig.founder.membership}</p>
            <p className="mt-1 text-xs text-slate-500">
              {siteConfig.mutualFund.role} · {siteConfig.mutualFund.arn}
            </p>
            <div className="prose-content mt-4">
              <p>
                Sanju brings over 5 years of experience in direct taxation, GST, and statutory
                audits. As an AMFI-registered Mutual Fund Distributor, he also helps clients invest
                in mutual funds aligned with their financial goals and tax profile.
              </p>
              <p>
                He believes the best CA relationships are built on trust, transparency, and
                proactive communication—not reactive filing at the last minute.
              </p>
            </div>
          </section>
        </div>

        <section className="mt-16" aria-labelledby="certifications-heading">
          <h2 id="certifications-heading" className="font-serif text-2xl font-semibold text-navy-900">
            Registrations &amp; Certifications
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="card">
              <h3 className="font-serif text-lg font-semibold text-navy-900">
                Chartered Accountancy
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                ICAI-registered Chartered Accountants authorised to provide tax, audit, GST, and
                compliance services across India.
              </p>
              <p className="mt-3 text-xs font-medium text-slate-500">
                {siteConfig.founder.membership}
              </p>
            </div>
            <div className="card">
              <h3 className="font-serif text-lg font-semibold text-navy-900">
                Mutual Fund Distribution
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                AMFI-registered Mutual Fund Distributor authorised to facilitate mutual fund
                investments in India, including for eligible NRI clients.
              </p>
              <RegistrationsBlock className="mt-4 text-xs" />
            </div>
          </div>
        </section>

        <section className="mt-16" aria-labelledby="values-heading">
          <h2 id="values-heading" className="font-serif text-2xl font-semibold text-navy-900">
            Our Values
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Integrity",
                description:
                  "We adhere to ICAI ethical standards and give honest advice, even when it's not what you want to hear.",
              },
              {
                title: "Precision",
                description:
                  "Accuracy in every return, report, and reconciliation. Errors cost money—we don't make them.",
              },
              {
                title: "Partnership",
                description:
                  "We invest in understanding your business so our advice is relevant, timely, and actionable.",
              },
            ].map((value) => (
              <div key={value.title} className="card">
                <h3 className="font-serif text-lg font-semibold text-navy-900">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <CTABanner />
    </>
  );
}
