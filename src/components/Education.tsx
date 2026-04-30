"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bacharelado em Ciência da Computação",
    institution: "Nome da Universidade",
    period: "2020 - 2024",
    description:
      "Descreve a tua formação académica, disciplinas relevantes, projetos académicos ou conquistas.",
  },
  {
    degree: "Curso / Certificação",
    institution: "Plataforma / Instituição",
    period: "2023",
    description:
      "Descreve brevemente o que aprendeste e como isso contribuiu para a tua formação.",
  },
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="gradient-text">Formação</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--accent)]/50 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--accent)]/20 transition-colors">
                  <GraduationCap size={24} className="text-[var(--accent)]" />
                </div>
                <span className="text-sm text-[var(--accent)] font-medium">
                  {edu.period}
                </span>
                <h3 className="text-xl font-bold mt-1">{edu.degree}</h3>
                <p className="text-[var(--muted)] mb-3">{edu.institution}</p>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
