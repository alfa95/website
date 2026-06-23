import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/Breadcrumb";
import { CTABanner } from "@/components/CTABanner";
import { JsonLd } from "@/components/JsonLd";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/services";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Accounting & Tax Services",
  description:
    "Explore our Chartered Accountant services: tax planning, GST compliance, audit & assurance, bookkeeping, and company incorporation for businesses across India.",
  path: "/services/",
  keywords: ["CA services", "accounting services India", "tax compliance"],
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ label: "Services" }])} />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Breadcrumb items={[{ label: "Services" }]} />

        <header className="max-w-3xl">
          <h1 className="section-heading">Our Services</h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            From day-to-day bookkeeping to complex tax audits, our ICAI-registered team delivers
            end-to-end financial services across India — in person or remotely — designed to keep
            you compliant and confident.
          </p>
        </header>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <aside className="mt-16 rounded-xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="font-serif text-xl font-semibold text-navy-900">
            Not sure which service you need?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Tell us about your business and we&apos;ll recommend the right scope. Most clients start
            with a free consultation.
          </p>
          <Link href="/contact/" className="btn-primary mt-5 inline-flex text-sm">
            Get in Touch
          </Link>
        </aside>
      </div>

      <CTABanner />
    </>
  );
}
