"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--accent)]/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[var(--gradient-end)]/20 rounded-full blur-[128px]" />

      <div className="text-center relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[var(--muted)] text-lg mb-4">Olá, eu sou</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">O Teu Nome</span>
          </h1>
          <p className="text-xl md:text-2xl text-[var(--muted)] max-w-2xl mx-auto mb-8">
            Programador Full Stack apaixonado por criar experiências digitais
            incríveis
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center gap-4 mb-12"
        >
          <SocialLink
            href="https://github.com/seuusuario"
            icon={<GithubIcon size={20} />}
            label="GitHub"
          />
          <SocialLink
            href="https://linkedin.com/in/seuusuario"
            icon={<LinkedinIcon size={20} />}
            label="LinkedIn"
          />
          <SocialLink
            href="mailto:seuemail@email.com"
            icon={<Mail size={20} />}
            label="Email"
          />
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="inline-flex flex-col items-center text-[var(--muted)] hover:text-white transition-colors"
        >
          <span className="text-sm mb-2">Saber mais</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--muted)] hover:text-white hover:border-[var(--accent)] hover:shadow-[0_0_20px_-5px_var(--accent)] transition-all duration-300"
    >
      {icon}
    </a>
  );
}
