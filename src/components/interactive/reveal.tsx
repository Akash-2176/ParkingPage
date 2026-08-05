"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
  once = true,
  immediate = false,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
  /**
   * Play on mount instead of waiting for an intersection callback. Use for
   * anything above the fold: `whileInView` costs an observer round-trip before
   * the animation even starts, which reads as navigation lag on content that
   * was already on screen.
   */
  immediate?: boolean;
}) {
  const anim = { opacity: 1, y: 0 };
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      {...(immediate
        ? { animate: anim }
        : { whileInView: anim, viewport: { once, margin: "-80px" } })}
      transition={{ duration: immediate ? 0.45 : 0.8, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export function Stagger({
  children,
  className,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}
