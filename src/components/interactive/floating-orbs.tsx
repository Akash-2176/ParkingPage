"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Floating orange geometric elements inspired by the logo arc.
 * Drift with scroll (parallax) and gently float on a loop.
 */
export function FloatingOrbs({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -120]), {
    stiffness: 60,
    damping: 20,
  });
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 160]), {
    stiffness: 60,
    damping: 20,
  });

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <motion.div
        style={{ y: y1 }}
        className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand/25 blur-[90px] animate-float"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute right-[-6rem] top-1/3 h-96 w-96 rounded-full bg-brand-400/20 blur-[120px] animate-float"
      />
      {/* Ring outline echoing the arc */}
      <motion.svg
        style={{ y: y1 }}
        viewBox="0 0 200 200"
        className="absolute left-[8%] top-[55%] h-40 w-40 opacity-30 animate-spin-slow"
      >
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="#FF5A2E"
          strokeWidth="1.5"
          strokeDasharray="8 14"
        />
      </motion.svg>
      {/* Solid dot */}
      <motion.div
        style={{ y: y2 }}
        className="absolute right-[14%] top-[18%] h-4 w-4 rounded-full bg-brand animate-float"
      />
    </div>
  );
}
