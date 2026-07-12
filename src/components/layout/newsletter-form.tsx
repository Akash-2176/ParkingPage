"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

// Flip to false when the newsletter launches — everything below is already wired.
const COMING_SOON = true;

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "done" | "error">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (COMING_SOON) return;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setState("error");
      return;
    }
    // Placeholder — wire to Resend / your ESP.
    setState("done");
    setEmail("");
    setTimeout(() => setState("idle"), 4000);
  };

  return (
    <form onSubmit={submit} className="flex flex-col gap-2">
      <fieldset disabled={COMING_SOON} className="disabled:opacity-50">
        <div className="flex items-center gap-2 rounded-full border border-border bg-background p-1.5 pl-4 focus-within:border-brand">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (state === "error") setState("idle");
            }}
            placeholder={COMING_SOON ? "Opening soon" : "you@company.com"}
            aria-label="Email address"
            className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed"
          />
          <button
            type="submit"
            aria-label="Subscribe"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand text-white transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {state === "done" ? (
              <Check className="h-4 w-4" />
            ) : (
              <ArrowRight className="h-4 w-4" />
            )}
          </button>
        </div>
      </fieldset>
      <p
        className={cn(
          "min-h-4 pl-4 text-xs",
          state === "error" ? "text-brand" : "text-muted-foreground"
        )}
      >
        {COMING_SOON
          ? "We're crafting the first issue — subscriptions open soon."
          : state === "error"
          ? "Please enter a valid email."
          : state === "done"
          ? "You're in. Welcome to the studio."
          : ""}
      </p>
    </form>
  );
}
