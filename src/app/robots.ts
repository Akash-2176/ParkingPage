import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

/**
 * AI crawlers are named explicitly rather than left to the `*` wildcard.
 *
 * Two distinct kinds, with separate tokens and separate policies — blocking one
 * does not block the other:
 *
 *  - Retrieval agents fetch a page in response to a live user question and
 *    produce a linked citation. This is the mechanism by which an assistant
 *    recommends the studio to someone, so these matter most.
 *  - Training crawlers absorb content into model weights with no attribution
 *    and send no traffic back.
 *
 * Both are allowed: this is a marketing site whose entire purpose is to be
 * found, and the writing isn't the product. Naming them makes that a decision
 * on the record rather than an accident of the wildcard.
 */
const AI_RETRIEVAL_AGENTS = [
  "OAI-SearchBot", // OpenAI search index
  "ChatGPT-User", // ChatGPT live browsing
  "PerplexityBot", // Perplexity index
  "Perplexity-User", // Perplexity live fetch
  "Claude-SearchBot", // Anthropic search index
  "Claude-User", // Claude live browsing
];

const AI_TRAINING_CRAWLERS = [
  "GPTBot",
  "ClaudeBot",
  "Google-Extended",
  "CCBot",
  "Bytespider",
  "Amazonbot",
  "meta-externalagent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_RETRIEVAL_AGENTS, allow: "/" },
      { userAgent: AI_TRAINING_CRAWLERS, allow: "/" },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
