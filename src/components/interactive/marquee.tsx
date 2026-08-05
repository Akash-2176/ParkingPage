"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Marquee({
  children,
  reverse = false,
  className,
  pauseOnHover = true,
}: {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
  pauseOnHover?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // A marquee is 2000px+ of duplicated content on a permanently-running
  // transform. Off screen it still costs the compositor every frame, so pause
  // it until it's actually visible — the homepage had six of these running at
  // once, several thousand pixels below the fold.
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("group flex overflow-hidden mask-fade-x", className)}>
      {[0, 1].map((n) => (
        <div
          key={n}
          aria-hidden={n === 1}
          className={cn(
            "flex shrink-0 items-center",
            reverse ? "animate-marquee-reverse" : "animate-marquee",
            !visible && "[animation-play-state:paused]",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
