"use client";

import { useState } from "react";
import { submitContactForm } from "@/lib/contact-form";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

type FieldErrors = {
  email?: string;
  phone?: string;
};

function validateEmail(email: string): string | undefined {
  const value = email.trim();
  if (!value) return "Email is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return "Enter a valid email address.";
  }
  return undefined;
}

function validatePhone(phone: string): string | undefined {
  const digits = phone.replace(/\D/g, "");
  if (!digits) return "Phone number is required.";

  const normalized =
    digits.length === 12 && digits.startsWith("91") ? digits.slice(2) : digits;

  if (normalized.length !== 10 || !/^[6-9]/.test(normalized)) {
    return "Enter a valid 10-digit Indian mobile number.";
  }

  return undefined;
}

function formatPhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  const normalized =
    digits.length === 12 && digits.startsWith("91") ? digits.slice(2) : digits;
  return `+91 ${normalized}`;
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string).trim();
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const service = data.get("service") as string;
    const message = (data.get("message") as string).trim();

    const nextErrors: FieldErrors = {
      email: validateEmail(email),
      phone: validatePhone(phone),
    };

    setErrors(nextErrors);
    if (nextErrors.email || nextErrors.phone) return;

    setIsSubmitting(true);

    const result = await submitContactForm({
      name,
      email: email.trim(),
      phone: formatPhone(phone),
      service,
      message,
    });

    setIsSubmitting(false);

    if (!result.ok) {
      setSubmitError(result.error);
      return;
    }

    setSubmitted(true);
    form.reset();
  }

  if (submitted) {
    return (
      <div className="card border-l-4 border-l-gold-600">
        <h2 className="font-serif text-xl font-semibold text-navy-900">Thank you!</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          Your enquiry has been received. We&apos;ll get back to you within one business day at the
          email or phone number you provided. For urgent matters, call us at{" "}
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="font-semibold text-gold-700"
          >
            {siteConfig.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  const inputClass = (hasError: boolean) =>
    `mt-1 w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 disabled:bg-slate-50 disabled:text-slate-500 ${
      hasError
        ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
        : "border-slate-300 focus:border-navy-500 focus:ring-navy-500/20"
    }`;

  return (
    <form onSubmit={handleSubmit} className="card space-y-5" noValidate aria-label="Contact form">
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          disabled={isSubmitting}
          autoComplete="name"
          className={inputClass(false)}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            disabled={isSubmitting}
            autoComplete="email"
            inputMode="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            onChange={() => errors.email && setErrors((prev) => ({ ...prev, email: undefined }))}
            className={inputClass(Boolean(errors.email))}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            disabled={isSubmitting}
            autoComplete="tel"
            inputMode="tel"
            placeholder="10-digit mobile number"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            onChange={() => errors.phone && setErrors((prev) => ({ ...prev, phone: undefined }))}
            className={inputClass(Boolean(errors.phone))}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-xs text-red-600" role="alert">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-slate-700">
          Service of Interest
        </label>
        <select
          id="service"
          name="service"
          disabled={isSubmitting}
          className={inputClass(false)}
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="Other">Other / Not Sure</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700">
          Message <span className="text-slate-400">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          disabled={isSubmitting}
          placeholder="Tell us about your business and what you need help with..."
          className={inputClass(false)}
        />
      </div>

      {submitError && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {submitError}
        </p>
      )}

      <button type="submit" disabled={isSubmitting} className="btn-primary w-full sm:w-auto disabled:opacity-60">
        {isSubmitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
