import type { LucideIcon } from "lucide-react";
import {
  Globe,
  Layers,
  Smartphone,
  PenTool,
  Sparkles,
  ShoppingBag,
  Server,
  Cloud,
  Wrench,
  BrainCircuit,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  benefits: { title: string; body: string }[];
  features: string[];
  tech: string[];
  process: { step: string; title: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "website-development",
    title: "Website Development",
    short: "Marketing & corporate sites",
    icon: Globe,
    tagline: "Sites that convince in the first three seconds.",
    description:
      "We build marketing, corporate and portfolio websites that feel less like brochures and more like experiences. Fast, editorial, and engineered to convert — every scroll earns the next.",
    benefits: [
      { title: "Convert, don't just inform", body: "Narrative-driven layouts guide visitors toward one clear action." },
      { title: "Sub-second loads", body: "Edge-rendered, image-optimised and shipped with a 95+ Lighthouse budget." },
      { title: "Own your content", body: "A headless CMS your team actually enjoys — no developer bottleneck." },
    ],
    features: [
      "Editorial, scroll-driven layouts",
      "Headless CMS integration",
      "Framer Motion & GSAP interactions",
      "SEO, schema & sitemap baked in",
      "Analytics & conversion tracking",
      "Accessibility (WCAG 2.1 AA)",
    ],
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Sanity / Contentful", "Vercel"],
    process: [
      { step: "01", title: "Discover", body: "Positioning, audience, goals and success metrics." },
      { step: "02", title: "Design", body: "Art direction, prototype and motion language." },
      { step: "03", title: "Build", body: "Componentised, accessible, blazing-fast front end." },
      { step: "04", title: "Launch", body: "QA, SEO, analytics and a smooth handover." },
    ],
    faqs: [
      { q: "How long does a website take?", a: "As fast as craft allows — we agree a clear milestone plan before we start and hit it, with visible progress every week." },
      { q: "Can we edit content ourselves?", a: "Yes — we wire a headless CMS so your team edits copy, images and case studies without touching code." },
    ],
  },
  {
    slug: "web-applications",
    title: "Custom Web Applications",
    short: "Dashboards, portals & tools",
    icon: Layers,
    tagline: "Complex made effortless.",
    description:
      "Dashboards, internal tools, marketplaces and customer portals engineered to scale. We turn tangled workflows into interfaces that feel obvious — the kind people forget they're using.",
    benefits: [
      { title: "Built to scale", body: "Type-safe, tested architecture that grows with your user base." },
      { title: "Real-time by default", body: "Live data, optimistic UI and instant feedback loops." },
      { title: "Secure foundations", body: "Auth, roles and audit trails designed in, not bolted on." },
    ],
    features: [
      "Role-based access & auth",
      "Real-time data & websockets",
      "Complex data visualisation",
      "Third-party API integrations",
      "Automated testing & CI/CD",
      "Design-system driven UI",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "tRPC", "Redis"],
    process: [
      { step: "01", title: "Map", body: "Workflows, data models and edge cases." },
      { step: "02", title: "Prototype", body: "Clickable flows validated with real users." },
      { step: "03", title: "Engineer", body: "Robust, tested, observable systems." },
      { step: "04", title: "Scale", body: "Monitoring, performance and iteration." },
    ],
    faqs: [
      { q: "Do you work with our existing backend?", a: "Absolutely. We integrate with your APIs, or design a new data layer where it makes sense." },
      { q: "How do you handle security?", a: "Role-based access, encrypted secrets, audited dependencies and pen-test-ready architecture." },
    ],
  },
  {
    slug: "mobile-apps",
    title: "Mobile App Development",
    short: "Android & iOS",
    icon: Smartphone,
    tagline: "Native-grade apps, one codebase.",
    description:
      "iOS and Android apps that feel indigenous to the platform yet ship from a single, maintainable codebase. Gestures, haptics and 60fps motion — the details users feel but can't name.",
    benefits: [
      { title: "One codebase, two stores", body: "React Native / Expo keeps velocity high and cost sane." },
      { title: "Truly native feel", body: "Platform gestures, haptics and transitions done right." },
      { title: "Offline-first", body: "Resilient sync so the app works on the metro, not just wifi." },
    ],
    features: [
      "iOS & Android from one codebase",
      "Push notifications & deep links",
      "Offline sync & local storage",
      "In-app payments & subscriptions",
      "App Store & Play Store submission",
      "Crash reporting & analytics",
    ],
    tech: ["React Native", "Expo", "TypeScript", "Supabase", "Firebase"],
    process: [
      { step: "01", title: "Define", body: "Core loops, platforms and release plan." },
      { step: "02", title: "Design", body: "Native patterns and motion prototypes." },
      { step: "03", title: "Build", body: "Feature delivery in tested increments." },
      { step: "04", title: "Ship", body: "Store submission and post-launch support." },
    ],
    faqs: [
      { q: "Native or cross-platform?", a: "We default to React Native for speed and cost, and go fully native when a feature demands it." },
      { q: "Do you handle store submission?", a: "Yes — we manage the App Store and Play Store review process end to end." },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    short: "Product & interface design",
    icon: PenTool,
    tagline: "Design that earns attention and keeps it.",
    description:
      "From research to pixel-perfect systems, we design interfaces that are beautiful, usable and unmistakably yours. Every interaction is intentional; nothing is decoration for its own sake.",
    benefits: [
      { title: "Research-led", body: "Decisions grounded in user behaviour, not opinion." },
      { title: "Systematic", body: "Scalable design systems, not one-off screens." },
      { title: "Prototype-first", body: "Test the experience before a line of code is written." },
    ],
    features: [
      "UX research & journey mapping",
      "Wireframes & interactive prototypes",
      "Design systems in Figma",
      "Motion & micro-interaction specs",
      "Usability testing",
      "Developer-ready handoff",
    ],
    tech: ["Figma", "Framer", "Principle", "Maze", "Storybook"],
    process: [
      { step: "01", title: "Research", body: "Users, competitors and jobs-to-be-done." },
      { step: "02", title: "Structure", body: "Information architecture and flows." },
      { step: "03", title: "Design", body: "High-fidelity UI and design system." },
      { step: "04", title: "Validate", body: "Test, refine and hand off." },
    ],
    faqs: [
      { q: "Do you only design, or build too?", a: "Both. Design and engineering sit in the same room — handoff friction disappears." },
      { q: "Will we get a design system?", a: "Yes, a documented, componentised system your team can extend." },
    ],
  },
  {
    slug: "brand-identity",
    title: "Brand Identity",
    short: "Naming, logo & systems",
    icon: Sparkles,
    tagline: "A brand people remember and trust.",
    description:
      "Positioning, naming, logo, voice and a complete visual system. We craft identities that hold up everywhere — from a favicon to a billboard — and feel inevitable in hindsight.",
    benefits: [
      { title: "Strategy first", body: "Positioning that clarifies why you win." },
      { title: "Distinct, not trendy", body: "Identities built to age well, not chase fashion." },
      { title: "Ready to deploy", body: "Guidelines, assets and templates your team can run with." },
    ],
    features: [
      "Brand strategy & positioning",
      "Logo & visual identity",
      "Typography & colour systems",
      "Brand voice & messaging",
      "Guidelines & asset library",
      "Social & collateral templates",
    ],
    tech: ["Figma", "Illustrator", "After Effects", "Notion"],
    process: [
      { step: "01", title: "Position", body: "Audience, promise and personality." },
      { step: "02", title: "Explore", body: "Territories and creative directions." },
      { step: "03", title: "Craft", body: "Identity system and applications." },
      { step: "04", title: "Systemise", body: "Guidelines and rollout kit." },
    ],
    faqs: [
      { q: "Do you do naming?", a: "Yes — naming, tagline and messaging are part of our brand engagements." },
      { q: "What deliverables do we get?", a: "A complete kit: logo suite, type, colour, voice and usage guidelines." },
    ],
  },
  {
    slug: "ecommerce",
    title: "Ecommerce",
    short: "Stores that sell",
    icon: ShoppingBag,
    tagline: "Storefronts engineered for conversion.",
    description:
      "Headless commerce that loads instantly and checks out effortlessly. We obsess over the details between 'add to cart' and 'order placed' — where revenue is won or lost.",
    benefits: [
      { title: "Faster = higher AOV", body: "Speed and clarity that lift conversion measurably." },
      { title: "Headless flexibility", body: "Best-in-class front end on Shopify or a custom stack." },
      { title: "Built to scale sales", body: "From first order to Black Friday spikes." },
    ],
    features: [
      "Headless Shopify / custom checkout",
      "Product & inventory management",
      "Payment gateway integration",
      "Subscriptions & upsells",
      "Search & personalisation",
      "Analytics & funnel tracking",
    ],
    tech: ["Shopify Hydrogen", "Next.js Commerce", "Stripe", "Razorpay", "Algolia"],
    process: [
      { step: "01", title: "Plan", body: "Catalogue, funnel and platform." },
      { step: "02", title: "Design", body: "Storefront and checkout experience." },
      { step: "03", title: "Build", body: "Fast, integrated commerce stack." },
      { step: "04", title: "Optimise", body: "A/B testing and conversion tuning." },
    ],
    faqs: [
      { q: "Shopify or custom?", a: "We recommend headless Shopify for most brands, and custom builds when catalogue logic is complex." },
      { q: "Can you migrate our store?", a: "Yes — we handle catalogue, redirects and SEO-safe migrations." },
    ],
  },
  {
    slug: "saas-development",
    title: "SaaS Development",
    short: "Multi-tenant products",
    icon: Server,
    tagline: "From idea to paying subscribers.",
    description:
      "We architect and build SaaS products end to end — multi-tenancy, billing, dashboards and everything between. Ship an MVP that's ready to charge on day one.",
    benefits: [
      { title: "Revenue-ready", body: "Billing, plans and trials wired from the start." },
      { title: "Multi-tenant core", body: "Isolation and scaling designed into the foundation." },
      { title: "Fast to market", body: "A credible MVP in weeks, not quarters." },
    ],
    features: [
      "Multi-tenant architecture",
      "Subscription billing (Stripe)",
      "Admin & analytics dashboards",
      "Team & permission management",
      "Usage metering & limits",
      "Webhooks & public API",
    ],
    tech: ["Next.js", "PostgreSQL", "Prisma", "Stripe", "Redis", "AWS"],
    process: [
      { step: "01", title: "Scope", body: "Core value and pricing model." },
      { step: "02", title: "Architect", body: "Tenancy, data and billing design." },
      { step: "03", title: "Build MVP", body: "Ship the smallest lovable product." },
      { step: "04", title: "Iterate", body: "Measure, learn and expand." },
    ],
    faqs: [
      { q: "Can you take equity or do fixed-fee?", a: "We work fixed-fee and retainer; strategic equity partnerships are considered case by case." },
      { q: "Do you help after launch?", a: "Yes — most SaaS clients move onto a growth retainer with us." },
    ],
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    short: "Infra, DevOps & APIs",
    icon: Cloud,
    tagline: "Infrastructure that just works.",
    description:
      "Cloud architecture, DevOps and API development that stays quiet in the background — resilient, observable and cost-efficient. The best infrastructure is the kind you never think about.",
    benefits: [
      { title: "Reliable by design", body: "Redundancy, backups and graceful degradation." },
      { title: "Observability built-in", body: "Logs, metrics and alerts from day one." },
      { title: "Cost-aware", body: "Right-sized infra that doesn't surprise your finance team." },
    ],
    features: [
      "Cloud architecture (AWS/GCP)",
      "CI/CD pipelines",
      "Containerisation & orchestration",
      "REST & GraphQL API development",
      "Monitoring & alerting",
      "Security & compliance hardening",
    ],
    tech: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Cloudflare"],
    process: [
      { step: "01", title: "Assess", body: "Current state and requirements." },
      { step: "02", title: "Design", body: "Architecture and pipelines." },
      { step: "03", title: "Implement", body: "Provision, automate and secure." },
      { step: "04", title: "Operate", body: "Monitor, optimise and support." },
    ],
    faqs: [
      { q: "Do you offer ongoing DevOps?", a: "Yes — many clients keep us on a monthly infrastructure retainer." },
      { q: "Which cloud do you prefer?", a: "AWS by default, GCP and Cloudflare where they fit better. We're pragmatic." },
    ],
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    short: "AI-powered products",
    icon: BrainCircuit,
    tagline: "Intelligence, woven into the product.",
    description:
      "We build AI features that earn their place — assistants, search, automation and generation powered by the latest models. Not AI for the headline; AI that removes real friction.",
    benefits: [
      { title: "Outcome-focused", body: "AI mapped to a measurable job, not a demo." },
      { title: "Grounded & safe", body: "RAG, guardrails and evaluation to keep it honest." },
      { title: "Composable", body: "Model-agnostic pipelines you're not locked into." },
    ],
    features: [
      "LLM chat & copilots",
      "RAG over your knowledge base",
      "Semantic & vector search",
      "Document & data extraction",
      "Workflow automation agents",
      "Evaluation & guardrails",
    ],
    tech: ["Claude API", "OpenAI", "LangChain", "Pinecone", "Vercel AI SDK"],
    process: [
      { step: "01", title: "Identify", body: "The highest-value AI use case." },
      { step: "02", title: "Prototype", body: "A working proof against real data." },
      { step: "03", title: "Productionise", body: "Guardrails, evals and UX." },
      { step: "04", title: "Improve", body: "Monitor quality and iterate." },
    ],
    faqs: [
      { q: "Is our data safe with AI?", a: "We design with privacy first — your data stays yours, with clear retention and no training on it." },
      { q: "Which models do you use?", a: "We're model-agnostic — Claude, GPT and open models, chosen per task and budget." },
    ],
  },
  {
    slug: "maintenance",
    title: "Maintenance & Support",
    short: "Care plans & retainers",
    icon: Wrench,
    tagline: "We don't disappear after launch.",
    description:
      "Proactive maintenance, monitoring and iteration that keep your product fast, secure and evolving. Think of us as an on-call product team, not a ticket queue.",
    benefits: [
      { title: "Proactive, not reactive", body: "We catch issues before your users do." },
      { title: "Continuous improvement", body: "Monthly enhancements, not just bug fixes." },
      { title: "One accountable team", body: "The people who built it, keeping it healthy." },
    ],
    features: [
      "24/7 uptime monitoring",
      "Security patches & updates",
      "Performance optimisation",
      "Feature enhancements",
      "Content & CMS support",
      "Priority response SLAs",
    ],
    tech: ["Sentry", "Vercel", "BetterStack", "GitHub", "Linear"],
    process: [
      { step: "01", title: "Onboard", body: "Audit, access and baselines." },
      { step: "02", title: "Monitor", body: "Uptime, errors and performance." },
      { step: "03", title: "Maintain", body: "Patches, fixes and updates." },
      { step: "04", title: "Improve", body: "Planned monthly enhancements." },
    ],
    faqs: [
      { q: "Do you support sites you didn't build?", a: "Yes, after a short technical audit to understand the codebase." },
      { q: "What's your response time?", a: "Priority plans include same-day response and defined SLAs." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
