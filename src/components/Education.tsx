"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";
import { useLang } from "@/context/LangContext";
import { SectionHeading } from "@/components/SectionHeading";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();

  return (
    <section id="education" className="py-20 md:py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading index={3} title={t.education.title} />

          <div className={t.education.items.length === 1 ? "max-w-2xl mx-auto" : "grid md:grid-cols-2 gap-8"}>
            {t.education.items.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--accent-2)]/50 transition-all duration-300 hover:shadow-[0_0_40px_-15px_var(--accent-2)] overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-2)]/5 rounded-full blur-2xl group-hover:bg-[var(--accent-2)]/10 transition-colors" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent-2)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--accent-2)]/20 transition-colors">
                    <GraduationCap size={24} className="text-[var(--accent-2)]" />
                  </div>
                  <span className="text-xs font-mono text-[var(--accent-2)] bg-[var(--accent-2)]/10 px-3 py-1 rounded-full border border-[var(--accent-2)]/20">
                    {edu.period}
                  </span>
                  <h3 className="text-xl font-bold mt-3 mb-1">{edu.degree}</h3>
                  <p className="text-[var(--muted)] text-sm mb-3">{edu.institution}</p>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
