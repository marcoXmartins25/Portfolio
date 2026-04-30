"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="gradient-text">Contacto</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <p className="text-[var(--muted)] leading-relaxed">
                Estou sempre aberto a novas oportunidades e projetos
                interessantes. Entra em contacto e vamos conversar!
              </p>
              <div className="space-y-4">
                <ContactItem
                  icon={<Mail size={20} />}
                  label="Email"
                  value="seuemail@email.com"
                  href="mailto:seuemail@email.com"
                />
                <ContactItem
                  icon={<MapPin size={20} />}
                  label="Localização"
                  value="A Tua Cidade, Distrito"
                />
                <ContactItem
                  icon={<GithubIcon size={20} />}
                  label="GitHub"
                  value="github.com/seuusuario"
                  href="https://github.com/seuusuario"
                />
                <ContactItem
                  icon={<LinkedinIcon size={20} />}
                  label="LinkedIn"
                  value="linkedin.com/in/seuusuario"
                  href="https://linkedin.com/in/seuusuario"
                />
              </div>
            </div>
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-[var(--muted)] mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)] transition-colors text-white"
                  placeholder="O teu nome"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-[var(--muted)] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)] transition-colors text-white"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-[var(--muted)] mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)] transition-colors text-white resize-none"
                  placeholder="A tua mensagem..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white font-medium hover:opacity-90 transition-opacity glow"
              >
                Enviar Mensagem
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)]">
        {icon}
      </div>
      <div>
        <p className="text-sm text-[var(--muted)]">{label}</p>
        <p className="text-white">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:text-[var(--accent)] transition-colors"
      >
        {content}
      </a>
    );
  }

  return content;
}
