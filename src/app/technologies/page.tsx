import type { Metadata } from "next";
import { pageMeta } from "@/lib/site";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechTimeline } from "@/components/tech/tech-timeline";
import { CtaSection } from "@/components/home/cta-section";
import { techStack } from "@/data/general";

export const metadata: Metadata = pageMeta({
  title: "Technologies",
  description:
    "The modern stack Ezura Arc uses to design, build, ship and scale — from Next.js and TypeScript to AI and cloud.",
  path: "/technologies",
});

export default function TechnologiesPage() {
  const grouped = techStack.reduce<Record<string, string[]>>((acc, t) => {
    (acc[t.category] ??= []).push(t.name);
    return acc;
  }, {});

  return (
    <>
      <PageHeader
        eyebrow="Our stack"
        title="Tools we've truly mastered"
        description="We don't chase every shiny framework. We go deep on a modern, proven stack — so we can move fast without breaking things."
      />

      <section className="container-x py-16 lg:py-24">
        <SectionHeading eyebrow="The layers" title="From foundation to intelligence" />
        <div className="mt-16">
          <TechTimeline />
        </div>
      </section>

      <section className="bg-subtle py-16 lg:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="By category" title="The full toolkit" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(grouped).map(([category, names]) => (
              <div key={category} className="rounded-4xl border border-border bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                  {category}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {names.map((n) => (
                    <span
                      key={n}
                      className="rounded-full border border-border px-3 py-1.5 text-sm text-foreground"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
