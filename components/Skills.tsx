"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */
const primaryStack = [
  {
    name: "Flutter",
    category: "Mobile Framework",
    tagline: "Builds iOS, Android & Web from a single codebase.",
    initial: "F",
    isEmoji: false,
    color: "#54C5F8",
    glow: "rgba(84,197,248,0.16)",
    glowHover: "rgba(84,197,248,0.28)",
    border: "rgba(84,197,248,0.14)",
    borderHover: "rgba(84,197,248,0.5)",
    bg: "rgba(84,197,248,0.025)",
    bgHover: "rgba(84,197,248,0.065)",
  },
  {
    name: "Firebase",
    category: "Backend & Cloud",
    tagline: "Real-time data, auth, and cloud functions.",
    initial: "🔥",
    isEmoji: true,
    color: "#FF8A00",
    glow: "rgba(255,138,0,0.14)",
    glowHover: "rgba(255,138,0,0.26)",
    border: "rgba(255,138,0,0.14)",
    borderHover: "rgba(255,138,0,0.5)",
    bg: "rgba(255,138,0,0.025)",
    bgHover: "rgba(255,138,0,0.065)",
  },
  {
    name: "Dart",
    category: "Language",
    tagline: "Typed, null-safe and expressive. The language of Flutter.",
    initial: "D",
    isEmoji: false,
    color: "#0EA5E9",
    glow: "rgba(14,165,233,0.14)",
    glowHover: "rgba(14,165,233,0.26)",
    border: "rgba(14,165,233,0.14)",
    borderHover: "rgba(14,165,233,0.5)",
    bg: "rgba(14,165,233,0.025)",
    bgHover: "rgba(14,165,233,0.065)",
  },
  {
    name: "Next.js",
    category: "Web Framework",
    tagline: "Production-grade web platforms and portfolios.",
    initial: "N",
    isEmoji: false,
    color: "#E5E5E5",
    glow: "rgba(229,229,229,0.08)",
    glowHover: "rgba(229,229,229,0.14)",
    border: "rgba(255,255,255,0.1)",
    borderHover: "rgba(255,255,255,0.28)",
    bg: "rgba(255,255,255,0.02)",
    bgHover: "rgba(255,255,255,0.05)",
  },
];

