import Link from "next/link";
import { projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export function Showcase() {
  const featured = projects.slice(0, 4);
  return (
    <section className="bg-subtle py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Selected work"
          title="Early work we're proud of"
          description="Our first engagements are under NDA, so they're shared here as confidential case studies — the thinking and the craft, with client identities kept private."
        />
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <Button href="/portfolio" variant="outline" size="lg">
            Explore all work
          </Button>
        </div>
      </div>
    </section>
  );
}
