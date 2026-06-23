export type FaqCategory =
  | "gst"
  | "tax"
  | "audit"
  | "bookkeeping"
  | "incorporation"
  | "wealth"
  | "general";

export type FAQ = {
  id: string;
  question: string;
  answer: string;
  category: FaqCategory;
};

export const faqCategoryLabels: Record<FaqCategory, string> = {
  gst: "GST — Registration, Returns & Compliance",
  tax: "Income Tax & Tax Planning",
  audit: "Tax Audit & Statutory Audit",
  bookkeeping: "Accounting & Bookkeeping",
  incorporation: "Company Incorporation & ROC",
  wealth: "Wealth Planning & Mutual Funds",
  general: "General — Chartered Accountant Services",
};

export const gstFaqs: FAQ[] = [
  {
    id: "what-is-gst",
    category: "gst",
    question: "What is GST?",
    answer:
      "GST (Goods and Services Tax) is India's unified indirect tax levied on the supply of goods and services. It replaced multiple central and state taxes such as excise duty, service tax, and VAT. GST is governed by the CGST Act, SGST Act, and IGST Act, and is administered by the GST Council. Registered businesses charge GST on taxable supplies, claim input tax credit (ITC) on eligible purchases, and file periodic returns on the GST portal (gst.gov.in).",
  },
  {
    id: "gst-kya-hai",
    category: "gst",
    question: "GST kya hai? (जीएसटी क्या है?)",
    answer:
      "GST yaani Goods and Services Tax, Bharat mein maal aur seva par lagne wala ekikrit kar hai. Isse pehle alag-alag central aur state taxes lagte the — jaise excise, service tax aur VAT — jo ab GST mein merge ho gaye hain. Registered business apne taxable supply par GST charge karta hai, eligible kharid par input tax credit (ITC) claim karta hai, aur har mahine GST portal par return file karta hai. Agar aapka turnover prescribed limit se zyada hai, to GST registration mandatory hai.",
  },
  {
    id: "gst-full-form",
    category: "gst",
    question: "What is the full form of GST?",
    answer:
      "The full form of GST is Goods and Services Tax. In Hindi it is referred to as माल और सेवा कर (Maal aur Seva Kar). It is an indirect tax applicable across India on the supply of most goods and services, with rates typically at 5%, 12%, 18%, or 28% depending on the HSN/SAC classification.",
  },
  {
    id: "gst-kab-lagu-hua",
    category: "gst",
    question: "GST kab lagu hua? (When was GST implemented in India?)",
    answer:
      "GST India mein 1 July 2017 se lagu hua. Is din se purane central aur state indirect taxes ko ek national GST system se replace kiya gaya. Pehle se registered businesses ko transition period diya gaya tha, aur aaj bhi naye businesses ko turnover ya activity ke basis par registration lena padta hai. GST Council time-to-time rates, rules, aur compliance requirements update karta rehta hai.",
  },
  {
    id: "gst-number-kya-hota-hai",
    category: "gst",
    question: "GST number kya hota hai?",
    answer:
      "GST number yaani GSTIN (GST Identification Number) ek 15-digit unique number hai jo har GST-registered business ko milta hai. Format: 2-digit state code + 10-digit PAN + 1 entity number + 'Z' + 1 check digit. Example structure: 08AAAAA0000A1Z5. Ye number aapke GST registration certificate par hota hai aur har tax invoice par mention karna mandatory hai. Bina valid GSTIN ke aap input tax credit claim nahi kar sakte.",
  },
  {
    id: "how-to-get-gst-number",
    category: "gst",
    question: "How to get GST number (GST registration)?",
    answer:
      "GST number (GSTIN) paane ke liye aapko gst.gov.in par online registration karna hota hai: (1) Part A mein PAN, mobile, email verify karein, (2) TRN (Temporary Reference Number) generate hoga, (3) Part B mein business details, address proof, bank details, aur authorised signatory documents upload karein, (4) Application submit karne ke baad ARN milta hai, (5) Officer verification ke baad GSTIN issue hota hai — usually 3–7 working days. Professional CA assistance helps avoid rejection due to document errors or wrong business category.",
  },
  {
    id: "how-to-download-gst-certificate",
    category: "gst",
    question: "How to download GST certificate?",
    answer:
      "GST registration certificate download karne ke liye: (1) gst.gov.in par login karein, (2) Services → User Services → View/Download Certificates par jayein, (3) 'Registration Certificate' select karein, (4) PDF download karein. Ye certificate aapke GSTIN, legal name, trade name, registration date, aur principal place of business dikhata hai. Agar address ya business details change hui ho, to pehle amendment file karein — purana certificate outdated ho sakta hai.",
  },
  {
    id: "how-to-file-gst-return",
    category: "gst",
    question: "How to file GST return?",
    answer:
      "GST return filing GST portal par hoti hai. Regular taxpayers ko generally har month ye returns file karni padti hain: GSTR-1 (outward supplies — by 11th of next month), GSTR-3B (summary return with tax payment — by 20th of next month). Saal mein GSTR-9 (annual return) aur turnover limit ke hisaab se GSTR-9C (reconciliation statement) bhi required ho sakti hai. Steps: login → Returns Dashboard → select return period → fill details → validate → offset liability → file with DSC or EVC. Late filing se late fee aur interest lagta hai.",
  },
  {
    id: "how-to-calculate-gst",
    category: "gst",
    question: "How to calculate GST?",
    answer:
      "GST calculate karne ka formula: GST Amount = Taxable Value × GST Rate ÷ 100. Example: ₹10,000 par 18% GST = ₹1,800; total invoice = ₹11,800. Agar amount GST-inclusive hai: Taxable Value = Total ÷ (1 + Rate/100). Example: ₹11,800 inclusive of 18% GST → taxable = ₹11,800 ÷ 1.18 = ₹10,000; GST = ₹1,800. Intra-state supply par CGST + SGST (rate split equally); inter-state par IGST. Hamare homepage par free GST calculator se aap instantly estimate kar sakte hain.",
  },
  {
    id: "how-to-check-gst-number",
    category: "gst",
    question: "How to check GST number (GSTIN verification)?",
    answer:
      "GST number verify karne ke liye: (1) gst.gov.in par 'Search Taxpayer' → 'Search by GSTIN/UIN' par jayein, (2) 15-digit GSTIN enter karein, (3) Portal par legal name, registration status, registration date, aur place of business dikhega. Ye GST verification invoice par diye gaye GSTIN ki authenticity check karne ke liye important hai — galat ya cancelled GSTIN par ITC claim nahi hota. Businesses ko supplier ka GSTIN har transaction se pehle verify karna chahiye.",
  },
];

