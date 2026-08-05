/**
 * Facts a buyer can check, not scores we award ourselves. Nothing here
 * animates — see components/home/stats.tsx for why.
 *
 * Rule for editing: if you can't evidence it on request, it doesn't go here.
 * "100% client satisfaction" from a three-project studio reads as filler.
 */
export const credentials = [
  { value: "Pvt Ltd", label: "Registered in Tamil Nadu, 2026" },
  { value: "30+ stations", label: "Police portal live across Namakkal district" },
  { value: "Karur", label: "Based here, working across India" },
  { value: "< 1 day", label: "Reply to every enquiry" },
];

export const process = [
  {
    step: "01",
    title: "Discover",
    body: "We dig into your business, users and ambition. Positioning, goals and the metrics that define success — before a single pixel.",
    outputs: ["Strategy workshop", "Research & audit", "Success metrics"],
  },
  {
    step: "02",
    title: "Design",
    body: "Art direction, prototypes and a motion language. We design the whole experience and validate it with real people, fast.",
    outputs: ["Art direction", "Interactive prototype", "Design system"],
  },
  {
    step: "03",
    title: "Build",
    body: "Design and engineering in the same room. Type-safe, tested, accessible code shipped in reviewable increments.",
    outputs: ["Production build", "QA & testing", "Performance budget"],
  },
  {
    step: "04",
    title: "Launch",
    body: "SEO, analytics and a flawless deploy. We measure, learn and iterate — then keep your product healthy and evolving.",
    outputs: ["Launch & handover", "Analytics setup", "Care plan"],
  },
];

export const techStack = [
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "TailwindCSS", category: "Styling" },
  { name: "Framer Motion", category: "Motion" },
  { name: "GSAP", category: "Motion" },
  { name: "React Native", category: "Mobile" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Prisma", category: "Database" },
  { name: "GraphQL", category: "API" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "Cloud" },
  { name: "Vercel", category: "Cloud" },
  { name: "Claude API", category: "AI" },
  { name: "Figma", category: "Design" },
  { name: "Shopify", category: "Commerce" },
  { name: "Stripe", category: "Payments" },
];

export const whyChoose = [
  {
    title: "Design & engineering as one",
    body: "No lossy handoff between a pretty mockup and a shipped product. The people who design it, build it.",
  },
  {
    title: "Award-standard craft",
    body: "We build every flagship to compete on Awwwards and the FWA. You get that standard, whatever the budget.",
  },
  {
    title: "Business outcomes, not deliverables",
    body: "We measure success in activation, conversion and retention — not in the number of screens we drew.",
  },
  {
    title: "Senior team, no juniors hidden",
    body: "You work directly with the people doing the work. Small studio, high signal, zero telephone game.",
  },
  {
    title: "AI-native by default",
    body: "We build with the latest models woven in where they remove real friction — not for the headline.",
  },
  {
    title: "We stay after launch",
    body: "Care plans, monitoring and continuous improvement. Your product keeps getting better, not stale.",
  },
];

export const industries = [
  { name: "Fintech", body: "Wealth, payments and lending products that inspire trust." },
  { name: "Healthtech", body: "Patient and clinician experiences that improve outcomes." },
  { name: "Ecommerce & Retail", body: "Storefronts engineered to convert and scale." },
  { name: "SaaS & B2B", body: "Products people renew, from onboarding to power-user." },
  { name: "Real Estate", body: "Immersive listings and portals that close faster." },
  { name: "Education", body: "Learning platforms that keep learners coming back." },
  { name: "Hospitality", body: "Booking and brand experiences worth travelling for." },
  { name: "Enterprise", body: "Internal tools your teams don't dread opening." },
];

/**
 * The founder is a person. The Hubs are how the studio's work is organised —
 * named as practices, not as colleagues, so nobody reads them as headcount we
 * don't have. Add real people here as they join.
 */
export const team = [
  {
    name: "Akash M G",
    role: "Founder & Creative Technologist",
    bio: "Bridges design and engineering — sets the studio's craft bar and leads every build end to end.",
    initials: "AM",
    image: true,
  },
  {
    name: "DesignHub",
    role: "Practice · Product & Brand Design",
    bio: "Where research turns into interfaces and identities — the design half of every engagement.",
    initials: "DH",
  },
  {
    name: "DevHub",
    role: "Practice · Full-stack & Mobile",
    bio: "Type-safe, tested, performance-obsessed delivery — the engineering half of every engagement.",
    initials: "DV",
  },
  {
    name: "ResearchHub",
    role: "Practice · R&D, AI & Strategy",
    bio: "Where raw problems get taken apart — research, prototypes and AI experiments that become tomorrow's solutions.",
    initials: "RH",
  },
];

