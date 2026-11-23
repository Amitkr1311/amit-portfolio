"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    role: "Web Developer Intern",
    company: "Seequenze Pvt. Ltd.",
    period: "Jan 2026 — May 2026",
    description:
      "Built and scaled backend systems and serverless delivery infrastructure for Figma-to-code generation, turning design inputs into deployable React, HTML, and Flutter previews.",
    highlights: [
      "Developed and debugged Sequelize-backed APIs with AWS SQS-triggered processing and an S3 asset pipeline that processed 100+ design assets in under 5 seconds.",
      "Built a serverless AWS Lambda and S3 build pipeline for React, HTML, and Flutter projects that reduced preview deployment time to under 2 minutes, streamed build logs, and auto-published live previews.",
      "Engineered type-safe AI SDK and Zod function-calling tools with a search-and-replace patch pattern, reducing token consumption by 80% and adding resilient handling for incomplete streaming responses.",
      "Migrated backend workloads from EC2 to AWS Lambda, reducing infrastructure costs by 45% while supporting 2,000+ daily asynchronous executions.",
      "Automated one-click Netlify deployments with a secure 24-hour ownership-claim workflow, enabling users to publish and claim generated sites.",
    ],
  },
];

const skills = [
  "C/C++",
  "Python",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "React.js",
  "Node.js",
  "Express.js",
  "Amazon Web Services (AWS)",
  "SQL",
  "PostgreSQL",
  "Prisma",
  "AWS Lambda",
  "S3",
  "Docker",
  "DynamoDB",
  "MongoDB",
  "jest",
  "Convex",
  "Clerk",
  "Postman",
];

const achievements = [
  "S&P Global & CRISIL Code to Connect Hackathon 2026: Top 5 finalist for developing RiskPulse AI, an NLP-powered financial risk intelligence and portfolio stress-testing platform.",
  "HackWithInfy 2026: Secured an Infosys PPO after clearing two DSA rounds and an on-site technical interview.",
  "Adobe India Hackathon 2026: Advanced to Round 3 as part of a three-member team.",
  "Ranked in the top 1.3% globally on LeetCode, solving over 500 problems and achieving a contest rating of over 1,650.",
];

export function About() {
  return (
    <section id="about" className="py-32">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-12">
        {/* Intro */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-4/5 bg-surface-container-low overflow-hidden rounded-lg group border border-outline-variant/20">
              <Image
                fill
                unoptimized
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                src="/assets/potrait.png"
                alt="Portrait"
                loading="eager"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 pt-4"
          >
            <span className="font-label text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-6 block">Professional Profile</span>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-10 leading-[1.1]">
              Building reliable <br />
              <span className="text-primary italic font-medium">software</span> at scale.
            </h2>
            <div className="max-w-xl space-y-6 text-on-surface-variant">
              <p className="text-xl leading-relaxed">
                I am Amit Kumar, a Computer Science and Engineering undergraduate at IIIT Raichur (2023-2027), focused on full-stack engineering, distributed systems, and AI-powered products.
              </p>
              <p className="text-lg opacity-80 leading-relaxed">
                I was named a Top 5 finalist at the S&P Global & CRISIL Code to Connect Hackathon 2026 for building RiskPulse AI, a financial risk intelligence platform that connects news signals to portfolio stress tests. My work spans serverless AWS infrastructure, real-time collaborative systems, and production-minded AI platforms.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Experience, Skills, Achievements, and Education */}
        <div id="experiance" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-7 bg-surface-container-low p-10 rounded-xl border border-outline-variant/30">
            <h3 className="font-headline text-4xl font-bold tracking-tight mb-12">Experience</h3>
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative pl-8 border-l border-primary/20"
                >
                  <div className="absolute -left-1 top-2 w-2 h-2 rounded-full bg-primary transition-transform group-hover:scale-150"></div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                    <div>
                      <h4 className="text-2xl font-bold">{exp.role}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1">
                      <span className="text-xs uppercase tracking-wider text-on-surface-variant/60 bg-surface-container px-3 py-1 rounded-full">{exp.period}</span>
                      <span className="text-xs uppercase tracking-wider text-primary/70">Remote</span>
                    </div>
                  </div>
                  <p className="text-on-surface-variant leading-relaxed max-w-2xl">{exp.description}</p>
                  <ul className="mt-4 space-y-2 text-on-surface-variant">
                    {exp.highlights.map((point) => (
                      <li key={point} className="text-sm leading-relaxed flex items-start gap-2">
                        <span className="font-bold text-primary">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 bg-surface-container-low p-10 rounded-xl border border-outline-variant/30"
          >
            <h4 className="font-bold text-lg leading-tight mb-4">Featured Achievement</h4>
            <div className="mb-5 rounded-lg border border-primary/40 bg-primary/10 p-4">
              <p className="text-xs uppercase tracking-[0.16em] font-bold text-primary mb-2">S&P Global & CRISIL · 2026</p>
              <p className="font-bold leading-relaxed">Top 7 finalist for RiskPulse AI</p>
              <p className="mt-2 text-sm text-on-surface-variant leading-relaxed">
                Built an NLP-powered financial risk intelligence and portfolio stress-testing platform.
              </p>
            </div>
            <h5 className="font-bold text-sm leading-tight mb-3">More milestones</h5>
            <ul className="space-y-3 text-sm text-on-surface-variant">
              {achievements.slice(1).map((item) => (
                <li key={item} className="leading-relaxed flex items-start gap-2">
                  <span className="font-bold text-primary">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="lg:col-span-7 bg-surface-container-low p-10 rounded-xl border border-outline-variant/30">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-6 block">Snapshot</span>
            <h3 className="text-3xl font-bold tracking-tight mb-8">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs bg-surface-container-high px-3 py-2 rounded-full border border-outline-variant/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-surface-container-low p-10 rounded-xl border border-outline-variant/30">
            <h4 className="font-bold text-lg leading-tight mb-4">Education</h4>
            <div className="space-y-8">
              <div className="space-y-2">
                <h5 className="font-bold text-base leading-tight">B.Tech in Computer Science and Engineering</h5>
                <p className="text-on-surface-variant">Indian Institute of Information Technology, Raichur</p>
                <p className="text-xs uppercase tracking-wider text-primary/60">Aug 2023 — May 2027</p>
              </div>
              <div className="w-full h-px bg-outline-variant/30"></div>
              <div className="space-y-2">
                <h5 className="font-bold text-base leading-tight">6th to 12th Std</h5>
                <p className="text-on-surface-variant">Jawahar Navodaya Vidyalaya, Katihar</p>
                <p className="text-xs uppercase tracking-wider text-primary/60">Aug 2015 — Jun 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
