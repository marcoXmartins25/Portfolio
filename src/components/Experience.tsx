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
      <div className="max-w-6xl mx-auto">
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
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent-2)] to-transparent md:left-1/2" />

            <div className="space-y-10">
              {t.experience.items.map((exp, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative flex gap-8 md:gap-0 md:${isLeft ? "flex-row-reverse" : "flex-row"}`}
                  >
                    <div className="hidden md:block flex-1" />
                    <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[var(--background)] border-2 border-[var(--accent)] flex items-center justify-center z-10 shadow-[0_0_20px_-5px_var(--accent)]">
                      <Briefcase size={14} className="text-[var(--accent)]" />
                    </div>
                    <div className="flex-1 ml-14 md:ml-0 md:px-8">
                      <motion.div
                        whileHover={{ y: -3 }}
                        className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--accent)]/40 transition-all duration-300 hover:shadow-[0_0_30px_-15px_var(--accent)]"
                      >
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <h3 className="text-lg font-bold">{exp.title}</h3>
                            <p className="text-[var(--muted)] text-sm">{exp.company}</p>
                          </div>
                          <span className="text-xs font-mono text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1 rounded-full whitespace-nowrap border border-[var(--accent)]/20">
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
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
