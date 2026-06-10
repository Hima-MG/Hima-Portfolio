"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Download, Copy, Check, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "@/components/icons";

const links = [
  { label:"Email",    value:"himaammu656@gmail.com",                  href:"mailto:himaammu656@gmail.com",                          Icon:Mail,        copy:true  },
  { label:"Phone",    value:"+91 8891 713 291",                       href:"tel:+918891713291",                                     Icon:Phone,       copy:true  },
  { label:"LinkedIn", value:"hima-m-g-954878259",                     href:"https://www.linkedin.com/in/hima-m-g-954878259",        Icon:LinkedInIcon,copy:false },
  { label:"GitHub",   value:"github.com/Hima-MG",                    href:"https://github.com/Hima-MG",                           Icon:GithubIcon,  copy:false },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState<string | null>(null);

  const doCopy = (val: string) => {
    navigator.clipboard.writeText(val);
    setCopied(val);
    setTimeout(() => setCopied(null), 2200);
  };

  const f = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.65, delay },
  });

  return (
    <section id="contact" style={{ background: "#0A0A0A", paddingTop: "var(--section-pt)", paddingBottom: "var(--section-pb)" }} ref={ref}>
      <div className="container">
        <div style={{ maxWidth:"800px",margin:"0 auto",textAlign:"center" }}>

          {/* Availability badge */}
          <motion.div {...f(0)} style={{ marginBottom:"28px" }}>
            <span style={{ display:"inline-flex",alignItems:"center",gap:"8px",padding:"7px 18px",borderRadius:"999px",fontSize:"11px",fontWeight:600,letterSpacing:"0.07em",textTransform:"uppercase",background:"rgba(16,185,129,0.08)",border:"1px solid rgba(16,185,129,0.25)",color:"#10B981" }}>
              <span className="animate-pulse" style={{ width:"6px",height:"6px",borderRadius:"50%",background:"#10B981",display:"inline-block",boxShadow:"0 0 8px rgba(16,185,129,0.7)" }} />
              Open to new opportunities
            </span>
          </motion.div>

          {/* Big headline */}
          <motion.h2 {...f(0.07)} style={{ fontSize:"clamp(32px,5vw,64px)",fontWeight:900,letterSpacing:"-0.035em",lineHeight:1.07,color:"#fff",marginBottom:"18px" }}>
            Looking for a Flutter Developer<br />
            <span style={{ background:"linear-gradient(135deg,#3B82F6 0%,#8B5CF6 60%,#A78BFA 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>
              who builds real products?
            </span>
          </motion.h2>

          {/* Sub-headline */}
          <motion.p {...f(0.14)} style={{ fontSize:"clamp(26px,3.5vw,48px)",fontWeight:700,color:"rgba(255,255,255,0.18)",letterSpacing:"-0.025em",lineHeight:1.1,marginBottom:"32px" }}>
            Let&apos;s talk.
          </motion.p>

          {/* Supporting text */}
          <motion.p {...f(0.2)} style={{ fontSize:"clamp(1rem,1.3vw,1.125rem)",color:"rgba(255,255,255,0.45)",lineHeight:1.72,maxWidth:"500px",margin:"0 auto 52px" }}>
            I&apos;m actively looking for Flutter Developer roles at product companies, startups, and international remote teams. If you&apos;re building something great — I&apos;d love to be part of it.
          </motion.p>

          {/* Contact links */}
          <motion.div {...f(0.26)} style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:"10px",marginBottom:"40px",textAlign:"left" }}>
            {links.map(({ label,value,href,Icon,copy }) => (
              <div
                key={label}
                style={{ display:"flex",alignItems:"center",gap:"11px",padding:"14px 18px",borderRadius:"var(--radius-md)",border:"1px solid var(--border)",background:"var(--surface)",transition:"border-color 0.2s,background 0.2s",cursor:copy?"default":"pointer" }}
                onMouseEnter={e=>{ const d=e.currentTarget; d.style.borderColor="var(--border-hover)"; d.style.background="var(--surface-hover)"; }}
                onMouseLeave={e=>{ const d=e.currentTarget; d.style.borderColor="var(--border)"; d.style.background="var(--surface)"; }}
              >
                <div style={{ width:"32px",height:"32px",borderRadius:"var(--radius-sm)",background:"rgba(255,255,255,0.04)",border:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                  <Icon width={14} height={14} style={{ color:"rgba(255,255,255,0.4)" }} />
                </div>
                <div style={{ flex:1,minWidth:0 }}>
                  <p style={{ fontSize:"0.68rem",color:"rgba(255,255,255,0.28)",marginBottom:"2px",fontFamily:"monospace",letterSpacing:"0.06em",textTransform:"uppercase" }}>{label}</p>
                  <p style={{ fontSize:"0.875rem",color:"rgba(255,255,255,0.65)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontWeight:500 }}>{value}</p>
                </div>
                {copy
                  ? (
                    <button onClick={()=>doCopy(value)} style={{ background:"none",border:"none",cursor:"pointer",color:"rgba(255,255,255,0.28)",padding:"4px",borderRadius:"6px",flexShrink:0,lineHeight:0,transition:"color 0.15s" }}
                      onMouseEnter={e=>(e.currentTarget.style.color="rgba(255,255,255,0.7)")}
                      onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.28)")}
                    >
                      {copied===value ? <Check size={13} style={{ color:"#10B981" }} /> : <Copy size={13} />}
                    </button>
                  )
                  : (
                    <a href={href} target="_blank" rel="noopener noreferrer" style={{ color:"rgba(255,255,255,0.28)",flexShrink:0,lineHeight:0,transition:"color 0.15s" }}
                      onMouseEnter={e=>(e.currentTarget.style.color="rgba(255,255,255,0.7)")}
                      onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.28)")}
                    >
                      <ArrowUpRight size={13} />
                    </a>
                  )
                }
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div {...f(0.32)} style={{ display:"flex",flexWrap:"wrap",gap:"12px",justifyContent:"center" }}>
            <a href="mailto:himaammu656@gmail.com" className="btn-primary" style={{ fontSize:"1rem",padding:"15px 32px" }}>
              <Mail size={17} /> Send me an email
            </a>
            <a href="/resume.pdf" download="Hima_MG_Resume.pdf" className="btn-secondary" style={{ fontSize:"1rem",padding:"14px 28px" }}>
              <Download size={16} /> Download Resume
            </a>
          </motion.div>

          {/* Footer note */}
          <motion.p {...f(0.4)} style={{ marginTop:"36px",fontSize:"0.78rem",color:"rgba(255,255,255,0.18)",fontFamily:"monospace",letterSpacing:"0.04em" }}>
            Based in Thrissur, Kerala, India · Open to remote worldwide
          </motion.p>

        </div>
      </div>
    </section>
  );
}