export const taxFaqs: FAQ[] = [
  {
    id: "what-is-tax-planning",
    category: "tax",
    question: "What is tax planning and why is it important?",
    answer:
      "Tax planning is the lawful arrangement of your financial affairs to minimise tax liability within the Income Tax Act. The importance of tax planning lies in avoiding last-minute rush, maximising deductions (80C, 80D, HRA, home loan interest), choosing the right tax regime, and planning capital gains timing. Effective tax planning and management throughout the year — not just at filing season — can save significant amounts and prevent notices from the tax department.",
  },
  {
    id: "itr-deadline",
    category: "tax",
    question: "When is the income tax return (ITR) filing deadline?",
    answer:
      "For individuals and businesses not requiring a tax audit, the ITR filing deadline is typically 31 July of the assessment year. Taxpayers subject to tax audit under Section 44AB must file by 31 October. Belated returns can be filed with penalties. Advance tax instalments are due on 15 June, 15 September, 15 December, and 15 March for those with liability exceeding ₹10,000.",
  },
  {
    id: "old-vs-new-regime",
    category: "tax",
    question: "Should I choose the old or new tax regime?",
    answer:
      "The new tax regime offers lower slab rates but fewer deductions. The old regime allows deductions under 80C, 80D, HRA, home loan interest, and more — but at higher rates. Salaried employees with significant deductions often benefit from the old regime; those with minimal deductions may save under the new regime. A side-by-side computation before filing is essential. Our CAs provide personalised tax planning to help you choose correctly.",
  },
];

export const auditFaqs: FAQ[] = [
  {
    id: "what-is-tax-audit",
    category: "audit",
    question: "What is a tax audit under Section 44AB?",
    answer:
      "A tax audit is a mandatory audit of accounts required under Section 44AB of the Income Tax Act when business turnover exceeds ₹1 crore (₹10 crore for presumptive scheme cases) or professional gross receipts exceed ₹50 lakh. A Chartered Accountant examines books, verifies compliance, and files Form 3CD with observations. The tax audit report must be filed by the due date — typically 30 September of the assessment year.",
  },
  {
    id: "statutory-audit",
    category: "audit",
    question: "What is a statutory audit under the Companies Act?",
    answer:
      "A statutory audit is an independent examination of a company's financial statements required under the Companies Act, 2013. Every company must appoint a Chartered Accountant as auditor and file audited financials with the ROC annually. The auditor issues a report on whether accounts give a true and fair view and whether the company has complied with applicable laws.",
  },
];

