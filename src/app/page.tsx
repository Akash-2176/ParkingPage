import type { Metadata } from "next";
import { pageMeta } from "@/lib/site";
import { Hero } from "@/components/home/hero";
import { MarqueeStrip } from "@/components/home/marquee-strip";
import { StatsSection } from "@/components/home/stats";
import { ServicesSection } from "@/components/home/services-section";
import { Showcase } from "@/components/home/showcase";
import { TechSection } from "@/components/home/tech-section";
import { ProcessSection } from "@/components/home/process-section";
import { WhySection } from "@/components/home/why-section";
import { FounderNote } from "@/components/home/founder-note";
import { AwardsSection } from "@/components/home/awards-section";
import { FaqSection } from "@/components/home/faq-section";
import { CtaSection } from "@/components/home/cta-section";

// The homepage previously exported no metadata at all, inheriting the layout
// defaults. Declaring it explicitly lets the entity-defining page carry its own
// title and description — this is the page an assistant lands on first.
export const metadata: Metadata = pageMeta({
  title: "Creative Technology Studio in Karur, Tamil Nadu",
  description:
    "Ezura Arc is a creative technology studio in Karur, Tamil Nadu, building websites, web and mobile applications, brands and AI products for businesses across India.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <StatsSection />
      <ServicesSection />
      <Showcase />
      <TechSection />
      <ProcessSection />
      <WhySection />
      <FounderNote />
      <AwardsSection />
      <FaqSection limit={6} />
      <CtaSection />
    </>
  );
}
