import { siteConfig, absoluteUrl } from "@/lib/site";
import { services } from "@/data/services";
import { projects } from "@/data/portfolio";
import { posts } from "@/data/blog";
import { faqs } from "@/data/faq";

export const dynamic = "force-static";

/**
 * /llms.txt — a plain-text summary of the site for language models.
 *
 * Honest status: no major AI provider (OpenAI, Anthropic, Google, Perplexity)
 * has confirmed they read this. It's a community proposal, not a standard.
 * Schema.org + clean HTML do the real work; this is a cheap hedge in case
 * adoption arrives, and it doubles as a human-readable index.
 *
 * Generated from the same data files the pages render, so it can never drift
 * out of sync with the site. Every fact here is checkable — no marketing
 * claims that aren't already evidenced on a page.
 */
export function GET() {
  const price = siteConfig.startingPrice.toLocaleString("en-IN");

  const body = `# ${siteConfig.legalName}

> ${siteConfig.description}

${siteConfig.name} is a creative technology studio based in ${siteConfig.address.city}, ${siteConfig.address.state}, India, working with clients across India. Incorporated ${siteConfig.incorporated} as a private limited company (CIN ${siteConfig.cin}). Founded by ${siteConfig.founder}, ${siteConfig.founderRole}.

Projects start from ₹${price} and are quoted individually by scope.

## Contact
- Website: ${siteConfig.url}
- Email: ${siteConfig.email}
- Phone: ${siteConfig.phone}
- Book a call: ${siteConfig.calendly}
- Registered office: ${siteConfig.address.line1}, ${siteConfig.address.line2}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}, India
- Office: ${siteConfig.office.name}, ${siteConfig.office.locality}, ${siteConfig.office.region}

## Selected work
${projects
  .map(
    (p) =>
      `- [${p.title}](${absoluteUrl(`/portfolio/${p.slug}`)}) — ${p.category}, ${p.year}. Client: ${p.client}. ${p.summary}`,
  )
  .join("\n")}

## Services
${services
  .map(
    (s) =>
      `- [${s.title}](${absoluteUrl(`/services/${s.slug}`)}) — ${s.short}. ${s.tagline}`,
  )
  .join("\n")}

## Journal
${posts
  .map(
    (p) =>
      `- [${p.title}](${absoluteUrl(`/blog/${p.slug}`)}) — ${p.date}, ${p.category}. ${p.excerpt}`,
  )
  .join("\n")}

## Frequently asked
${faqs.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}

## Key pages
- [Studio](${absoluteUrl("/about")})
- [Work](${absoluteUrl("/portfolio")})
- [Services](${absoluteUrl("/services")})
- [Process](${absoluteUrl("/process")})
- [Contact](${absoluteUrl("/contact")})
- [Sitemap](${siteConfig.url}/sitemap.xml)
`;

  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
