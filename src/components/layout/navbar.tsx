"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { navLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Magnetic } from "@/components/interactive/magnetic";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] transition-all duration-500",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div className="container-x">
          <div
            className={cn(
              "flex items-center justify-between rounded-full px-3 py-2 transition-all duration-500",
              scrolled
                ? "glass shadow-[0_8px_40px_-16px_rgba(0,0,0,0.3)]"
                : "border border-transparent"
            )}
          >
            <Link href="/" aria-label="Ezura Arc home" className="pl-2">
              <Logo />
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    pathname === link.href || pathname.startsWith(link.href + "/")
                      ? "text-brand"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle className="hidden sm:grid" />
              <Button href="/contact" size="sm" className="hidden md:inline-flex">
                Start a project <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Magnetic strength={0.25}>
                <button
                  type="button"
                  aria-label="Open menu"
                  onClick={() => setOpen(true)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-brand hover:text-brand lg:hidden"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </Magnetic>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-ink-950/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="container-x flex h-full flex-col py-6">
              <div className="flex items-center justify-between">
                <Logo className="[&_span]:text-white" />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="mt-14 flex flex-1 flex-col gap-1">
                {[{ label: "Home", href: "/" }, ...navLinks, { label: "Contact", href: "/contact" }].map(
                  (link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.08 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={link.href}
                        className="group flex items-center justify-between border-b border-white/10 py-4 font-display text-4xl font-medium text-white"
                      >
                        {link.label}
                        <ArrowUpRight className="h-6 w-6 text-brand opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                      </Link>
                    </motion.div>
                  )
                )}
              </nav>

              <div className="flex items-center justify-between text-sm text-white/60">
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                <ThemeToggle className="border-white/20 text-white" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
