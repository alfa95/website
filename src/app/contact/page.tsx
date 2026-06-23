import type { Metadata } from "next";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/Breadcrumb";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Contact Us",
  description: `Contact ${siteConfig.name} for a free consultation — available pan-India. Call ${siteConfig.phone} or email ${siteConfig.email}. Office in ${siteConfig.address.city}, ${siteConfig.address.state}.`,
  path: "/contact/",
  keywords: ["contact CA", "CA consultation India", "pan-India chartered accountant"],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ label: "Contact Us" }])} />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Breadcrumb items={[{ label: "Contact Us" }]} />

        <header className="max-w-3xl">
          <h1 className="section-heading">Get in Touch</h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Book a free 30-minute consultation. Tell us about your needs and we&apos;ll respond
            within one business day.
          </p>
        </header>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <ContactForm />

          <aside className="space-y-8">
            <div className="card">
              <h2 className="font-serif text-lg font-semibold text-navy-900">Office</h2>
              <address className="mt-3 text-sm not-italic leading-relaxed text-slate-600">
                <p>{siteConfig.address.street}</p>
                <p>
                  {siteConfig.address.city}, {siteConfig.address.state}
                </p>
                <p>{siteConfig.address.postalCode}</p>
              </address>
            </div>

            <div className="card">
              <h2 className="font-serif text-lg font-semibold text-navy-900">Direct Contact</h2>
              <dl className="mt-3 space-y-3 text-sm">
                <div>
                  <dt className="font-medium text-slate-500">Phone</dt>
                  <dd>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                      className="text-navy-800 hover:text-gold-700 transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-500">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-navy-800 hover:text-gold-700 transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-500">Hours</dt>
                  <dd className="text-slate-600">Mon – Fri, 9:30 AM – 6:30 PM IST</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-xl bg-navy-950 p-6 text-sm text-slate-300">
              <p className="font-semibold text-white">What to expect</p>
              <ul className="mt-3 space-y-2">
                <li>• Free initial consultation — no obligation</li>
                <li>• Response within 1 business day</li>
                <li>• Clear scope and transparent pricing</li>
                <li>• Pan-India service — phone, email &amp; video consultations</li>
                <li>• In-person meetings at our {siteConfig.address.city} office</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
