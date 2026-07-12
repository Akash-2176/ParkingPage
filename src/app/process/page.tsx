import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { ProcessSection } from "@/components/home/process-section";
import { FaqSection } from "@/components/home/faq-section";
import { CtaSection } from "@/components/home/cta-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/interactive/reveal";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How Ezura Arc works — a deliberate four-phase process from discovery to launch, built for craft and clarity.",
};

const principles = [
  { title: "Weekly momentum", body: "You see progress every week — demos, not status reports." },
  { title: "One team, one channel", body: "Direct access to the people building your product. No account-manager telephone." },
  { title: "Fixed scope, flexible detail", body: "We agree the destination up front, then sweat the details together." },
];

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="How we work"
        title="A process built for craft"
        description="Great work isn't luck — it's method. Our four-phase process keeps things transparent, collaborative and relentlessly focused on outcomes."
      />
      <ProcessSection standalone />

      <section className="bg-subtle py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Working together" title="What it feels like" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="flex h-full flex-col gap-3 rounded-4xl border border-border bg-card p-8">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FaqSection limit={6} />
      <CtaSection />
    </>
  );
}