const secondaryGroups: Array<{
  label: string;
  accent: string;
  accentBg: string;
  items: Array<{ name: string; tag?: string }>;
}> = [
  {
    label: "Backend & Database",
    accent: "#8B5CF6",
    accentBg: "rgba(139,92,246,0.08)",
    items: [
      { name: "Supabase" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Firestore" },
    ],
  },
  {
    label: "Development",
    accent: "#3B82F6",
    accentBg: "rgba(59,130,246,0.08)",
    items: [
      { name: "REST APIs" },
      { name: "Git" },
      { name: "GitHub" },
    ],
  },
  {
    label: "Emerging",
    accent: "#10B981",
    accentBg: "rgba(16,185,129,0.08)",
    items: [
      { name: "Machine Learning", tag: "Basics" },
      { name: "Artificial Intelligence", tag: "Basics" },
      { name: "Robotics", tag: "Basics" },
    ],
  },
];

/* ─────────────────────────────────────────────────────────────
   PRIMARY CARD
───────────────────────────────────────────────────────────── */
function PrimaryCard({
  tech,
  delay,
  inView,
}: {
  tech: typeof primaryStack[0];
  delay: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: "var(--radius-xl)",
        border: `1px solid ${hovered ? tech.borderHover : tech.border}`,
        background: hovered ? tech.bgHover : tech.bg,
        padding: "clamp(28px, 3.5vw, 44px)",
        overflow: "hidden",
        cursor: "default",
        boxShadow: hovered
          ? `0 32px 80px ${tech.glow}, 0 0 0 1px ${tech.borderHover}`
          : `0 0 0 0 transparent`,
        transition: "border-color 0.35s ease, background 0.35s ease, box-shadow 0.35s ease",
      }}
    >
      {/* Corner ambient glow */}
      <div
        aria-hidden
        style={{
          position: "absolute", top: "-20%", right: "-10%",
          width: "220px", height: "220px",
          background: `radial-gradient(ellipse, ${hovered ? tech.glowHover : tech.glow} 0%, transparent 68%)`,
          pointerEvents: "none",
          transition: "background 0.4s ease",
        }}
      />

      {/* Animated sweep line — slides in from left on hover */}
      <div
        aria-hidden
        style={{
          position: "absolute", top: 0, left: 0, height: "1px",
          width: hovered ? "100%" : "0%",
          background: `linear-gradient(90deg, transparent 0%, ${tech.color} 40%, ${tech.color} 60%, transparent 100%)`,
          transition: "width 0.5s cubic-bezier(0.4,0,0.2,1)",
        }}
      />

      {/* Bottom-right subtle corner accent */}
      <div
        aria-hidden
        style={{
          position: "absolute", bottom: 0, right: 0,
          width: "60px", height: "60px",
          background: `radial-gradient(ellipse at 100% 100%, ${tech.glow} 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
        }}
      />

      {/* Badge */}
      <div
        style={{
          width: "52px", height: "52px",
          borderRadius: "16px",
          background: `${tech.color}18`,
          border: `1px solid ${hovered ? tech.color + "40" : tech.color + "22"}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: "28px", flexShrink: 0,
          transition: "border-color 0.3s, background 0.3s",
        }}
      >
        {tech.isEmoji ? (
          <span style={{ fontSize: "24px" }}>{tech.initial}</span>
        ) : (
          <span style={{
            fontSize: "22px", fontWeight: 900,
            color: tech.color, fontFamily: "monospace",
            letterSpacing: "-0.03em",
          }}>
            {tech.initial}
          </span>
        )}
      </div>

      {/* Category label */}
      <p style={{
        fontFamily: "monospace",
        fontSize: "0.64rem",
        fontWeight: 600,
        letterSpacing: "0.13em",
        textTransform: "uppercase" as const,
        color: `${tech.color}88`,
        marginBottom: "10px",
      }}>
        {tech.category}
      </p>

      {/* Tech name */}
      <h3 style={{
        fontSize: "clamp(26px, 2.6vw, 36px)",
        fontWeight: 800,
        color: "#fff",
        letterSpacing: "-0.03em",
        lineHeight: 1.05,
        marginBottom: "14px",
      }}>
        {tech.name}
      </h3>

      {/* Tagline */}
      <p style={{
        fontSize: "0.9rem",
        color: "rgba(255,255,255,0.42)",
        lineHeight: 1.68,
        maxWidth: "280px",
      }}>
        {tech.tagline}
      </p>

      {/* Hover arrow indicator */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -4 }}
        transition={{ duration: 0.2 }}
        style={{
          position: "absolute", bottom: "clamp(28px,3.5vw,44px)", right: "clamp(28px,3.5vw,44px)",
          color: tech.color, fontSize: "16px", fontWeight: 300,
          opacity: 0,
        }}
      >
        ↗
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECONDARY PILL
───────────────────────────────────────────────────────────── */
function SecondaryPill({
  name,
  tag,
  accent,
  delay,
  inView,
}: {
  name: string;
  tag?: string;
  accent: string;
  delay: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "7px",
        padding: "7px 14px",
        borderRadius: "999px",
        fontSize: "0.8125rem",
        fontWeight: 500,
        border: `1px solid ${hovered ? accent + "40" : "rgba(255,255,255,0.08)"}`,
        background: hovered ? accent + "12" : "rgba(255,255,255,0.03)",
        color: hovered ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.55)",
        cursor: "default",
        whiteSpace: "nowrap" as const,
        transition: "border-color 0.25s, background 0.25s, color 0.25s",
      }}
    >
      {name}
      {tag && (
        <span style={{
          fontSize: "0.6rem",
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase" as const,
          color: accent,
          padding: "2px 6px",
          borderRadius: "4px",
          background: accent + "18",
          fontFamily: "monospace",
        }}>
          {tag}
        </span>
      )}
    </motion.span>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION
