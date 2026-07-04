"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <header className="mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter text-on-surface mb-6 leading-tight"
        >
          Let&apos;s build something <br />
          <span className="text-primary-container italic">impactful.</span>
        </motion.h2>
        <motion.p
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="text-xl md:text-2xl text-on-surface-variant max-w-2xl font-light leading-relaxed"
        >
          Open to software engineering internships and backend/full-stack opportunities where I can contribute to scalable product development.
        </motion.p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="bg-surface-container-low p-8 md:p-10 rounded-2xl border border-outline-variant/30 flex flex-col"
        >
          <div className="mb-8">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-3">Direct Contact</p>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-on-surface">Get in Touch</h3>
            <p className="mt-3 text-on-surface-variant leading-relaxed max-w-lg">
              Reach out for internship opportunities, project collaboration, or engineering discussions.
            </p>
          </div>

          <div className="space-y-4">
            <a className="block bg-surface p-5 rounded-xl border border-outline-variant/20 hover:border-primary/40 transition-colors" href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || "test@example.com"}`}>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-2">Email</p>
              <p className="text-lg font-semibold text-on-surface break-all">{process.env.NEXT_PUBLIC_EMAIL}</p>
            </a>
            <a className="block bg-surface p-5 rounded-xl border border-outline-variant/20 hover:border-primary/40 transition-colors" href={`tel:${process.env.NEXT_PUBLIC_PHONE || ""}`}>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-2">Phone</p>
              <p className="text-lg font-semibold text-on-surface">{process.env.NEXT_PUBLIC_PHONE}</p>
            </a>
          </div>

          <div className="mt-auto pt-6">
            <a className="w-full bg-primary text-on-primary px-8 py-4 rounded-full font-bold tracking-tight hover:bg-primary-container transition-all flex items-center justify-center gap-3" href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
              <span>Email Amit</span>
              <span className="material-symbols-outlined text-sm">send</span>
            </a>
            <p className="text-xs text-on-surface-variant/70 text-center mt-4">
              Usually responds within 24 hours.
            </p>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="bg-surface-container-low p-8 md:p-10 rounded-2xl border border-outline-variant/30"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-3">Professional Snapshot</p>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-on-surface">At a Glance</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-surface p-5 rounded-xl border border-outline-variant/20">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant mb-2">Primary Role</p>
              <p className="text-base font-semibold text-on-surface">SDE Intern / Full-Stack Developer</p>
            </div>
            <div className="bg-surface p-5 rounded-xl border border-outline-variant/20">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant mb-2">Current Program</p>
              <p className="text-base font-semibold text-on-surface">B.Tech CSE, IIIT Raichur (2023-2027)</p>
            </div>
            <div className="bg-surface p-5 rounded-xl border border-outline-variant/20">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant mb-2">Location</p>
              <p className="text-base font-semibold text-on-surface">Bengaluru, Karnataka, India</p>
            </div>
            <div className="bg-surface p-5 rounded-xl border border-outline-variant/20">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant mb-2">Availability</p>
              <p className="text-base font-semibold text-on-surface">Open for Internships/Full-Time Opportunities</p>
            </div>
          </div>

          <p className="text-sm text-on-surface-variant leading-relaxed mb-4">Profiles</p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: "Portfolio", url: "#" },
              { name: "GitHub", url: process.env.NEXT_PUBLIC_GITHUB_URL },
              { name: "LinkedIn", url: process.env.NEXT_PUBLIC_LINKEDIN_URL },
              { name: "LeetCode", url: process.env.NEXT_PUBLIC_LEETCODE_URL }
            ].map((social) => (
              <a
                key={social.name}
                className="group bg-surface px-4 py-3 rounded-xl border border-outline-variant/20 hover:border-primary/40 transition-colors flex items-center justify-between"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-sm font-medium text-on-surface">{social.name}</span>
                <span className="material-symbols-outlined text-sm text-on-surface-variant group-hover:text-primary transition-colors">arrow_outward</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
