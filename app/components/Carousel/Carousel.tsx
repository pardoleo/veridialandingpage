'use client'

import React, { useState, useEffect } from "react";
import "./Carousel.scss";
import { useLanguage } from "@/app/context/LanguageContext";



export default function Carousel() {
  const [index, setIndex] = useState(0);
  const { language } = useLanguage();
  const [translations, setTranslations] = useState<any>(null);

  useEffect(() => {
    fetch("/translations.json")
      .then((res) => res.json())
      .then((data) => setTranslations(data));
  }, []);

  // Aguarde o carregamento dos dados
  if (!translations || !translations[language] || !translations[language].carousel) {
    return <div>Carregando...</div>;
  }

  // Transforma o objeto em array
  const carouselObj = translations[language].carousel;
  const carouselKeys = Object.keys(carouselObj);
  const carousel = carouselKeys.map(key => carouselObj[key]);

  const prevIndex = (index - 1 + carousel.length) % carousel.length;
  const nextIndex = (index + 1) % carousel.length;

  const prevSlide = () => setIndex((index - 1 + carousel.length) % carousel.length);
  const nextSlide = () => setIndex((index + 1) % carousel.length);
  const goToSlide = (i: number) => setIndex(i);

  return (
    <div className="carousel-container">
      <div className="description-box">
        <h2>{carousel[index].title}</h2>
        <p>{carousel[index].description}</p>
      </div>
      <div className="carousel">
        <div className="gif-area">
          <div className="side-gif left">
            <img src={carousel[prevIndex].src} alt={carousel[prevIndex].title} />
          </div>
          <div className="main-gif">
            <img src={carousel[index].src} alt={carousel[index].title} />
          </div>
          <div className="side-gif right">
            <img src={carousel[nextIndex].src} alt={carousel[nextIndex].title} />
          </div>
          <button className="arrow left" onClick={prevSlide}>&lt;</button>
          <button className="arrow right" onClick={nextSlide}>&gt;</button>
        </div>
        <div className="dots">
          {carousel.map((_, i) => (
            <span key={i} className={i === index ? "active" : ""} onClick={() => goToSlide(i)}></span>
          ))}
        </div>
      </div>
    </div>
  );
}