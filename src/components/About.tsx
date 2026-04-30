"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="gradient-text">Sobre Mim</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 text-[var(--muted)] leading-relaxed">
              <p>
                Sou um programador com paixão por tecnologia e inovação.
                Trabalho com desenvolvimento web há X anos, criando soluções
                que combinam design elegante com código eficiente.
              </p>
              <p>
                A minha jornada na programação começou quando [conta a tua
                história]. Desde então, tenho-me dedicado a aprender novas
                tecnologias e a aprimorar as minhas competências.
              </p>
              <p>
                Quando não estou a programar, podes encontrar-me [os teus hobbies
                e interesses].
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <StatCard number="X+" label="Anos de Experiência" />
              <StatCard number="X+" label="Projetos Concluídos" />
              <StatCard number="X+" label="Tecnologias" />
              <StatCard number="X+" label="Clientes Satisfeitos" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex-1 min-w-[140px] p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--accent)]/50 transition-colors duration-300">
      <p className="text-3xl font-bold gradient-text">{number}</p>
      <p className="text-sm text-[var(--muted)] mt-1">{label}</p>
    </div>
  );
}
