import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { CtaSection } from "@/components/home/cta-section";
import { GradientCover } from "@/components/ui/gradient-cover";
import { Reveal } from "@/components/interactive/reveal";
import { projects } from "@/data/portfolio";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Case Studies",
  description:
    "In-depth case studies from Ezura Arc — the problem, the solution and the measurable results behind our work.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case studies"
        title="The story behind the results"
        description="Every project has a before and an after. These deep-dives show the thinking, the craft and the numbers that followed."
      />
      <section className="container-x pb-24 lg:pb-32">
        <div className="flex flex-col gap-8">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.06}>
              <Link
                href={`/portfolio/${p.slug}`}
                data-cursor="Read"
                className="group grid gap-8 rounded-5xl border border-border bg-card p-6 transition-colors hover:border-brand/40 lg:grid-cols-2 lg:p-8"
              >
                {p.coverImage ? (
                  <Image
                    src={p.coverImage}
                    alt={p.title}
                    width={800}
                    height={500}
                    style={{ background: p.coverBg || "transparent" }}
                    className="aspect-[16/10] w-full h-full rounded-4xl object-contain"
                  />
                ) : (
                  <GradientCover from={p.cover.from} to={p.cover.to} className="aspect-[16/10]" />
                )}
                <div className="flex flex-col justify-center gap-4">
                  <span className="text-xs font-medium uppercase tracking-wider text-brand">
                    {p.category} · {p.year}
                  </span>
                  <h2 className="font-display text-3xl font-semibold text-foreground">{p.title}</h2>
                  <p className="text-muted-foreground">{p.summary}</p>
                  <div className="flex flex-wrap gap-6">
                    {p.metrics.slice(0, 3).map((m) => (
                      <div key={m.label}>
                        <p className="font-display text-2xl font-semibold text-foreground">
                          {m.value}
                        </p>
                        <p className="text-xs text-muted-foreground">{m.label}</p>
                      </div>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                    Read case study{" "}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaSection />
    </>
  );
}
