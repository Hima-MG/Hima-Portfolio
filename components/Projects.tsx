"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";

const projects = [
  {
    index: "01",
    title: "Civilezy EMS + CRM",
    description: "Employee Management System and CRM platform developed for business operations and workflow management.",
    tags: ["Next.js", "Supabase", "Shadcn UI"],
    url: null,
    github: "https://github.com/Hima-MG",
    accent: "#8B5CF6",
  },
  {
    index: "02",
    title: "Civilezy Website",
    description: "Corporate platform for customer engagement and business presence.",
    tags: ["Next.js", "Firebase"],
    url: "https://civilezy.in",
    github: null,
    accent: "#3B82F6",
  },
  {
    index: "03",
    title: "Wincentre Website",
    description: "Educational and corporate website built with modern responsive design principles.",
    tags: ["Next.js"],
    url: "https://wincentre.in",
    github: null,
    accent: "#10B981",
  },
];

function ProjectCard({ p, delay }: { p: typeof projects[0]; delay: number }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      style={{ borderRadius: "var(--radius-xl)", border: "1px solid var(--border)", background: "var(--surface)", overflow: "hidden", display: "flex", flexDirection: "column", transition: "border-color 0.22s, transform 0.22s" }}
      onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = "var(--border-hover)"; d.style.transform = "translateY(-4px)"; }}
      onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = "var(--border)"; d.style.transform = "translateY(0)"; }}
    >
      {/* Accent bar */}
      <div style={{ height: "2px", background: `linear-gradient(90deg,${p.accent},transparent 80%)` }} />

      <div style={{ padding: "clamp(24px,3vw,36px)", display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Index + tags */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px", flexWrap: "wrap", gap: "8px" }}>
          <span style={{ fontFamily: "monospace", fontSize: "0.68rem", fontWeight: 600, color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em" }}>
            {p.index}
          </span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {p.tags.map(t => (
              <span key={t} style={{ display: "inline-flex", alignItems: "center", padding: "3px 10px", borderRadius: "999px", fontSize: "0.7rem", fontWeight: 500, border: "1px solid var(--border)", background: "transparent", color: "rgba(255,255,255,0.38)" }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Title */}
        <h3 style={{ fontSize: "clamp(20px,2vw,26px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: "12px" }}>
          {p.title}
        </h3>

        {/* Description */}
        <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.48)", lineHeight: 1.68, flex: 1, marginBottom: "28px" }}>
          {p.description}
        </p>

        {/* Actions */}
        <div style={{ display: "flex", gap: "9px" }}>
          {p.url && (
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ flex: 1, justifyContent: "center", padding: "10px 16px", fontSize: "0.8125rem" }}>
              Visit Website <ArrowUpRight size={13} />
            </a>
          )}
          {p.github && (
            <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ flex: p.url ? 0 : 1, justifyContent: "center", padding: "10px 16px", fontSize: "0.8125rem" }}>
              <GithubIcon width={13} height={13} /> GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const hRef    = useRef(null);
  const hInView = useInView(hRef, { once: true, margin: "-60px" });

  return (
    <section id="projects" style={{ background: "#0A0A0A", paddingTop: "var(--section-pt)", paddingBottom: "var(--section-pb)" }}>
      <div className="container">

        <div className="section-header" ref={hRef}>
          <motion.p className="label" initial={{ opacity: 0, y: 8 }} animate={hInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            Projects
          </motion.p>
          <motion.h2 className="heading-xl" initial={{ opacity: 0, y: 20 }} animate={hInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65, delay: 0.08 }} style={{ marginBottom: "18px" }}>
            What I&apos;ve Built
          </motion.h2>
          <motion.p className="body-lg" initial={{ opacity: 0, y: 14 }} animate={hInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.16 }}>
            Production web apps built for real businesses.
          </motion.p>
        </div>

        <div style={{ maxWidth: "960px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "18px" }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.index} p={p} delay={i * 0.1} />
          ))}
        </div>

      </div>
    </section>
  );
}
