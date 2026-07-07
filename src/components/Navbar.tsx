"use client";

import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useLang } from "@/context/LangContext";
import { useTheme } from "@/context/ThemeContext";

export function Navbar() {
  const { t, lang, toggle } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const links = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.education, href: "#education" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.softSkills, href: "#soft-skills" },
    { name: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    const ids = ["about", "experience", "education", "projects", "skills", "soft-skills", "contact"];
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(`#${id}`); },
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

  // close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[var(--card-bg)] focus:border focus:border-[var(--accent)] focus:text-[var(--foreground)] focus:text-sm"
      >
        {t.nav.skip}
      </a>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-[var(--nav-bg)] backdrop-blur-xl border-b border-[var(--card-border)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-lg font-black tracking-tight">
            <span className="gradient-text">&lt;Marco</span>
            <span className="text-[var(--foreground)]"> /&gt;</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 text-sm rounded-lg transition-all duration-200 ${
                  active === link.href
                    ? "text-[var(--accent)]"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
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

          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-[var(--card-border)] text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/40 transition-all duration-200"
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Language toggle */}
            <button
              onClick={toggle}
              aria-label={lang === "pt" ? "Switch to English" : "Mudar para Português"}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--card-border)] text-sm font-mono text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--accent)]/40 transition-all duration-200"
            >
              <span className={lang === "pt" ? "text-[var(--accent)]" : "text-[var(--muted)]"}>PT</span>
              <span className="opacity-30">|</span>
              <span className={lang === "en" ? "text-[var(--accent)]" : "text-[var(--muted)]"}>EN</span>
            </button>

            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden md:flex px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              {t.nav.cta}
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-[var(--card-border)] text-[var(--muted)] hover:text-[var(--accent)] transition-all duration-200"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Scroll progress */}
        <motion.div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]"
          style={{ scaleX: scrollYProgress }}
        />
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[65px] left-0 right-0 z-40 bg-[var(--nav-bg)] backdrop-blur-xl border-b border-[var(--card-border)] md:hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    active === link.href
                      ? "text-[var(--accent)] bg-[var(--accent)]/10"
                      : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--card-bg)]"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white text-sm font-semibold text-center"
              >
                {t.nav.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
