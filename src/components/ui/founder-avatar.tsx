import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * A real face, not initials. Indian SME buyers look for a person before they
 * look at a portfolio — an "AM" monogram where a photo should be reads as a
 * placeholder that never got filled in.
 */
export function FounderAvatar({
  size = 48,
  rounded = "rounded-full",
  className,
}: {
  size?: number;
  /** Override the default circle — e.g. "rounded-3xl" in the team grid. */
  rounded?: string;
  className?: string;
}) {
  return (
    <Image
      src={siteConfig.founderImage}
      alt={`${siteConfig.founder}, ${siteConfig.founderRole} at ${siteConfig.name}`}
      width={size}
      height={size}
      className={cn(
        "shrink-0 border border-border object-cover",
        rounded,
        className,
      )}
      style={{ width: size, height: size }}
    />
  );
}
