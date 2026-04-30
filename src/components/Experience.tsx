"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Cargo / Posição",
    company: "Nome da Empresa",
    period: "Jan 2024 - Presente",
    description:
      "Descreve as tuas principais responsabilidades e conquistas nesta posição. Menciona as tecnologias utilizadas e os resultados alcançados.",
    tech: ["React", "TypeScript", "Node.js"],
  },
  {
    title: "Cargo / Posição",
    company: "Nome da Empresa",
    period: "Mar 2022 - Dez 2023",
    description:
      "Descreve as tuas principais responsabilidades e conquistas nesta posição. Menciona as tecnologias utilizadas e os resultados alcançados.",
    tech: ["Next.js", "Tailwind CSS", "PostgreSQL"],
  },
  {
    title: "Cargo / Posição",
    company: "Nome da Empresa",
    period: "Jun 2021 - Fev 2022",
    description:
      "Descreve as tuas principais responsabilidades e conquistas nesta posição. Menciona as tecnologias utilizadas e os resultados alcançados.",
    tech: ["JavaScript", "React", "Firebase"],
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="gradient-text">Experiência</span>
          </h2>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] to-transparent" />
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
        isLeft ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="flex-1 md:text-right" />
      <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[var(--card-bg)] border-2 border-[var(--accent)] flex items-center justify-center z-10">
        <Briefcase size={16} className="text-[var(--accent)]" />
      </div>
      <div className="flex-1">
        <div className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--accent)]/50 transition-colors duration-300">
          <span className="text-sm text-[var(--accent)] font-medium">
            {exp.period}
          </span>
          <h3 className="text-xl font-bold mt-1">{exp.title}</h3>
          <p className="text-[var(--muted)] mb-3">{exp.company}</p>
          <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
            {exp.description}
          </p>
          <div
            className={`flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : ""}`}
          >
            {exp.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
