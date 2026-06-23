import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AmfiDisclaimer, RegistrationsBlock } from "@/components/AmfiDisclaimer";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/Breadcrumb";
import { CTABanner } from "@/components/CTABanner";
import { JsonLd } from "@/components/JsonLd";
import { serviceJsonLd } from "@/lib/json-ld";
import { createMetadata } from "@/lib/seo";
import { services, getServiceBySlug } from "@/lib/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return createMetadata({
    title: service.title,
    description: service.shortDescription,
    path: `/services/${service.slug}/`,
    keywords: service.keywords,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);
  const isMutualFund = slug === "mutual-fund-wealth";

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { label: "Services", href: "/services/" },
            { label: service.title },
          ]),
          serviceJsonLd(service),
        ]}
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Breadcrumb
          items={[
            { label: "Services", href: "/services/" },
            { label: service.title },
          ]}
        />

        <article>
          <header className="max-w-3xl">
            <h1 className="section-heading">{service.title}</h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              {service.description}
            </p>
          </header>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <section aria-labelledby="benefits-heading">
              <h2 id="benefits-heading" className="font-serif text-2xl font-semibold text-navy-900">
                Key Benefits
              </h2>
              <ul className="mt-5 space-y-3">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-1 text-gold-600 font-bold" aria-hidden="true">
                      ✓
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="deliverables-heading">
              <h2 id="deliverables-heading" className="font-serif text-2xl font-semibold text-navy-900">
                What We Deliver
              </h2>
              <ul className="mt-5 space-y-3">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-1 text-navy-700 font-bold" aria-hidden="true">
                      →
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {isMutualFund && (
            <aside className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="font-serif text-lg font-semibold text-navy-900">
                AMFI Registrations
              </h2>
              <RegistrationsBlock className="mt-4" />
              <AmfiDisclaimer className="mt-6" />
            </aside>
          )}
        </article>

        <aside className="mt-16">
          <h2 className="font-serif text-xl font-semibold text-navy-900">Related Services</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {otherServices.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}/`}
                  className="inline-block rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-navy-300 hover:text-navy-800 transition-colors"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <CTABanner
        title={
          isMutualFund
            ? "Ready to start your investment journey?"
            : `Need help with ${service.title.toLowerCase()}?`
        }
        description={
          isMutualFund
            ? "Speak with our AMFI-registered Mutual Fund Distributor for goal-based fund recommendations alongside expert tax planning."
            : "Speak with a Chartered Accountant today. We'll assess your needs and provide a clear plan."
        }
      />
    </>
  );
}
