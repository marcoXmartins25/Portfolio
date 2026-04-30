"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Star } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";

const projects = [
  {
    title: "Plataforma SaaS Gestão de Laboratórios",
    description:
      "Plataforma SaaS multi-tenant para gestão de laboratórios e equipamentos, com foco na organização de aulas e otimização de recursos. Coordenação de equipa e definição de prioridades.",
    tech: ["React", "PHP", "MySQL", "PostgreSQL", "APIs REST"],
    github: "https://github.com/marcoXmartins25",
    live: "#",
    accent: "#00d4ff",
    label: "SaaS",
  },
  {
    title: "Plataforma SaaS RGPD / RGPC",
    description:
      "Plataforma multi-tenant para gestão de documentos RGPD e RGPC, com sistema de e-mails dinâmico por cliente (SMTP) e auditoria compatível com RGPD.",
    tech: ["React", "PHP", "MySQL", "PostgreSQL", "APIs REST"],
    github: "https://github.com/marcoXmartins25",
    live: "#",
    accent: "#7c3aed",
    label: "Compliance",
  },
  {
    title: "SprintBase",
    description:
      "Aplicação full-stack para gestão de sprints de desenvolvimento. Cria sprints, gere tarefas com prioridades e exporta relatórios PDF. Projeto open source com licença MIT.",
    tech: ["Node.js", "React", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/marcoXmartins25",
    live: "#",
    accent: "#10b981",
    label: "Open Source",
    featured: true,
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[var(--accent)]/30" />
            <h2 className="text-3xl md:text-4xl font-black">
              <span className="gradient-text">Projetos</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[var(--accent)]/30" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] overflow-hidden transition-all duration-300"
                style={{
                  ["--project-accent" as string]: project.accent,
                }}
              >
                {/* Glow border on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: `inset 0 0 0 1px ${project.accent}40, 0 0 40px -15px ${project.accent}` }}
                />

                {/* Top accent bar */}
                <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }} />

                {/* Header */}
                <div
                  className="h-36 flex items-center justify-center relative overflow-hidden"
                  style={{ background: `radial-gradient(ellipse at center, ${project.accent}15 0%, transparent 70%)` }}
                >
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `linear-gradient(${project.accent}20 1px, transparent 1px), linear-gradient(90deg, ${project.accent}20 1px, transparent 1px)`,
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <div className="relative z-10 flex items-center gap-3">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold border"
                      style={{ color: project.accent, borderColor: `${project.accent}40`, background: `${project.accent}10` }}
                    >
                      {project.label}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border border-yellow-500/30 bg-yellow-500/10 text-yellow-400">
                        <Star size={10} fill="currentColor" /> Destaque
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[var(--muted)] text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs rounded-md font-mono"
                        style={{ color: project.accent, background: `${project.accent}10`, border: `1px solid ${project.accent}20` }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4 border-t border-[var(--card-border)]">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-white transition-colors"
                    >
                      <GithubIcon size={14} /> Código
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-white transition-colors"
                    >
                      <ExternalLink size={14} /> Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
