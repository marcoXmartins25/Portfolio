"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";
import { useLang } from "@/context/LangContext";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();

  return (
    <section id="experience" className="py-28 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[var(--accent)]/30" />
            <h2 className="text-3xl md:text-4xl font-black">
              <span className="gradient-text">{t.experience.title}</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[var(--accent)]/30" />
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent-2)] to-transparent" />

            <div className="space-y-8">
              {t.experience.items.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-16"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-6 w-10 h-10 rounded-full bg-[var(--background)] border-2 border-[var(--accent)] flex items-center justify-center shadow-[0_0_20px_-5px_var(--accent)]">
                    <Briefcase size={14} className="text-[var(--accent)]" />
                  </div>

                  <motion.div
                    whileHover={{ y: -3 }}
                    className="p-5 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--accent)]/40 transition-all duration-300 hover:shadow-[0_0_30px_-15px_var(--accent)]"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                      <div>
                        <h3 className="text-base font-bold">{exp.title}</h3>
                        <p className="text-[var(--muted)] text-sm">{exp.company}</p>
                      </div>
                      <span className="text-xs font-mono text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1 rounded-full border border-[var(--accent)]/20 self-start shrink-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="px-2 py-1 text-xs rounded-md font-mono bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
