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
  show: { y: 0, transition: { duration: 0.9, ease } },
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
}: {
  text: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  stagger?: number;
  delay?: number;
}) {
  const words = text.split(" ");
  const MotionTag = motion.create(Tag as any);
  return (
    <MotionTag
      className={cn("flex flex-wrap", className)}
      variants={wordContainer}
      custom={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
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
