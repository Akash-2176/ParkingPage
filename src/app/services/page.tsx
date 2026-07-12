import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { services } from "@/data/services";
import { ProcessSection } from "@/components/home/process-section";
import { CtaSection } from "@/components/home/cta-section";
import { Reveal } from "@/components/interactive/reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "From websites and web apps to mobile, brand, ecommerce, SaaS, cloud and AI — the full range of Ezura Arc's creative technology services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        title="Everything you need, under one roof"
        description="Ten disciplines, one team. We combine them fluidly so your product is designed, built and grown without the seams."
      />

      <section className="container-x py-16 lg:py-24">
        <div className="flex flex-col gap-4">
          {services.map((service, i) => (
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

      <ProcessSection />
      <CtaSection />
    </>
  );
}
