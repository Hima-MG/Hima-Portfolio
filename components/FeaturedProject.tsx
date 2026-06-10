"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, BookOpen, Trophy, Users, Calendar, ShieldCheck, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";

const features = [
  { icon: MessageSquare, title: "Real-time Chat",    desc: "Instant messaging between learners and teachers via Firebase Realtime Database.", color: "#3B82F6" },
  { icon: BookOpen,      title: "Course Management", desc: "Structured courses with modules, progress tracking, and certificates.",          color: "#8B5CF6" },
  { icon: Trophy,        title: "Skill Challenges",  desc: "Gamified assessments and competitions that keep learners engaged.",              color: "#F59E0B" },
  { icon: Users,         title: "Teacher Discovery", desc: "Find and connect with expert teachers filtered by skill and rating.",           color: "#10B981" },
  { icon: Calendar,      title: "Community Events",  desc: "Live workshops, group sessions, and platform-wide learning events.",            color: "#EC4899" },
  { icon: ShieldCheck,   title: "Role-based Access", desc: "Separate learner and teacher flows with Firebase Auth + Firestore rules.",      color: "#6366F1" },
];

const stack = ["Flutter", "Dart", "Firebase", "Firestore", "Firebase Auth", "Cloud Functions", "Provider", "Firebase Storage"];

