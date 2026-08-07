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
    //
    // This overlay is opaque and covers the viewport, so nothing underneath can
    // count as the Largest Contentful Paint until it lifts. The old 1500ms hold
    // (+250ms fallback +800ms exit) put a hard ~2.5s floor under LCP on every
    // first visit — field data showed P50 3,424ms / P75 4,400ms, which is
    // "Poor". 300ms still reads as a deliberate branded reveal rather than a
    // flash, without owning the LCP number.
    //
    // On a slow device the user has already waited on network and JS parse
    // before this even starts, so cut it to almost nothing there.
    const nav = navigator as Navigator & {
      deviceMemory?: number;
      connection?: { saveData?: boolean; effectiveType?: string };
    };
    const weak =
      (nav.hardwareConcurrency ?? 8) <= 4 ||
      (nav.deviceMemory ?? 8) <= 4 ||
      !!nav.connection?.saveData ||
      /^(slow-)?2g$|^3g$/.test(nav.connection?.effectiveType ?? "");
    const DURATION = weak ? 150 : 300;
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
    }, DURATION + 60);
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
          // The viewport stays covered for the whole exit, so this duration is
          // added to LCP too. 0.3s keeps the wipe legible without the cost.
          transition={{ duration: 0.3, ease }}
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
