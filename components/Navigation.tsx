"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { id: "skills",     label: "Stack"      },
  { id: "featured",   label: "SkillLink"  },
  { id: "projects",   label: "Projects"   },
  { id: "experience", label: "Experience" },
  { id: "contact",    label: "Contact"    },
];

export default function Navigation() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -56, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          display: "flex", justifyContent: "center",
          padding: "16px var(--container-px)",
        }}
      >
        <div style={{
          width: "100%", maxWidth: "var(--container-max)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "10px 22px", borderRadius: "var(--radius-lg)",
          background: scrolled ? "rgba(10,10,10,0.88)" : "transparent",
          border: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
          transition: "all 0.3s ease",
        }}>
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            <span style={{ fontWeight: 800, fontSize: "1rem", letterSpacing: "-0.025em", color: "#fff" }}>
              Hima{" "}
              <span style={{ background: "linear-gradient(135deg,#3B82F6,#8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>MG</span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav
            className="desktop-nav"
            style={{ display: "flex", alignItems: "center", gap: "2px", position: "absolute", left: "50%", transform: "translateX(-50%)" }}
          >
            {navLinks.map(l => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                style={{ background: "none", border: "none", cursor: "pointer", padding: "7px 14px", borderRadius: "var(--radius-sm)", fontSize: "0.875rem", fontWeight: 500, color: "rgba(255,255,255,0.5)", transition: "color 0.2s,background 0.2s" }}
                onMouseEnter={e => { const b = e.currentTarget; b.style.color = "#fff"; b.style.background = "rgba(255,255,255,0.06)"; }}
                onMouseLeave={e => { const b = e.currentTarget; b.style.color = "rgba(255,255,255,0.5)"; b.style.background = "none"; }}
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* Right */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <a
              href="mailto:himaammu656@gmail.com"
              className="btn-primary desktop-nav"
              style={{ padding: "8px 18px", fontSize: "0.8125rem", textDecoration: "none" }}
            >
              Hire Me
            </a>
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="mobile-menu-btn"
              style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", padding: "8px", cursor: "pointer", color: "rgba(255,255,255,0.65)", display: "flex", alignItems: "center", lineHeight: 0 }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            style={{ position: "fixed", top: "76px", left: "16px", right: "16px", zIndex: 40, borderRadius: "var(--radius-xl)", background: "rgba(12,12,12,0.97)", border: "1px solid var(--border)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", padding: "12px", boxShadow: "0 24px 64px rgba(0,0,0,0.7)" }}
          >
            {navLinks.map(l => (
              <button key={l.id} onClick={() => go(l.id)}
                style={{ width: "100%", background: "none", border: "none", cursor: "pointer", textAlign: "left", padding: "13px 16px", borderRadius: "var(--radius-md)", fontSize: "1rem", fontWeight: 500, color: "rgba(255,255,255,0.62)", display: "block", transition: "background 0.15s,color 0.15s" }}
                onMouseEnter={e => { const b = e.currentTarget; b.style.background = "var(--surface-hover)"; b.style.color = "#fff"; }}
                onMouseLeave={e => { const b = e.currentTarget; b.style.background = "none"; b.style.color = "rgba(255,255,255,0.62)"; }}
              >
                {l.label}
              </button>
            ))}
            <div className="divider" style={{ margin: "8px 0" }} />
            <a
              href="mailto:himaammu656@gmail.com"
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center", marginTop: "4px", textDecoration: "none", display: "flex" }}
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .desktop-nav  { display: flex !important; }
        .mobile-menu-btn { display: none !important; }
        @media (max-width: 767px) {
          .desktop-nav      { display: none !important; }
          .mobile-menu-btn  { display: flex !important; }
        }
      `}</style>
    </>
  );
}
