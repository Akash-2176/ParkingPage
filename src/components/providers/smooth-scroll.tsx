"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";
import { usePerfMode } from "@/lib/use-perf-mode";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const lite = usePerfMode();

  // Lenis replaces native scrolling with a JS-driven rAF loop. When the main
  // thread is busy — which on a 4-core i3 it often is — that loop stutters in a
  // way native scroll never does, because native scroll runs off the main
  // thread entirely. On low-end devices the smoothest scroll is the browser's.
  if (lite) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.6,
      }}
    >
      {children}
    </ReactLenis>
  );
}
