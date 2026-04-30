"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Star } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { useLang } from "@/context/LangContext";

const projectMeta = [
  { accent: "#00d4ff", github: "https://github.com/marcoXmartins25", live: "#" },
  { accent: "#7c3aed", github: "https://github.com/marcoXmartins25", live: "#" },
  { accent: "#10b981", github: "https://github.com/marcoXmartins25", live: "#", featured: true },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();

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
              <span className="gradient-text">{t.projects.title}</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[var(--accent)]/30" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.projects.items.map((project, index) => {
              const meta = projectMeta[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] overflow-hidden transition-all duration-300"
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ boxShadow: `inset 0 0 0 1px ${meta.accent}40, 0 0 40px -15px ${meta.accent}` }}
                  />
                  <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${meta.accent}, transparent)` }} />
                  <div
                    className="h-36 flex items-center justify-center relative overflow-hidden"
                    style={{ background: `radial-gradient(ellipse at center, ${meta.accent}15 0%, transparent 70%)` }}
                  >
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `linear-gradient(${meta.accent}20 1px, transparent 1px), linear-gradient(90deg, ${meta.accent}20 1px, transparent 1px)`,
                        backgroundSize: "20px 20px",
                      }}
                    />
                    <div className="relative z-10 flex items-center gap-3">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold border"
                        style={{ color: meta.accent, borderColor: `${meta.accent}40`, background: `${meta.accent}10` }}
                      >
                        {project.label}
                      </span>
                      {meta.featured && (
                        <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border border-yellow-500/30 bg-yellow-500/10 text-yellow-400">
                          <Star size={10} fill="currentColor" /> {t.projects.featured}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--foreground)] transition-colors">{project.title}</h3>
                    <p className="text-[var(--muted)] text-sm mb-4 leading-relaxed line-clamp-3">{project.description}</p>
                    <div className="flex gap-4 pt-4 border-t border-[var(--card-border)]">
                      <a href={meta.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                        <GithubIcon size={14} /> {t.projects.code}
                      </a>
                      <a href={meta.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                        <ExternalLink size={14} /> {t.projects.demo}
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
