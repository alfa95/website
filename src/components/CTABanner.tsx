import Link from "next/link";

type CTABannerProps = {
  title?: string;
  description?: string;
};

export function CTABanner({
  title = "Ready to simplify your finances?",
  description = "Book a free 30-minute consultation with our Chartered Accountants. No obligation, just clear advice.",
}: CTABannerProps) {
  return (
    <section className="bg-navy-900" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <h2 id="cta-heading" className="font-serif text-3xl font-semibold text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact/" className="btn-gold">
            Schedule Consultation
          </Link>
          <Link
            href="/services/"
            className="inline-flex items-center justify-center rounded-lg border border-slate-500 px-6 py-3 text-sm font-semibold text-white hover:border-slate-300 hover:bg-white/5 transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
