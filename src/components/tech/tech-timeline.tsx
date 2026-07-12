"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "Foundation",
    title: "Type-safe by default",
    body: "Next.js, React and TypeScript form our base — a fast, maintainable, SEO-friendly foundation for everything we ship.",
    items: ["Next.js", "React", "TypeScript"],
  },
  {
    year: "Interface",
    title: "Design, systematised",
    body: "TailwindCSS and a componentised design system keep interfaces consistent, accessible and quick to evolve.",
    items: ["TailwindCSS", "Radix", "Figma", "Storybook"],
  },
  {
    year: "Motion",
    title: "Life & delight",
    body: "Framer Motion, GSAP and Lenis power the buttery interactions that make a product feel premium.",
    items: ["Framer Motion", "GSAP", "Lenis", "Split Type"],
  },
  {
    year: "Backend",
    title: "Solid & scalable",
    body: "Node, PostgreSQL, Prisma and typed APIs give us robust data layers that grow with your users.",
    items: ["Node.js", "PostgreSQL", "Prisma", "tRPC", "GraphQL"],
  },
  {
    year: "Cloud",
    title: "Ship & scale",
    body: "Vercel, AWS, Docker and automated pipelines take products live and keep them fast and observable.",
    items: ["Vercel", "AWS", "Docker", "GitHub Actions"],
  },
  {
    year: "Intelligence",
    title: "AI, woven in",
    body: "The latest models, retrieval and evaluation harnesses let us add intelligence that's grounded and trustworthy.",
    items: ["Claude API", "OpenAI", "LangChain", "Pinecone"],
  },
];

export function TechTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-[15px] top-2 h-full w-px bg-border md:left-1/2" />
      <div className="flex flex-col gap-12">
        {milestones.map((m, i) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className={`relative flex gap-6 md:w-1/2 ${
              i % 2 === 0 ? "md:self-start md:pr-12 md:text-right" : "md:ml-auto md:self-end md:pl-12"
            }`}
          >
            <span
              className={`absolute top-1.5 grid h-8 w-8 place-items-center rounded-full border-2 border-brand bg-background text-xs font-semibold text-brand ${
                i % 2 === 0 ? "left-0 md:left-auto md:-right-4" : "left-0 md:-left-4"
              }`}
            >
              {i + 1}
            </span>
            <div className="ml-12 flex flex-col gap-3 md:ml-0">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                {m.year}
              </span>
              <h3 className="font-display text-2xl font-semibold text-foreground">{m.title}</h3>
              <p className="text-muted-foreground">{m.body}</p>
              <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                {m.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
