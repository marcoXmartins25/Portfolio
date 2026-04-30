"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/context/LangContext";

export function SoftSkills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();

  return (
    <section id="soft-skills" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[var(--accent)]/30" />
            <h2 className="text-3xl md:text-4xl font-black">
              <span className="gradient-text">{t.softSkills.title}</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[var(--accent)]/30" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm font-semibold text-[var(--muted)] uppercase tracking-widest mb-6">
                {t.softSkills.softLabel}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {t.softSkills.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    whileHover={{ scale: 1.03 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--accent)]/30 transition-all duration-300 cursor-default"
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-sm font-medium text-[var(--muted)]">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[var(--muted)] uppercase tracking-widest mb-6">
                {t.softSkills.langLabel}
              </h3>
              <div className="space-y-6">
                {t.softSkills.languages.map((lang, i) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">{lang.name}</span>
                      <span className="text-sm font-mono" style={{ color: lang.color }}>{lang.level}</span>
                    </div>
                    <div className="h-2 rounded-full bg-[var(--card-border)] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${lang.percent}%` } : {}}
                        transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${lang.color}, ${lang.color}80)` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
