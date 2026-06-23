"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="group flex flex-col">
          <span className="font-serif text-xl font-semibold tracking-tight text-navy-900 group-hover:text-navy-700 transition-colors">
            {siteConfig.name}
          </span>
          <span className="text-xs font-medium uppercase tracking-widest text-gold-600">
            Chartered Accountants
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-navy-800 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact/" className="btn-primary text-sm">
            Free Consultation
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden rounded-lg p-2 text-navy-900 hover:bg-slate-100"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="border-t border-slate-200 bg-white px-4 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-3">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact/"
              className="btn-primary mt-2 text-center text-sm"
              onClick={() => setOpen(false)}
            >
              Free Consultation
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
