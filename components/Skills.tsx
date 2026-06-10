"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const groups = [
  {
    label: "Mobile",
    items: ["Flutter", "Dart", "Firebase"],
  },
  {
    label: "Web",
    items: ["Next.js", "React.js"],
  },
  {
    label: "Backend & Database",
    items: ["Supabase", "MySQL", "MongoDB", "Firestore"],
  },
  {
    label: "Development",
    items: ["REST APIs", "Git", "GitHub"],
  },
  {
    label: "Additional Knowledge",
    items: ["Machine Learning", "Artificial Intelligence", "Robotics"],
  },
];

export default function Skills() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" style={{ background: "#0A0A0A", paddingTop: "var(--section-pt)", paddingBottom: "var(--section-pb)" }}>
      <div className="container">

        {/* Header */}
        <div ref={ref} className="section-header">
          <motion.p
            className="label"
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Technologies
          </motion.p>
          <motion.h2
            className="heading-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.08 }}
            style={{ marginBottom: "18px" }}
          >
            Technologies I Work With
          </motion.h2>
          <motion.p
            className="body-lg"
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            The tools I reach for to build complete mobile and web products.
          </motion.p>
        </div>

        {/* Groups */}
        <div style={{ maxWidth: "720px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(28px, 4vw, 40px)" }}>
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.22 + gi * 0.08 }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: "20px", marginBottom: "14px" }}>
                <span style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.25)", whiteSpace: "nowrap", fontFamily: "monospace" }}>
                  {group.label}
                </span>
                <div style={{ height: "1px", flex: 1, background: "var(--border)" }} />
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {group.items.map(item => (
                  <span key={item} className="pill">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
