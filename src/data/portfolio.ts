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
  coverImage?: string; // optional image path (in /public)
  coverBg?: string; // optional background color for images
  overview: string;
  problem: string;
  solution: string;
  tech: string[];
  metrics: { value: string; label: string }[];
  gallery: { from: string; to: string; label: string; image?: string }[];
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
    slug: "vc-police-portal",
    title: "VC Police Portal",
    client: "Under NDA",
    category: "GOVERNMENT · WEB & MOBILE PLATFORM",
    year: " Sep 2024",
    confidential: true,
    services: ["Public Safety", "Web App", "Mobile App"],
    summary:
      "A centralized platform for managing Vinayagar idol registrations, immersion routes, and festival operations.",
    cover: { from: "#FF5A2E", to: "#434A5C" },
    coverImage: "/portfolio/vc-police-portal/vc-police-portal-overview.png",
    coverBg: "#F8F8F9",
    overview:
      "The VC Police Portal was developed to digitize the planning and monitoring of Vinayagar idol installation and immersion activities. By providing a unified platform for registration management, route monitoring, and operational oversight, the system helps police authorities coordinate efficiently and maintain public safety during large-scale festivals.",
    problem:
      "Managing thousands of idol registrations and immersion events through manual processes made it difficult for police departments to maintain accurate records, monitor sensitive locations, and coordinate field officers. Limited visibility across jurisdictions increased administrative effort and delayed operational decision-making during high-traffic festival periods.",
    solution:
      "We built an integrated web and mobile platform that centralizes idol registration, applicant verification, route tracking, and operational monitoring. With role-based access, interactive dashboards, map visualization, and real-time data filtering, the portal enables police officials to oversee festival activities efficiently while improving coordination across departments.",
    tech: ["React.js", "React Native", "Express.js", "MongoDB","AWS"],
    metrics: [
      { value: "Centralized", label: "One platform for all festival monitoring" },
      { value: "Real-time", label: "Live updates across all devices" },
      { value: "Coordinated", label: "Connected operations across police departments" },
      { value: "Safer", label: "Improved planning for public safety" },
    ],
    gallery: [
      { from: "#FF5A2E", to: "#434A5C", label: "Dashboard", image : "/portfolio/vc-police-portal/sp-dashboard.png" },
      { from: "#2E3340", to: "#0E0F14", label: "Sp-Registration and View", image : "/portfolio/vc-police-portal/sp-view.png" },
      { from: "#FF7A4E", to: "#C42F09", label: "SP-Map View", image : "/portfolio/vc-police-portal/map-page.png" },
    ],
    beforeAfter: {
      before: "Manual registration processes, fragmented records, and limited operational visibility made it difficult to coordinate festival security and monitor idol immersion activities effectively.",
      after: "A centralized platform that provides real-time visibility into registrations, immersion routes, and field operations, enabling faster coordination and more informed decision-making across police departments.",
    },
  },

  {
    slug: "tmca",
    title: "TMCA",
    client: "Under NDA",
    category: "Fintech · Web App",
    year: "2026",
    confidential: true,
    services: ["Product Design", "Web App", "Design System"],
    summary:
      "A secure client onboarding and compliance platform built for Chartered Accountants—streamlining document collection, automating financial workflows, and bringing every stage of the filing lifecycle into a single, centralized workspace.",
    cover: { from: "#FF7A4E", to: "#ED3F0F" },
    coverImage: "/portfolio/TMCA/tmca-overview.png",
    coverBg: "#F6F0E7",
    overview:
      "A CA firm needed a single workspace to replace scattered client emails, manual follow-ups, and disconnected compliance tools. We redesigned the entire workflow from document collection and verification to financial analysis and filing, creating an end-to-end system that reduced back-and-forth and brought every critical step into one secure interface.",
    problem:
      "Before TMCA, client data lived across emails, WhatsApp threads, and scattered cloud folders. Compliance tasks were manual, repetitive, and hard to track, making it difficult for Chartered Accountants to maintain accuracy, ensure security, and deliver timely services to clients.",
    solution:
      "We rebuilt the entire workflow from the ground up—starting with a secure client onboarding portal for document submission, followed by a centralized compliance hub where every verification step, financial calculation, and filing task lived in one place. The result is a seamless, end-to-end workspace that eliminates scattered data, reduces manual work, and ensures accuracy and compliance at every stage of the client lifecycle.",
    tech: ["Next.js", "TypeScript", "NestJS", "Python", "Supabase", "Prisma ORM", "AWS", "Amazon S3", "Amazon SQS"],
    metrics: [
      { value: "1 team", label: "Founder-led delivery" },
      { value: "6 wks", label: "Concept to live MVP" },
      { value: "95+", label: "Lighthouse score" },
      { value: "0", label: "Design-to-dev handoffs lost" },
    ],
    gallery: [
      { from: "#FF7A4E", to: "#ED3F0F", label: "Dashboard overview", image: "/portfolio/TMCA/tmca-dashboard.png" },
      { from: "#434A5C", to: "#1B1E27", label: "Insights, simplified", image: "/portfolio/TMCA/team-overview.png" },
      { from: "#FF9C77", to: "#FF5A2E", label: "Mobile companion", image: "/portfolio/TMCA/mobile-view.png" },
    ],
    beforeAfter: {
      before: "Manual onboarding, fragmented document management, and disconnected filing workflows created operational bottlenecks, limiting visibility and increasing compliance risks for accounting teams.",
      after: "A unified CA compliance platform that digitizes the entire client lifecycle—from secure document collection and automated verification to financial analysis and final filing, ensuring greater accuracy, transparency, and efficiency.",
    },
  },
    {
    slug: "puppy-digital-mart",
    title: "Puppy Digital Mart",
    client: "Under NDA",
    category: "Ecommerce · Brand",
    year: "2025",
    confidential: true,
    services: ["Marketplace", "E-Commerce", "Web App"],
    summary:
      "Connecting local businesses with customers through a unified digital marketplace for their products.",
    cover: { from: "#434A5C", to: "#1B1E27" },
    coverImage: "/portfolio/puppy-digital-mart/puppy-digital-overview.png",
    coverBg: "#F4F8FD",
    overview:
      "Puppy Digital Mart was created to help local vendors embrace digital commerce through a centralized marketplace for gift cards. The platform enables businesses to showcase their offerings, manage digital vouchers, and connect with a wider customer base through a seamless online purchasing experience.",
    problem:
      "Local retailers struggled to reach customers beyond their physical stores, and customers had limited access to discover and purchase gift cards from nearby businesses. The lack of a unified digital platform created friction for both merchants seeking growth and customers looking for convenient gifting options.",
    solution:
      "We enabled local retailers to showcase their gift cards on a unified marketplace, creating a seamless online platform for customers to discover and purchase vouchers. The system streamlined gift card management and accessibility, empowering businesses to expand their reach and customers to easily support local merchants through digital gifting.",
    tech: ["Next.js", "Shopify (headless)", "TailwindCSS", "GSAP", "Razorpay"],
    metrics: [
      { value: "Connected", label: "Bringing local businesses and customers together" },
      { value: "Digital", label: "Digital gifting made simple" },
      { value: "Streamlined", label: "Streamlined gift card management" },
      { value: "Expanded", label: "Expanded reach for local retailers" },
    ],
    gallery: [
      { from: "#434A5C", to: "#1B1E27", label: "Redemption Requests", image : "/portfolio/puppy-digital-mart/redemption-requests.png" },
      { from: "#8A90A0", to: "#434A5C", label: "Product story", image : "/portfolio/puppy-digital-mart/user-management.png" },
      { from: "#FF5A2E", to: "#8F2409", label: "Two-tap checkout", image : "/portfolio/puppy-digital-mart/home.png" },
    ],
    beforeAfter: {
      before: "Local vendors relied on fragmented sales channels with limited digital visibility, making it difficult to promote and sell gift cards effectively.",
      after: "A centralized marketplace that connects customers with local businesses, enabling secure gift card purchases, simplified vendor management, and increased digital reach.",
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
