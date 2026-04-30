"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Users } from "lucide-react";
import { useLang } from "@/context/LangContext";

const icons = [<Code2 size={20} />, <Rocket size={20} />, <Users size={20} />];
const colors = ["var(--accent)", "var(--accent-2)", "var(--accent-3)"];

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();

  return (
    <section id="about" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[var(--accent)]/30" />
            <h2 className="text-3xl md:text-4xl font-black">
              <span className="gradient-text">{t.about.title}</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[var(--accent)]/30" />
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="space-y-5">
              <p className="text-[var(--muted)] leading-relaxed text-lg about-text">
                {t.about.p1}{" "}
                <span className="text-[var(--foreground)] font-medium">{t.about.p1b}</span>
                {t.about.p1c}
              </p>
              <p className="text-[var(--muted)] leading-relaxed about-text">{t.about.p2}</p>
              <p className="text-[var(--muted)] leading-relaxed about-text">{t.about.p3}</p>
              <div className="pt-2">
                <a href="#contact" className="inline-flex items-center gap-2 text-[var(--accent)] text-sm font-medium hover:gap-4 transition-all duration-300">
                  {t.about.cta}
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {t.about.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                >
                  <TiltCard className="p-5 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] card-hover cursor-default">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${colors[i]}15`, color: colors[i] }}
                      >
                        {icons[i]}
                      </div>
                      <div>
                        <p className="text-3xl font-black" style={{ color: colors[i] }}>{stat.number}</p>
                        <p className="text-sm text-[var(--muted)]">{stat.label}</p>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
