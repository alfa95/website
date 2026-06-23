import { siteConfig } from "./site";

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type SubmitResult = { ok: true } | { ok: false; error: string };

export async function submitContactForm(data: ContactFormData): Promise<SubmitResult> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return {
      ok: false,
      error:
        "Form backend is not configured yet. Please set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.",
    };
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New enquiry from ${data.name} — ${siteConfig.name}`,
        from_name: siteConfig.name,
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.service || "Not specified",
        message: data.message || "—",
      }),
    });

    const result = (await response.json()) as { success?: boolean; message?: string };

    if (!response.ok || !result.success) {
      return {
        ok: false,
        error: result.message ?? "Something went wrong. Please try again.",
      };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      error: "Network error. Please check your connection and try again.",
    };
  }
}