export const bookkeepingFaqs: FAQ[] = [
  {
    id: "bookkeeping-services",
    category: "bookkeeping",
    question: "What are accounting and bookkeeping services?",
    answer:
      "Accounting and bookkeeping services include recording daily transactions, maintaining ledgers, bank reconciliation, accounts payable/receivable tracking, monthly P&L and balance sheet preparation, and year-end closing. Accurate books are the foundation for GST filing, tax audit, and business decisions. We maintain books on Tally, Zoho Books, or your preferred platform with audit-ready documentation year-round.",
  },
];

export const incorporationFaqs: FAQ[] = [
  {
    id: "company-incorporation",
    category: "incorporation",
    question: "How do I register a private limited company in India?",
    answer:
      "Company incorporation is done through the MCA portal: obtain DIN and DSC for directors, apply for name approval (RUN), file SPICe+ form with MOA/AOA, registered office proof, and director KYC documents. Upon approval, you receive Certificate of Incorporation with CIN. Post-incorporation compliance includes PAN/TAN, GST registration (if applicable), bank account opening, and annual ROC filings (AOC-4, MGT-7).",
  },
];

export const wealthFaqs: FAQ[] = [
  {
    id: "wealth-planner",
    category: "wealth",
    question: "What does a financial wealth planner do?",
    answer:
      "A financial wealth planner helps you align investments with life goals — retirement, children's education, tax-saving, and wealth creation. As AMFI-registered distributors (ARN-163501), we provide wealth planning through mutual funds (SIPs, ELSS, debt funds) integrated with your tax profile. We act as mutual fund distributors, not SEBI-registered investment advisors. Always read scheme-related documents before investing.",
  },
  {
    id: "elss-80c",
    category: "wealth",
    question: "How do ELSS mutual funds help with tax planning?",
    answer:
      "ELSS (Equity Linked Savings Scheme) mutual funds qualify for deduction under Section 80C up to ₹1.5 lakh per year. They have a 3-year lock-in — the shortest among 80C options. Returns are subject to capital gains tax: LTCG above ₹1.25 lakh per year taxed at 12.5%. ELSS combines tax saving with equity growth potential, making it popular for tax planning and wealth building together.",
  },
];

export const generalFaqs: FAQ[] = [
  {
    id: "ca-services",
    category: "general",
    question: "What Chartered Accountant services does Sanju & Associates provide?",
    answer:
      "We provide Chartered Accountant services including income tax planning and filing, GST registration and compliance, tax audit and statutory audit, accounting and bookkeeping, company incorporation and ROC filings, and mutual fund distribution (ARN-163501). We serve clients pan-India from our office in Sikar, Rajasthan, via phone, email, and video consultation.",
  },
  {
    id: "pan-india",
    category: "general",
    question: "Do you serve clients outside Sikar or Rajasthan?",
    answer:
      "Yes. Sanju & Associates serves clients across all of India. While our office is in Sikar, Rajasthan, we work with individuals and businesses in every state through phone, email, video calls, and secure document sharing. In-person meetings are available at our Sikar office.",
  },
  {
    id: "ca-and-mf",
    category: "general",
    question: "Can a Chartered Accountant also help with mutual fund investments?",
    answer:
      "Yes, when the CA is also an AMFI-registered Mutual Fund Distributor. CA Sanju holds ARN-163501 and is registered on BSE StAR MF (Registration 35243). This means you get integrated support — tax planning, ITR filing, and mutual fund investments under one roof.",
  },
  {
    id: "ca-fees",
    category: "general",
    question: "How much does it cost to hire a Chartered Accountant?",
    answer:
      "Fees depend on complexity — individual returns start at a modest annual fee, while businesses with GST, payroll, and audits require customised quotes. We offer transparent pricing after understanding your scope during a free initial consultation.",
  },
];

export const allFaqs: FAQ[] = [
  ...gstFaqs,
  ...taxFaqs,
  ...auditFaqs,
  ...bookkeepingFaqs,
  ...incorporationFaqs,
  ...wealthFaqs,
  ...generalFaqs,
];

export const faqs = allFaqs;

export function getFaqsByCategory(category: FaqCategory): FAQ[] {
  return allFaqs.filter((f) => f.category === category);
}

export const faqCategories: FaqCategory[] = [
  "gst",
  "tax",
  "audit",
  "bookkeeping",
  "incorporation",
  "wealth",
  "general",
];
