import type { Metadata } from "next";
import { pageMeta } from "@/lib/site";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaSection } from "@/components/home/cta-section";
import { Stagger, StaggerItem } from "@/components/interactive/reveal";
import { industries } from "@/data/general";

export const metadata: Metadata = pageMeta({
  title: "Industries",
  description:
    "Ezura Arc partners across fintech, healthtech, ecommerce, SaaS, real estate, education, hospitality and enterprise.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries we serve"
        title="Range, with real depth"
        description="Great products share the same DNA across industries — clarity, trust and craft. We bring domain sensitivity to each, from regulated finance to fast-moving retail."
      />
      <section className="container-x pb-24 lg:pb-32">
        <SectionHeading eyebrow="Sectors" title="Where we do our best work" />
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <StaggerItem key={ind.name}>
              <div className="group flex h-full flex-col gap-4 rounded-4xl border border-border bg-card p-7 transition-colors hover:border-brand/40">
                <span className="font-display text-4xl font-semibold text-brand/20 transition-colors group-hover:text-brand/40">
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground">{ind.name}</h3>
                <p className="text-sm text-muted-foreground">{ind.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
      <CtaSection />
    </>
  );
}
