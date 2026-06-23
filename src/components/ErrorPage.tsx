import Link from "next/link";
import { siteConfig } from "@/lib/site";

type ErrorPageProps = {
  code: "404" | "500";
  title: string;
  description: string;
  showRetry?: boolean;
  onRetry?: () => void;
};

export function ErrorPage({ code, title, description, showRetry, onRetry }: ErrorPageProps) {
  return (
    <section className="flex flex-1 items-center bg-slate-50">
      <div className="mx-auto w-full max-w-2xl px-4 py-20 text-center sm:px-6 sm:py-28">
        <p className="font-serif text-7xl font-semibold text-gold-600 sm:text-8xl">{code}</p>
        <h1 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-slate-600">
          {description}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-navy-900 hover:border-slate-400 hover:bg-slate-50 transition-colors"
          >
            Contact Us
          </Link>
          {showRetry && onRetry && (
            <button type="button" onClick={onRetry} className="btn-gold">
              Try Again
            </button>
          )}
        </div>

        <nav className="mt-12 border-t border-slate-200 pt-8" aria-label="Helpful links">
          <p className="text-sm font-medium text-slate-500">You may find these helpful</p>
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <li>
              <Link href="/services/" className="text-gold-700 hover:text-gold-600 font-medium">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/faq/" className="text-gold-700 hover:text-gold-600 font-medium">
                FAQ
              </Link>
            </li>
            <li>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="text-gold-700 hover:text-gold-600 font-medium"
              >
                {siteConfig.phone}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
