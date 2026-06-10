"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const chapters = [
  {
    num: "01", period: "2021 – 2024",
    title: "BCA Graduate",
    org: "Robotics, Machine Learning & AI",
    school: true,
    story: "Built a strong foundation in software development, algorithms, and computational thinking. Specialising in Robotics, Machine Learning, and AI taught me to approach problems as systems — a mindset I carry into every app I build.",
    tags: ["Algorithms", "Problem Solving", "ML Foundations", "Software Design"],
    current: false,
  },
  {
    num: "02", period: "2024 – 2025",
    title: "Customer Relationship Executive",
    org: "IPCS Global",
    school: false,
    story: "My first professional role wasn't technical — and that was the point. I learned how businesses operate, how clients think, and how technology serves real business goals. That perspective shapes how I build products today.",
    tags: ["Client Management", "Stakeholder Communication", "Business Operations"],
    current: false,
  },
  {
    num: "03", period: "2024 – 2025",
    title: "Flutter Developer Intern",
    org: "Irohub Infotech",
    school: false,
    story: "Built production Flutter applications with Firebase, Firestore, and REST APIs inside a real codebase with real users and real deadlines. This wasn't a tutorial — it was the job.",
    tags: ["Flutter", "Dart", "Firebase", "Firestore", "REST APIs", "Provider"],
    current: false,
  },
  {
    num: "04", period: "2025 – Present",
    title: "IT Head",
    org: "Wincentre",
    school: false,
    story: "Promoted to lead all technology at Wincentre. Built the CRM and EMS platforms from scratch, managed the website, and made product decisions that directly impacted business outcomes. Engineering and leadership in the same role.",
    tags: ["Technical Leadership", "CRM Development", "EMS Development", "Product Decisions"],
    current: false,
  },
  {
    num: "05", period: "Today",
    title: "Looking Forward",
    org: "Open to Flutter Developer Roles",
    school: false,
    story: "Seeking a Flutter Developer role where I can build scalable mobile applications, contribute to a product that matters, and grow alongside engineers who care about craft. Real experience. Real drive. Ready.",
    tags: [],
    current: true,
  },
];

