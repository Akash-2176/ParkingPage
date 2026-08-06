import type { MetadataRoute } from "next";
export const dynamic = "force-static";
import { siteConfig } from "@/lib/site";
import { services } from "@/data/services";
import { projects } from "@/data/portfolio";
import { posts } from "@/data/blog";

/**
 * Content revision date. Previously this was `new Date()`, so every deploy
 * claimed all 31 URLs had changed — crawlers that notice the pattern stop
 * trusting `lastModified` for the domain entirely, which costs the ability to
 * signal a real update later. Bump this by hand when content actually changes.
 */
const CONTENT_UPDATED = new Date("2026-08-06");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = CONTENT_UPDATED;

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/case-studies",
    "/industries",
    "/technologies",
    "/process",
    "/faq",
    "/blog",
    "/careers",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${base}/portfolio/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const postRoutes = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...postRoutes];
}
