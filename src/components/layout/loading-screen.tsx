"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LogoMark } from "@/components/logo";

const ease = [0.76, 0, 0.24, 1] as const;

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Only play once per session so navigation stays snappy.
    if (typeof window !== "undefined" && sessionStorage.getItem("ez-loaded")) {
      setDone(true);
      return;
    }
    // The reduced-motion CSS override only reaches CSS animations, not this
    // JS timer — so skip the intro entirely when it's requested.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sessionStorage.setItem("ez-loaded", "1");
      setDone(true);
      return;
    }
    // Timer-driven (not rAF) so it can never stall in a throttled/background tab.
    // On a slow device the user has already waited on the network and on JS
    // parse before this even starts, so a fixed 1.5s vanity hold lands on top
    // of a wait they've already served. Cut it short where it hurts most.
    const nav = navigator as Navigator & {
      deviceMemory?: number;
      connection?: { saveData?: boolean; effectiveType?: string };
    };
    const weak =
      (nav.hardwareConcurrency ?? 8) <= 4 ||
      (nav.deviceMemory ?? 8) <= 4 ||
      !!nav.connection?.saveData ||
      /^(slow-)?2g$|^3g$/.test(nav.connection?.effectiveType ?? "");
    const DURATION = weak ? 400 : 1500;
    const startedAt = Date.now();
    const interval = setInterval(() => {
      const p = Math.min((Date.now() - startedAt) / DURATION, 1);
      setCount(Math.floor(p * 100));
      if (p >= 1) clearInterval(interval);
    }, 40);
    // Hard fallback: always dismiss, regardless of anything else.
    const finish = setTimeout(() => {
      setCount(100);
      sessionStorage.setItem("ez-loaded", "1");
      setDone(true);
    }, DURATION + 250);
    return () => {
      clearInterval(interval);
      clearTimeout(finish);
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-ink-950"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center gap-6"
          >
            <LogoMark className="h-16 w-16 animate-spin-slow" />
            <p className="font-display text-sm uppercase tracking-[0.4em] text-white/70">
              Ezura Arc
            </p>
          </motion.div>
          <div className="absolute bottom-10 right-8 font-display text-6xl font-semibold text-white/90 tabular-nums">
            {count}
          </div>
          <div className="absolute bottom-0 left-0 h-0.5 bg-brand" style={{ width: `${count}%` }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
