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

  const cursorOffset = { x: 7.369, y: 6.4898 };
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dotX = useSpring(x, { damping: 45, stiffness: 1100, mass: 0.3 });
  const dotY = useSpring(y, { damping: 45, stiffness: 1100, mass: 0.3 });

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
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          opacity: hidden ? 0 : 1,
          translateX: `${-cursorOffset.x}px`,
          translateY: `${-cursorOffset.y}px`,
        }}
        animate={{ scale: hovering ? 0.98 : down ? 0.92 : 1 }}
        transition={{ type: "spring", damping: 28, stiffness: 280 }}
        className="absolute pointer-events-none"
      >
        <svg
          width="30"
          height="32"
          viewBox="0 0 60 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block h-[30px] w-[30px]"
        >
          <mask id="path-1-inside-1_36_121" fill="white">
            <path d="M14.738 12.9796C14.5154 10.5176 17.1999 8.8578 19.3031 10.1569L50.2587 29.2783C52.996 30.9691 51.5133 35.1969 48.3196 34.8078L34.7669 33.1565L43.503 46.9982C44.0816 47.9149 44.5842 48.9142 44.6333 49.9971C44.6676 50.7554 44.5376 51.4009 44.2031 52.0187C43.6083 53.1172 42.4354 53.8243 41.2003 54.0119C40.3826 54.1361 39.6713 54.0125 38.8578 53.5454C37.9776 53.0398 37.3437 52.2106 36.8019 51.3522L28.0558 37.496L23.7986 49.5587C22.7261 52.5962 18.272 52.0379 17.9818 48.8296L14.738 12.9796Z" />
          </mask>
          <path d="M14.738 12.9796C14.5154 10.5176 17.1999 8.8578 19.3031 10.1569L50.2587 29.2783C52.996 30.9691 51.5133 35.1969 48.3196 34.8078L34.7669 33.1565L43.503 46.9982C44.0816 47.9149 44.5842 48.9142 44.6333 49.9971C44.6676 50.7554 44.5376 51.4009 44.2031 52.0187C43.6083 53.1172 42.4354 53.8243 41.2003 54.0119C40.3826 54.1361 39.6713 54.0125 38.8578 53.5454C37.9776 53.0398 37.3437 52.2106 36.8019 51.3522L28.0558 37.496L23.7986 49.5587C22.7261 52.5962 18.272 52.0379 17.9818 48.8296L14.738 12.9796Z" fill="#DC3404" />
          <path d="M14.738 12.9796L13.7421 13.0697L13.7421 13.0697L14.738 12.9796ZM19.3031 10.1569L19.8286 9.30615L19.8286 9.30614L19.3031 10.1569ZM50.2587 29.2783L49.7332 30.1291L49.7332 30.1291L50.2587 29.2783ZM48.3196 34.8078L48.4405 33.8151L48.4405 33.8151L48.3196 34.8078ZM34.7669 33.1565L34.8879 32.1639L32.7971 31.9091L33.9213 33.6902L34.7669 33.1565ZM43.503 46.9982L44.3487 46.4644L44.3487 46.4644L43.503 46.9982ZM44.6333 49.9971L45.6323 49.9519L45.6323 49.9518L44.6333 49.9971ZM44.2031 52.0187L45.0825 52.4948L45.0825 52.4948L44.2031 52.0187ZM41.2003 54.0119L41.3504 55.0005L41.3505 55.0005L41.2003 54.0119ZM38.8578 53.5454L38.3599 54.4125L38.3599 54.4126L38.8578 53.5454ZM36.8019 51.3522L37.6475 50.8184L37.6475 50.8184L36.8019 51.3522ZM28.0558 37.496L28.9014 36.9622L27.7997 35.2168L27.1128 37.1632L28.0558 37.496ZM23.7986 49.5587L24.7416 49.8917L24.7416 49.8915L23.7986 49.5587ZM17.9818 48.8296L18.9778 48.7395L18.9778 48.7395L17.9818 48.8296ZM14.738 12.9796L15.734 12.8896C15.5856 11.2484 17.3753 10.1416 18.7776 11.0077L19.3031 10.1569L19.8286 9.30614C17.0244 7.57403 13.4453 9.78683 13.7421 13.0697L14.738 12.9796ZM19.3031 10.1569L18.7776 11.0077L49.7332 30.1291L50.2587 29.2783L50.7842 28.4276L19.8286 9.30615L19.3031 10.1569ZM50.2587 29.2783L49.7332 30.1291C51.558 31.2563 50.5697 34.0745 48.4405 33.8151L48.3196 34.8078L48.1986 35.8004C52.4569 36.3193 54.4339 30.6819 50.7842 28.4276L50.2587 29.2783ZM48.3196 34.8078L48.4405 33.8151L34.8879 32.1639L34.7669 33.1565L34.646 34.1492L48.1986 35.8004L48.3196 34.8078ZM34.7669 33.1565L33.9213 33.6902L42.6573 47.5319L43.503 46.9982L44.3487 46.4644L35.6126 32.6228L34.7669 33.1565ZM43.503 46.9982L42.6573 47.5319C43.2145 48.4147 43.5975 49.2297 43.6343 50.0423L44.6333 49.9971L45.6323 49.9518C45.571 48.5986 44.9487 47.4152 44.3487 46.4644L43.503 46.9982ZM44.6333 49.9971L43.6343 50.0423C43.6616 50.6455 43.56 51.1062 43.3237 51.5426L44.2031 52.0187L45.0825 52.4948C45.5152 51.6956 45.6736 50.8652 45.6323 49.9519L44.6333 49.9971ZM44.2031 52.0187L43.3237 51.5425C42.9045 52.3168 42.0343 52.8737 41.0501 53.0232L41.2003 54.0119L41.3505 55.0005C42.8365 54.7748 44.312 53.9176 45.0825 52.4948L44.2031 52.0187ZM41.2003 54.0119L41.0501 53.0232C40.4637 53.1123 39.9801 53.0367 39.3558 52.6782L38.8578 53.5454L38.3599 54.4126C39.3625 54.9883 40.3014 55.1598 41.3504 55.0005L41.2003 54.0119ZM38.8578 53.5454L39.3558 52.6782C38.696 52.2992 38.1695 51.6454 37.6475 50.8184L36.8019 51.3522L35.9562 51.8859C36.5179 52.7758 37.2592 53.7805 38.3599 54.4125L38.8578 53.5454ZM36.8019 51.3522L37.6475 50.8184L28.9014 36.9622L28.0558 37.496L27.2102 38.0298L35.9563 51.8859L36.8019 51.3522ZM28.0558 37.496L27.1128 37.1632L22.8556 49.2259L23.7986 49.5587L24.7416 49.8915L28.9988 37.8288L28.0558 37.496ZM23.7986 49.5587L22.8557 49.2258C22.1409 51.2502 19.1713 50.879 18.9778 48.7395L17.9818 48.8296L16.9859 48.9197C17.3728 53.1968 23.3113 53.9423 24.7416 49.8917L23.7986 49.5587ZM17.9818 48.8296L18.9778 48.7395L15.734 12.8895L14.738 12.9796L13.7421 13.0697L16.9859 48.9197L17.9818 48.8296Z" fill="white" mask="url(#path-1-inside-1_36_121)" />
        </svg>
      </motion.div>
    </div>
  );
}
