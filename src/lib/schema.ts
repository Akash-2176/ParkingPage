import { siteConfig, absoluteUrl } from "@/lib/site";
import { services } from "@/data/services";
import { techStack } from "@/data/general";
import type { Service } from "@/data/services";
import type { Post } from "@/data/blog";
import type { Project } from "@/data/portfolio";

/**
 * Schema.org graph for the site.
 *
 * Two rules this file exists to enforce:
 *
 * 1. Every schema is emitted through a PLAIN <script type="application/ld+json">
 *    in a server component. Never next/script — its default
 *    strategy="afterInteractive" injects client-side, so the tag never reaches
 *    the static HTML and no AI crawler (they don't execute JS) sees it.
 *
 * 2. Entities are defined ONCE here with a stable @id and referenced elsewhere
 *    as bare {"@id": ...} stubs. Repeating the same @id across every page is
 *    what lets a retrieval system resolve "Ezura Arc" to one entity rather
 *    than 32 unrelated mentions.
 *
 * Nothing in here may assert a fact that isn't independently checkable. No
 * ratings, no review counts, no invented metrics — see the note in
 * data/general.ts: if you can't evidence it on request, it doesn't go here.
 */

export const ORG_ID = `${siteConfig.url}/#organization`;
export const WEBSITE_ID = `${siteConfig.url}/#website`;
export const PERSON_ID = `${siteConfig.url}/#akash`;

/** Reference stub — use instead of repeating the whole Organization object. */
export const orgRef = () => ({ "@id": ORG_ID });
/** Reference stub for the founder. */
export const personRef = () => ({ "@id": PERSON_ID });

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
  addressLocality: siteConfig.address.city,
  addressRegion: siteConfig.address.state,
  postalCode: siteConfig.address.zip,
  addressCountry: "IN",
};

/**
 * One node typed as both Organization and ProfessionalService.
 *
 * ProfessionalService ⊂ LocalBusiness ⊂ Organization, so a single multi-typed
 * node satisfies all three hierarchies. Emitting a separate LocalBusiness
 * alongside an Organization would create two competing entities for one
 * company and split the trust signals between them.
 */
const organization = {
  "@type": ["Organization", "ProfessionalService"],
  "@id": ORG_ID,
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/favicon.svg`,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  slogan: siteConfig.tagline,
  foundingDate: siteConfig.incorporated,
  priceRange: siteConfig.priceRange,
  // The CIN is the strongest verifiable claim this studio can make: a
  // registered company number cross-checkable against the MCA registry.
  identifier: {
    "@type": "PropertyValue",
    propertyID: "CIN",
    value: siteConfig.cin,
  },
  founder: personRef(),
  address: postalAddress,
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      addressCountry: "IN",
    },
  },
  // Honest scope: based in Karur, works across India, takes remote clients.
  areaServed: [
    { "@type": "City", name: siteConfig.address.city },
    { "@type": "State", name: siteConfig.address.state },
    { "@type": "Country", name: "India" },
  ],
  knowsAbout: [
    ...services.map((s) => s.title),
    ...techStack.map((t) => t.name),
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@id": `${absoluteUrl(`/services/${s.slug}`)}#service` },
    })),
  },
  sameAs: Object.values(siteConfig.socials),
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.lat,
    longitude: siteConfig.geo.lng,
  },
  // The working office, separate from the registered address the CIN is tied
  // to. `location` keeps both discoverable without implying the registered
  // address moved.
  location: {
    "@type": "Place",
    name: siteConfig.office.name,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.office.locality,
      addressRegion: siteConfig.office.region,
      postalCode: siteConfig.office.zip,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.office.geo.lat,
      longitude: siteConfig.office.geo.lng,
    },
  },
  // A real floor price, not a band. This is what makes the studio citable for
  // "how much does a website cost" — an assistant can quote a number.
  makesOffer: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: siteConfig.startingPrice,
      priceCurrency: "INR",
    },
    description: `Projects start from ₹${siteConfig.startingPrice.toLocaleString("en-IN")}, scoped individually.`,
  },
};

