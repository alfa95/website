import type { Metadata } from "next";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Terms and Conditions",
  description: `Terms and Conditions for using ${siteConfig.name} website and professional Chartered Accountant, tax, GST, audit, and mutual fund distribution services in India.`,
  path: "/terms-and-conditions/",
  keywords: ["terms and conditions", "CA services terms", "disclaimer"],
});

const lastUpdated = "23 June 2025";

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ label: "Terms and Conditions" }])} />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Breadcrumb items={[{ label: "Terms and Conditions" }]} />

        <LegalPageLayout
          title="Terms and Conditions"
          lastUpdated={lastUpdated}
          intro={`These Terms and Conditions govern your use of ${siteConfig.url} and your engagement with ${siteConfig.legalName}. By accessing this website or using our services, you agree to these terms.`}
          sections={[
            {
              title: "1. About Us",
              content: (
                <p>
                  {siteConfig.legalName} is an ICAI-registered Chartered Accountancy practice
                  headquartered in {siteConfig.address.city}, {siteConfig.address.state}, India. We
                  also operate as an AMFI-registered Mutual Fund Distributor (
                  {siteConfig.mutualFund.arn}, BSE Registration {siteConfig.mutualFund.bse},{" "}
                  {siteConfig.mutualFund.aprn}). We provide professional services pan-India subject
                  to applicable laws and regulations.
                </p>
              ),
            },
            {
              title: "2. Website Use",
              content: (
                <>
                  <p>The content on this website is for general information only. You agree to:</p>
                  <ul className="mt-3 list-disc space-y-2 pl-5">
                    <li>Use the website lawfully and not for any fraudulent or harmful purpose</li>
                    <li>Not attempt to gain unauthorised access to our systems</li>
                    <li>Not reproduce website content without our written permission</li>
                    <li>Provide accurate information when submitting contact forms or enquiries</li>
                  </ul>
                </>
              ),
            },
            {
              title: "3. Professional Services",
              content: (
                <>
                  <p>
                    Our Chartered Accountant services — including tax planning, GST compliance,
                    audit, bookkeeping, and company incorporation — are provided under a separate
                    engagement letter or mutual agreement defining scope, fees, and responsibilities.
                    No professional relationship is created solely by visiting this website or
                    submitting a contact form.
                  </p>
                  <p className="mt-4">
                    Tax, GST, and regulatory advice is based on laws and interpretations prevailing
                    at the time of advice. We are not responsible for changes in law after advice is
                    given, unless you have an ongoing engagement with us.
                  </p>
                </>
              ),
            },
            {
              title: "4. Mutual Fund Distribution",
              content: (
                <>
                  <p>
                    Mutual fund services are provided as an AMFI-registered distributor (
                    {siteConfig.mutualFund.arn}), not as a SEBI-registered Investment Advisor
                    (RIA). We do not guarantee returns on any mutual fund investment.
                  </p>
                  <p className="mt-4 font-medium text-navy-900">
                    Mutual fund investments are subject to market risks. Read all scheme-related
                    documents carefully before investing. Past performance is not indicative of
                    future returns.
                  </p>
                  <p className="mt-4">
                    Investment decisions should be made based on your risk profile, financial goals,
                    and scheme documents. We act as a distributor and may receive commissions from
                    asset management companies as per industry norms.
                  </p>
                </>
              ),
            },
            {
              title: "5. Tools & Calculators",
              content: (
                <p>
                  Tools on this website, including the GST calculator, provide estimates for
                  informational purposes only. They do not constitute professional tax or GST
                  advice. Always consult a qualified Chartered Accountant before making compliance
                  or filing decisions.
                </p>
              ),
            },
            {
              title: "6. Website Content & FAQ",
              content: (
                <p>
                  Articles, FAQs, and blog posts on this website are for educational purposes. They
                  do not replace personalised professional advice for your specific facts and
                  circumstances. Reliance on website content without professional consultation is at
                  your own risk.
                </p>
              ),
            },
            {
              title: "7. Fees & Payment",
              content: (
                <p>
                  Service fees are communicated before engagement and may vary based on complexity.
                  Unless otherwise agreed, fees are payable as per the terms in your engagement
                  letter. Mutual fund investments are subject to the fee structure of respective
                  fund houses and AMCs.
                </p>
              ),
            },
            {
              title: "8. Limitation of Liability",
              content: (
                <p>
                  To the fullest extent permitted by law, {siteConfig.name} shall not be liable for
                  any indirect, incidental, or consequential damages arising from use of this
                  website or reliance on its content. Our liability for professional services is
                  limited to the terms of the applicable engagement letter and professional
                  indemnity coverage as required by ICAI regulations.
                </p>
              ),
            },
            {
              title: "9. Intellectual Property",
              content: (
                <p>
                  All content on this website — including text, logos, design, and tools — is the
                  property of {siteConfig.legalName} unless otherwise stated. Unauthorised use,
                  copying, or distribution is prohibited.
                </p>
              ),
            },
            {
              title: "10. Third-Party Links",
              content: (
                <p>
                  Our website may link to external sites (government portals, AMFI, etc.). We are
                  not responsible for the content or privacy practices of third-party websites.
                </p>
              ),
            },
            {
              title: "11. Governing Law & Jurisdiction",
              content: (
                <p>
                  These Terms are governed by the laws of India. Any disputes shall be subject to
                  the exclusive jurisdiction of courts in {siteConfig.address.city},{" "}
                  {siteConfig.address.state}, India.
                </p>
              ),
            },
            {
              title: "12. Changes to Terms",
              content: (
                <p>
                  We may revise these Terms and Conditions at any time. Updated terms will be
                  posted on this page. Your continued use of the website constitutes acceptance of
                  the revised terms.
                </p>
              ),
            },
            {
              title: "13. Contact",
              content: (
                <p>
                  For questions about these Terms, contact {siteConfig.legalName} at{" "}
                  <a href={`mailto:${siteConfig.email}`} className="text-gold-700 font-medium">
                    {siteConfig.email}
                  </a>{" "}
                  or visit our{" "}
                  <a href="/contact/" className="text-gold-700 font-medium">
                    Contact Us
                  </a>{" "}
                  page.
                </p>
              ),
            },
          ]}
        />
      </div>
    </>
  );
}
