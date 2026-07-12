"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, MessageCircle, Phone, X, Calendar, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function FloatingDock() {
  const [showTop, setShowTop] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const actions = [
    {
      label: "WhatsApp",
      icon: MessageCircle,
      href: `https://wa.me/${siteConfig.whatsapp}?text=Hi%20Ezura%20Arc%2C%20I'd%20like%20to%20discuss%20a%20project.`,
      className: "bg-[#25D366] text-white",
    },
    {
      label: "Call us",
      icon: Phone,
      href: `tel:${siteConfig.phoneHref}`,
      className: "bg-foreground text-background",
    },
    {
      label: "Email",
      icon: Mail,
      href: `mailto:${siteConfig.email}`,
      className: "border border-border bg-card text-foreground",
    },
    {
      label: "Book a call",
      icon: Calendar,
      href: "https://calendly.com", // Calendly placeholder
      className: "border border-border bg-card text-foreground",
    },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-[150] flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground shadow-lg transition-colors hover:border-brand hover:text-brand"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="flex flex-col items-end gap-2.5"
          >
            {actions.map((a, i) => (
              <motion.a
                key={a.label}
                href={a.href}
                target={a.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0, transition: { delay: i * 0.05 } }}
                exit={{ opacity: 0, x: 20 }}
                className="group flex items-center gap-3"
              >
                <span className="rounded-full bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-md opacity-0 transition-opacity group-hover:opacity-100">
                  {a.label}
                </span>
                <span
                  className={cn(
                    "grid h-12 w-12 place-items-center rounded-full shadow-lg",
                    a.className
                  )}
                >
                  <a.icon className="h-5 w-5" />
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close contact menu" : "Open contact menu"}
        className="grid h-14 w-14 place-items-center rounded-full bg-brand text-white shadow-[0_10px_40px_-8px_rgba(255,90,46,0.7)] transition-transform hover:scale-105"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "x" : "chat"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
          </motion.span>
        </AnimatePresence>
      </button>
    </div>
  );
}