const person = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: siteConfig.founder,
  jobTitle: siteConfig.founderRole,
  image: `${siteConfig.url}${siteConfig.founderImage}`,
  url: absoluteUrl("/about"),
  worksFor: orgRef(),
};

const website = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  publisher: orgRef(),
  inLanguage: "en",
};

/** Root graph — emitted once in app/layout.tsx, so it lands on every page. */
export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [organization, person, website],
};

/** `"5 min read"` → `"PT5M"`. Returns undefined if there's no number to parse. */
const readingTimeToIso = (readingTime: string) => {
  const m = readingTime.match(/(\d+)/);
  return m ? `PT${m[1]}M` : undefined;
};

/**
 * Service page: the Service itself plus a FAQPage built from `service.faqs`.
 * Those 20 Q&As are the most quotable content on the site — Q&A pairs are the
 * format retrieval systems lift most readily.
 */
export function serviceSchema(service: Service) {
  const url = absoluteUrl(`/services/${service.slug}`);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: service.title,
        description: service.description,
        url,
        serviceType: service.title,
        provider: orgRef(),
        areaServed: [
          { "@type": "State", name: siteConfig.address.state },
          { "@type": "Country", name: "India" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: service.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      breadcrumbSchema([
        { name: "Services", path: "/services" },
        { name: service.title, path: `/services/${service.slug}` },
      ]),
    ],
  };
}

export function blogPostingSchema(post: Post) {
  const url = absoluteUrl(`/blog/${post.slug}`);
  const body = post.content.filter((p) => !p.startsWith("## ")).join(" ");
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#post`,
        headline: post.title,
        description: post.excerpt,
        url,
        mainEntityOfPage: url,
        datePublished: post.date,
        // No separate dateModified: these haven't been revised since posting,
        // and claiming a fresher date than the truth is exactly the kind of
        // signal crawlers learn to distrust.
        author: personRef(),
        publisher: orgRef(),
        image: `${siteConfig.url}${siteConfig.ogImage}`,
        articleSection: post.category,
        wordCount: body.split(/\s+/).filter(Boolean).length,
        timeRequired: readingTimeToIso(post.readingTime),
        inLanguage: "en",
      },
      breadcrumbSchema([
        { name: "Journal", path: "/blog" },
        { name: post.title, path: `/blog/${post.slug}` },
      ]),
    ],
  };
}

/**
 * Case study page.
 *
 * `Article`, not `CreativeWork` — the page is a written account ABOUT the work,
 * not the work itself. The delivered product hangs off `about` as its own
 * CreativeWork node.
 *
 * Metrics are deliberately NOT marked up as numeric values. Two of the three
 * projects carry qualitative labels ("End-to-end", "Centralized"); asserting
 * those as measurements would be dishonest and would devalue the one project
 * that does have real, checkable numbers.
 */
export function caseStudySchema(project: Project) {
  const url = absoluteUrl(`/portfolio/${project.slug}`);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: `${project.title} — Case Study`,
        description: project.summary,
        url,
        mainEntityOfPage: url,
        author: personRef(),
        publisher: orgRef(),
        ...(project.coverImage
          ? { image: `${siteConfig.url}${project.coverImage}` }
          : {}),
        inLanguage: "en",
        about: {
          "@type": "CreativeWork",
          name: project.title,
          description: project.overview,
          ...(project.liveUrl ? { url: project.liveUrl } : {}),
          creator: orgRef(),
          // A named client — especially a government department — is a far
          // stronger trust signal than any self-declared metric.
          ...(project.client ? { sourceOrganization: project.client } : {}),
          keywords: project.tech.join(", "),
        },
      },
      breadcrumbSchema([
        { name: "Work", path: "/portfolio" },
        { name: project.title, path: `/portfolio/${project.slug}` },
      ]),
    ],
  };
}

/** Home is implicit as position 1; pass only the trail beneath it. */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      ...trail.map((t, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: t.name,
        item: absoluteUrl(t.path),
      })),
    ],
  };
}

/** Convenience for pages that only need a breadcrumb. */
export function breadcrumbGraph(trail: { name: string; path: string }[]) {
  return { "@context": "https://schema.org", ...breadcrumbSchema(trail) };
}
