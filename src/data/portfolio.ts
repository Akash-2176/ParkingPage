export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
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
 * Real engagements, named. `client` is the actual client — if a future project
 * genuinely can't be named, write the sector ("A Karur-based CA firm") rather
 * than reintroducing an NDA badge next to a public client name.
 */
export const projects: Project[] = [
  {
    slug: "vc-police-portal",
    title: "VC Police Portal",
    client: "Namakkal District Police",
    category: "Government · Web & Mobile Platform",
    year: "Sep 2024",
    services: ["Public Safety", "Web App", "Mobile App"],
    summary:
      "The Vinayakar Chaturthi police portal for Namakkal district — 750+ idol registrations, live immersion tracking and festival operations in one platform.",
    cover: { from: "#FF5A2E", to: "#434A5C" },
    coverImage: "/portfolio/vc-police-portal/vc-police-portal-overview.png",
    coverBg: "#F8F8F9",
    overview:
      "Built for Namakkal District Police under the direct guidance of the Superintendent of Police, and deployed for Vinayakar Chaturthi in September 2024. The portal digitised the planning and monitoring of idol installation and immersion across the district — registration, route oversight and field coordination in a single platform, used live during the festival.",
    problem:
      "Idol registrations and immersion events were tracked on paper across dozens of stations. Records were hard to consolidate, sensitive locations were difficult to monitor centrally, and the SP's office had no live view of what was happening on the ground during the highest-risk hours of the festival.",
    solution:
      "We built an integrated web and mobile platform covering idol registration, applicant verification, route tracking and operational monitoring. Role-based access gives station writers, inspectors and the SP's office each the right view; map visualisation and live filtering give command staff a district-wide picture in real time. 150+ police writers were trained ahead of deployment across 30+ stations.",
    tech: ["React.js", "React Native", "Express.js", "MongoDB","AWS"],
    metrics: [
      { value: "750+", label: "Idols registered through the portal" },
      { value: "150+", label: "Police writers trained on the system" },
      { value: "30+", label: "Stations live across Namakkal district" },
      { value: "25+", label: "Immersions live-tracked in pilot testing" },
    ],
    gallery: [
      { from: "#FF5A2E", to: "#434A5C", label: "SP dashboard", image: "/portfolio/vc-police-portal/sp-dashboard.png" },
      { from: "#2E3340", to: "#0E0F14", label: "Registration & review", image: "/portfolio/vc-police-portal/sp-view.png" },
      { from: "#FF7A4E", to: "#C42F09", label: "Live immersion map", image: "/portfolio/vc-police-portal/map-page.png" },
    ],
    beforeAfter: {
      before: "Paper registers at each station, no consolidated district view, and no way for command staff to see immersion movements as they happened.",
      after: "750+ registrations in one system, 30+ stations live, and immersion routes tracked on a map the SP's office could watch during the festival.",
    },
  },

  {
    slug: "tmca",
    title: "The Madras CA",
    client: "The Madras CA",
    category: "Fintech · Compliance Platform",
    year: "2026",
    services: ["Product Design", "Web App", "Design System"],
    summary:
      "A secure client onboarding and compliance platform built for Chartered Accountants—streamlining document collection, automating financial workflows, and bringing every stage of the filing lifecycle into a single, centralized workspace.",
    cover: { from: "#FF7A4E", to: "#ED3F0F" },
    coverImage: "/portfolio/TMCA/tmca-overview.webp",
    coverBg: "#F6F0E7",
    overview:
      "The Madras CA needed a single workspace to replace scattered client emails, manual follow-ups, and disconnected compliance tools. We redesigned the entire workflow from document collection and verification to financial analysis and filing, creating an end-to-end system that reduced back-and-forth and brought every critical step into one secure interface.",
    problem:
      "Before TMCA, their client data lived across emails, WhatsApp threads, and scattered cloud folders. Compliance tasks were manual, repetitive, and hard to track, making it difficult for Chartered Accountants to maintain accuracy, ensure security, and deliver timely services to clients.",
    solution:
      "We rebuilt the entire workflow from the ground up—starting with a secure client onboarding portal for document submission, followed by a centralized compliance hub where every verification step, financial calculation, and filing task lived in one place. The result is a seamless, end-to-end workspace that eliminates scattered data, reduces manual work, and ensures accuracy and compliance at every stage of the client lifecycle.",
    tech: ["Next.js", "TypeScript", "NestJS", "Python", "Supabase", "Prisma ORM", "AWS", "Amazon S3", "Amazon SQS"],
    // TODO(akash): these describe the build qualitatively — swap in real figures
    // (hours saved per filing, clients onboarded) once the firm shares them.
    metrics: [
      { value: "End-to-end", label: "Onboarding to final filing in one place" },
      { value: "Centralized", label: "Documents out of email and WhatsApp" },
      { value: "Automated", label: "Verification and financial workflows" },
      { value: "Secure", label: "Role-based access to client records" },
    ],
    gallery: [
      { from: "#FF7A4E", to: "#ED3F0F", label: "Compliance dashboard", image: "/portfolio/TMCA/tmca-dashboard.webp" },
      { from: "#434A5C", to: "#1B1E27", label: "Team & client overview", image: "/portfolio/TMCA/team-overview.webp" },
      { from: "#FF9C77", to: "#FF5A2E", label: "Mobile companion", image: "/portfolio/TMCA/mobile-view.webp" },
    ],
    beforeAfter: {
      before: "Manual onboarding, fragmented document management, and disconnected filing workflows created operational bottlenecks, limiting visibility and increasing compliance risks for accounting teams.",
      after: "A unified CA compliance platform that digitizes the entire client lifecycle—from secure document collection and automated verification to financial analysis and final filing, ensuring greater accuracy, transparency, and efficiency.",
    },
  },
    {
    slug: "puppy-digital-mart",
    title: "Puppy Digital Mart",
    client: "Puppy Digital Mart",
    category: "Ecommerce · Marketplace",
    year: "2025",
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
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS"],
    metrics: [
      { value: "Connected", label: "Bringing local businesses and customers together" },
      { value: "Digital", label: "Digital gifting made simple" },
      { value: "Streamlined", label: "Streamlined gift card management" },
      { value: "Expanded", label: "Expanded reach for local retailers" },
    ],
    gallery: [
      { from: "#434A5C", to: "#1B1E27", label: "Redemption requests", image: "/portfolio/puppy-digital-mart/redemption-requests.webp" },
      { from: "#8A90A0", to: "#434A5C", label: "User management", image: "/portfolio/puppy-digital-mart/user-management.webp" },
      { from: "#FF5A2E", to: "#8F2409", label: "Marketplace home", image: "/portfolio/puppy-digital-mart/home.webp" },
    ],
    beforeAfter: {
      before: "Local vendors relied on fragmented sales channels with limited digital visibility, making it difficult to promote and sell gift cards effectively.",
      after: "A centralized marketplace that connects customers with local businesses, enabling secure gift card purchases, simplified vendor management, and increased digital reach.",
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
