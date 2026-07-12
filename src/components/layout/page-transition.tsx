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
    <motion.main
      key={pathname}
      initial={firstLoad.current ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.main>
  );
}
