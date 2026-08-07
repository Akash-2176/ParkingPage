"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CONSENT_EVENT } from "@/components/layout/analytics";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("ez-cookie")) {
      const t = setTimeout(() => setShow(true), 1600);
      return () => clearTimeout(t);
    }
  }, []);

  const decide = (choice: "all" | "essential") => {
    localStorage.setItem("ez-cookie", choice);
    setShow(false);
    // Tell <Analytics> to re-read consent. `storage` doesn't fire in the tab
    // that wrote it, so without this the beacon wouldn't start until the next
    // page load.
    window.dispatchEvent(new Event(CONSENT_EVENT));
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          className="fixed bottom-5 left-5 z-[150] max-w-sm rounded-3xl border border-border bg-card/95 p-5 shadow-2xl backdrop-blur-xl"
        >
          <p className="font-display text-base font-semibold text-foreground">
            We value your privacy
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            We use cookies to improve your experience and measure our site. See our{" "}
            <Link href="/privacy" className="text-brand underline-offset-2 hover:underline">
              privacy policy
            </Link>
            .
          </p>
          <div className="mt-4 flex gap-2">
            <Button size="sm" magnetic={false} onClick={() => decide("all")}>
              Accept all
            </Button>
            <Button
              size="sm"
              variant="outline"
              magnetic={false}
              onClick={() => decide("essential")}
            >
              Essentials only
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
