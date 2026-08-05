"use client";

import { useEffect, useState } from "react";

/**
 * Decides whether this device should get the full motion treatment.
 *
 * Returns `true` (reduce effects) when any of these hold:
 *  - the user asked for reduced motion
 *  - the device reports <= 4 logical cores (entry i3s, budget Androids)
 *  - the device reports <= 4 GB RAM
 *  - the connection is 2g/3g or the user enabled data saver
 *
 * Deliberately starts `false` so the server HTML and first client render match
 * (no hydration mismatch); the downgrade applies on the first effect tick.
 *
 * `navigator.deviceMemory` / `connection` are Chromium-only. Absent values are
 * treated as "capable" — we only ever downgrade on positive evidence, so
 * Safari/Firefox users keep the full experience rather than silently losing it.
 */
export function usePerfMode() {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const evaluate = () => {
      const nav = navigator as Navigator & {
        deviceMemory?: number;
        connection?: { saveData?: boolean; effectiveType?: string };
      };
      const cores = nav.hardwareConcurrency ?? 8;
      const memory = nav.deviceMemory ?? 8;
      const conn = nav.connection;
      const slowNet =
        !!conn?.saveData ||
        (!!conn?.effectiveType && /^(slow-)?2g$|^3g$/.test(conn.effectiveType));

      // Safari exposes neither deviceMemory nor connection, so every iPhone and
      // Mac previously fell through to "capable" and kept the full effect stack.
      // Touch WebKit is exactly where the JS scroll hijack and the springs hurt
      // most — iOS momentum scrolling is handled off the main thread natively,
      // and Lenis replaces that with a main-thread rAF loop.
      const isWebKit =
        typeof CSS !== "undefined" && CSS.supports("-webkit-hyphens: none");
      const isTouch = matchMedia("(hover: none) and (pointer: coarse)").matches;

      setReduce(
        mq.matches ||
          cores <= 4 ||
          memory <= 4 ||
          slowNet ||
          (isWebKit && isTouch),
      );
    };

    evaluate();
    mq.addEventListener("change", evaluate);
    return () => mq.removeEventListener("change", evaluate);
  }, []);

  return reduce;
}
