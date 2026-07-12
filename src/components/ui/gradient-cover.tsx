import { cn } from "@/lib/utils";

/**
 * Self-contained gradient "cover" visual — no external images.
 * Used for project & blog covers so the site works fully offline.
 */
export function GradientCover({
  from,
  to,
  label,
  className,
  children,
}: {
  from: string;
  to: string;
  label?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-4xl",
        className
      )}
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      {/* soft light + arc motif */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
      <svg
        viewBox="0 0 200 200"
        className="absolute -bottom-10 -right-6 h-56 w-56 opacity-20"
        aria-hidden
      >
        <circle cx="100" cy="100" r="80" fill="none" stroke="#fff" strokeWidth="2" />
        <circle cx="140" cy="120" r="26" fill="#fff" />
      </svg>
      <div className="noise absolute inset-0" />
      {label && (
        <span className="absolute bottom-4 left-5 text-sm font-medium text-white/90">
          {label}
        </span>
      )}
      {children}
    </div>
  );
}
