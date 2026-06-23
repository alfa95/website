import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function HomeSeoContent() {
  return (
    <article className="prose-content mx-auto max-w-4xl text-slate-700">
      <h2
        id="seo-content-heading"
        className="font-serif text-2xl font-semibold text-navy-900 sm:text-3xl"
      >
        Chartered Accountant Services for Tax, GST, Audit &amp; Wealth Planning
      </h2>

      <p className="mt-6">
        {siteConfig.name} provides end-to-end <strong>Chartered Accountant Services</strong> to
        individuals, professionals, and businesses across India. Whether you need help with daily
        compliance or long-term financial strategy, our ICAI-registered team combines technical
        expertise with practical advice — so you stay compliant, pay only what you owe, and plan
        confidently for the future.
      </p>

      <p>
        One of the most common questions we receive is how much GST applies to a particular
        transaction. Our free <strong>GST calculator</strong> on this page helps you estimate tax on
        any amount at standard rates of 5%, 12%, 18%, or 28%. Enter an exclusive or GST-inclusive
        figure and see the taxable value, CGST, SGST, and total instantly. It is a useful starting
        point for invoicing, quotations, and quick checks — though professional{" "}
        <strong>GST verification</strong> and return filing should always be handled by a qualified
        Chartered Accountant who can review your HSN codes, place of supply, and input tax credit
        position.
      </p>

      <h3 className="mt-8 font-serif text-xl font-semibold text-navy-900">
        GST Registration, Compliance &amp; Verification
      </h3>
      <p className="mt-4">
        If your turnover crosses the prescribed threshold or you operate across states,{" "}
        <strong>GST registration</strong> is mandatory. We handle the entire process — from
        document preparation and portal filing to post-registration compliance including GSTR-1,
        GSTR-3B, annual returns, and reconciliation. Errors in GST filing can block your input tax
        credit and attract penalties. Regular <strong>GST verification</strong> through
        GSTR-2B/2A reconciliation ensures your books match government records before any department
        notice arrives. Whether you are a first-time registrant or an established business reviewing
        your compliance health, our team ensures every return is accurate, timely, and fully
        reconciled with your accounting records.
      </p>

      <h3 className="mt-8 font-serif text-xl font-semibold text-navy-900">
        Tax Planning and Management
      </h3>
      <p className="mt-4">
        Effective <strong>tax planning</strong> is not about avoiding tax — it is about structuring
        your income, investments, and business decisions within the law to minimise liability. The{" "}
        <strong>importance of tax planning</strong> becomes clear every financial year: salaried
        professionals choosing between old and new regimes, business owners managing advance tax,
        and investors reporting capital gains all benefit from proactive advice rather than
        last-minute filing. Our <strong>tax planning and management</strong> services cover income
        tax returns, TDS compliance, scrutiny support, and year-round advisory so you are never
        caught off guard by a deadline or a rule change. We also advise on deductions under Sections
        80C, 80D, and capital gains exemptions — helping you understand the real{" "}
        <strong>importance of tax planning</strong> well before the filing season begins.
      </p>

      <h3 className="mt-8 font-serif text-xl font-semibold text-navy-900">
        Tax Audit, Bookkeeping &amp; Accounting
      </h3>
      <p className="mt-4">
        Businesses crossing turnover limits require a statutory <strong>tax audit</strong> under
        Section 44AB of the Income Tax Act. We conduct tax audits with rigour and clarity, issuing
        reports and management letters that satisfy regulators and help you improve internal
        controls. Behind every accurate audit are reliable books — our{" "}
        <strong>accounting and bookkeeping services</strong> keep your ledgers current, reconcile
        bank accounts monthly, and produce MIS reports so you always know your financial position.
      </p>

      <h3 className="mt-8 font-serif text-xl font-semibold text-navy-900">
        Wealth Planning &amp; Mutual Fund Advisory
      </h3>
      <p className="mt-4">
        As an AMFI-registered distributor, we also serve as your <strong>wealth planner</strong> and{" "}
        <strong>financial wealth planner</strong>. <strong>Wealth planning</strong> goes beyond
        picking funds — it connects your investment choices to your tax profile, life goals, and
        risk tolerance. Whether you are saving through ELSS for Section 80C, building a retirement
        corpus via SIPs, or investing as an NRI in Indian mutual funds, we align your portfolio
        with a holistic plan that complements our tax and compliance work.
      </p>

      <p>
        From a quick estimate on our <strong>GST calculator</strong> to full-scope{" "}
        <strong>Chartered Accountant Services</strong> covering <strong>GST registration</strong>,{" "}
        <strong>tax planning and management</strong>, <strong>tax audit</strong>, and{" "}
        <strong>accounting and bookkeeping services</strong> — {siteConfig.name} is your single
        point of contact. Based in Sikar, Rajasthan, we serve clients pan-India through phone,
        email, and video consultation.
      </p>

      <p className="mt-6">
        <Link href="/contact/" className="font-semibold text-gold-700 hover:text-gold-600">
          Book a free consultation
        </Link>{" "}
        or explore our{" "}
        <Link href="/services/" className="font-semibold text-gold-700 hover:text-gold-600">
          full range of services
        </Link>
        .
      </p>
    </article>
  );
}
