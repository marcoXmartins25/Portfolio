"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export function Navbar() {
  const links = [
    { name: "Sobre", href: "#about" },
    { name: "Experiência", href: "#experience" },
    { name: "Formação", href: "#education" },
    { name: "Projetos", href: "#projects" },
    { name: "Competências", href: "#skills" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
        >
          &lt;O Teu Nome /&gt;
        </a>
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-[var(--muted)] hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent)] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
