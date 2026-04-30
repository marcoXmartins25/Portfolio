"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Python", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "APIs REST", level: 85 },
    ],
  },
  {
    name: "Ferramentas",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 65 },
      { name: "Figma", level: 70 },
      { name: "VS Code", level: 95 },
    ],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="gradient-text">Competências</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--accent)]/50 transition-colors duration-300"
              >
                <h3 className="text-lg font-bold mb-6">{category.name}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      delay={catIndex * 0.1 + skillIndex * 0.05}
                      isInView={isInView}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillBar({
  skill,
  delay,
  isInView,
}: {
  skill: { name: string; level: number };
  delay: number;
  isInView: boolean;
}) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm text-[var(--muted)]">{skill.name}</span>
        <span className="text-sm text-[var(--accent)]">{skill.level}%</span>
      </div>
      <div className="h-2 rounded-full bg-[var(--card-border)] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]"
        />
      </div>
    </div>
  );
}