───────────────────────────────────────────────────────────── */
export default function Skills() {
  const headerRef    = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  const cardsRef    = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-80px" });

  const secondaryRef    = useRef(null);
  const secondaryInView = useInView(secondaryRef, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      style={{
        background: "#0A0A0A",
        paddingTop: "var(--section-pt)",
        paddingBottom: "var(--section-pb)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Section-level ambient glow */}
      <div
        aria-hidden
        style={{
          position: "absolute", top: "10%", left: "50%",
          transform: "translateX(-50%)",
          width: "900px", height: "400px",
          background: "radial-gradient(ellipse, rgba(59,130,246,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* ── Section Header ── */}
        <div ref={headerRef} style={{ marginBottom: "clamp(56px, 7vw, 80px)", maxWidth: "640px" }}>
          <motion.p
            className="label"
            initial={{ opacity: 0, y: 8 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Stack
          </motion.p>
          <motion.h2
            className="heading-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.08 }}
            style={{ marginBottom: "18px" }}
          >
            What I Build With
          </motion.h2>
          <motion.p
            className="body-lg"
            initial={{ opacity: 0, y: 14 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.16 }}
            style={{ maxWidth: "520px" }}
          >
            A carefully chosen stack for building fast, scalable mobile and web products.
          </motion.p>
        </div>

        {/* ── Primary 2×2 Card Grid ── */}
        <div
          ref={cardsRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "clamp(12px, 1.5vw, 18px)",
            marginBottom: "clamp(56px, 7vw, 80px)",
            maxWidth: "960px",
          }}
          className="skills-primary-grid"
        >
          {primaryStack.map((tech, i) => (
            <PrimaryCard
              key={tech.name}
              tech={tech}
              delay={i * 0.1}
              inView={cardsInView}
            />
          ))}
        </div>

        {/* ── Divider ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={secondaryInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "clamp(40px,5vw,56px)" }}
          ref={secondaryRef}
        >
          <div style={{ height: "1px", flex: 1, background: "linear-gradient(to right, transparent, var(--border))" }} />
          <span style={{
            fontFamily: "monospace",
            fontSize: "0.65rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase" as const,
            color: "rgba(255,255,255,0.2)",
            whiteSpace: "nowrap",
          }}>
            Also in my toolkit
          </span>
          <div style={{ height: "1px", flex: 1, background: "linear-gradient(to left, transparent, var(--border))" }} />
        </motion.div>

        {/* ── Secondary Groups ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "clamp(24px, 3vw, 48px)",
            maxWidth: "960px",
          }}
          className="skills-secondary-grid"
        >
          {secondaryGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              animate={secondaryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + gi * 0.1 }}
            >
              {/* Group header */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                <div style={{
                  width: "6px", height: "6px", borderRadius: "50%",
                  background: group.accent,
                  boxShadow: `0 0 8px ${group.accent}88`,
                }} />
                <span style={{
                  fontFamily: "monospace",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase" as const,
                  color: "rgba(255,255,255,0.28)",
                }}>
                  {group.label}
                </span>
              </div>

              {/* Pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                {group.items.map((item, ii) => (
                  <SecondaryPill
                    key={item.name}
                    name={item.name}
                    tag={item.tag}
                    accent={group.accent}
                    delay={0.15 + gi * 0.1 + ii * 0.05}
                    inView={secondaryInView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Web stack note ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={secondaryInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          style={{ marginTop: "clamp(40px,5vw,56px)", display: "flex", alignItems: "center", gap: "12px", maxWidth: "960px" }}
        >
          <div style={{ height: "1px", flex: 1, background: "var(--border)" }} />
          <div style={{
            display: "flex", alignItems: "center", gap: "8px",
            padding: "8px 16px",
            borderRadius: "999px",
            border: "1px solid var(--border)",
            background: "var(--surface)",
          }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#3B82F6", boxShadow: "0 0 6px rgba(59,130,246,0.7)", display: "inline-block" }} />
            <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.38)", fontWeight: 500 }}>
              React.js
            </span>
            <span style={{
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
              color: "#3B82F6",
              padding: "2px 6px",
              borderRadius: "4px",
              background: "rgba(59,130,246,0.12)",
              fontFamily: "monospace",
            }}>
              Learning
            </span>
          </div>
          <div style={{ height: "1px", flex: 1, background: "var(--border)" }} />
        </motion.div>

      </div>

      <style>{`
        /* Mobile: stack primary grid to 1 col */
        @media (max-width: 640px) {
          .skills-primary-grid {
            grid-template-columns: 1fr !important;
          }
          .skills-secondary-grid {
            grid-template-columns: 1fr !important;
          }
        }
        /* Tablet: primary stays 2-col, secondary goes 1-col */
        @media (max-width: 767px) and (min-width: 641px) {
          .skills-secondary-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
