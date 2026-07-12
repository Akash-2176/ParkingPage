export const siteConfig = {
  name: "Ezura Arc",
  legalName: "Ezura Arc Private Limited",
  tagline: "Where dreams are crafted to reality",
  description:
    "Ezura Arc is a creative technology studio crafting award-worthy websites, applications, brands and AI products — where design and engineering move as one.",
  url: "https://www.ezuraarc.com",
  ogImage: "/og.png",
  founder: "Akash M G",
  email: "hello@ezuraarc.com",
  phone: "+91 9500264291",
  phoneHref: "+919500264291",
  whatsapp: "919500264291",
  address: {
    line1: "16/7a7 Vangalamman Nagar",
    line2: "Pasupathipalayam Kadaparai, Vennamalai",
    city: "Karur",
    state: "Tamil Nadu",
    zip: "639006",
    country: "India",
  },
  socials: {
    dribbble: "https://dribbble.com",
    behance: "https://behance.net",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    x: "https://x.com",
    github: "https://github.com",
  },
} as const;

export const navLinks = [
  { label: "Work", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Studio", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Journal", href: "/blog" },
] as const;
