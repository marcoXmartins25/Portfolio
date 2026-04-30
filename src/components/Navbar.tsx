"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { name: "Sobre", href: "#about" },
  { name: "Experiência", href: "#experience" },
  { name: "Formação", href: "#education" },
  { name: "Projetos", href: "#projects" },
  { name: "Competências", href: "#skills" },
  { name: "Idiomas", href: "#soft-skills" },
  { name: "Contacto", href: "#contact" },
];

export function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    const observers = links.map(({ href }) => {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(href); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      return obs;
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observers.forEach((obs) => obs?.disconnect());
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050508]/90 backdrop-blur-xl border-b border-[var(--card-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-lg font-black tracking-tight">
          <span className="gradient-text">&lt;Marco</span>
          <span className="text-white"> /&gt;</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative px-3 py-1.5 text-sm rounded-lg transition-all duration-200 ${
                active === link.href
                  ? "text-[var(--accent)]"
                  : "text-[var(--muted)] hover:text-white"
              }`}
            >
              {active === link.href && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:flex px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-[#050508] text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Contactar
        </a>
      </div>
    </motion.nav>
  );
}
