import Link from "next/link";
import type { Service } from "@/lib/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card group flex flex-col">
      <h3 className="font-serif text-xl font-semibold text-navy-900 group-hover:text-navy-700 transition-colors">
        <Link href={`/services/${service.slug}/`}>{service.title}</Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
        {service.shortDescription}
      </p>
      <Link
        href={`/services/${service.slug}/`}
        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold-700 hover:text-gold-600 transition-colors"
        aria-label={`Learn more about ${service.title}`}
      >
        Learn more
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </article>
  );
}
