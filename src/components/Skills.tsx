"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { VSCodeIcon } from "@/components/icons/VSCodeIcon";
import { DBeaverIcon } from "@/components/icons/DBeaverIcon";
import { PostmanIcon } from "@/components/icons/PostmanIcon";
import { FigmaIcon } from "@/components/icons/FigmaIcon";
import { AIIcon } from "@/components/icons/AIIcon";
import { HtmlIcon } from "@/components/icons/HtmlIcon";
import { CssIcon } from "@/components/icons/CssIcon";
import { JsIcon } from "@/components/icons/JsIcon";
import { ReactIcon } from "@/components/icons/ReactIcon";
import { PhpIcon } from "@/components/icons/PhpIcon";
import { PostgresIcon } from "@/components/icons/PostgresIcon";
import { MySqlIcon } from "@/components/icons/MySqlIcon";
import { ApiIcon } from "@/components/icons/ApiIcon";
import { GitIcon } from "@/components/icons/GitIcon";
import { useLang } from "@/context/LangContext";

const skillIcons: Record<string, React.ReactNode> = {
  "HTML5": <HtmlIcon size={28} />,
  "CSS3": <CssIcon size={28} />,
  "JavaScript": <JsIcon size={28} />,
  "React": <ReactIcon size={28} />,
  "PHP (Laravel)": <PhpIcon size={28} />,
  "PostgreSQL": <PostgresIcon size={28} />,
  "MySQL": <MySqlIcon size={28} />,
  "APIs REST": <ApiIcon size={28} />,
  "Git / GitHub": <GitIcon size={28} />,
  "VS Code": <VSCodeIcon size={28} />,
  "DBeaver": <DBeaverIcon size={28} />,
  "Postman": <PostmanIcon size={28} />,
  "Figma": <FigmaIcon size={28} />,
  "AI": <AIIcon size={28} />,
};

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();

  return (
    <section id="skills" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[var(--accent)]/30" />
            <h2 className="text-3xl md:text-4xl font-black">
              <span className="gradient-text">{t.skills.title}</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[var(--accent)]/30" />
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)]/50 via-[var(--accent)]/30 to-transparent hidden md:block" />
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {t.skills.items.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--accent)]/40 transition-all duration-300 hover:shadow-[0_0_30px_-10px_var(--accent)] hover:-translate-y-1 relative"
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[var(--accent)] hidden md:block" />
                  <div>{skillIcons[skill.name]}</div>
                  <div className="text-center">
                    <p className="text-sm font-medium">{skill.name}</p>
                    <p className="text-xs text-[var(--muted)] mt-1">{skill.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
