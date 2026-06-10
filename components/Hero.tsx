"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 20 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.6, delay },
});

const fadeIn = (delay = 0) => ({
  initial:    { opacity: 0 },
  animate:    { opacity: 1 },
  transition: { duration: 0.55, delay },
});

/* ── SkillLink app screen ─────────────────── */
function AppScreen() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#0D1117", display: "flex", flexDirection: "column", fontFamily: "Inter,system-ui,sans-serif", overflow: "hidden" }}>
      {/* Status bar */}
      <div style={{ padding: "10px 18px 4px", display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0 }}>
        <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.7)", fontWeight: 700 }}>9:41</span>
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          {[3, 5, 7, 9].map((h, i) => (
            <div key={i} style={{ width: "3px", height: `${h}px`, background: i === 3 ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.4)", borderRadius: "1px" }} />
          ))}
          <div style={{ marginLeft: "3px", width: "20px", height: "10px", border: "1.5px solid rgba(255,255,255,0.45)", borderRadius: "3px", position: "relative", display: "flex", alignItems: "center", padding: "1px" }}>
            <div style={{ width: "65%", height: "100%", background: "#10B981", borderRadius: "1px" }} />
          </div>
        </div>
      </div>
      {/* Header */}
      <div style={{ padding: "8px 18px 10px", display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0 }}>
        <div>
          <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", marginBottom: "1px" }}>Good morning 👋</div>
          <div style={{ fontSize: "18px", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>SkillLink</div>
        </div>
        <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "linear-gradient(135deg,#3B82F6,#8B5CF6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 800, color: "#fff" }}>H</div>
      </div>
      {/* Search */}
      <div style={{ margin: "0 16px 12px", padding: "9px 13px", background: "rgba(255,255,255,0.05)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.07)", flexShrink: 0 }}>
        <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.22)" }}>🔍 Search courses, teachers…</span>
      </div>
      {/* Categories */}
      <div style={{ paddingLeft: "16px", display: "flex", gap: "7px", marginBottom: "14px", flexShrink: 0, overflow: "hidden" }}>
        {["All", "Flutter", "Firebase", "UI/UX"].map((c, i) => (
          <div key={c} style={{ padding: "5px 11px", borderRadius: "999px", fontSize: "10px", fontWeight: 600, background: i === 0 ? "linear-gradient(135deg,#3B82F6,#8B5CF6)" : "rgba(255,255,255,0.07)", color: i === 0 ? "#fff" : "rgba(255,255,255,0.4)", whiteSpace: "nowrap", flexShrink: 0 }}>{c}</div>
        ))}
      </div>
      {/* Label */}
      <div style={{ padding: "0 16px 10px", display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0 }}>
        <span style={{ fontSize: "12px", fontWeight: 700, color: "#fff" }}>Trending Courses</span>
        <span style={{ fontSize: "10px", color: "#3B82F6", fontWeight: 600 }}>See all</span>
      </div>
      {/* Courses */}
      <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: "10px", flex: 1, overflow: "hidden" }}>
        {[
          { title: "Flutter Mastery", g1: "#3B82F6", g2: "#8B5CF6", icon: "📱", rating: "4.9", students: "1.2k" },
          { title: "Firebase Deep Dive", g1: "#10B981", g2: "#3B82F6", icon: "🔥", rating: "4.8", students: "834" },
        ].map(c => (
          <div key={c.title} style={{ borderRadius: "14px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)", flexShrink: 0 }}>
            <div style={{ height: "52px", background: `linear-gradient(135deg,${c.g1},${c.g2})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px" }}>{c.icon}</div>
            <div style={{ padding: "8px 11px" }}>
              <div style={{ fontSize: "11px", fontWeight: 700, color: "#fff", marginBottom: "3px" }}>{c.title}</div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.35)" }}>Arjun Dev</span>
                <span style={{ fontSize: "9px", color: "#F59E0B", fontWeight: 600 }}>★ {c.rating} <span style={{ color: "rgba(255,255,255,0.3)" }}>· {c.students}</span></span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Bottom nav */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-around", padding: "10px 0 18px", background: "rgba(0,0,0,0.5)", flexShrink: 0, marginTop: "auto" }}>
        {["🏠", "🔍", "💬", "🏆", "👤"].map((ic, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3px", opacity: i === 0 ? 1 : 0.35 }}>
            <span style={{ fontSize: "15px" }}>{ic}</span>
            {i === 0 && <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#3B82F6" }} />}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Phone mockup ─────────────────────────── */
function PhoneMockup() {
  return (
    <motion.div
      {...fadeIn(0.35)}
      style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      {/* Ambient glow */}
      <div aria-hidden style={{ position: "absolute", inset: "-60px", background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(59,130,246,0.12) 0%, rgba(139,92,246,0.07) 55%, transparent 75%)", pointerEvents: "none" }} />

      {/* Phone */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "relative", zIndex: 2 }}
      >
        <div style={{ width: "260px", height: "548px", borderRadius: "52px", border: "2px solid rgba(255,255,255,0.1)", overflow: "hidden", background: "#0D1117", position: "relative", boxShadow: "0 60px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)" }}>
          {/* Notch */}
          <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "72px", height: "22px", background: "#050505", borderRadius: "0 0 14px 14px", zIndex: 10 }} />
          {/* Side buttons */}
          <div style={{ position: "absolute", right: "-5px", top: "112px", width: "4px", height: "54px", background: "rgba(255,255,255,0.07)", borderRadius: "3px" }} />
          <div style={{ position: "absolute", left: "-5px", top: "100px", width: "4px", height: "30px", background: "rgba(255,255,255,0.07)", borderRadius: "3px" }} />
          <div style={{ position: "absolute", left: "-5px", top: "140px", width: "4px", height: "48px", background: "rgba(255,255,255,0.07)", borderRadius: "3px" }} />
          <AppScreen />
        </div>
      </motion.div>

      {/* App label */}
      <motion.div
        {...fadeIn(0.9)}
        style={{ position: "absolute", bottom: "-32px", left: "50%", transform: "translateX(-50%)", whiteSpace: "nowrap" }}
      >
        <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", padding: "5px 14px", borderRadius: "999px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.38)", letterSpacing: "0.02em" }}>
          <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#3B82F6", display: "inline-block" }} />
          SkillLink — Flutter App
        </span>
      </motion.div>
    </motion.div>
  );
}

/* ── Hero ─────────────────────────────────── */
export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section style={{ position: "relative", minHeight: "100svh", display: "flex", alignItems: "center", background: "#050505", overflow: "hidden", paddingTop: "100px", paddingBottom: "80px" }}>

      {/* Background grid */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-15%", left: "30%", width: "60%", height: "80%", background: "radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "-10%", right: "-5%", width: "45%", height: "60%", background: "radial-gradient(ellipse, rgba(139,92,246,0.06) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.024) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="hero-grid">

          {/* ── LEFT: text ── */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>

            {/* Badge */}
            <motion.div {...fadeIn(0)}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 16px", borderRadius: "999px", fontSize: "11px", fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase" as const, background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.22)", color: "#3B82F6", marginBottom: "28px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#3B82F6", boxShadow: "0 0 8px rgba(59,130,246,0.8)", display: "inline-block", flexShrink: 0, animation: "pulse-dot 2s ease-in-out infinite" }} />
                Open to Flutter Developer Roles
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 {...fadeUp(0.07)} style={{ fontSize: "clamp(42px, 6vw, 76px)", fontWeight: 900, letterSpacing: "-0.035em", lineHeight: 1.02, color: "#fff", marginBottom: "16px" }}>
              Hima MG
            </motion.h1>

            {/* Role */}
            <motion.p {...fadeUp(0.13)} style={{ fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.3, marginBottom: "24px" }}>
              <span style={{ background: "linear-gradient(135deg,#3B82F6 0%,#8B5CF6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Flutter Developer</span>
              {" & Web Developer"}
            </motion.p>

            {/* Description */}
            <motion.p {...fadeUp(0.19)} style={{ fontSize: "clamp(1rem, 1.2vw, 1.0625rem)", color: "rgba(255,255,255,0.5)", lineHeight: 1.72, maxWidth: "480px", marginBottom: "12px" }}>
              Building mobile and web products using Flutter, Firebase, Next.js, and modern technologies.
            </motion.p>
            <motion.p {...fadeUp(0.23)} style={{ fontSize: "clamp(0.9375rem, 1.1vw, 1rem)", color: "rgba(255,255,255,0.32)", lineHeight: 1.65, maxWidth: "420px", marginBottom: "44px" }}>
              Currently IT Head at{" "}
              <span style={{ color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>Wincentre</span>
              , Thrissur, Kerala.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.29)} style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <button onClick={() => scrollTo("featured")} className="btn-primary" style={{ fontSize: "0.9375rem", padding: "14px 26px" }}>
                View Projects <ArrowRight size={15} />
              </button>
              <a href="/resume.pdf" download="Hima_MG_Resume.pdf" className="btn-secondary" style={{ fontSize: "0.9375rem", padding: "13px 22px" }}>
                <Download size={15} /> Resume
              </a>
              <a href="mailto:himaammu656@gmail.com" className="btn-secondary" style={{ fontSize: "0.9375rem", padding: "13px 22px" }}>
                <Mail size={15} /> Contact
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT: phone ── */}
          <div className="hero-phone" style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingBottom: "40px" }}>
            <PhoneMockup />
          </div>

        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px, 6vw, 80px);
          align-items: center;
          min-height: calc(100svh - 180px);
        }
        .hero-phone { display: flex; }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; text-align: center; }
          .hero-grid > div:first-child { align-items: center; }
          .hero-grid > div:first-child > div { justify-content: center; }
          .hero-phone { display: none; }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
