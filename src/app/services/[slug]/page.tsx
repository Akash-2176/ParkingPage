import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { services, getService } from "@/data/services";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { CtaSection } from "@/components/home/cta-section";
import { Reveal, Stagger, StaggerItem } from "@/components/interactive/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig, pageMeta } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMeta({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <PageHeader eyebrow="Service" title={service.title} description={service.tagline}>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-3xl text-muted-foreground">{service.description}</p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" size="lg">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button href="/portfolio" size="lg" variant="outline">
              See our work
            </Button>
          </div>
        </Reveal>
      </PageHeader>

      {/* Benefits */}
      <section className="container-x py-16 lg:py-24">
        <SectionHeading eyebrow="Why it matters" title="What you get out of it" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {service.benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-3 rounded-4xl border border-border bg-card p-8">
                <span className="font-display text-3xl font-semibold text-brand/30">
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground">{b.title}</h3>
                <p className="text-muted-foreground">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Features + Tech */}
      <section className="bg-subtle py-16 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <SectionHeading eyebrow="What's included" title="Features & scope" />
            <Stagger className="mt-10 grid gap-4 sm:grid-cols-2">
              {service.features.map((f) => (
                <StaggerItem key={f}>
                  <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <span className="text-sm text-foreground">{f}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <div>
            <SectionHeading eyebrow="Toolkit" title="Technologies" />
            <div className="mt-10 flex flex-wrap gap-3">
              {service.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-x py-16 lg:py-24">
        <SectionHeading eyebrow="The path" title="How we deliver" />
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {service.process.map((p) => (
            <div key={p.step} className="flex flex-col gap-3 rounded-4xl border border-border bg-card p-6">
              <span className="font-display text-4xl font-semibold text-brand/25">{p.step}</span>
              <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-subtle py-16 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col gap-6">
            <SectionHeading eyebrow="FAQ" title="Good to know" />
            <p className="text-muted-foreground">
              Every engagement is scoped to your goals — talk to us and we&apos;ll shape
              the right approach together.
            </p>
            <Button href="/contact" variant="outline" className="w-fit" magnetic={false}>
              Get a tailored proposal
            </Button>
          </div>
          <FaqAccordion items={service.faqs} />
        </div>
      </section>

      {/* Related */}
      <section className="container-x py-16 lg:py-24">
        <SectionHeading eyebrow="Keep exploring" title="Related services" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex flex-col gap-3 rounded-4xl border border-border bg-card p-6 transition-colors hover:border-brand/40"
            >
              <s.icon className="h-6 w-6 text-brand" />
              <span className="font-display text-lg font-semibold text-foreground">{s.title}</span>
              <span className="mt-auto inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-brand">
                Explore <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
