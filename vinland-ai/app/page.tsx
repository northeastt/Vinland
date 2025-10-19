"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Apple, Sparkles, PanelTop, Brain, Compass } from "lucide-react";

export default function Home() {
  return (
    <main className="relative mx-auto w-full max-w-7xl px-6 py-16 sm:py-20 md:py-24">
      {/* Hero */}
      <section className="flex flex-col items-center text-center gap-8">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full glass ring-gold px-3 py-1 text-xs text-foreground/80">
          <Sparkles className="h-3.5 w-3.5 text-[--accent]" />
          <span>Now training a calmer you</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight inline-flex items-center gap-4"
        >
          <Apple className="h-10 w-10 text-foreground/90" />
          <span>
            <span className="gold-text">Vinland</span> AI
          </span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="max-w-2xl text-balance text-base sm:text-lg md:text-xl text-foreground/90">
          Small steps, serene progress.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="flex flex-col sm:flex-row items-center gap-4">
          {/* App Store style badge */}
          <a
            href="https://apps.apple.com/app/id0000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-xl px-5 py-3 soft-shadow bg-[#F5D76E] text-black hover:bg-[#e5c85e]"
          >
            <Apple className="h-6 w-6 text-black" />
            <div className="text-left leading-tight">
              <div className="text-[10px] uppercase tracking-wider text-black/70">Download on the</div>
              <div className="text-lg font-semibold">App Store</div>
            </div>
          </a>
          <Link href="#training" className="inline-flex items-center gap-3 rounded-xl px-5 py-3 soft-shadow bg-[#F5D76E] text-black hover:bg-[#e5c85e] transition-colors">
            <Compass className="h-5 w-5 text-black" />
            <span className="font-medium">Join Training Arc</span>
          </Link>
        </motion.div>
      </section>

      {/* Features */}
      <section id="training" className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            icon: PanelTop,
            title: "Dashboard",
            desc: "Track Intelligence, Fitness, Discipline, Spirit, Focus, Social.",
          },
          {
            icon: Compass,
            title: "Training Arc",
            desc: "Guided self-improvement challenges powered by AI.",
          },
          { icon: Brain, title: "Wisdom Hub", desc: "Chat with mentor, journal insights, unlock perspective." },
        ].map((f, i) => (
          <motion.div key={f.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: i * 0.05 }} className="glass ring-gold rounded-2xl p-6 sm:p-7">
            <f.icon className="h-6 w-6 text-[--accent]" />
            <h3 className="mt-4 text-lg font-semibold gold-text">{f.title}</h3>
            <p className="mt-2 text-sm text-foreground/90">{f.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* App Preview */}
      <section id="preview" className="mt-20 sm:mt-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-2xl sm:text-3xl font-semibold gold-text">A glimpse of your calm companion</h2>
          <p className="mt-3 text-foreground/90">
            Stay centered with a minimal dashboard, reflective journaling, and adaptive guidance.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-foreground/75">
            <li>• Gentle nudges over noisy notifications</li>
            <li>• Thoughtful insights tailored to your rhythm</li>
            <li>• Progress that respects your pace</li>
          </ul>
        </div>
        <motion.div initial={{ opacity: 0, y: 16, rotate: -1 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-1 md:order-2 relative h-[520px] md:h-[600px] lg:h-[680px] w-[260px] md:w-[300px] lg:w-[340px] rounded-[36px] glass ring-gold soft-shadow overflow-hidden shadow-[0_0_30px_rgba(245,215,110,0.3)] rotate-2 place-self-center">
          {/* phone notch */}
          <div className="absolute left-1/2 -translate-x-1/2 top-2 h-6 w-32 rounded-full bg-white/10" />
          {/* placeholder screen */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(245,215,110,0.12),rgba(255,255,255,0)_30%)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-40 w-40 rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(245,215,110,0.25), transparent 60%)" }} />
          </div>
          <Image src="/screenshot.png" alt="App preview" fill sizes="(min-width: 1024px) 340px, (min-width: 768px) 300px, 260px" className="object-contain p-6 md:p-10" />
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="mt-24 border-t border-white/10 pt-8 text-sm text-foreground/70">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Vinland AI</p>
          <nav className="flex items-center gap-6">
            <Link href="/privacypolicy" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="/support" className="hover:text-foreground">Support</Link>
            <a href="#" className="hover:text-foreground">Terms</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
