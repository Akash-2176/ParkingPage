import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";
import { CtaSection } from "@/components/home/cta-section";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work from Ezura Arc — fintech, healthtech, ecommerce, SaaS and AI products where craft turned into measurable results.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title="Work worth the NDA"
        description="We're a young studio and our first clients trusted us with confidential work. Here's what we can share — the problems, the craft and the outcomes, with identities kept private."
      />
      <section className="container-x pb-24 lg:pb-32">
        <PortfolioGrid />
      </section>
      <CtaSection />
    </>
  );
}
