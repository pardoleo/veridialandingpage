"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  texts: Record<string, any>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState("pt"); // Idioma padrão
  const [texts, setTexts] = useState<Record<string, any>>({}); // Guarda os textos do JSON
  const [loading, setLoading] = useState(true);

  // Carregar os textos do JSON
  useEffect(() => {
    fetch("/translations.json")
      .then((res) => res.json())
      .then((data) => {
        setTexts(data);
        setLoading(false);
      })
      .catch((error) => console.error("Erro ao carregar traduções:", error));
  }, []);

  if (loading) return <p>Carregando traduções...</p>; // Exibe enquanto carrega

  return (
    <LanguageContext.Provider value={{ language, setLanguage, texts }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage deve ser usado dentro de um LanguageProvider");
  return context;
};