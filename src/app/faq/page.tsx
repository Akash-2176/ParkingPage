import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { CtaSection } from "@/components/home/cta-section";
import { faqs } from "@/data/faq";
import { siteConfig, pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "FAQ",
  description:
    "Answers to the questions we're asked most about working with Ezura Arc.",
  path: "/faq",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHeader
        eyebrow="FAQ"
        title="Everything you might ask"
        description={`The questions founders ask us most. Still curious? Email ${siteConfig.email} — we love a good conversation.`}
      />
      <section className="container-x pb-24 lg:pb-32">
        <div className="mx-auto max-w-3xl">
          <FaqAccordion items={faqs} />
        </div>
      </section>
      <CtaSection />
    </>
  );
}