function AppScreen() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#0D1117", display: "flex", flexDirection: "column", fontFamily: "Inter,system-ui,sans-serif", overflow: "hidden" }}>
      <div style={{ padding: "12px 16px 6px", display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0 }}>
        <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.65)", fontWeight: 700 }}>9:41</span>
        <div style={{ display: "flex", gap: "3px", alignItems: "flex-end" }}>
          {[3, 5, 7, 9].map((h, i) => <div key={i} style={{ width: "3px", height: `${h}px`, background: i === 3 ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.38)", borderRadius: "1px" }} />)}
        </div>
      </div>
      <div style={{ padding: "6px 16px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0 }}>
        <div>
          <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)" }}>Good morning 👋</div>
          <div style={{ fontSize: "19px", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>SkillLink</div>
        </div>
        <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "linear-gradient(135deg,#3B82F6,#8B5CF6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 800, color: "#fff" }}>H</div>
      </div>
      <div style={{ margin: "0 14px 10px", padding: "8px 12px", background: "rgba(255,255,255,0.05)", borderRadius: "11px", border: "1px solid rgba(255,255,255,0.07)", flexShrink: 0 }}>
        <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.22)" }}>🔍 Search courses…</span>
      </div>
      <div style={{ paddingLeft: "14px", display: "flex", gap: "6px", marginBottom: "12px", flexShrink: 0, overflow: "hidden" }}>
        {["All", "Flutter", "Firebase", "UI/UX"].map((c, i) => (
          <div key={c} style={{ padding: "4px 10px", borderRadius: "999px", fontSize: "9px", fontWeight: 600, background: i === 0 ? "linear-gradient(135deg,#3B82F6,#8B5CF6)" : "rgba(255,255,255,0.07)", color: i === 0 ? "#fff" : "rgba(255,255,255,0.4)", whiteSpace: "nowrap", flexShrink: 0 }}>{c}</div>
        ))}
      </div>
      <div style={{ padding: "0 14px 9px", display: "flex", justifyContent: "space-between", flexShrink: 0 }}>
        <span style={{ fontSize: "11px", fontWeight: 700, color: "#fff" }}>Trending</span>
        <span style={{ fontSize: "9px", color: "#3B82F6", fontWeight: 600 }}>See all</span>
      </div>
      {[
        { title: "Flutter Mastery",    g1: "#3B82F6", g2: "#8B5CF6", icon: "📱", rating: "4.9", students: "1.2k" },
        { title: "Firebase Deep Dive", g1: "#10B981", g2: "#3B82F6", icon: "🔥", rating: "4.8", students: "834"  },
      ].map(c => (
        <div key={c.title} style={{ margin: "0 14px 8px", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.025)", flexShrink: 0 }}>
          <div style={{ height: "48px", background: `linear-gradient(135deg,${c.g1},${c.g2})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>{c.icon}</div>
          <div style={{ padding: "6px 10px" }}>
            <div style={{ fontSize: "10px", fontWeight: 700, color: "#fff", marginBottom: "2px" }}>{c.title}</div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: "8px", color: "rgba(255,255,255,0.35)" }}>Arjun Dev</span>
              <span style={{ fontSize: "8px", color: "#F59E0B", fontWeight: 600 }}>★ {c.rating} · {c.students}</span>
            </div>
          </div>
        </div>
      ))}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-around", padding: "8px 0 14px", background: "rgba(0,0,0,0.5)", marginTop: "auto", flexShrink: 0 }}>
        {["🏠", "🔍", "💬", "🏆", "👤"].map((ic, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", opacity: i === 0 ? 1 : 0.35 }}>
            <span style={{ fontSize: "13px" }}>{ic}</span>
            {i === 0 && <div style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#3B82F6" }} />}
          </div>
        ))}
      </div>
    </div>
  );
}

function useBlock() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return { ref, inView };
}

export default function FeaturedProject() {
  const hdr   = useBlock();
  const phone = useBlock();
  const story = useBlock();
  const feats = useBlock();
  const cta   = useBlock();

  const fu = (inView: boolean, delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay },
  });

  return (
    <section id="featured" style={{ background: "#050505", paddingTop: "var(--section-pt)", paddingBottom: "var(--section-pb)" }}>
      <div className="container">

        {/* Header */}
        <div className="section-header" ref={hdr.ref}>
          <motion.p className="label" {...fu(hdr.inView, 0)}>Featured Project</motion.p>
          <motion.h2 className="heading-xl" {...fu(hdr.inView, 0.08)} style={{ marginBottom: "18px" }}>
            SkillLink
          </motion.h2>
          <motion.p className="body-lg" {...fu(hdr.inView, 0.15)}>
            A Flutter-powered learning platform connecting learners and teachers through real-time chat, courses, skill challenges, and community events.
          </motion.p>
        </div>

        {/* Single phone showcase */}
        <div ref={phone.ref} style={{ display: "flex", justifyContent: "center", marginBottom: "clamp(64px,8vw,96px)", position: "relative" }}>
          <div aria-hidden style={{ position: "absolute", inset: "-60px", background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,130,246,0.1) 0%, rgba(139,92,246,0.06) 55%, transparent 75%)", pointerEvents: "none" }} />
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={phone.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: "relative", zIndex: 2 }}
            >
              <div style={{ width: "260px", height: "548px", borderRadius: "52px", border: "2px solid rgba(255,255,255,0.1)", overflow: "hidden", background: "#0D1117", boxShadow: "0 60px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)" }}>
                <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "72px", height: "22px", background: "#050505", borderRadius: "0 0 14px 14px", zIndex: 10 }} />
                <AppScreen />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Problem / Solution */}
        <div ref={story.ref} className="content-center" style={{ marginBottom: "clamp(64px,8vw,96px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1px", background: "var(--border)", borderRadius: "var(--radius-xl)", overflow: "hidden" }}>
            {[
              {
                label: "The Problem",
                heading: "Learning is broken for self-taught developers.",
                body: "Finding quality teachers is hard. Generic platforms are expensive, impersonal, and lack community. Most learners give up — not because of the difficulty, but because they feel alone.",
                accent: "#3B82F6",
              },
              {
                label: "The Solution",
                heading: "A platform where learning feels like community.",
                body: "SkillLink brings learners and teachers together with structured courses, real-time messaging, skill challenges, and live events — all in one Flutter app backed by Firebase.",
                accent: "#8B5CF6",
              },
            ].map((col, ci) => (
              <motion.div
                key={col.label}
                initial={{ opacity: 0, y: 20 }}
                animate={story.inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: ci * 0.12 }}
                style={{ padding: "clamp(28px,4vw,48px)", background: "#0A0A0A" }}
              >
                <p style={{ fontFamily: "monospace", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: `${col.accent}99`, marginBottom: "14px" }}>{col.label}</p>
                <h3 style={{ fontSize: "clamp(18px,1.8vw,22px)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.25, marginBottom: "14px" }}>{col.heading}</h3>
                <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.72 }}>{col.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div ref={feats.ref} className="content-center" style={{ marginBottom: "clamp(64px,8vw,96px)" }}>
          <motion.p
            className="label"
            initial={{ opacity: 0 }}
            animate={feats.inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            style={{ textAlign: "center", marginBottom: "40px" }}
          >
            Key Features
          </motion.p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "12px" }}>
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={feats.inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  style={{ padding: "22px 24px", borderRadius: "var(--radius-lg)", border: "1px solid var(--border)", background: "var(--surface)", transition: "border-color 0.2s,background 0.2s" }}
                  onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = "var(--border-hover)"; d.style.background = "var(--surface-hover)"; }}
                  onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = "var(--border)"; d.style.background = "var(--surface)"; }}
                >
                  <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: `${f.color}18`, border: `1px solid ${f.color}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}>
                    <Icon size={16} color={f.color} />
                  </div>
                  <h4 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#fff", marginBottom: "7px", letterSpacing: "-0.01em" }}>{f.title}</h4>
                  <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stack + CTA */}
        <div ref={cta.ref} style={{ textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={cta.inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }} style={{ marginBottom: "32px" }}>
            <p style={{ fontFamily: "monospace", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.28)", marginBottom: "16px" }}>Tech Stack</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center" }}>
              {stack.map(t => <span key={t} className="pill">{t}</span>)}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={cta.inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.1 }} style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
            <a href="https://github.com/Hima-MG/SkillLink" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: "0.9375rem", padding: "13px 22px" }}>
              <GithubIcon width={15} height={15} /> View on GitHub
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
