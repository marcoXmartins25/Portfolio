"use client";

import { createContext, useContext, useState } from "react";
import { translations, Lang } from "@/lib/i18n";

type T = typeof translations.pt | typeof translations.en;

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
  const [lang, setLang] = useState<Lang>("pt");
  const toggle = () => setLang((l) => (l === "pt" ? "en" : "pt"));

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
