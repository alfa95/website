import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/json-ld";
import type { FAQ } from "@/lib/faq";

type FaqSectionProps = {
  id?: string;
  title: string;
  description?: string;
  faqs: FAQ[];
  showViewAll?: boolean;
  idPrefix?: string;
  pagePath?: string;
};

export function FaqSection({
  id = "faq-section",
  title,
  description,
  faqs,
  showViewAll = false,
  idPrefix = "faq",
  pagePath = "/faq/",
}: FaqSectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`}>
      <JsonLd data={faqJsonLd(faqs, pagePath)} />
      <div className="max-w-3xl">
        <h2 id={`${id}-heading`} className="section-heading">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-slate-600">{description}</p>
        )}
      </div>
      <div className="mt-10 max-w-3xl">
        <FaqAccordion faqs={faqs} idPrefix={idPrefix} />
      </div>
      {showViewAll && (
        <p className="mt-8">
          <Link
            href="/faq/"
            className="text-sm font-semibold text-gold-700 hover:text-gold-600 transition-colors"
          >
            View all FAQs &rarr;
          </Link>
        </p>
      )}
    </section>
  );
}