/* Individual chapter — has its own InView ref */
function Chapter({ c, isLast }: { c: typeof chapters[0]; isLast: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-90px" });

  return (
    <div ref={ref} style={{ position: "relative", paddingBottom: isLast ? 0 : "clamp(56px,7vw,88px)" }}>

      {/* Timeline dot */}
      <div style={{
        position: "absolute",
        left: "-1px",
        top: "3px",
        transform: "translateX(-50%)",
        width: c.current ? 14 : 11,
        height: c.current ? 14 : 11,
        borderRadius: "50%",
        background: c.current ? "linear-gradient(135deg,#3B82F6,#8B5CF6)" : "transparent",
        border: c.current ? "none" : "1.5px solid rgba(255,255,255,0.22)",
        boxShadow: c.current ? "0 0 0 4px rgba(59,130,246,0.12), 0 0 20px rgba(59,130,246,0.4)" : "none",
        zIndex: 2,
      }}>
        {c.current && (
          <span style={{ position:"absolute",inset:"-5px",borderRadius:"50%",border:"1.5px solid rgba(59,130,246,0.35)",animation:"ping 2s cubic-bezier(0,0,0.2,1) infinite" }} />
        )}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65 }}
        style={{ paddingLeft: "clamp(28px,4vw,48px)" }}
      >
        {/* Chapter meta row */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px", flexWrap: "wrap" }}>
          <span style={{ fontFamily: "monospace", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: c.current ? "#3B82F6" : "rgba(255,255,255,0.22)" }}>
            Chapter {c.num}
          </span>
          <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(255,255,255,0.18)", display: "inline-block" }} />
          <span style={{ fontFamily: "monospace", fontSize: "0.72rem", color: "rgba(255,255,255,0.32)", letterSpacing: "0.04em" }}>
            {c.period}
          </span>
        </div>

        {/* Open-to-work badge (current only) */}
        {c.current && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            style={{ marginBottom: "12px" }}
          >
            <span style={{ display:"inline-flex",alignItems:"center",gap:"7px",padding:"5px 14px",borderRadius:"999px",fontSize:"11px",fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",background:"rgba(16,185,129,0.08)",border:"1px solid rgba(16,185,129,0.25)",color:"#10B981" }}>
              <span className="animate-pulse" style={{ width:"6px",height:"6px",borderRadius:"50%",background:"#10B981",display:"inline-block",boxShadow:"0 0 8px rgba(16,185,129,0.7)" }} />
              Open to Opportunities
            </span>
          </motion.div>
        )}

        {/* Role title */}
        <h3 style={{ fontSize: "clamp(20px,2.2vw,28px)", fontWeight: 800, letterSpacing: "-0.025em", color: c.current ? "#fff" : "rgba(255,255,255,0.88)", lineHeight: 1.15, marginBottom: "7px" }}>
          {c.title}
        </h3>

        {/* Org */}
        <p style={{ fontSize: "0.9rem", fontWeight: 600, color: c.current ? "#3B82F6" : c.school ? "rgba(255,255,255,0.38)" : "rgba(255,255,255,0.48)", marginBottom: "18px", letterSpacing: "0.01em" }}>
          {c.org}
        </p>

        {/* Narrative */}
        <p style={{ fontSize: "clamp(0.9375rem,1.1vw,1rem)", color: "rgba(255,255,255,0.52)", lineHeight: 1.78, maxWidth: "560px", marginBottom: c.tags.length ? "20px" : 0 }}>
          {c.story}
        </p>

        {/* Tags */}
        {c.tags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
            {c.tags.map(tag => (
              <span key={tag} style={{ display:"inline-flex",alignItems:"center",padding:"4px 11px",borderRadius:"999px",fontSize:"0.72rem",fontWeight:500,border:"1px solid rgba(255,255,255,0.08)",background:"rgba(255,255,255,0.03)",color:"rgba(255,255,255,0.36)",letterSpacing:"0.01em" }}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default function Story() {
  const hRef = useRef(null);
  const hInView = useInView(hRef, { once: true, margin: "-60px" });

  return (
    <section id="story" className="section" style={{ background: "#0A0A0A" }}>
      <div className="container">

        {/* ── Centered section header ── */}
        <div className="section-header" ref={hRef}>
          <motion.p className="label" initial={{ opacity:0,y:8 }} animate={hInView?{opacity:1,y:0}:{}} transition={{ duration:0.5 }}>
            My Journey
          </motion.p>
          <motion.h2 className="heading-xl" initial={{ opacity:0,y:20 }} animate={hInView?{opacity:1,y:0}:{}} transition={{ duration:0.65,delay:0.08 }} style={{ marginBottom:"18px" }}>
            The Journey{" "}
            <span className="gradient-text">Behind The Code.</span>
          </motion.h2>
          <motion.p className="body-lg" initial={{ opacity:0,y:14 }} animate={hInView?{opacity:1,y:0}:{}} transition={{ duration:0.6,delay:0.16 }}>
            Five chapters that shaped who I am as a developer — from campus to shipping real products.
          </motion.p>
        </div>

        {/* ── Timeline ── */}
        <div className="content-center" style={{ position:"relative", paddingLeft:"clamp(20px,3vw,28px)" }}>

          {/* Vertical line */}
          <div aria-hidden style={{ position:"absolute",left:0,top:"4px",bottom:"4px",width:"1px",background:"linear-gradient(to bottom,rgba(59,130,246,0.5) 0%,rgba(139,92,246,0.35) 65%,rgba(139,92,246,0.1) 90%,transparent 100%)" }} />

          {chapters.map((c, i) => (
            <Chapter key={c.num} c={c} isLast={i === chapters.length - 1} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ping {
          0%   { transform:scale(1);  opacity:0.7; }
          75%  { transform:scale(2);  opacity:0;   }
          100% { transform:scale(2);  opacity:0;   }
        }
      `}</style>
    </section>
  );
}
