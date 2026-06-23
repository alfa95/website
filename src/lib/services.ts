export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  keywords: string[];
  benefits: string[];
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "tax-planning",
    title: "Tax Planning & Filing",
    shortDescription:
      "Strategic income tax planning and accurate return filing for individuals, professionals, and businesses.",
    description:
      "We help you minimize tax liability within the law through proactive planning, accurate return preparation, and timely filing. Our team stays current with Income Tax Act amendments, deductions, and compliance requirements so you avoid penalties and maximize savings.",
    keywords: [
      "income tax filing",
      "tax planning India",
      "ITR filing CA",
      "tax consultant India",
    ],
    benefits: [
      "Year-round tax planning, not just filing season",
      "Review of deductions under Sections 80C, 80D, and more",
      "Support during scrutiny and assessment proceedings",
      "Advisory for capital gains, TDS, and advance tax",
    ],
    deliverables: [
      "Income tax return preparation and e-filing",
      "Tax computation and liability projections",
      "Advance tax and TDS compliance calendar",
      "Representation before tax authorities when required",
    ],
  },
  {
    slug: "gst-compliance",
    title: "GST Compliance & Advisory",
    shortDescription:
      "End-to-end GST registration, return filing, reconciliation, and advisory for growing businesses.",
    description:
      "GST compliance errors can be costly. We manage your GST lifecycle—from registration and monthly returns to annual reconciliation and audit support—so your business stays compliant and your input tax credits are optimized.",
    keywords: [
      "GST consultant",
      "GST return filing",
      "GSTR reconciliation",
      "GST registration CA",
    ],
    benefits: [
      "Timely GSTR-1, GSTR-3B, and annual return filing",
      "ITC reconciliation and mismatch resolution",
      "Advisory on place of supply, HSN, and rate classification",
      "Support during GST department notices and audits",
    ],
    deliverables: [
      "GST registration and amendments",
      "Monthly and annual GST return filing",
      "GSTR-2B / 2A reconciliation reports",
      "GST health check and compliance review",
    ],
  },
  {
    slug: "audit-assurance",
    title: "Audit & Assurance",
    shortDescription:
      "Statutory, tax, and internal audits with rigorous standards and actionable findings.",
    description:
      "Our audit practice delivers independent assurance that strengthens stakeholder confidence. We conduct statutory audits under the Companies Act, tax audits under Section 44AB, and internal audits tailored to your risk profile and industry.",
    keywords: [
      "statutory audit",
      "tax audit 44AB",
      "internal audit CA",
      "audit firm India",
    ],
    benefits: [
      "ICAI-compliant audit methodology",
      "Clear management letters with practical recommendations",
      "Industry-specific risk assessment",
      "Coordination with banks, investors, and regulators",
    ],
    deliverables: [
      "Statutory audit under Companies Act",
      "Tax audit under Section 44AB",
      "Internal audit and process review",
      "Audit reports and compliance certifications",
    ],
  },
  {
    slug: "bookkeeping",
    title: "Bookkeeping & Accounting",
    shortDescription:
      "Reliable books of accounts, MIS reporting, and financial statements for informed decisions.",
    description:
      "Accurate books are the foundation of every financial decision. We maintain your accounts on Tally, Zoho Books, or your preferred platform, and deliver monthly MIS so you always know where your business stands.",
    keywords: [
      "bookkeeping services",
      "accounting outsourcing",
      "MIS reporting",
      "Tally accounting CA",
    ],
    benefits: [
      "Dedicated accountant for consistent record-keeping",
      "Monthly P&L, balance sheet, and cash flow summaries",
      "Bank and ledger reconciliation",
      "Audit-ready documentation year-round",
    ],
    deliverables: [
      "Day-to-day bookkeeping and voucher entry",
      "Monthly financial statements and MIS",
      "Accounts payable and receivable tracking",
      "Year-end closing and trial balance",
    ],
  },
  {
    slug: "company-incorporation",
    title: "Company Incorporation & ROC Compliance",
    shortDescription:
      "Private limited company setup, LLP registration, and ongoing ROC compliance management.",
    description:
      "Starting a business involves critical structural decisions. We guide you through entity selection, incorporation with MCA, and ongoing compliance—director KYC, annual filings, and board resolutions—so you can focus on growth.",
    keywords: [
      "company incorporation",
      "private limited registration",
      "ROC filing",
      "LLP registration CA",
    ],
    benefits: [
      "Entity structure advisory (Pvt Ltd, LLP, OPC)",
      "DIN, DSC, and name approval assistance",
      "Post-incorporation compliance calendar",
      "Board meetings and statutory register maintenance",
    ],
    deliverables: [
      "Company or LLP incorporation",
      "Annual ROC filings (AOC-4, MGT-7, etc.)",
      "Director and shareholder compliance",
      "Corporate restructuring and share transfer support",
    ],
  },
  {
    slug: "mutual-fund-wealth",
    title: "Mutual Fund & Wealth Solutions",
    shortDescription:
      "AMFI-registered mutual fund distribution — SIPs, lump sum investments, ELSS, and goal-based wealth planning across India.",
    description:
      "As an AMFI-registered Mutual Fund Distributor (ARN-163501), we help individuals and families invest in mutual funds aligned with their financial goals and tax profile. Whether you are starting a SIP, planning for retirement, saving tax through ELSS, or investing from abroad as an NRI, we guide you through fund selection, KYC, and ongoing portfolio review — alongside the tax planning expertise of our CA practice.",
    keywords: [
      "mutual fund distributor",
      "ARN mutual fund advisor",
      "SIP investment India",
      "ELSS tax saving",
      "NRI mutual fund investment",
      "wealth solutions CA",
    ],
    benefits: [
      "AMFI-registered distributor with BSE StAR MF platform access",
      "Goal-based fund recommendations tied to your tax and financial plan",
      "SIP, lump sum, STP, and SWP setup and monitoring",
      "ELSS and Section 80C tax-saving investment guidance",
      "NRI and pan-India clients supported via phone and video",
    ],
    deliverables: [
      "Mutual fund selection and investment execution",
      "SIP registration and systematic transfer planning",
      "ELSS and tax-saving mutual fund advisory",
      "Portfolio review and rebalancing recommendations",
      "KYC assistance and investment account setup",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
