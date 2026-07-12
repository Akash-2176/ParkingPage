import Link from "next/link";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/interactive/magnetic";

const buttonVariants = cva(
  "group/btn relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 overflow-hidden",
  {
    variants: {
      variant: {
        primary:
          "bg-brand text-white shadow-[0_10px_40px_-12px_rgba(255,90,46,0.7)] hover:shadow-[0_18px_50px_-10px_rgba(255,90,46,0.8)]",
        secondary:
          "bg-foreground text-background hover:opacity-90",
        outline:
          "border border-border bg-transparent text-foreground hover:border-brand hover:text-brand",
        ghost: "text-foreground hover:bg-muted",
      },
      size: {
        sm: "h-10 px-5 text-sm",
        md: "h-12 px-7 text-sm",
        lg: "h-14 px-9 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  magnetic?: boolean;
  external?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, magnetic = true, external, children, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size }), className);
    const inner = (
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    );

    const content = href ? (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {inner}
        <Sheen />
      </Link>
    ) : (
      <button ref={ref} className={classes} {...props}>
        {inner}
        <Sheen />
      </button>
    );

    return magnetic ? <Magnetic strength={0.35}>{content}</Magnetic> : content;
  }
);
Button.displayName = "Button";

function Sheen() {
  return (
    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
  );
}
