export const siteConfig = {
  name: "Ezura Arc",
  legalName: "Ezura Arc Private Limited",
  tagline: "Where dreams are crafted to reality",
  description:
    "Ezura Arc is a creative technology studio crafting award-worthy websites, applications, brands and AI products — where design and engineering move as one.",
  url: "https://www.ezuraarc.com",
  // A real file in /public — NOT a generated opengraph-image route. With
  // `output: "export"` an ImageResponse route never gets written to /out, so
  // every page shipped a summary_large_image card with no image behind it.
  ogImage: "/og.png",
  founder: "Akash M G",
  founderRole: "Founder & Creative Technologist",
  founderImage: "/founder.webp",
  // Corporate Identification Number — Registrar of Companies, Chennai.
  cin: "U62011TN2026PTC188074",
  incorporated: "2026",
  email: "hello@ezuraarc.com",
  phone: "+91 9500264291",
  phoneHref: "+919500264291",
  whatsapp: "919500264291",
  calendly: "https://calendly.com/hello-ezuraarc",
  //web3fromkey - public client key , safe to expose in client
  web3formsKey: "7a23a01d-9f31-402a-b351-80b093d94540",
  address: {
    line1: "16/7a7 Vangalamman Nagar",
    line2: "Pasupathipalayam Kadaparai, Vennamalai",
    city: "Karur",
    state: "Tamil Nadu",
    zip: "639006",
    country: "India",
  },
  /**
   * Registered office coordinates (V.Pasupathipalayam, Karur 639006) — verified
   * against the postcode in `address` above via reverse geocoding.
   */
  geo: { lat: 10.9943558, lng: 78.0895915 },
  /**
   * Working office at KSR College of Engineering, Tiruchengode, Namakkal
   * district. Emitted as a secondary Place, separate from the registered
   * address that the CIN is tied to.
   */
  office: {
    name: "KSR College of Engineering",
    locality: "Tiruchengode",
    region: "Tamil Nadu",
    district: "Namakkal",
    zip: "637215",
    geo: { lat: 11.3584886, lng: 77.8269074 },
  },
  /**
   * Real starting figure, in INR. A concrete number is what makes the studio
   * citable for "how much / affordable" queries — a price band alone can't be
   * quoted back by an assistant. `priceRange` is the coarse schema.org form.
   */
  startingPrice: 15000,
  priceRange: "₹₹",
  // Real profiles only. An empty slot beats a link to a bare homepage —
  // add a platform back here once the profile actually has work on it.
  socials: {
    // LinkedIn first: it's the platform CAs, SMEs and government buyers
    // actually check, and a heavily-weighted sameAs signal for entity
    // resolution. Dribbble/Behance are designer-to-designer channels.
    linkedin: "https://www.linkedin.com/company/ezuraarc",
    dribbble: "https://dribbble.com/ezuraarc",
    behance: "https://www.behance.net/EzuraArc",
    instagram: "https://www.instagram.com/ezuraarc/",
    x: "https://x.com/Ezura_Arc",
    github: "https://github.com/EzuraArc",
  },
} as const;

/**
 * Absolute URL for a route. Next resolves relative canonicals against
 * `metadataBase`, but sitemap/JSON-LD need the fully-qualified form.
 */
export const absoluteUrl = (path = "/") =>
  `${siteConfig.url}${path === "/" ? "" : path}`;

/**
 * Per-route metadata. Every page MUST spread this — a missing `alternates`
 * makes the route inherit the layout's canonical and de-indexes itself.
 */
export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = absoluteUrl(path);
  const ogTitle = `${title} — ${siteConfig.name}`;
  const images = [
    {
      url: siteConfig.ogImage,
      width: 1200,
      height: 630,
      alt: `${siteConfig.name} — ${siteConfig.tagline}`,
    },
  ];
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website" as const,
      url,
      siteName: siteConfig.name,
      title: ogTitle,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image" as const,
      title: ogTitle,
      description,
      images,
    },
  };
}

export const navLinks = [
  { label: "Work", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Studio", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Journal", href: "/blog" },
] as const;
