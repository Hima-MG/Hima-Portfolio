import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Hima MG`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const sections = [
    { label: "Problem", content: project.problem },
    { label: "Solution", content: project.solution },
    { label: "Architecture", content: project.architecture },
    { label: "Challenges", content: project.challenges },
    { label: "Results", content: project.results },
  ];

  return (
    <main className="min-h-screen" style={{ background: "#0A0A0A", color: "#FFFFFF" }}>
      <div
        className="fixed inset-0 pointer-events-none -z-10"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% -20%, ${project.color}15 0%, transparent 60%)`,
        }}
      />

      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-xs font-medium px-3 py-1 rounded-full"
              style={{ background: `${project.color}20`, color: project.color, border: `1px solid ${project.color}40` }}
            >
              {project.tag}
            </span>
            <span className="text-xs text-white/30 font-mono">Case Study</span>
          </div>

          <h1 className="text-5xl font-black tracking-tight mb-4">{project.title}</h1>
          <p className="text-white/60 text-lg leading-relaxed mb-6">{project.longDescription}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-sm px-3 py-1.5 rounded-xl font-medium"
                style={{ background: `${project.color}10`, color: project.color, border: `1px solid ${project.color}30` }}
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white/70 hover:text-white transition-all"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <GithubIcon width={16} height={16} />
              View on GitHub
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        <div
          className="h-px w-full mb-10"
          style={{ background: `linear-gradient(90deg, ${project.color}40, transparent)` }}
        />

        <div className="mb-10">
          <h2 className="text-sm font-mono text-white/40 uppercase tracking-widest mb-4">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.features.map((f) => (
              <div
                key={f}
                className="flex items-center gap-3 p-4 rounded-xl"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: project.color }} />
                <span className="text-white/70 text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {sections.map((s, i) => (
            <div key={s.label}>
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="text-xs font-mono font-bold px-2 py-0.5 rounded"
                  style={{ background: `${project.color}20`, color: project.color }}
                >
                  0{i + 1}
                </span>
                <h2 className="text-xl font-bold text-white">{s.label}</h2>
              </div>
              <p className="text-white/60 leading-relaxed pl-8">{s.content}</p>
            </div>
          ))}
        </div>

        <div
          className="mt-16 p-6 rounded-2xl text-center"
          style={{
            background: `linear-gradient(135deg, ${project.color}08, rgba(139,92,246,0.05))`,
            border: `1px solid ${project.color}20`,
          }}
        >
          <p className="text-white/50 mb-4">Interested in working together?</p>
          <a
            href="mailto:himaammu656@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ background: `linear-gradient(135deg, ${project.color}, #8B5CF6)` }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </main>
  );
}
