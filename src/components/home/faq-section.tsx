import { faqs } from "@/data/faq";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { Button } from "@/components/ui/button";

export function FaqSection({ limit }: { limit?: number }) {
  const items = limit ? faqs.slice(0, limit) : faqs;
  return (
    <section className="container-x py-24 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="flex flex-col gap-6">
          <SectionHeading eyebrow="FAQ" title="Questions, answered" />
          <p className="text-muted-foreground">
            Can&apos;t find what you&apos;re looking for? We&apos;re happy to talk.
          </p>
          <Button href="/contact" variant="outline" className="w-fit">
            Get in touch
          </Button>
        </div>
        <FaqAccordion items={items} />
      </div>
    </section>
  );
}
