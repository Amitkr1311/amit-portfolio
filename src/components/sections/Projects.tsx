"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const projects = [
  {
    title: "CollabBoard",
    category: "Real-Time Collaboration",
    stack: ["Next.js", "TypeScript", "Express.js", "WebSocket", "Prisma"],
    description:
      "Real-time collaborative whiteboard with isolated frontend/API/WebSocket services in a TurboRepo architecture and JWT-based low-latency sync.",
    highlights: [
      "Low-latency multi-user synchronization",
      "JWT-based access and room isolation",
      "Persistent canvas state across reconnects",
    ],
    image: "/assets/collabboard.png",
    githubUrl: "https://github.com/Amitkr1311/CollabBoard",
    liveUrl: "#",
  },
  {
    title: "PodcastX",
    category: "AI Product Platform",
    stack: ["Next.js", "Convex", "Clerk", "PostgreSQL", "Gemini AI"],
    description:
      "AI-powered podcast platform that generates multi-speaker episodes with AI audio and thumbnails from text prompts in under 60 seconds.",
    highlights: [
      "Prompt-to-podcast generation in under 60 seconds",
      "Real-time discovery and synchronized updates",
      "Retry and recovery for resilient AI workflows",
    ],
    image: "/assets/podcastx.png",
    githubUrl: "https://github.com/Amitkr1311/podcastX",
    liveUrl: "https://podcastx.iamamit.me/",
  },
  {
    title: "NoteSphere",
    category: "RAG Knowledge System",
    stack: ["MERN", "TypeScript", "Gemini API", "Pinecone", "MongoDB"],
    description:
      "RAG pipeline indexing 10,000+ embeddings with hybrid retrieval (MongoDB + Pinecone), enabling efficient low-latency semantic note search.",
    highlights: [
      "Indexed 10,000+ embeddings efficiently",
      "Hybrid retrieval with vector + metadata search",
      "Lower inference cost via batched embeddings",
    ],
    image: "/assets/notesphere.png",
    githubUrl: "https://github.com/Amitkr1311/NoteSphere-Frontend",
    liveUrl: "#",
  },
];

const CARD_SCROLL_VH = 200;

function getCardScrollTiming(index: number, total: number) {
  const step = 1 / total;
  const segmentStart = index * step;
  const segmentEnd = (index + 1) * step;
  const revealStart = index === 0 ? 0.001 : segmentStart;
  const revealEnd = index === 0 ? step * 0.12 : segmentStart + step * 0.32;
  const exitStart = segmentStart + step * 0.52;
  const exitEnd = segmentEnd;

  return { revealStart, revealEnd, exitStart, exitEnd };
}

