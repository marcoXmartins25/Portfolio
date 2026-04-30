"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-8 px-6 border-t border-[var(--card-border)]"
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-[var(--muted)] text-sm">
          © {new Date().getFullYear()} O Teu Nome. Feito com Next.js e Tailwind
          CSS.
        </p>
      </div>
    </motion.footer>
  );
}
