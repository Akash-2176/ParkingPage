import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Quote } from "lucide-react";
import { projects, getProject } from "@/data/portfolio";
import { GradientCover } from "@/components/ui/gradient-cover";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaSection } from "@/components/home/cta-section";
import { Reveal } from "@/components/interactive/reveal";
import { ProjectCard } from "@/components/ui/project-card";
import { FloatingOrbs } from "@/components/interactive/floating-orbs";
import { Eyebrow } from "@/components/ui/badge";
import { siteConfig, pageMeta } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMeta({
    title: `${project.title} — Case Study`,
    description: project.summary,
    path: `/portfolio/${project.slug}`,
  });
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <>
      <section className="relative overflow-hidden pt-36 lg:pt-44">
        <FloatingOrbs />
        <div className="container-x relative">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-brand"
          >
            <ArrowLeft className="h-4 w-4" /> All work
          </Link>
          <div className="mt-8 flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <Eyebrow>{project.category}</Eyebrow>
            </div>
            <h1 className="display-hero">{project.title}</h1>
            <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
              {project.summary}
            </p>
          </div>

          <div className="mt-12 grid gap-6 border-y border-border py-8 sm:grid-cols-3 lg:grid-cols-4">
            <Meta label="Client" value={project.client} />
            <Meta label="Year" value={project.year} />
            <Meta label="Services" value={project.services.join(", ")} className="sm:col-span-2" />
          </div>
        </div>
      </section>

      {/* Hero cover */}
      <section className="container-x py-12">
        {/* NOT wrapped in <Reveal>: this is the LCP element. A Reveal starts at
            opacity:0 and only fades in once Framer hydrates, so on a throttled
            CPU the largest paint waits on the whole JS bundle — it measured
            7.4s at 6x slowdown. `priority` also puts it in the initial preload
            scan instead of letting the lazy loader discover it after layout. */}
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={project.title}
            width={1600}
            height={900}
            priority
            fetchPriority="high"
            style={{ background: project.coverBg || "transparent" }}
            className="aspect-[16/9] w-full h-full rounded-4xl object-cover"
          />
        ) : (
          <Reveal>
            <GradientCover
              from={project.cover.from}
              to={project.cover.to}
              className="aspect-[16/9]"
            />
          </Reveal>
        )}
      </section>

      {/* Overview / problem / solution */}
      <section className="container-x py-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow="Overview" title="The brief" />
          <div className="flex flex-col gap-10">
            <p className="text-lg leading-relaxed text-muted-foreground">{project.overview}</p>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-3">
                <h3 className="font-display text-lg font-semibold text-brand">The problem</h3>
                <p className="leading-relaxed text-muted-foreground">{project.problem}</p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-display text-lg font-semibold text-brand">Our solution</h3>
                <p className="leading-relaxed text-muted-foreground">{project.solution}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-ink-950 py-20 text-white lg:py-28">
        <div className="container-x">
          <Eyebrow>Impact</Eyebrow>
          {/* `min-w-0` + `break-words`: word metrics like "End-to-end" or
              "Centralized" at text-4xl set an intrinsic minimum wider than a
              2-column cell on a 375px screen, which pushed the whole page into
              horizontal scroll. Numeric metrics ("750+") were never affected —
              this only shows up on the word-based ones. */}
          <div className="mt-10 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="flex min-w-0 flex-col gap-2 border-l border-white/15 pl-4 sm:pl-5"
              >
                <span className="font-display text-2xl font-semibold text-white [overflow-wrap:anywhere] sm:text-4xl md:text-5xl">
                  {m.value}
                </span>
                <span className="text-sm text-white/60">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="container-x py-16 lg:py-24">
        <SectionHeading eyebrow="Gallery" title="A closer look" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {project.gallery.map((g, i) => (
            <Reveal key={i} delay={i * 0.08}>
              {g.image ? (
                <div className="relative overflow-hidden rounded-4xl bg-[#F6F0E7]">
                  <Image 
                    src={g.image} 
                    alt={g.label} 
                    width={600} 
                    height={800} 
                    className="aspect-[3/4] w-full object-cover object-top" 
                  />
                  {g.label && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 pt-12">
                      <span className="text-sm font-medium text-white/90">
                        {g.label}
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                <GradientCover from={g.from} to={g.to} label={g.label} className="aspect-[3/4]" />
              )}
            </Reveal>
          ))}
        </div>
      </section>

      {/* Before / after */}
      <section className="bg-subtle py-16 lg:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Before & after" title="The transformation" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-4xl border border-border bg-card p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Before
              </span>
              <p className="mt-4 text-lg text-muted-foreground">{project.beforeAfter.before}</p>
            </div>
            <div className="rounded-4xl border border-brand bg-brand/5 p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                After
              </span>
              <p className="mt-4 text-lg text-foreground">{project.beforeAfter.after}</p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial (only when we have a shareable, real quote) */}
      {project.testimonial && (
        <section className="container-x py-20 lg:py-28">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
            <Quote className="h-12 w-12 text-brand/30" />
            <blockquote className="font-display text-2xl font-medium leading-snug text-foreground md:text-4xl">
              &ldquo;{project.testimonial.quote}&rdquo;
            </blockquote>
            <div>
              <p className="font-medium text-foreground">{project.testimonial.author}</p>
              <p className="text-sm text-muted-foreground">{project.testimonial.role}</p>
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      <section className="container-x pb-16 lg:pb-24">
        <div className="flex items-end justify-between">
          <SectionHeading eyebrow="Next" title="Related work" />
          <Link href="/portfolio" className="link-underline text-sm font-medium text-brand">
            All work →
          </Link>
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {related.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}

function Meta({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-1 font-medium text-foreground">{value}</p>
    </div>
  );
}
