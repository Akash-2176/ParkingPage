"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

const wordContainer: Variants = {
  hidden: {},
  show: (stagger: number) => ({
    transition: { staggerChildren: stagger },
  }),
};

const wordVariant: Variants = {
  hidden: { y: "110%" },
  // 0.9s per word plus stagger meant a 5-word headline wasn't fully settled
  // for well over a second after a route change.
  show: { y: 0, transition: { duration: 0.55, ease } },
};

/**
 * Word-by-word mask reveal. Splits on spaces and animates each word
 * up from behind an overflow-hidden clip. Great for hero headlines.
 */
export function TextReveal({
  text,
  className,
  as: Tag = "h1",
  stagger = 0.06,
  delay = 0,
  immediate = false,
}: {
  text: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  stagger?: number;
  delay?: number;
  /** Play on mount — see Reveal's `immediate`. Set this on page headlines. */
  immediate?: boolean;
}) {
  const words = text.split(" ");
  const MotionTag = motion.create(Tag as any);
  return (
    <MotionTag
      // The headline is split into one span per word, so a text extractor that
      // concatenates without adding whitespace at element boundaries reads
      // "Everythingyoumightask". This gives accessibility-tree-based readers
      // (screen readers and several AI pipelines) the correct unsplit string.
      aria-label={text}
      className={cn("flex flex-wrap", className)}
      variants={wordContainer}
      custom={stagger}
      initial="hidden"
      {...(immediate
        ? { animate: "show" }
        : { whileInView: "show", viewport: { once: true } })}
      transition={{ delayChildren: delay }}
    >
      {words.map((word, i) => (
        <span key={i} className="mr-[0.25em] inline-block overflow-hidden py-[0.05em]">
          <motion.span variants={wordVariant} className="inline-block will-change-transform">
            {word}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
