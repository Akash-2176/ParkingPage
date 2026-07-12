import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { posts } from "@/data/blog";
import Image from "next/image";
import { CtaSection } from "@/components/home/cta-section";
import { Reveal } from "@/components/interactive/reveal";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes from the Ezura Arc studio on design, engineering, AI and building better digital products.",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHeader
        eyebrow="Journal"
        title="Notes from the studio"
        description="Occasional, opinionated writing on design, engineering, AI and the craft of building products people love."
      />

      <section className="container-x pb-16">
        <Reveal>
          <Link
            href={`/blog/${featured.slug}`}
            data-cursor="Read"
            className="group grid gap-8 rounded-5xl border border-border bg-card p-6 transition-colors hover:border-brand/40 lg:grid-cols-2 lg:p-8"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-4xl">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                unoptimized
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="flex flex-col justify-center gap-4">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-brand/10 px-3 py-1 font-medium text-brand">
                  {featured.category}
                </span>
                <span>{formatDate(featured.date)}</span>
                <span>·</span>
                <span>{featured.readingTime}</span>
              </div>
              <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
                {featured.title}
              </h2>
              <p className="text-lg text-muted-foreground">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                Read article <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>
      </section>

      <section className="container-x pb-24 lg:pb-32">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.08}>
              <Link href={`/blog/${post.slug}`} data-cursor="Read" className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-4xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-5 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full bg-brand/10 px-3 py-1 font-medium text-brand">
                    {post.category}
                  </span>
                  <span>{formatDate(post.date)}</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold text-foreground">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