export function Projects() {
  const stackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end center"],
  });

  return (
    // FIXED: Removed overflow-hidden to prevent cutting off exiting cards
    <section id="projects" className="bg-surface py-28 md:py-32">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3}}
          className="mb-14 md:mb-16"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-4">Selected Work</p>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-on-surface max-w-4xl">
            Projects
          </h2>
          <p className="mt-4 text-on-surface-variant max-w-2xl leading-relaxed">
            Cards begin as a stacked deck and unwrap downward as you scroll.
          </p>
        </motion.div>

        <div
          ref={stackRef}
          style={{ height: `${projects.length * CARD_SCROLL_VH}vh` }}
          className="relative hidden md:block"
        >
          <div className="sticky top-48 h-screen overflow-hidden">
            <div className="relative w-full h-full">
              {projects.map((project, index) => (
                <StackedProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  total={projects.length}
                  progress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="md:hidden grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 48 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.15, delay: index * 0.03 }}
              className="group bg-surface-container-low rounded-2xl border border-outline-variant/25 overflow-hidden shadow-[0_24px_45px_-28px_rgba(136,82,0,0.45)] hover:border-primary/35 transition-colors"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  fill
                  unoptimized
                  priority={index === 0}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/85 bg-black/25 px-3 py-1.5 rounded-full border border-white/20">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-7">
                <h3 className="text-2xl font-bold tracking-tight text-on-surface mb-3">{project.title}</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm md:text-base mb-5">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] uppercase tracking-wide font-semibold px-2.5 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/30 text-on-surface-variant"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2.5 mb-6">
                  {project.highlights.map((item) => (
                    <li key={item} className="text-sm text-on-surface-variant leading-relaxed flex items-start gap-2">
                      <span className="font-bold text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-3">
                  <a
                    href={project.liveUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-full bg-primary text-on-primary text-sm font-bold tracking-tight hover:bg-primary-container transition-colors"
                  >
                    View Project
                  </a>
                  <a
                    href={project.githubUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-full border border-outline-variant/40 text-sm font-semibold text-on-surface hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="mt-20 md:mt-32 flex justify-center"
        >
          <a
            href={process.env.NEXT_PUBLIC_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-surface-container-low border border-outline-variant/30 text-on-surface font-bold tracking-tight hover:border-primary/40 hover:text-primary transition-all shadow-[0_8px_16px_-6px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_20px_-6px_rgba(136,82,0,0.2)] hover:-translate-y-1 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:scale-110 transition-transform"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a12.8 12.8 0 0 0-7 0C6.2 1.2 5 1.6 5 1.6a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3 9.2c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
            </svg>
            View My GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function StackedProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: (typeof projects)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const baseY = index * -28;
  const isLastCard = index === total - 1;
  const { revealStart, revealEnd, exitStart, exitEnd } = getCardScrollTiming(index, total);
  const motionRange = [0, revealStart, revealEnd, exitStart, exitEnd, 1];

  const y = useTransform(
    progress,
    motionRange,
    isLastCard
      ? [`${baseY}px`, `${baseY}px`, "0px", "0px", "0px", "0px"]
      : [`${baseY}px`, `${baseY}px`, "0px", "0px", "90vh", "90vh"]
  );
  const x = useTransform(
    progress,
    [0, revealStart, revealEnd, 1],
    [index * 18, index * 10, 0, 0]
  );
  const rotate = useTransform(
    progress,
    [0, revealStart, revealEnd, 1],
    [index * 5, index * 2.5, 0, 0]
  );
  const scale = useTransform(
    progress,
    [0, revealStart, revealEnd, 1],
    [1 - index * 0.06, 1 - index * 0.04, 1, 1]
  );
  const opacity = useTransform(
    progress,
    [0, exitStart, exitEnd, 1],
    isLastCard ? [1, 1, 1, 1] : [1, 1, 0, 0]
  );

  return (
    <motion.article
      style={{ y, x, rotate, scale, opacity, zIndex: total - index }}
      // FIXED: Added top-0 so absolute positioning anchors consistently
      className="absolute top-0 inset-x-0 mx-auto w-[min(900px,92%)] bg-surface-container-low rounded-2xl border border-outline-variant/25 overflow-hidden shadow-[0_30px_50px_-30px_rgba(136,82,0,0.55)]"
    >
      {/* FIXED: Changed invalid min-h-105 to min-h-[450px] and enforced grid cols on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[450px]">
        <div className="md:col-span-5 relative overflow-hidden hidden md:block">
          <Image
            fill
            unoptimized
            priority={index === 0}
            className="object-cover"
            src={project.image}
            alt={project.title}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/5 to-transparent" />
          <span className="absolute left-5 top-5 text-[10px] uppercase tracking-[0.2em] font-bold text-white/90 bg-black/30 px-3 py-1.5 rounded-full border border-white/20">
            {project.category}
          </span>
        </div>

        <div className="md:col-span-7 p-7">
          <h3 className="text-3xl font-bold tracking-tight text-on-surface mb-3">{project.title}</h3>
          <p className="text-on-surface-variant leading-relaxed text-sm md:text-base mb-5">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] uppercase tracking-wide font-semibold px-2.5 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/30 text-on-surface-variant"
              >
                {tech}
              </span>
            ))}
          </div>

          <ul className="space-y-2.5 mb-6">
            {project.highlights.map((item) => (
              <li key={item} className="text-sm text-on-surface-variant leading-relaxed flex items-start gap-2">
                <span className="font-bold text-primary">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={project.liveUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full bg-primary text-on-primary text-sm font-bold tracking-tight hover:bg-primary-container transition-colors"
            >
              View Project
            </a>
            <a
              href={project.githubUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full border border-outline-variant/40 text-sm font-semibold text-on-surface hover:border-primary/40 hover:text-primary transition-colors"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
