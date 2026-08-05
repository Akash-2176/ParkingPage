import type { Metadata } from "next";
import { pageMeta } from "@/lib/site";
import { PageHeader } from "@/components/ui/page-header";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";
import { CtaSection } from "@/components/home/cta-section";

export const metadata: Metadata = pageMeta({
  title: "Work",
  description:
    "Selected work from Ezura Arc — fintech, healthtech, ecommerce, SaaS and AI products where craft turned into measurable results.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title="Work we're proud to name"
        description="A festival safety platform for Namakkal District Police, a compliance workspace for The Madras CA, and a marketplace for local retailers. The problems, the craft and what shipped."
      />
      <section className="container-x pb-24 lg:pb-32">
        <PortfolioGrid />
      </section>
      <CtaSection />
    </>
  );
}
