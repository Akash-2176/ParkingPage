"use client";

import { useEffect } from "react";

/**
 * Cancels the reveal fail-safe in app/layout.tsx.
 *
 * That inline script arms a 2.5s timer which adds `html.no-hydrate`, and
 * globals.css uses that class to force every [data-reveal] block visible.
 * It exists for the case where hydration is catastrophically slow or fails
 * outright — without it, those blocks sit at the inline `opacity: 0` that
 * Framer renders on the server and the page looks broken below the hero.
 *
 * This effect runs as soon as React is alive, which is the normal path, so
 * the fail-safe is never seen on a healthy load.
 */
export function HydrationGate() {
  useEffect(() => {
    const w = window as Window & { __ezRevealFailsafe?: number };
    clearTimeout(w.__ezRevealFailsafe);
    document.documentElement.classList.remove("no-hydrate");
  }, []);

  return null;
}
