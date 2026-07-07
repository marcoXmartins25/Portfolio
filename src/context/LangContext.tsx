"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import { translations, Lang } from "@/lib/i18n";

type T = typeof translations.pt | typeof translations.en;

const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

function readLang(): Lang {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "pt" || saved === "en") return saved;
  } catch {}
  return "pt";
}

function applyLang(lang: Lang) {
  try {
    localStorage.setItem("lang", lang);
  } catch {}
  listeners.forEach((l) => l());
}

const LangContext = createContext<{
  lang: Lang;
  t: T;
  toggle: () => void;
}>({
  lang: "pt",
  t: translations.pt,
  toggle: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, readLang, () => "pt" as Lang);
  const toggle = () => applyLang(lang === "pt" ? "en" : "pt");

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-PT" : "en";
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
