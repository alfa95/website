import Link from "next/link";
import { AmfiDisclaimer } from "@/components/AmfiDisclaimer";
import { siteConfig } from "@/lib/site";
import { services } from "@/lib/services";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-200 bg-navy-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <p className="font-serif text-lg font-semibold text-white">{siteConfig.name}</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">{siteConfig.tagline}</p>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            ICAI-registered Chartered Accountants and AMFI-registered Mutual Fund Distributors
            serving clients pan-India. Office in {siteConfig.address.city},{" "}
            {siteConfig.address.state}.
          </p>
          <p className="mt-3 text-xs text-slate-500">
            {siteConfig.mutualFund.role} · {siteConfig.mutualFund.arn}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h2>
          <ul className="mt-4 space-y-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}/`}
                  className="text-sm hover:text-gold-400 transition-colors"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h2>
          <ul className="mt-4 space-y-2">
            {siteConfig.nav.slice(2).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm hover:text-gold-400 transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Legal</h2>
          <ul className="mt-4 space-y-2">
            {siteConfig.legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm hover:text-gold-400 transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h2>
          <address className="mt-4 space-y-2 text-sm not-italic leading-relaxed">
            <p>{siteConfig.address.street}</p>
            <p>
              {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.postalCode}
            </p>
            <p>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-gold-400 transition-colors">
                {siteConfig.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-gold-400 transition-colors">
                {siteConfig.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <AmfiDisclaimer />
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:px-6">
          <p>
            &copy; {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <Link href="/privacy-policy/" className="hover:text-gold-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions/" className="hover:text-gold-400 transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="hidden sm:inline">·</span>
            <span>
              ICAI Member · {siteConfig.mutualFund.arn}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
