"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Loader2, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const budgets = ["< ₹1L", "₹1L – ₹5L", "₹5L – ₹15L", "₹15L +"];
const serviceOptions = [
  "Website",
  "Web App",
  "Mobile App",
  "UI/UX Design",
  "Branding",
  "Ecommerce",
  "SaaS",
  "AI Product",
  "I just have a problem",
];

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  company: z.string().optional(),
  budget: z.string().min(1, "Pick a budget range"),
  services: z.array(z.string()).min(1, "Select at least one service"),
  message: z.string().min(10, "Tell us a little more (10+ characters)"),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { services: [], budget: "" },
  });

  const selectedServices = watch("services");
  const selectedBudget = watch("budget");

  const toggleService = (s: string) => {
    const next = selectedServices.includes(s)
      ? selectedServices.filter((x) => x !== s)
      : [...selectedServices, s];
    setValue("services", next, { shouldValidate: true });
  };

  const onSubmit = async (data: FormValues) => {
    // Placeholder submit — wire to Resend / EmailJS / an API route.
    await new Promise((r) => setTimeout(r, 900));
    console.log("Contact submission:", { ...data, file: fileName });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-5 rounded-4xl border border-border bg-card p-12 text-center"
      >
        <span className="grid h-16 w-16 place-items-center rounded-full bg-brand text-white">
          <Check className="h-8 w-8" />
        </span>
        <h3 className="font-display text-2xl font-semibold text-foreground">
          Message received.
        </h3>
        <p className="max-w-sm text-muted-foreground">
          Thanks for reaching out. We&apos;ll reply within one business day with honest
          thoughts and clear next steps.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 rounded-4xl border border-border bg-card p-6 md:p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Your name" error={errors.name?.message}>
          <input {...register("name")} placeholder="Jane Doe" className={inputCls} />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input {...register("email")} placeholder="jane@company.com" className={inputCls} />
        </Field>
      </div>

      <Field label="Company (optional)">
        <input {...register("company")} placeholder="Company name" className={inputCls} />
      </Field>

      <Field label="What do you need?" error={errors.services?.message}>
        <div className="flex flex-wrap gap-2">
          {serviceOptions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => toggleService(s)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition-all",
                selectedServices.includes(s)
                  ? "border-brand bg-brand text-white"
                  : "border-border text-muted-foreground hover:border-brand/50"
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </Field>

      <Field label="Budget" error={errors.budget?.message}>
        <div className="flex flex-wrap gap-2">
          {budgets.map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setValue("budget", b, { shouldValidate: true })}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition-all",
                selectedBudget === b
                  ? "border-brand bg-brand text-white"
                  : "border-border text-muted-foreground hover:border-brand/50"
              )}
            >
              {b}
            </button>
          ))}
        </div>
      </Field>

      <Field label="Tell us about your project — or just the problem" error={errors.message?.message}>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="What are you building? No solution yet? Just describe the problem — we'll research it and bring you one."
          className={cn(inputCls, "resize-none")}
        />
      </Field>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-muted-foreground hover:text-brand">
          <Paperclip className="h-4 w-4" />
          {fileName ?? "Attach a brief (optional)"}
          <input
            type="file"
            className="hidden"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
          />
        </label>
        <Button type="submit" magnetic={false} disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              Send message <ArrowUpRight className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

const inputCls =
  "w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-brand";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-foreground">{label}</span>
      {children}
      {error && <span className="text-xs text-brand">{error}</span>}
    </label>
  );
}
