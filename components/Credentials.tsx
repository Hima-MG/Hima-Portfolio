"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Award } from "lucide-react";

const credentials = [
  {
    title: "Flutter Developer Internship",
    issuer: "Irohub Infotech",
    period: "2024 – 2025",
    type: "Certificate",
    description: "Completed a 6-month Flutter development internship, building production mobile applications with Firebase, Dart, REST APIs, and real user deployments.",
    skills: ["Flutter", "Dart", "Firebase", "REST APIs", "Mobile Development"],
    accent: "#3B82F6",
    bg: "rgba(59,130,246,0.04)",
    border: "rgba(59,130,246,0.16)",
    icon: "📱",
    verified: true,
  },
  {
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    period: "2024",
    type: "Certification",
    description: "Certified in core Azure cloud services — architecture, compute, storage, networking, pricing, and service level agreements for cloud-based deployments.",
    skills: ["Cloud Computing", "Azure Services", "Cloud Architecture", "Storage", "Networking"],
    accent: "#0078D4",
    bg: "rgba(0,120,212,0.04)",
    border: "rgba(0,120,212,0.16)",
    icon: "☁️",
    verified: true,
  },
];

export default function Credentials() {
  const hRef = useRef(null);
  const hInView = useInView(hRef, { once: true, margin: "-60px" });

  return (
    <section id="credentials" style={{ background: "#050505", paddingTop: "var(--section-pt)", paddingBottom: "var(--section-pb)" }}>
      <div className="container">

        {/* Centered header */}
        <div className="section-header" ref={hRef}>
          <motion.p className="label" initial={{ opacity:0,y:8 }} animate={hInView?{opacity:1,y:0}:{}} transition={{ duration:0.5 }}>
            Credentials
          </motion.p>
          <motion.h2 className="heading-xl" initial={{ opacity:0,y:20 }} animate={hInView?{opacity:1,y:0}:{}} transition={{ duration:0.65,delay:0.08 }} style={{ marginBottom:"18px" }}>
            Proof of{" "}
            <span className="gradient-text">work.</span>
          </motion.h2>
          <motion.p className="body-lg" initial={{ opacity:0,y:14 }} animate={hInView?{opacity:1,y:0}:{}} transition={{ duration:0.6,delay:0.16 }}>
            Formal recognition of completed work and certified expertise.
          </motion.p>
        </div>

        {/* Credential cards */}
        <div className="content-center" style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"20px" }}>
          {credentials.map((c, i) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true, margin: "-80px" });
            return (
              <motion.div
                key={c.title}
                ref={ref}
                initial={{ opacity:0,y:28 }}
                animate={inView?{opacity:1,y:0}:{}}
                transition={{ duration:0.65,delay:i*0.12 }}
                style={{ borderRadius:"var(--radius-xl)",border:`1px solid ${c.border}`,background:c.bg,overflow:"hidden",position:"relative" }}
              >
                {/* Top line */}
                <div style={{ height:"2px",background:`linear-gradient(90deg,${c.accent},transparent 60%)` }} />

                <div style={{ padding:"clamp(28px,4vw,40px)" }}>
                  {/* Icon + type row */}
                  <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"20px" }}>
                    <div style={{ width:"48px",height:"48px",borderRadius:"14px",background:`${c.accent}18`,border:`1px solid ${c.accent}30`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px" }}>
                      {c.icon}
                    </div>
                    <div style={{ display:"flex",alignItems:"center",gap:"7px" }}>
                      {c.verified&&(
                        <div style={{ display:"flex",alignItems:"center",gap:"5px",padding:"4px 10px",borderRadius:"999px",background:"rgba(16,185,129,0.08)",border:"1px solid rgba(16,185,129,0.2)" }}>
                          <CheckCircle size={11} color="#10B981" />
                          <span style={{ fontSize:"0.7rem",fontWeight:600,color:"#10B981",letterSpacing:"0.04em" }}>Verified</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Type label */}
                  <p style={{ fontFamily:"monospace",fontSize:"0.68rem",fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",color:`${c.accent}88`,marginBottom:"8px" }}>
                    {c.type}
                  </p>

                  {/* Title */}
                  <h3 style={{ fontSize:"clamp(18px,1.8vw,22px)",fontWeight:700,color:"#fff",letterSpacing:"-0.02em",lineHeight:1.2,marginBottom:"6px" }}>
                    {c.title}
                  </h3>

                  {/* Issuer + period */}
                  <div style={{ display:"flex",alignItems:"center",gap:"8px",marginBottom:"18px" }}>
                    <span style={{ fontSize:"0.875rem",color:c.accent,fontWeight:600 }}>{c.issuer}</span>
                    <span style={{ width:"3px",height:"3px",borderRadius:"50%",background:"rgba(255,255,255,0.2)",display:"inline-block" }} />
                    <span style={{ fontFamily:"monospace",fontSize:"0.78rem",color:"rgba(255,255,255,0.32)" }}>{c.period}</span>
                  </div>

                  {/* Description */}
                  <p style={{ fontSize:"0.9rem",color:"rgba(255,255,255,0.5)",lineHeight:1.7,marginBottom:"20px" }}>
                    {c.description}
                  </p>

                  {/* Skill tags */}
                  <div style={{ display:"flex",flexWrap:"wrap",gap:"7px" }}>
                    {c.skills.map(s=>(
                      <span key={s} style={{ display:"inline-flex",alignItems:"center",padding:"4px 11px",borderRadius:"999px",fontSize:"0.72rem",fontWeight:500,border:`1px solid ${c.border}`,background:`${c.accent}08`,color:`${c.accent}bb` }}>
                        {s}
                      </span>
                    ))}
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
