"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/lib/data";

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-mono text-blue-400 tracking-widest uppercase mb-4 block">
            06 — Certifications
          </span>
          <h2 className="text-4xl font-bold tracking-tight mb-4">Credentials</h2>
          <p className="text-white/50 max-w-md mx-auto">
            Verified skills and completed programs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="relative p-6 rounded-2xl border overflow-hidden group cursor-default"
              style={{
                background: `linear-gradient(135deg, ${cert.color}08, rgba(0,0,0,0.4))`,
                borderColor: `${cert.color}25`,
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${cert.color}60, transparent)` }}
              />
              <div
                className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-5 group-hover:opacity-10 transition-opacity"
                style={{ background: cert.color }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
                  >
                    {cert.icon}
                  </div>
                  <Award size={16} style={{ color: cert.color }} className="opacity-60" />
                </div>

                <div
                  className="text-xs font-medium px-2 py-0.5 rounded-full inline-block mb-2"
                  style={{ background: `${cert.color}15`, color: cert.color }}
                >
                  {cert.type}
                </div>

                <h3 className="font-bold text-white text-lg mb-1">{cert.title}</h3>
                <p className="text-white/40 text-sm mb-3">{cert.issuer}</p>
                <p className="text-white/50 text-xs leading-relaxed">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
