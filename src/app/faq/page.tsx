import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/Breadcrumb";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/json-ld";
import {
  allFaqs,
  faqCategories,
  faqCategoryLabels,
  type FaqCategory,
} from "@/lib/faq";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "GST & Chartered Accountant FAQ",
  description:
    "Answers to GST FAQs — what is GST, GST full form, GST kab lagu hua, how to get GST number, download GST certificate, file GST return, calculate GST, check GST number — plus tax planning, audit, and CA services.",
  path: "/faq/",
  keywords: [
    "what is gst",
    "gst kya hai",
    "gst full form",
    "gst kab lagu hua",
    "gst number kya hota hai",
    "how to get gst number",
    "how to download gst certificate",
    "how to file gst return",
    "how to calculate gst",
    "how to check gst number",
    "gst registration",
    "tax planning FAQ",
    "chartered accountant FAQ",
  ],
});

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ label: "FAQ" }]),
          faqJsonLd(allFaqs),
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <Breadcrumb items={[{ label: "FAQ" }]} />

        <header>
          <h1 className="section-heading">GST &amp; Chartered Accountant FAQ</h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Expert answers on GST registration, returns, tax planning, audit, bookkeeping, and
            wealth planning — in English and Hindi for Indian businesses and taxpayers.
          </p>
        </header>

        <nav className="mt-8 flex flex-wrap gap-2" aria-label="FAQ categories">
          {faqCategories.map((cat) => (
            <a
              key={cat}
              href={`#${cat}`}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 hover:border-navy-300 hover:text-navy-800 transition-colors"
            >
              {faqCategoryLabels[cat]}
            </a>
          ))}
        </nav>

        <div className="mt-12 space-y-16">
          {faqCategories.map((category: FaqCategory) => {
            const categoryFaqs = allFaqs.filter((f) => f.category === category);
            if (categoryFaqs.length === 0) return null;
            return (
              <section key={category} id={category} aria-labelledby={`${category}-heading`}>
                <h2 id={`${category}-heading`} className="font-serif text-xl font-semibold text-navy-900">
                  {faqCategoryLabels[category]}
                </h2>
                <div className="mt-6">
                  <FaqAccordion faqs={categoryFaqs} idPrefix={category} />
                </div>
              </section>
            );
          })}
        </div>

        <aside className="mt-16 rounded-xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
          <p className="font-semibold text-navy-900">Need personalised advice?</p>
          <p className="mt-2 leading-relaxed">
            Tax and GST rules change frequently. These answers are for general guidance only and do
            not constitute professional advice for your specific situation.
          </p>
          <Link href="/contact/" className="btn-primary mt-4 inline-flex text-sm">
            Book Free Consultation
          </Link>
        </aside>
      </div>
    </>
  );
}
