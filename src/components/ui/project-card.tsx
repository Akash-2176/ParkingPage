"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/data/portfolio";
import { GradientCover } from "@/components/ui/gradient-cover";

export function ProjectCard({
  project,
  index = 0,
  priority = false,
}: {
  project: Project;
  index?: number;
  /**
   * Preload this card's image. Only pass it where the card is genuinely above
   * the fold — on /portfolio it is; on the homepage showcase it sits ~2500px
   * down, and preloading it there stole bandwidth from the hero.
   */
  priority?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (index % 2) * 0.08 }}
    >
      <Link
        href={`/portfolio/${project.slug}`}
        data-cursor="View"
        className="group block"
      >
        <div className="relative overflow-hidden rounded-4xl">
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={project.title}
              width={800}
              height={600}
              priority={priority}
              style={{ background: project.coverBg || "transparent" }}
              className="aspect-[4/3] w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
            />
          ) : (
            <GradientCover
              from={project.cover.from}
              to={project.cover.to}
              className="aspect-[4/3] transition-transform duration-700 group-hover:scale-[1.03]"
            />
          )}
          <div className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-ink-900">
            <ArrowUpRight className="h-5 w-5" />
          </div>
        </div>
        {/* Stacked on phones: a category like "Government · Web & Mobile
            Platform" is ~270px, so side-by-side with shrink-0 + nowrap forced
            the card past a 375px viewport and the whole page scrolled sideways. */}
        <div className="mt-5 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div className="min-w-0 order-2 sm:order-1">
            <h3 className="font-display text-2xl font-semibold text-foreground">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{project.summary}</p>
          </div>
          <span className="order-1 text-xs font-medium uppercase tracking-wider text-brand sm:order-2 sm:shrink-0 sm:whitespace-nowrap">
            {project.category}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
