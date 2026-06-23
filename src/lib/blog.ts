export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  publishedAt: string;
  updatedAt: string;
  keywords: string[];
  author: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "new-tax-regime-vs-old-regime-2025",
    title: "New Tax Regime vs Old Regime: Which Should You Choose in 2025?",
    excerpt:
      "A practical comparison of India's new and old income tax regimes to help salaried professionals and business owners pick the right option.",
    publishedAt: "2025-04-10",
    updatedAt: "2025-04-10",
    author: "CA Sanju",
    keywords: ["new tax regime", "old tax regime", "income tax 2025", "ITR"],
    content: [
      "Choosing between the new and old tax regimes is one of the most common questions we receive each financial year. The right answer depends on your income level, deductions claimed, and long-term financial plan—not a one-size-fits-all recommendation.",
      "Under the new tax regime, tax rates are lower but most deductions under Chapter VI-A (except employer NPS contributions and a few others) are unavailable. The old regime retains higher rates but allows deductions for home loan interest, HRA, 80C investments, health insurance, and more.",
      "As a rule of thumb, taxpayers with significant deductions—home loan interest above ₹2 lakh, substantial 80C investments, or high HRA claims—often benefit from the old regime. Those with minimal deductions and straightforward income profiles may save more under the new regime.",
      "We recommend running a side-by-side computation before filing. A difference of even one regime choice can mean thousands of rupees in tax savings or overpayment. Contact our team for a personalized tax regime analysis before the filing deadline.",
    ],
  },
  {
    slug: "gst-common-compliance-mistakes",
    title: "5 Common GST Compliance Mistakes Small Businesses Make",
    excerpt:
      "Avoid penalties and ITC reversals by steering clear of these frequent GST errors we see in audits and reconciliations.",
    publishedAt: "2025-03-18",
    updatedAt: "2025-03-18",
    author: "CA Sanju",
    keywords: ["GST compliance", "GST mistakes", "ITC reversal", "GSTR filing"],
    content: [
      "GST compliance has matured, but small businesses still face penalties from avoidable errors. Here are five mistakes we encounter most often during GST health checks.",
      "First, filing GSTR-1 and GSTR-3B with mismatched invoice values. Even minor discrepancies trigger notices and block input tax credit. Reconcile before every filing deadline.",
      "Second, claiming ITC on ineligible expenses—motor vehicles for personal use, food and beverages, club memberships, and goods used for personal consumption are common problem areas.",
      "Third, incorrect HSN or SAC codes and tax rates. Rate changes and classification updates happen frequently; outdated codes lead to short-payment notices.",
      "Fourth, ignoring reverse charge mechanism (RCM) obligations on imports of services, GTA services, and notified categories. RCM liabilities must be self-assessed and paid in cash.",
      "Fifth, missing annual return (GSTR-9) and reconciliation statement (GSTR-9C) deadlines. Late filing attracts penalties and complicates subsequent year ITC claims. Set calendar reminders or outsource compliance to avoid last-minute rushes.",
    ],
  },
  {
    slug: "when-to-hire-a-chartered-accountant",
    title: "When Should Your Business Hire a Chartered Accountant?",
    excerpt:
      "Signs that DIY accounting is holding your business back—and how the right CA partnership creates value beyond compliance.",
    publishedAt: "2025-02-05",
    updatedAt: "2025-02-05",
    author: "CA Sanju",
    keywords: [
      "hire chartered accountant",
      "CA for startup",
      "business accounting",
    ],
    content: [
      "Many founders handle their own books in the early days—and that's often fine. But there are clear inflection points where professional accounting support pays for itself.",
      "You've crossed ₹40 lakh in turnover and need a tax audit under Section 44AB. You've taken external investment and investors require audited financials. You're registering for GST across multiple states. You're hiring employees and need payroll, TDS, and PF compliance. Any of these are strong signals to engage a CA.",
      "Beyond compliance, a good CA firm acts as a financial co-pilot: helping you interpret cash flow, plan for tax-efficient profit distribution, structure director remuneration, and prepare for due diligence.",
      "The cost of a compliance mistake—penalty, interest, lost ITC, or a delayed funding round—almost always exceeds the fee for professional services. If you're unsure whether it's time, a one-hour consultation can clarify your needs and priorities.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
