"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingOrbs } from "@/components/interactive/floating-orbs";
import { LogoMark } from "@/components/logo";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      <FloatingOrbs />
      <div className="pointer-events-none absolute inset-0 bg-mesh" />

      <motion.div
        initial={{ scale: 0.6, opacity: 0, rotate: -20 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
        className="relative"
      >
        <LogoMark className="h-20 w-20 animate-float" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 font-display text-[28vw] font-bold leading-none tracking-tighter text-gradient sm:text-[20vw] lg:text-[16rem]"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="mt-2 max-w-md text-lg text-muted-foreground"
      >
        This page drifted off the arc. It may have moved, or never existed — either way,
        let&apos;s get you back on track.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <Button href="/" size="lg">
          <Home className="h-4 w-4" /> Back home
        </Button>
        <Button href="/portfolio" size="lg" variant="outline">
          <ArrowLeft className="h-4 w-4" /> See our work
        </Button>
      </motion.div>
    </section>
  );
}
