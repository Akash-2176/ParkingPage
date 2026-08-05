"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { coreServices } from "@/data/services";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  // Lead with the four we can evidence with case studies. The rest are on
  // /services — a homepage grid of ten reads as "generalist", not "studio".
  const featured = coreServices;
  return (
    <section id="services" className="container-x py-24 lg:py-32">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="What we do"
          title="Capabilities that compound"
          description="Design, engineering, brand and AI under one roof — so nothing gets lost in translation."
        />
        <Link
          href="/services"
          className="link-underline shrink-0 text-sm font-medium text-brand"
        >
          All services →
        </Link>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-4xl border border-border bg-border sm:grid-cols-2">
        {featured.map((service, i) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.06 }}
          >
            <Link
              href={`/services/${service.slug}`}
              className="group relative flex h-full flex-col gap-5 bg-card p-8 transition-colors duration-300 hover:bg-subtle"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand/10 text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white">
                  <service.icon className="h-6 w-6" />
                </span>
                <ArrowUpRight className="h-5 w-5 -translate-x-1 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-brand group-hover:opacity-100" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.tagline}
                </p>
              </div>
              <span
                className={cn(
                  "mt-auto h-px w-0 bg-brand transition-all duration-500 group-hover:w-full"
                )}
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
