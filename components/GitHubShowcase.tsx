"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star, GitFork, ExternalLink, Clock } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { githubRepos } from "@/lib/data";

interface RepoData {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  html_url: string;
  language: string;
}

export default function GitHubShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [repoData, setRepoData] = useState<Record<string, RepoData>>({});

  useEffect(() => {
    const repos = ["SkillLink", "EMS_CRM", "carcare", "Civilezy"];
    repos.forEach(async (repo) => {
      try {
        const res = await fetch(`https://api.github.com/repos/Hima-MG/${repo}`);
        if (res.ok) {
          const data = await res.json();
          setRepoData((prev) => ({ ...prev, [repo]: data }));
        }
      } catch {
        // GitHub API unavailable; show static data
      }
    });
  }, []);

  const langColors: Record<string, string> = {
    Dart: "#3B82F6",
    TypeScript: "#8B5CF6",
    JavaScript: "#F59E0B",
    "": "#6B7280",
  };

  return (
    <section id="github" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <span className="text-xs font-mono text-blue-400 tracking-widest uppercase mb-4 block">
              07 — GitHub
            </span>
            <h2 className="text-4xl font-bold tracking-tight mb-2">Open Source</h2>
            <p className="text-white/50">Real code. Real commits. No portfolio theatre.</p>
          </div>
          <a
            href="https://github.com/Hima-MG"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/10 text-sm text-white/60 hover:text-white hover:border-white/20 transition-all self-start md:self-auto"
          >
            <GithubIcon width={16} height={16} />
            View Profile
            <ExternalLink size={13} />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {githubRepos.map((repo, i) => {
            const live = repoData[repo.name];
            const timeAgo = live?.updated_at
              ? (() => {
                  const d = new Date(live.updated_at);
                  const diff = Date.now() - d.getTime();
                  const days = Math.floor(diff / 86400000);
                  if (days === 0) return "today";
                  if (days === 1) return "yesterday";
                  if (days < 30) return `${days}d ago`;
                  const months = Math.floor(days / 30);
                  return `${months}mo ago`;
                })()
              : null;

            return (
              <motion.a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, borderColor: "rgba(59,130,246,0.3)" }}
                className="block p-5 rounded-2xl glass border border-white/[0.06] transition-all duration-200 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <GithubIcon width={16} height={16} className="text-white/40 group-hover:text-blue-400 transition-colors" />
                    <span className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {repo.name}
                    </span>
                  </div>
                  <ExternalLink size={14} className="text-white/20 group-hover:text-white/60 transition-colors" />
                </div>

                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {live?.description || repo.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-white/40">
                  {(live?.language || repo.tech[0]) && (
                    <span className="flex items-center gap-1.5">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ background: langColors[live?.language || repo.tech[0]] || "#6B7280" }}
                      />
                      {live?.language || repo.tech[0]}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star size={12} />
                    {live?.stargazers_count ?? 0}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={12} />
                    {live?.forks_count ?? 0}
                  </span>
                  {timeAgo && (
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {timeAgo}
                    </span>
                  )}
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
