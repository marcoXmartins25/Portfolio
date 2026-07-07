"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, Mail, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { useEffect } from "react";
import { useLang } from "@/context/LangContext";
import Image from "next/image";

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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <motion.div
        className="fixed w-[500px] h-[500px] rounded-full pointer-events-none z-0 hidden md:block"
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

      <div className="relative z-10 px-6 max-w-6xl mx-auto w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
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
              <p className="text-[var(--muted)] mb-3 tracking-widest uppercase text-xs font-medium">
                {t.hero.greeting}
              </p>
              <h1 className="text-5xl md:text-7xl font-black mb-4 leading-none tracking-tight">
                <span className="gradient-text">Marco</span>
                <br />
                <span className="text-[var(--foreground)]">Martins</span>
              </h1>

              <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-[var(--accent)]/50" />
                <p className="text-[var(--accent)] text-sm font-mono tracking-widest uppercase">
                  {t.hero.role}
                </p>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-[var(--accent)]/50" />
              </div>

              <p className="text-base md:text-lg text-[var(--muted)] max-w-xl mb-10 leading-relaxed">
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
              className="flex flex-wrap justify-center md:justify-start gap-4 mb-8"
            >
              <a href="#contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white font-semibold hover:opacity-90 transition-all duration-300 glow hover:scale-105">
                {t.hero.ctaPrimary}
              </a>
              <a href="#projects" className="px-6 py-3 rounded-xl border border-[var(--card-border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--accent)]/50 transition-all duration-300 hover:scale-105">
                {t.hero.ctaSecondary}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex justify-center md:justify-start gap-3"
            >
              <SocialLink href="https://github.com/marcoXmartins25" icon={<GithubIcon size={18} />} label="GitHub" />
              <SocialLink href="mailto:marcojxmartins@gmail.com" icon={<Mail size={18} />} label="Email" />
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full p-[3px]" style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))" }}>
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/MarcoMartins.png"
                    alt="Marco Martins"
                    fill
                    sizes="(min-width: 768px) 288px, 224px"
                    className="object-cover rounded-full"
                    priority
                  />
                </div>
              </div>
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full shadow-[0_0_60px_-10px_var(--accent)] pointer-events-none" />
            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center mt-16"
        >
          <a href="#about" className="inline-flex flex-col items-center text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
            <span className="text-xs mb-2 tracking-widest uppercase">{t.hero.scroll}</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ArrowDown size={18} />
            </motion.div>
          </a>
        </motion.div>
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
