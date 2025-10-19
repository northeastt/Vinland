"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Mail } from "lucide-react";

const faqs = [
  {
    q: "How does Vinland AI work?",
    a: "Vinland AI blends habit tracking, reflective journaling, and an AI mentor to guide small daily improvements.",
  },
  {
    q: "How do I reset my stats?",
    a: "From the Dashboard settings, choose Reset Stats. This will clear progress metrics but preserves journal entries unless you opt to delete them.",
  },
  {
    q: "Is my data private?",
    a: "We prioritize privacy. See our Privacy Policy for details on collection, usage, and your rights.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl glass ring-gold overflow-hidden">
      <button onClick={() => setOpen((v) => !v)} className="w-full px-5 py-4 flex items-center justify-between text-left">
        <div className="flex items-center gap-3">
          <HelpCircle className="h-5 w-5 text-[--accent]" />
          <span className="font-medium">{q}</span>
        </div>
        <ChevronDown className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="px-5 pb-4 text-foreground/75"
          >
            {a}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export const metadata = {
  title: "Support — Vinland AI",
};

export default function SupportPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <h1 className="text-3xl sm:text-4xl font-semibold">Support</h1>
      <p className="mt-2 text-foreground/70">FAQ and contact</p>

      <section className="mt-10 grid gap-6">
        {faqs.map((f) => (
          <FAQItem key={f.q} q={f.q} a={f.a} />
        ))}
      </section>

      <section className="mt-12">
        <div className="glass ring-gold rounded-2xl p-6">
          <h2 className="text-xl font-semibold">Contact support</h2>
          <p className="text-foreground/75 mt-1">We usually respond within 1–2 business days.</p>
          <form
            className="mt-6 grid gap-4"
            onSubmit={async (e) => {
              e.preventDefault();
              setStatus("submitting");
              try {
                const res = await fetch("/api/support", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(form),
                });
                const data = (await res.json()) as { ok: boolean };
                if (res.ok && data.ok) {
                  setStatus("success");
                  setForm({ name: "", email: "", message: "" });
                } else {
                  setStatus("error");
                }
              } catch {
                setStatus("error");
              }
            }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                aria-label="Name"
                placeholder="Name"
                className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-[--accent]"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                required
              />
              <input
                aria-label="Email"
                type="email"
                placeholder="Email"
                className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-[--accent]"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                required
              />
            </div>
            <textarea
              aria-label="Message"
              placeholder="How can we help?"
              className="min-h-28 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-[--accent]"
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              required
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 soft-shadow bg-[#F5D76E] text-black hover:bg-[#e5c85e] disabled:opacity-70"
            >
              <Mail className="h-5 w-5 text-black" />
              {status === "submitting" ? "Sending..." : "Send message"}
            </button>
            <AnimatePresence>
              {status === "success" && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-foreground/80">
                  Thanks! Your message was sent.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-red-400">
                  Something went wrong. Please try again.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </div>
      </section>
    </main>
  );
}


