import type { FAQ } from "@/lib/faq";

type FaqAccordionProps = {
  faqs: FAQ[];
  idPrefix?: string;
};

export function FaqAccordion({ faqs, idPrefix = "faq" }: FaqAccordionProps) {
  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <details
          key={faq.id}
          id={`${idPrefix}-${faq.id}`}
          className="group rounded-xl border border-slate-200 bg-white"
        >
          <summary className="cursor-pointer list-none px-6 py-5 font-semibold text-navy-900 marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="flex items-center justify-between gap-4">
              <span>{faq.question}</span>
              <span
                className="shrink-0 text-gold-600 transition-transform group-open:rotate-45 text-xl leading-none"
                aria-hidden="true"
              >
                +
              </span>
            </span>
          </summary>
          <div className="border-t border-slate-100 px-6 pb-5 pt-4 text-sm leading-relaxed text-slate-600">
            {faq.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
