"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="px-8 md:px-20 py-24 md:py-40 max-w-screen-2xl mx-auto flex flex-col gap-8">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-primary font-label text-sm uppercase tracking-[0.2em] font-bold"
      >
        Software Development Engineer
      </motion.span>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary"
      >
        <span className="h-2 w-2 rounded-full bg-primary" />
        Top 7 Finalist · S&P Global & CRISIL Code to Connect Hackathon 2026
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="text-5xl md:text-9xl font-extrabold tracking-tighter leading-[0.85] text-on-surface"
      >
        Amit <br />
        <span className="text-primary">Kumar.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed mt-4 font-light"
      >
        B.Tech CSE student at IIIT Raichur building scalable web systems with Next.js, TypeScript, and AWS. Focused on real-time collaboration, AI-powered products, and resilient backend architecture.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex flex-wrap items-center gap-4 mt-8"
      >
        <a
          href="#projects"
          className="bg-primary text-on-primary px-6 py-3 rounded-full font-bold tracking-tight"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-full font-bold tracking-tight border border-outline-variant/60 text-on-surface"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
