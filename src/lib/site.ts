export const siteConfig = {
  name: "Sanju & Associates",
  legalName: "Sanju & Associates Chartered Accountants",
  tagline: "Chartered Accountants, Tax Advisors & Mutual Fund Distributors",
  description:
    "ICAI-registered Chartered Accountants and AMFI-registered Mutual Fund Distributors offering tax planning, GST compliance, audit & assurance, bookkeeping, mutual fund solutions, and business advisory for individuals and businesses across India.",
  serviceArea: "Pan-India",
  serviceAreaNote:
    "Headquartered in Sikar, Rajasthan — serving clients in every state and union territory through in-person, phone, email, and video consultations.",
  url: "https://www.sanjuassociates.in",
  googleAnalyticsId: "G-HKNP3KVM8C",
  locale: "en_IN",
  email: "contact.sanjuassociates@gmail.com",
  phone: "+91 77288 55964",
  address: {
    street: "B 24, Manbhavan Raghav Sarovar, Palwas Road",
    city: "Sikar",
    state: "Rajasthan",
    postalCode: "332001",
    country: "IN",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/sanju-associates",
  },
  founder: {
    name: "CA Sanju",
    title: "Founding Partner",
    membership: "ICAI Member — Membership No. 123456",
  },
  mutualFund: {
    arn: "ARN-163501",
    bse: "35243",
    aprn: "APRN01070",
    role: "AMFI Registered Mutual Fund Distributor",
    disclaimerLabel: "ARN-163501.",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
    { label: "About Us", href: "/about/" },
    { label: "Insights", href: "/blog/" },
    { label: "FAQ", href: "/faq/" },
    { label: "Contact Us", href: "/contact/" },
  ],
  legal: [
    { label: "About Us", href: "/about/" },
    { label: "Contact Us", href: "/contact/" },
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Terms & Conditions", href: "/terms-and-conditions/" },
  ],
} as const;
