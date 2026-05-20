'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Lang = 'fr' | 'en';

interface LangCtx { lang: Lang; setLang: (l: Lang) => void; }

const Ctx = createContext<LangCtx>({ lang: 'fr', setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('fr');

  useEffect(() => {
    const s = localStorage.getItem('idn-lang') as Lang;
    if (s === 'fr' || s === 'en') setLangState(s);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('idn-lang', l);
  };

  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
