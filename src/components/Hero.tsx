"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, Mail, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { useEffect } from "react";
import { useLang } from "@/context/LangContext";

export function Hero() {
  const { t, lang } = useLang();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        className="fixed w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-[var(--accent)]/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-[var(--accent-2)]/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--accent-3)]/5 rounded-full blur-[160px]" />

      <div className="text-center relative z-10 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--accent-3)]/30 bg-[var(--accent-3)]/5 text-[var(--accent-3)] text-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--accent-3)] animate-pulse-glow" />
          {t.hero.available}
          <Sparkles size={14} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <p className="text-[var(--muted)] text-lg mb-3 tracking-widest uppercase text-xs font-medium">
            {t.hero.greeting}
          </p>
          <h1 className="text-5xl md:text-8xl font-black mb-4 leading-none tracking-tight">
            <span className="gradient-text">Marco</span>
            <br />
            <span className="text-[var(--foreground)]">Martins</span>
          </h1>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[var(--accent)]/50" />
            <p className="text-[var(--accent)] text-sm font-mono tracking-widest uppercase">
              {t.hero.role}
            </p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[var(--accent)]/50" />
          </div>

          <p className="text-base md:text-lg text-[var(--muted)] max-w-xl mx-auto mb-10 leading-relaxed">
            {t.hero.description}{" "}
            <span className="text-[var(--foreground)] font-medium">{t.hero.performance}</span>,{" "}
            <span className="text-[var(--foreground)] font-medium">{t.hero.design}</span>{" "}
            {lang === "pt" ? "e" : "and"}{" "}
            <span className="text-[var(--foreground)] font-medium">{t.hero.cleanCode}</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center gap-4 mb-14"
        >
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white font-semibold hover:opacity-90 transition-all duration-300 glow hover:scale-105"
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl border border-[var(--card-border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--accent)]/50 transition-all duration-300 hover:scale-105"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center gap-3 mb-14"
        >
          <SocialLink href="https://github.com/marcoXmartins25" icon={<GithubIcon size={18} />} label="GitHub" />
          <SocialLink href="mailto:marcojxmartins@gmail.com" icon={<Mail size={18} />} label="Email" />
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="inline-flex flex-col items-center text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
        >
          <span className="text-xs mb-2 tracking-widest uppercase">{t.hero.scroll}</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown size={18} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-11 h-11 flex items-center justify-center rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/50 hover:shadow-[0_0_20px_-5px_var(--accent)] transition-all duration-300"
    >
      {icon}
    </a>
  );
}
