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
