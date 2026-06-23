import type { Metadata } from "next";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name} — how we collect, use, and protect your personal data when you use our website and Chartered Accountant services.`,
  path: "/privacy-policy/",
  keywords: ["privacy policy", "data protection", "CA firm privacy"],
});

const lastUpdated = "23 June 2025";

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ label: "Privacy Policy" }])} />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Breadcrumb items={[{ label: "Privacy Policy" }]} />

        <LegalPageLayout
          title="Privacy Policy"
          lastUpdated={lastUpdated}
          intro={`${siteConfig.legalName} ("we", "us", "our") respects your privacy. This Privacy Policy explains how we collect, use, store, and protect personal information when you visit ${siteConfig.url} or engage our Chartered Accountant and mutual fund distribution services.`}
          sections={[
            {
              title: "1. Information We Collect",
              content: (
                <>
                  <p>We may collect the following information when you interact with us:</p>
                  <ul className="mt-3 list-disc space-y-2 pl-5">
                    <li>
                      <strong>Contact details:</strong> name, email address, phone number, and
                      messages submitted through our contact form.
                    </li>
                    <li>
                      <strong>Business information:</strong> company name, GSTIN, PAN, and financial
                      documents you provide for tax, audit, GST, or advisory services.
                    </li>
                    <li>
                      <strong>Technical data:</strong> IP address, browser type, device information,
                      and pages visited — collected automatically through standard web server logs
                      and analytics tools.
                    </li>
                    <li>
                      <strong>Investment-related data:</strong> KYC documents and investment
                      preferences, if you use our AMFI-registered mutual fund distribution services
                      ({siteConfig.mutualFund.arn}).
                    </li>
                  </ul>
                </>
              ),
            },
            {
              title: "2. How We Use Your Information",
              content: (
                <>
                  <p>We use your information to:</p>
                  <ul className="mt-3 list-disc space-y-2 pl-5">
                    <li>Respond to enquiries and provide Chartered Accountant services</li>
                    <li>Prepare and file tax returns, GST returns, audit reports, and ROC filings</li>
                    <li>Process mutual fund investments as an AMFI-registered distributor</li>
                    <li>Send service-related communications, reminders, and compliance updates</li>
                    <li>Improve our website and user experience</li>
                    <li>Comply with legal and regulatory obligations under ICAI, AMFI, and Indian law</li>
                  </ul>
                </>
              ),
            },
            {
              title: "3. Contact Form & Third-Party Services",
              content: (
                <p>
                  Our contact form submissions are processed through secure third-party form
                  services to deliver your enquiry to us. These providers act as data processors and
                  are bound by their own privacy policies. We do not sell your personal data to
                  third parties. We may share information with government authorities (Income Tax
                  Department, GST Network, MCA, AMFI, etc.) as required for compliance filings on
                  your behalf.
                </p>
              ),
            },
            {
              title: "4. Data Retention",
              content: (
                <p>
                  We retain client records, tax filings, audit working papers, and correspondence
                  for periods required under the Income Tax Act, Companies Act, GST laws, and ICAI
                  guidelines — typically a minimum of six to eight years for tax and audit records.
                  Contact form enquiries are retained as long as necessary to respond and maintain
                  business records.
                </p>
              ),
            },
            {
              title: "5. Data Security",
              content: (
                <p>
                  We implement reasonable technical and organisational measures to protect your
                  data, including secure communication channels and access controls. However, no
                  method of transmission over the internet is 100% secure. Please avoid sending
                  highly sensitive documents via unencrypted email; we will provide secure channels
                  for document exchange when engaged as your service provider.
                </p>
              ),
            },
            {
              title: "6. Your Rights",
              content: (
                <>
                  <p>
                    Under applicable Indian law, including the Digital Personal Data Protection Act,
                    2023, you may have the right to:
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-5">
                    <li>Access the personal data we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request erasure of data no longer required (subject to legal retention obligations)</li>
                    <li>Withdraw consent for marketing communications</li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, contact us at{" "}
                    <a href={`mailto:${siteConfig.email}`} className="text-gold-700 font-medium">
                      {siteConfig.email}
                    </a>
                    .
                  </p>
                </>
              ),
            },
            {
              title: "7. Cookies",
              content: (
                <p>
                  Our website may use essential cookies for basic functionality. If we implement
                  analytics cookies in the future, this policy will be updated. You can control
                  cookies through your browser settings.
                </p>
              ),
            },
            {
              title: "8. Changes to This Policy",
              content: (
                <p>
                  We may update this Privacy Policy from time to time. Changes will be posted on
                  this page with an updated &quot;Last updated&quot; date. Continued use of our
                  website after changes constitutes acceptance of the revised policy.
                </p>
              ),
            },
            {
              title: "9. Contact Us",
              content: (
                <p>
                  {siteConfig.legalName}
                  <br />
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state}{" "}
                  {siteConfig.address.postalCode}
                  <br />
                  Email:{" "}
                  <a href={`mailto:${siteConfig.email}`} className="text-gold-700 font-medium">
                    {siteConfig.email}
                  </a>
                  <br />
                  Phone:{" "}
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="text-gold-700 font-medium"
                  >
                    {siteConfig.phone}
                  </a>
                </p>
              ),
            },
          ]}
        />
      </div>
    </>
  );
}
