"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";

const projects = [
  {
    title: "Nome do Projeto",
    description:
      "Descreve brevemente o projeto, qual problema resolve e as tecnologias utilizadas.",
    image: "/placeholder.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/seuusuario/projeto",
    live: "https://projeto.com",
  },
  {
    title: "Nome do Projeto",
    description:
      "Descreve brevemente o projeto, qual problema resolve e as tecnologias utilizadas.",
    image: "/placeholder.jpg",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/seuusuario/projeto",
    live: "https://projeto.com",
  },
  {
    title: "Nome do Projeto",
    description:
      "Descreve brevemente o projeto, qual problema resolve e as tecnologias utilizadas.",
    image: "/placeholder.jpg",
    tech: ["Python", "FastAPI", "PostgreSQL"],
    github: "https://github.com/seuusuario/projeto",
    live: "https://projeto.com",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="gradient-text">Projetos</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--accent)]/50 transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-[var(--accent)]/20 to-[var(--gradient-end)]/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-[var(--muted)] text-sm">
                    Imagem do Projeto
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-[var(--muted)] text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs rounded-full bg-[var(--accent)]/10 text-[var(--accent)]"
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
                      className="flex items-center gap-1 text-sm text-[var(--muted)] hover:text-white transition-colors"
                    >
                      <GithubIcon size={14} />
                      Código
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-[var(--muted)] hover:text-white transition-colors"
                    >
                      <ExternalLink size={14} />
                      Demo
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
