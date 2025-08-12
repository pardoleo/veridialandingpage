"use client";

import { useLanguage } from "../../context/LanguageContext";
import Image from "next/image";
import "./LanguageSwitcher.scss";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt");
  };

  return (
    <button onClick={toggleLanguage} className="language-switcher-btn">
      <Image
        src={
          language === "pt" ? "/flags/brasil_flag.png" : "/flags/usa_flag.png"
        }
        alt={language === "pt" ? "Português" : "English"}
        width={32}
        height={32}
        className="language-flag"
      />
    </button>
  );
};

export default LanguageSwitcher;
