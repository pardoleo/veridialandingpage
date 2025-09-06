'use client'

import React, { useState } from "react";
import "./Carousel.scss";

const gifs = [
  { src: "/gifs/coleta.gif", title: "Colete recursos", description: "Explore e encontre recursos raros para criação de equipamentos e evolução do personagem! Cada conteúdo sempre trará novos itens valiosos!" },
  { src: "/gifs/combate.gif", title: "Combate e lutas JxJ", description: "Enfrente inimigos e chefes em eventos durante os andares, conquiste equipamentos únicos, se arrisque nas zonas obsucuras e receba recompensas incríveis!" },
  { src: "/gifs/comercio.gif", title: "Comércio", description: "Venda e troque seus equipamentos, recursos, magias, visuais, e até mesmo o seu próprio personagem, tudo é possível no mercado do Veridia" },
  { src: "/gifs/construcao.gif", title: "Construção", description: "Crie sua base, seu legado, peças que marcam a história dos servidores com a sua interação com esse universo, lute batalhas e veja impérios levantar e cairem! Crie também sua página na história!" },
  { src: "/gifs/exploracao.gif", title: "Exploração", description: "Descubra novos territórios, novas criaturas, segredos, artefatos mágicos, baús de recompensa e muito mais em cada novo andar, com a mudança de temática vem novos desafios!" }
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => setIndex((index - 1 + gifs.length) % gifs.length);
  const nextSlide = () => setIndex((index + 1) % gifs.length);
  const goToSlide = (i: number) => setIndex(i);

  const prevIndex = (index - 1 + gifs.length) % gifs.length;
  const nextIndex = (index + 1) % gifs.length;

  return (
    <div className="carousel-container">
      <div className="description-box">
        <h2>{gifs[index].title}</h2>
        <p>{gifs[index].description}</p>
      </div>
      <div className="carousel">

        <div className="gif-area">
          <div className="side-gif left">
            <img src={gifs[prevIndex].src} alt={gifs[prevIndex].title} />
          </div>

          <div className="main-gif">
            <img src={gifs[index].src} alt={gifs[index].title} />
          </div>

          <div className="side-gif right">
            <img src={gifs[nextIndex].src} alt={gifs[nextIndex].title} />
          </div>

          <button className="arrow left" onClick={prevSlide}>&lt;</button>
          <button className="arrow right" onClick={nextSlide}>&gt;</button>
        </div>

        <div className="dots">
          {gifs.map((_, i) => (
            <span key={i} className={i === index ? "active" : ""} onClick={() => goToSlide(i)}></span>
          ))}
        </div>
      </div>

    </div>
  );
}