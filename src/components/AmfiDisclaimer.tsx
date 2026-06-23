import { siteConfig } from "@/lib/site";

export function AmfiDisclaimer({ className = "" }: { className?: string }) {
  const { mutualFund } = siteConfig;

  return (
    <p className={`text-xs leading-relaxed text-slate-500 ${className}`}>
      Mutual fund investments are subject to market risks. Read all scheme-related documents
      carefully. {mutualFund.disclaimerLabel}
    </p>
  );
}

export function RegistrationsBlock({ className = "" }: { className?: string }) {
  const { mutualFund } = siteConfig;

  return (
    <dl className={`space-y-2 text-sm ${className}`}>
      <div>
        <dt className="font-medium text-slate-500">AMFI ARN</dt>
        <dd className="text-slate-700">{mutualFund.arn}</dd>
      </div>
      <div>
        <dt className="font-medium text-slate-500">BSE Registration</dt>
        <dd className="text-slate-700">{mutualFund.bse}</dd>
      </div>
      <div>
        <dt className="font-medium text-slate-500">APRN</dt>
        <dd className="text-slate-700">{mutualFund.aprn}</dd>
      </div>
    </dl>
  );
}
