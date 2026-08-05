"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";
import { useLenis } from "lenis/react";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const lenis = useLenis();

  // On the very first load, render visible immediately (initial={false}) so the
  // server HTML never ships an opacity-0 page — if JS is slow or fails, content
  // still shows. The fade/slide plays only on client-side route changes.
  const firstLoad = useRef(true);
  useEffect(() => {
    firstLoad.current = false;
  }, []);

  // Every route change starts at the top. Lenis keeps its own scroll state,
  // so reset it explicitly (immediate, no easing) alongside the window.
  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true, force: true });
    window.scrollTo(0, 0);
  }, [pathname, lenis]);

  return (
    // 180ms, opacity only. This fade gates everything below it — the page
    // header's own reveal can't start until it finishes — so every extra
    // millisecond here is added to the time before the user sees the new <h1>.
    // The y-slide is gone for the same reason: it delayed the headline twice
    // (once here, once in TextReveal) for a movement nobody consciously sees.
    <motion.main
      key={pathname}
      initial={firstLoad.current ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      {children}
    </motion.main>
  );
}
