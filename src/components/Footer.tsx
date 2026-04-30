"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LangContext";

export function Footer() {
  const { t } = useLang();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-10 px-6"
    >
      <div className="section-divider mb-8" />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <a href="#" className="text-lg font-black">
          <span className="gradient-text">&lt;Marco</span>
          <span className="text-white"> /&gt;</span>
        </a>
        <p className="text-[var(--muted)] text-sm">
          © {new Date().getFullYear()} Marco Martins · {t.footer.madeWith}{" "}
          <span className="text-[var(--accent)]">Next.js</span> {t.footer.and}{" "}
          <span className="text-[var(--accent-2)]">Tailwind CSS</span>
        </p>
        <a href="#" className="text-xs text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
          {t.hero.scroll} ↑
        </a>
      </div>
    </motion.footer>
  );
}
