"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { usePerfMode } from "@/lib/use-perf-mode";

/**
 * Minimal, premium cursor: a small precise dot plus a thin trailing ring,
 * both using mix-blend-difference so they read elegantly on any background.
 * Ring expands subtly over interactive elements. No labels, no colour noise.
 * Auto-disabled on touch / coarse-pointer devices.
 */
export function CustomCursor() {
  const lite = usePerfMode();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [down, setDown] = useState(false);
  const [hidden, setHidden] = useState(true);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dotX = useSpring(x, { damping: 45, stiffness: 1100, mass: 0.3 });
  const dotY = useSpring(y, { damping: 45, stiffness: 1100, mass: 0.3 });
  const ringX = useSpring(x, { damping: 30, stiffness: 250, mass: 0.6 });
  const ringY = useSpring(y, { damping: 30, stiffness: 250, mass: 0.6 });

  useEffect(() => {
    const fine =
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    // The whole overlay sits under mix-blend-difference, so every cursor move
    // repaints a full-viewport composited layer. On weak integrated graphics
    // that alone can hold a frame; the native cursor is strictly better there.
    if (!fine || lite) return;
    setEnabled(true);
    document.documentElement.classList.add("cursor-none-desktop");

    let queued = false;
    let last: MouseEvent | null = null;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
      // `closest()` walks the ancestor chain on every mousemove — at 120Hz
      // that is thousands of tree walks a second. Coalesce to one per frame.
      last = e;
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        const el = (last?.target as HTMLElement)?.closest(
          "a, button, [data-cursor], input, textarea, select, label, [role='button']"
        );
        setHovering(!!el);
      });
    };
    const leave = () => setHidden(true);
    const onDown = () => setDown(true);
    const onUp = () => setDown(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", leave);
      document.documentElement.classList.remove("cursor-none-desktop");
    };
  }, [x, y, lite]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] mix-blend-difference" aria-hidden>
      {/* precise dot */}
      <motion.div
        style={{ x: dotX, y: dotY, opacity: hidden ? 0 : 1 }}
        animate={{ scale: hovering ? 0 : down ? 0.6 : 1 }}
        transition={{ type: "spring", damping: 30, stiffness: 500 }}
        className="absolute -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-white"
      />
      {/* trailing ring */}
      <motion.div
        style={{ x: ringX, y: ringY, opacity: hidden ? 0 : 1 }}
        animate={{ scale: hovering ? 1.9 : down ? 0.85 : 1 }}
        transition={{ type: "spring", damping: 22, stiffness: 250 }}
        className="absolute -ml-4 -mt-4 h-8 w-8 rounded-full border border-white/80"
      />
    </div>
  );
}
