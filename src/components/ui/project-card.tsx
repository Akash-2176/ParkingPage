"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/data/portfolio";
import { GradientCover } from "@/components/ui/gradient-cover";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
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
        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{project.summary}</p>
          </div>
          <span className="shrink-0 whitespace-nowrap text-xs font-medium uppercase tracking-wider text-brand">
            {project.category}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
