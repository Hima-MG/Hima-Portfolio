"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const jobs = [
  {
    role: "IT Head",
    company: "Wincentre",
    period: "2025 – Present",
    impact: [
      "Led all technology decisions across the company",
      "Designed and shipped CRM and EMS platforms from zero",
      "Built and maintained the company website and digital infrastructure",
      "Worked directly with stakeholders on product decisions",
    ],
    accent: "#3B82F6",
  },
  {
    role: "Flutter Developer Intern",
    company: "Irohub Infotech",
    period: "2024 – 2025",
    impact: [
      "Built and shipped production Flutter apps with real users",
      "Integrated Firebase and Firestore for real-time data sync",
      "Connected mobile apps to backend services via REST APIs",
      "Contributed across the full mobile development lifecycle",
    ],
    accent: "#8B5CF6",
  },
];

export default function Experience() {
  const hRef    = useRef(null);
  const hInView = useInView(hRef, { once: true, margin: "-60px" });

  return (
    <section id="experience" style={{ background: "#050505", paddingTop: "var(--section-pt)", paddingBottom: "var(--section-pb)" }}>
      <div className="container">

        <div className="section-header" ref={hRef}>
          <motion.p className="label" initial={{ opacity: 0, y: 8 }} animate={hInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            Experience
          </motion.p>
          <motion.h2 className="heading-xl" initial={{ opacity: 0, y: 20 }} animate={hInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65, delay: 0.08 }} style={{ marginBottom: "18px" }}>
            Where I&apos;ve Worked
          </motion.h2>
        </div>

        <div style={{ maxWidth: "720px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "0" }}>
          {jobs.map((job, i) => {
            const ref    = useRef(null);
            const inView = useInView(ref, { once: true, margin: "-80px" });

            return (
              <motion.div
                key={job.company}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{ position: "relative", paddingBottom: i < jobs.length - 1 ? "clamp(40px,5vw,60px)" : 0 }}
              >
                {/* Timeline connector */}
                {i < jobs.length - 1 && (
                  <div aria-hidden style={{ position: "absolute", left: "7px", top: "22px", bottom: 0, width: "1px", background: "linear-gradient(to bottom, rgba(255,255,255,0.1), transparent)" }} />
                )}

                <div style={{ display: "flex", gap: "clamp(20px,3vw,36px)", alignItems: "flex-start" }}>
                  {/* Dot */}
                  <div style={{ width: "15px", height: "15px", borderRadius: "50%", border: `2px solid ${job.accent}`, background: `${job.accent}20`, flexShrink: 0, marginTop: "5px" }} />

                  {/* Content */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    {/* Role + period row */}
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px", flexWrap: "wrap", marginBottom: "6px" }}>
                      <div>
                        <h3 style={{ fontSize: "clamp(18px,2vw,22px)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: "3px" }}>
                          {job.role}
                        </h3>
                        <p style={{ fontSize: "0.9375rem", fontWeight: 600, color: job.accent }}>
                          {job.company}
                        </p>
                      </div>
                      <span style={{ fontFamily: "monospace", fontSize: "0.8rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.03em", marginTop: "3px", whiteSpace: "nowrap" }}>
                        {job.period}
                      </span>
                    </div>

                    {/* Impact list */}
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "7px", marginTop: "16px" }}>
                      {job.impact.map(item => (
                        <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.9375rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                          <span style={{ marginTop: "8px", width: "4px", height: "4px", borderRadius: "50%", background: `${job.accent}99`, flexShrink: 0 }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
