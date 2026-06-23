import type { ReactNode } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

type LegalSection = {
  title: string;
  content: ReactNode;
};

export function LegalPageLayout({
  title,
  lastUpdated,
  intro,
  sections,
}: {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <article className="max-w-3xl">
      <header>
        <h1 className="section-heading">{title}</h1>
        <p className="mt-4 text-sm text-slate-500">Last updated: {lastUpdated}</p>
        <p className="mt-4 text-base leading-relaxed text-slate-600">{intro}</p>
      </header>

      <div className="mt-12 space-y-10">
        {sections.map((section, index) => (
          <section key={index} aria-labelledby={`legal-section-${index}`}>
            <h2
              id={`legal-section-${index}`}
              className="font-serif text-xl font-semibold text-navy-900"
            >
              {section.title}
            </h2>
            <div className="prose-content mt-4">{section.content}</div>
          </section>
        ))}
      </div>

      <footer className="mt-12 border-t border-slate-200 pt-8 text-sm text-slate-600">
        <p>
          Questions?{" "}
          <Link href="/contact/" className="font-semibold text-gold-700 hover:text-gold-600">
            Contact us
          </Link>{" "}
          at{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-semibold text-gold-700">
            {siteConfig.email}
          </a>
          .
        </p>
      </footer>
    </article>
  );
}
