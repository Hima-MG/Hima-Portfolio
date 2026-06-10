"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Command, Search, Mail, FileText, Code2, User, Briefcase, X, Link2 } from "lucide-react";
import { GithubIcon } from "@/components/icons";

const commands = [
  { id: "projects", label: "View Projects", icon: Code2, action: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }), shortcut: "P" },
  { id: "experience", label: "Experience", icon: Briefcase, action: () => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }), shortcut: "E" },
  { id: "story", label: "My Story", icon: User, action: () => document.getElementById("story")?.scrollIntoView({ behavior: "smooth" }), shortcut: "S" },
  { id: "contact", label: "Contact Me", icon: Mail, action: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), shortcut: "C" },
  { id: "resume", label: "Download Resume", icon: FileText, action: () => { const a = document.createElement("a"); a.href = "/resume.pdf"; a.download = "Hima_MG_Resume.pdf"; a.click(); }, shortcut: "R" },
  { id: "github", label: "GitHub Profile", icon: GithubIcon, action: () => window.open("https://github.com/Hima-MG", "_blank"), shortcut: null },
  { id: "linkedin", label: "LinkedIn Profile", icon: Link2, action: () => window.open("https://www.linkedin.com/in/hima-m-g-954878259", "_blank"), shortcut: null },
  { id: "email", label: "Send Email", icon: Mail, action: () => window.open("mailto:himaammu656@gmail.com"), shortcut: null },
];

export default function CommandMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (cmd: typeof commands[number]) => {
    cmd.action();
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 z-50 w-full max-w-lg mx-4"
            style={{ width: "min(90vw, 480px)" }}
          >
            <div
              className="rounded-2xl overflow-hidden shadow-2xl shadow-black/60"
              style={{
                background: "rgba(17,17,17,0.95)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(24px)",
              }}
            >
              <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06]">
                <Search size={16} className="text-white/30 flex-shrink-0" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type a command..."
                  className="flex-1 bg-transparent text-white placeholder-white/30 text-sm outline-none"
                />
                <button onClick={onClose} className="p-1 rounded-lg text-white/30 hover:text-white transition-colors">
                  <X size={14} />
                </button>
              </div>

              <div className="p-2 max-h-72 overflow-y-auto">
                {filtered.length === 0 ? (
                  <p className="text-center text-white/30 text-sm py-8">No results found</p>
                ) : (
                  filtered.map((cmd) => {
                    const Icon = cmd.icon;
                    return (
                      <button
                        key={cmd.id}
                        onClick={() => handleSelect(cmd)}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all group"
                      >
                        <div className="w-8 h-8 rounded-lg glass flex items-center justify-center text-white/40 group-hover:text-blue-400 transition-colors flex-shrink-0">
                          <Icon width={15} height={15} />
                        </div>
                        <span className="flex-1">{cmd.label}</span>
                        {cmd.shortcut && (
                          <kbd className="text-xs px-1.5 py-0.5 rounded bg-white/5 text-white/30 font-mono border border-white/10">
                            {cmd.shortcut}
                          </kbd>
                        )}
                      </button>
                    );
                  })
                )}
              </div>

              <div className="px-4 py-2.5 border-t border-white/[0.06] flex items-center gap-3 text-xs text-white/25">
                <span className="flex items-center gap-1">
                  <Command size={11} /> K to open
                </span>
                <span>·</span>
                <span>↑↓ to navigate</span>
                <span>·</span>
                <span>↵ to select</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
