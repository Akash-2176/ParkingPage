"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { FAQ } from "@/data/faq";
import { cn } from "@/lib/utils";

/**
 * Every answer is mounted at all times.
 *
 * This previously used <AnimatePresence>{isOpen && ...}</AnimatePresence>, so
 * unopened answers were never rendered — 0 of 8 answers on /faq existed in the
 * served HTML, and the same on all 10 service pages (28 Q&As total). The
 * FAQPage JSON-LD was the only copy of that text, which is both a wasted
 * content asset and a schema/HTML mismatch that search and retrieval systems
 * penalise: Google requires FAQPage content to be visible on the page.
 *
 * Collapsing is done with height/opacity on a permanently-present element.
 * Deliberately NOT `hidden` or `display:none` — some text extractors honour
 * those and would drop the text again.
 */
export function FaqAccordion({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item, i) => {
        const isOpen = open === i;
        const answerId = `faq-answer-${i}`;
        return (
          <div key={i}>
            {/* A real heading: extractors use heading structure to segment a
                page into question/answer units. Both call sites have an h2
                above, so h3 keeps the outline valid. */}
            <h3>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
                aria-expanded={isOpen}
                aria-controls={answerId}
              >
                <span className="font-display text-lg font-medium text-foreground md:text-xl">
                  {item.q}
                </span>
                <span
                  className={cn(
                    "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border transition-all duration-300",
                    isOpen ? "rotate-45 border-brand bg-brand text-white" : "text-foreground"
                  )}
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
            </h3>
            <motion.div
              id={answerId}
              initial={false}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <p className="max-w-2xl pb-7 text-base leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
