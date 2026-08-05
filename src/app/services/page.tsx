import type { Metadata } from "next";
import { pageMeta } from "@/lib/site";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { coreServices, supportingServices } from "@/data/services";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProcessSection } from "@/components/home/process-section";
import { CtaSection } from "@/components/home/cta-section";
import { Reveal } from "@/components/interactive/reveal";

export const metadata: Metadata = pageMeta({
  title: "Services",
  description:
    "Web applications, websites, AI products and mobile apps — built end to end by Ezura Arc, with brand, ecommerce, cloud and support around them.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        title="Four things we do properly"
        description="We lead with the work we can show you — web applications, websites, AI products and mobile. Everything else below supports those builds rather than competing with them."
      />

      <section className="container-x py-16 lg:py-24">
        <div className="flex flex-col gap-4">
          {coreServices.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.05}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex flex-col gap-4 rounded-4xl border border-border bg-card p-8 transition-all duration-300 hover:border-brand/40 hover:bg-subtle md:flex-row md:items-center md:gap-8 md:p-10"
              >
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-3xl bg-brand/10 text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white">
                  <service.icon className="h-7 w-7" />
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h2 className="font-display text-2xl font-semibold text-foreground md:text-3xl">
                      {service.title}
                    </h2>
                    <span className="hidden text-sm text-muted-foreground sm:inline">
                      — {service.short}
                    </span>
                  </div>
                  <p className="mt-2 max-w-2xl text-muted-foreground">{service.description}</p>
                </div>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-border transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Supporting capabilities — deliberately quieter than the four above. */}
      <section className="border-t border-border bg-subtle py-16 lg:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Also available"
            title="Supporting capabilities"
            description="Usually part of a larger build rather than a standalone engagement — but we're happy to take any of them on their own."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {supportingServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex items-center gap-4 rounded-3xl border border-border bg-card p-5 transition-colors hover:border-brand/40"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <service.icon className="h-5 w-5" />
                </span>
                <span className="flex-1">
                  <span className="block font-medium text-foreground">
                    {service.title}
                  </span>
                  <span className="block text-sm text-muted-foreground">
                    {service.short}
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-brand" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <CtaSection />
    </>
  );
}
