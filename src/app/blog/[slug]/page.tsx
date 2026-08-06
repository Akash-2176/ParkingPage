import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { posts, getPost } from "@/data/blog";
import Image from "next/image";
import { CtaSection } from "@/components/home/cta-section";
import { Reveal } from "@/components/interactive/reveal";
import { formatDate } from "@/lib/format";
import { siteConfig, absoluteUrl } from "@/lib/site";
import { FounderAvatar } from "@/components/ui/founder-avatar";
import { blogPostingSchema } from "@/lib/schema";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = absoluteUrl(`/blog/${post.slug}`);
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: siteConfig.name,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [siteConfig.ogImage],
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingSchema(post)),
        }}
      />
      <article className="pt-36 lg:pt-44">
        <div className="container-x">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-brand"
          >
            <ArrowLeft className="h-4 w-4" /> Journal
          </Link>

          <div className="mx-auto mt-10 max-w-3xl">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="rounded-full bg-brand/10 px-3 py-1 font-medium text-brand">
                {post.category}
              </span>
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span>{post.readingTime}</span>
            </div>
            <h1 className="mt-5 display-lg">{post.title}</h1>
            <p className="mt-5 text-xl text-muted-foreground">{post.excerpt}</p>
            <div className="mt-6 flex items-center gap-3">
              {post.author.name === siteConfig.founder ? (
                <FounderAvatar size={44} />
              ) : (
                <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-gradient font-display text-sm font-semibold text-white">
                  {post.author.name.split(" ").map((n) => n[0]).join("")}
                </span>
              )}
              <div>
                <p className="text-sm font-medium text-foreground">{post.author.name}</p>
                <p className="text-xs text-muted-foreground">{post.author.role}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-x mt-12">
          <div className="relative mx-auto aspect-[16/8] max-w-4xl overflow-hidden rounded-4xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              unoptimized
              priority
              className="object-cover"
            />
          </div>
        </div>

        <div className="container-x py-16">
          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            {post.content.map((block, i) =>
              block.startsWith("## ") ? (
                <h2
                  key={i}
                  className="mt-6 font-display text-2xl font-semibold text-foreground md:text-3xl"
                >
                  {block.replace("## ", "")}
                </h2>
              ) : (
                <p key={i} className="text-lg leading-relaxed text-muted-foreground">
                  {block}
                </p>
              )
            )}
          </div>
        </div>
      </article>

      <section className="container-x pb-16 lg:pb-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-semibold text-foreground">Keep reading</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {more.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link href={`/blog/${p.slug}`} data-cursor="Read" className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-4xl">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                    {p.title}
                  </h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
