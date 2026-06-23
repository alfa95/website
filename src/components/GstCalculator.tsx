"use client";

import { useState } from "react";
import Link from "next/link";

const GST_RATES = [5, 12, 18, 28] as const;

type CalcMode = "exclusive" | "inclusive";

export function GstCalculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState<number>(18);
  const [mode, setMode] = useState<CalcMode>("exclusive");

  const parsed = parseFloat(amount);
  const valid = !isNaN(parsed) && parsed > 0;

  let taxable = 0;
  let gst = 0;
  let total = 0;

  if (valid) {
    if (mode === "exclusive") {
      taxable = parsed;
      gst = (taxable * rate) / 100;
      total = taxable + gst;
    } else {
      total = parsed;
      taxable = total / (1 + rate / 100);
      gst = total - taxable;
    }
  }

  const format = (n: number) =>
    n.toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 2 });

  return (
    <div className="card border-t-4 border-t-gold-600">
      <h3 className="font-serif text-xl font-semibold text-navy-900">Free GST Calculator</h3>
      <p className="mt-2 text-sm text-slate-600">
        Estimate GST on your invoice amount. For official filing and{" "}
        <strong>GST verification</strong>, consult our team.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="gst-amount" className="block text-sm font-medium text-slate-700">
            Amount (₹)
          </label>
          <input
            id="gst-amount"
            type="number"
            min="0"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-500/20"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="gst-rate" className="block text-sm font-medium text-slate-700">
              GST Rate (%)
            </label>
            <select
              id="gst-rate"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-500/20"
            >
              {GST_RATES.map((r) => (
                <option key={r} value={r}>
                  {r}%
                </option>
              ))}
            </select>
          </div>
          <div>
            <span className="block text-sm font-medium text-slate-700">Amount Type</span>
            <div className="mt-2 flex gap-2">
              {(
                [
                  { value: "exclusive", label: "Excl. GST" },
                  { value: "inclusive", label: "Incl. GST" },
                ] as const
              ).map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setMode(opt.value)}
                  className={`flex-1 rounded-lg border px-3 py-2 text-xs font-semibold transition-colors ${
                    mode === opt.value
                      ? "border-navy-800 bg-navy-900 text-white"
                      : "border-slate-300 text-slate-600 hover:border-slate-400"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {valid && (
        <dl className="mt-6 space-y-2 rounded-lg bg-slate-50 p-4 text-sm">
          <div className="flex justify-between">
            <dt className="text-slate-600">Taxable value</dt>
            <dd className="font-semibold text-navy-900">{format(taxable)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-slate-600">GST ({rate}%)</dt>
            <dd className="font-semibold text-navy-900">{format(gst)}</dd>
          </div>
          <div className="flex justify-between border-t border-slate-200 pt-2">
            <dt className="font-medium text-slate-700">Total amount</dt>
            <dd className="font-semibold text-gold-700">{format(total)}</dd>
          </div>
          <div className="flex justify-between text-xs text-slate-500">
            <dt>CGST ({rate / 2}%)</dt>
            <dd>{format(gst / 2)}</dd>
          </div>
          <div className="flex justify-between text-xs text-slate-500">
            <dt>SGST ({rate / 2}%)</dt>
            <dd>{format(gst / 2)}</dd>
          </div>
        </dl>
      )}

      <p className="mt-4 text-xs text-slate-500">
        For intra-state supplies. Need help with{" "}
        <Link href="/services/gst-compliance/" className="font-medium text-gold-700 hover:underline">
          GST registration
        </Link>{" "}
        or return filing?{" "}
        <Link href="/contact/" className="font-medium text-gold-700 hover:underline">
          Talk to our CAs
        </Link>
        .
      </p>
    </div>
  );
}
