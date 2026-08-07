"use client";

import { useEffect, useState } from "react";

/** Cloudflare Web Analytics beacon token (public — safe to expose). */
const CF_BEACON_TOKEN = "1e342709557c4c4fa96daf49129b244d";

const CONSENT_KEY = "ez-cookie";
/** Fired by CookieConsent so this mounts the beacon without a page reload. */
export const CONSENT_EVENT = "ez-cookie-change";

/**
 * Loads the Cloudflare beacon only after the visitor accepts analytics.
 *
 * Cloudflare Web Analytics is cookieless and does not fingerprint, so it is
 * arguably "essential-safe" — but the cookie banner offers an explicit
 * "Essentials only" button and /privacy states analytics runs "with your
 * consent". Honour that: loading it regardless would make both a lie.
 *
 * Deliberately client-side and deferred — this is the one script on the site
 * that should never compete with the LCP image or hydration.
 */
export function Analytics() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    const read = () => setConsented(localStorage.getItem(CONSENT_KEY) === "all");
    read();
    window.addEventListener(CONSENT_EVENT, read);
    // `storage` fires when the choice is made in another tab.
    window.addEventListener("storage", read);
    return () => {
      window.removeEventListener(CONSENT_EVENT, read);
      window.removeEventListener("storage", read);
    };
  }, []);

  useEffect(() => {
    if (!consented) return;
    const SRC = "https://static.cloudflareinsights.com/beacon.min.js";
    if (document.querySelector(`script[src="${SRC}"]`)) return;

    const s = document.createElement("script");
    s.src = SRC;
    s.type = "module";
    s.defer = true;
    s.setAttribute("data-cf-beacon", JSON.stringify({ token: CF_BEACON_TOKEN }));
    document.head.appendChild(s);
    // No cleanup: the beacon is idempotent and removing it mid-session would
    // only lose the pageview we just recorded.
  }, [consented]);

  return null;
}
