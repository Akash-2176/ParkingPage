export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  confidential?: boolean;
  services: string[];
  summary: string;
  cover: { from: string; to: string }; // gradient stops
  overview: string;
  problem: string;
  solution: string;
  tech: string[];
  metrics: { value: string; label: string }[];
  gallery: { from: string; to: string; label: string }[];
  beforeAfter: { before: string; after: string };
  testimonial?: { quote: string; author: string; role: string };
  liveUrl?: string;
};

/**
 * Our early engagements are under NDA, so they're presented here as
 * confidential case studies — code-named, with client identities withheld.
 * Replace the metrics / details with your real figures where you're able to,
 * or keep them confidential.
 */
export const projects: Project[] = [
  {
    slug: "project-halo",
    title: "Project Halo",
    client: "Under NDA",
    category: "Fintech · Web App",
    year: "2026",
    confidential: true,
    services: ["Product Design", "Web App", "Design System"],
    summary:
      "A confidential fintech dashboard — we turned a dense, anxiety-inducing tool into a calm, glanceable experience.",
    cover: { from: "#FF7A4E", to: "#ED3F0F" },
    overview:
      "An early-stage fintech partner asked us to reimagine their core product from the ground up — brand-adjacent, design-led, and engineered to grow. Client details are withheld under NDA.",
    problem:
      "The original product buried its most useful insight under dense tables. New users felt overwhelmed in the first session, and the team couldn't ship changes without a developer.",
    solution:
      "We reframed the whole experience around a single question — 'am I on track?' — with a glanceable dashboard, progressive disclosure, and a componentised system the team can extend themselves.",
    tech: ["Next.js", "TypeScript", "tRPC", "PostgreSQL", "Framer Motion"],
    metrics: [
      { value: "1 team", label: "Founder-led delivery" },
      { value: "6 wks", label: "Concept to live MVP" },
      { value: "95+", label: "Lighthouse score" },
      { value: "0", label: "Design-to-dev handoffs lost" },
    ],
    gallery: [
      { from: "#FF7A4E", to: "#ED3F0F", label: "Dashboard overview" },
      { from: "#434A5C", to: "#1B1E27", label: "Insights, simplified" },
      { from: "#FF9C77", to: "#FF5A2E", label: "Mobile companion" },
    ],
    beforeAfter: {
      before: "Dense multi-column tables and a confusing first session.",
      after: "One glanceable answer and a product the team can evolve on their own.",
    },
  },
  {
    slug: "project-loom",
    title: "Project Loom",
    client: "Under NDA",
    category: "Ecommerce · Brand",
    year: "2025",
    confidential: true,
    services: ["Brand Direction", "Headless Ecommerce", "Motion"],
    summary:
      "A confidential D2C storefront — an editorial, headless commerce experience that makes premium products feel premium.",
    cover: { from: "#434A5C", to: "#1B1E27" },
    overview:
      "A growing direct-to-consumer brand came to us to move off a generic template and onto a store that matched the quality of their product. Client details are withheld under NDA.",
    problem:
      "A cookie-cutter theme made considered, high-ticket products feel like commodities, and the mobile experience was slow and forgettable.",
    solution:
      "We art-directed every product as a story, added buttery scroll and fast two-tap mobile checkout, and built it headless so the storefront and catalogue can evolve independently.",
    tech: ["Next.js", "Shopify (headless)", "TailwindCSS", "GSAP", "Razorpay"],
    metrics: [
      { value: "2-tap", label: "Mobile checkout" },
      { value: "98", label: "Lighthouse score" },
      { value: "< 1s", label: "Time to interactive" },
      { value: "Headless", label: "Future-proof stack" },
    ],
    gallery: [
      { from: "#434A5C", to: "#1B1E27", label: "Editorial home" },
      { from: "#8A90A0", to: "#434A5C", label: "Product story" },
      { from: "#FF5A2E", to: "#8F2409", label: "Two-tap checkout" },
    ],
    beforeAfter: {
      before: "A template store where premium products looked ordinary.",
      after: "An editorial showroom that loads instantly and converts on mobile.",
    },
  },
  {
    slug: "project-atlas",
    title: "Project Atlas",
    client: "Under NDA",
    category: "SaaS · AI",
    year: "2025",
    confidential: true,
    services: ["AI Feature", "Web App", "UX"],
    summary:
      "A confidential internal tool with a grounded AI assistant — one people actually trust with real decisions.",
    cover: { from: "#FF5A2E", to: "#434A5C" },
    overview:
      "A team drowning in scattered documents wanted an assistant that could answer questions from their own knowledge — without making things up. Client details are withheld under NDA.",
    problem:
      "Off-the-shelf AI chat hallucinated on internal data, so the team simply didn't trust it, and adoption never got off the ground.",
    solution:
      "We built retrieval over their knowledge base with inline citations and a small evaluation harness to measure answer quality — so the assistant earns trust by showing its work.",
    tech: ["Next.js", "Claude API", "Vector search", "Vercel AI SDK"],
    metrics: [
      { value: "Cited", label: "Every answer sourced" },
      { value: "Evals", label: "Quality measured, not guessed" },
      { value: "RAG", label: "Grounded in their data" },
      { value: "Private", label: "No training on your data" },
    ],
    gallery: [
      { from: "#FF5A2E", to: "#434A5C", label: "Cited answers" },
      { from: "#2E3340", to: "#0E0F14", label: "Evaluation view" },
      { from: "#FF7A4E", to: "#C42F09", label: "Knowledge search" },
    ],
    beforeAfter: {
      before: "A generic AI chat that hallucinated and earned zero trust.",
      after: "A grounded, cited assistant the team relies on daily.",
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
