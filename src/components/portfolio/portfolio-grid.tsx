"use client";

import { useState, useMemo } from "react";
import { projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/ui/project-card";
import { cn } from "@/lib/utils";

export function PortfolioGrid() {
  const categories = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.category.split(" · ").forEach((c) => set.add(c)));
    return ["All", ...Array.from(set)];
  }, []);

  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category.includes(filter));

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={cn(
              "rounded-full border px-5 py-2 text-sm transition-all",
              filter === c
                ? "border-brand bg-brand text-white"
                : "border-border text-muted-foreground hover:border-brand/50"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        {filtered.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </div>
  );
}
