"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { useLang } from "@/context/LangContext";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();

  const contactItems = [
    { icon: <Mail size={18} />, label: t.contact.labels.email, value: "marcojxmartins@gmail.com", href: "mailto:marcojxmartins@gmail.com", color: "#00d4ff" },
    { icon: <Phone size={18} />, label: t.contact.labels.phone, value: "(+351) 934 208 391", href: "tel:+351934208391", color: "#7c3aed" },
    { icon: <MapPin size={18} />, label: t.contact.labels.address, value: "Variz, Mogadouro, Bragança", color: "#10b981" },
    { icon: <GithubIcon size={18} />, label: t.contact.labels.github, value: "github.com/marcoXmartins25", href: "https://github.com/marcoXmartins25", color: "var(--foreground)" },
  ];

  return (
    <section id="contact" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[var(--accent)]/30" />
            <h2 className="text-3xl md:text-4xl font-black">
              <span className="gradient-text">{t.contact.title}</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[var(--accent)]/30" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <p className="text-2xl font-bold mb-2">
                  {t.contact.heading}{" "}
                  <span className="gradient-text">{t.contact.headingAccent}</span>
                  {t.contact.headingEnd}
                </p>
                <p className="text-[var(--muted)] leading-relaxed">{t.contact.description}</p>
              </div>

              <div className="space-y-3">
                {contactItems.map((item) => {
                  const inner = (
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-opacity-50 transition-all duration-300">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${item.color}15`, color: item.color }}>
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-[var(--muted)]">{item.label}</p>
                        <p className="text-sm font-medium text-[var(--foreground)]">{item.value}</p>
                      </div>
                    </div>
                  );
                  return item.href ? (
                    <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="block hover:scale-[1.01] transition-transform">
                      {inner}
                    </a>
                  ) : (
                    <div key={item.label}>{inner}</div>
                  );
                })}
              </div>
            </div>

            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)]"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs text-[var(--muted)] mb-2 uppercase tracking-wider">{t.contact.form.name}</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--card-border)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]/30 transition-all text-[var(--foreground)] placeholder:text-[var(--muted)] text-sm" placeholder={t.contact.form.namePlaceholder} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs text-[var(--muted)] mb-2 uppercase tracking-wider">{t.contact.form.email}</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--card-border)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]/30 transition-all text-[var(--foreground)] placeholder:text-[var(--muted)] text-sm" placeholder={t.contact.form.emailPlaceholder} />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs text-[var(--muted)] mb-2 uppercase tracking-wider">{t.contact.form.subject}</label>
                <input type="text" id="subject" className="w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--card-border)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]/30 transition-all text-[var(--foreground)] placeholder:text-[var(--muted)] text-sm" placeholder={t.contact.form.subjectPlaceholder} />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs text-[var(--muted)] mb-2 uppercase tracking-wider">{t.contact.form.message}</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl bg-[var(--input-bg)] border border-[var(--card-border)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]/30 transition-all text-[var(--foreground)] placeholder:text-[var(--muted)] resize-none text-sm" placeholder={t.contact.form.messagePlaceholder} />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity glow"
              >
                <Send size={16} />
                {t.contact.form.send}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
