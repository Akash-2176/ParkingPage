"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Loader2, Paperclip, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  role: z.string().min(1, "Which role?"),
  portfolio: z.string().url("Enter a valid URL").optional().or(z.literal("")),
  message: z.string().min(10, "Tell us a bit about you"),
});

type Values = z.infer<typeof schema>;

export function CareerForm({
  roles,
  disabled = false,
}: {
  roles: string[];
  disabled?: boolean;
}) {
  const [done, setDone] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [file, setFile] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Values>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: Values) => {
    if (disabled) return;
    setSubmitError(false);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: siteConfig.web3formsKey,
          subject: `Job application — ${data.role} — ${data.name}`,
          from_name: "Ezura Arc Careers",
          name: data.name,
          email: data.email,
          role: data.role,
          portfolio: data.portfolio || "—",
          message: data.message,
          // Attachments need a Web3Forms paid plan — filename only.
          resume_note: file ?? "none",
        }),
      });
      const json = await res.json();
      if (json.success) setDone(true);
      else setSubmitError(true);
    } catch {
      setSubmitError(true);
    }
  };

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4 rounded-4xl border border-border bg-card p-10 text-center"
      >
        <span className="grid h-14 w-14 place-items-center rounded-full bg-brand text-white">
          <Check className="h-7 w-7" />
        </span>
        <h3 className="font-display text-xl font-semibold text-foreground">Application in.</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Thanks for your interest. If there&apos;s a fit, we&apos;ll be in touch within a week.
        </p>
      </motion.div>
    );
  }

  const input =
    "w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-brand placeholder:text-muted-foreground";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 rounded-4xl border border-border bg-card p-6 md:p-8"
    >
      {disabled && (
        <div className="flex items-center gap-3 rounded-2xl border border-brand/30 bg-brand/5 px-4 py-3 text-sm text-muted-foreground">
          <span className="h-2 w-2 shrink-0 rounded-full bg-brand" />
          Applications are paused while there are no open roles — check back
          soon.
        </div>
      )}
      <fieldset
        disabled={disabled}
        className="flex flex-col gap-5 disabled:opacity-50"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium">Name</span>
            <input
              {...register("name")}
              className={input}
              placeholder="Your name"
            />
            {errors.name && (
              <span className="text-xs text-brand">{errors.name.message}</span>
            )}
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium">Email</span>
            <input
              {...register("email")}
              className={input}
              placeholder="you@email.com"
            />
            {errors.email && (
              <span className="text-xs text-brand">{errors.email.message}</span>
            )}
          </label>
        </div>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium">Role</span>
          <select {...register("role")} className={input} defaultValue="">
            <option value="" disabled>
              Select a role
            </option>
            {roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
            <option value="Open application">Open application</option>
          </select>
          {errors.role && (
            <span className="text-xs text-brand">{errors.role.message}</span>
          )}
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium">
            Portfolio / LinkedIn (optional)
          </span>
          <input
            {...register("portfolio")}
            className={input}
            placeholder="https://"
          />
          {errors.portfolio && (
            <span className="text-xs text-brand">
              {errors.portfolio.message}
            </span>
          )}
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium">Why Ezura Arc?</span>
          <textarea
            {...register("message")}
            rows={4}
            className={`${input} resize-none`}
            placeholder="Tell us what draws you to the studio."
          />
          {errors.message && (
            <span className="text-xs text-brand">{errors.message.message}</span>
          )}
        </label>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-muted-foreground hover:text-brand">
            <Paperclip className="h-4 w-4" />
            {file ?? "Attach resume (optional)"}
            <input
              type="file"
              className="hidden"
              onChange={(e) => setFile(e.target.files?.[0]?.name ?? null)}
            />
          </label>
          <Button type="submit" magnetic={false} disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Sending…
              </>
            ) : (
              <>
                Apply <ArrowUpRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </fieldset>
      {submitError && (
        <p className="text-sm text-brand">
          Something went wrong sending your message. Please try again, or email
          us directly at {siteConfig.email}.
        </p>
      )}
    </form>
  );
}
