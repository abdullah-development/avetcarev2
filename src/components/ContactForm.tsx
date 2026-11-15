"use client";

import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm({ dark = false }: { dark?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  const field = `w-full rounded-xl border px-4 py-3.5 outline-none transition focus:ring-4 ${
    dark
      ? "border-white/15 bg-white/5 text-white placeholder:text-white/40 focus:border-lime-300 focus:ring-lime-300/15"
      : "border-sand-300 bg-white text-ink-900 placeholder:text-ink-500/60 focus:border-leaf-500 focus:ring-leaf-500/15"
  }`;
  const label = `mb-2 block text-sm font-semibold ${dark ? "text-white/80" : "text-ink-700"}`;

  if (status === "sent") {
    return (
      <div className={`rounded-2xl p-10 text-center ${dark ? "bg-white/5 text-white" : "bg-white"}`} role="status">
        <p className="font-display text-3xl">Thank you!</p>
        <p className={`mt-3 ${dark ? "text-white/70" : "text-ink-500"}`}>We&apos;ve received your message and will get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="title" className={label}>Title</label>
        <Select name="title">
          <SelectTrigger
            id="title"
            className={`!h-auto w-full rounded-xl px-4 py-3.5 text-base transition hover:border-leaf-500/60 focus-visible:ring-4 data-[state=open]:border-leaf-500 data-[state=open]:ring-4 [&>svg]:size-5 [&>svg]:transition [&[data-state=open]>svg]:rotate-180 ${
              dark
                ? "border-white/15 bg-white/5 text-white focus-visible:border-lime-300 focus-visible:ring-lime-300/15 data-[placeholder]:text-white/40 data-[state=open]:border-lime-300 data-[state=open]:ring-lime-300/15 [&>svg]:!text-white/60"
                : "border-sand-300 bg-white text-ink-900 focus-visible:border-leaf-500 focus-visible:ring-leaf-500/15 data-[placeholder]:text-ink-500/60 data-[state=open]:ring-leaf-500/15"
            }`}
          >
            <SelectValue placeholder="Select title" />
          </SelectTrigger>
          <SelectContent
            position="popper"
            sideOffset={8}
            className="w-(--radix-select-trigger-width) rounded-2xl border border-sand-200 bg-white p-1.5 shadow-2xl shadow-forest-900/15 ring-0"
          >
            {["Mr.", "Mrs.", "Miss", "Ms.", "Dr."].map((t) => (
              <SelectItem
                key={t}
                value={t}
                className="cursor-pointer rounded-xl py-2.5 pl-3 text-base text-ink-700 transition focus:bg-leaf-500/10 focus:text-forest-900 data-[state=checked]:font-semibold data-[state=checked]:text-leaf-600 [&_svg]:text-leaf-600"
              >
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <label htmlFor="name" className={label}>Name *</label>
        <input id="name" name="name" required autoComplete="name" className={field} placeholder="Your full name" />
      </div>
      <div>
        <label htmlFor="email" className={label}>Email *</label>
        <input id="email" name="email" type="email" required autoComplete="email" className={field} placeholder="you@company.com" />
      </div>
      <div>
        <label htmlFor="phone" className={label}>Phone</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} placeholder="+971 …" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className={label}>Message *</label>
        <textarea id="message" name="message" required rows={5} className={field} placeholder="Tell us about your facility and cleaning needs" />
      </div>
      {/* honeypot */}
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60">
          {status === "sending" ? "Sending…" : "Send message →"}
        </button>
        {status === "error" && <p className="text-sm text-red-500" role="alert">{error}</p>}
      </div>
    </form>
  );
}
