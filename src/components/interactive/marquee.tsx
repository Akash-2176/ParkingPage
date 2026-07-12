"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

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
  return (
    <div className={cn("group flex overflow-hidden mask-fade-x", className)}>
      {[0, 1].map((n) => (
        <div
          key={n}
          aria-hidden={n === 1}
          className={cn(
            "flex shrink-0 items-center",
            reverse ? "animate-marquee-reverse" : "animate-marquee",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
