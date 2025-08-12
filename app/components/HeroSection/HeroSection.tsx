"use client";
import React from "react";
import "./HeroSection.scss";
import { Container, Row, Col } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const HeroSection = () => {
  const { language, texts } = useLanguage();
  if (!texts[language]) return <p>Carregando...</p>;

  return (
    <div className="hero-section-container position-relative" id="home">
      <div className="language-switcher-wrapper d-none d-lg-block">
        <LanguageSwitcher />
      </div>
      <Container>
        {/* Layout para telas grandes */}
        <Row className="desktop-hero-section d-none d-lg-flex">
          {/* Titulo Desktop */}
          <Col lg={7} className="title">
            <div className="name-skills">
              <h1 className="name">Leonardo Castanha</h1>
              {/* -----Animação----- */}
              <h2 className="skills">
                <TypeAnimation
                  sequence={[
                    "Game Designer",
                    1000,
                    "GitHub Versioning",
                    1000,
                    "Scrum",
                    1000,
                    "Game Artist",
                    1000,
                    "Game VFX",
                    1000,
                    "Unity Engine",
                    1000,
                    "User Interface",
                    1000,
                    "C#",
                    1000,
                    "Unreal Engine",
                    1000,
                    "Game Development",
                    1000,
                    "User Experience",
                    1000,
                    "ASP.NET Framework",
                    1000,
                    "Full Stack",
                    1000,
                    "Programação Orientada a Objetos",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h2>
              <div className="desktop-description">
                <h2>
                  {texts[language]?.hero?.intro1}
                  <p />
                  {texts[language]?.hero?.intro2}
                  <p />
                  {texts[language]?.hero?.intro3}
                </h2>
              </div>
            </div>
          </Col>
          {/* Foto Desktop */}
          <Col lg={5} className="photo mb-3">
            <div className="p-3">
              <Image
                src="/profilepic.jpg"
                alt="profilepic"
                className="img-fluid"
                width={500}
                height={300}
              />
            </div>
          </Col>
        </Row>

        {/* Layout para telas pequenas */}
        <Row className="mobileherosection d-lg-none">
          {/* Titulo mobile */}
          <Col xs={12} className="title">
            <div className="name-skills text-center">
              <h1 className="name">Leonardo Castanha</h1>
              <h2 className="skills">
                <TypeAnimation
                  sequence={[
                    "Game Designer",
                    1000,
                    "GitHub Versioning",
                    1000,
                    "Scrum",
                    1000,
                    "Game Artist",
                    1000,
                    "Game VFX",
                    1000,
                    "Unity Engine",
                    1000,
                    "User Interface",
                    1000,
                    "C#",
                    1000,
                    "Unreal Engine",
                    1000,
                    "Game Development",
                    1000,
                    "User Experience",
                    1000,
                    "ASP.NET Framework",
                    1000,
                    "Full Stack",
                    1000,
                    "POO",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h2>
            </div>
          </Col>
          {/* Foto mobile */}
          <Col xs={12} className="photo text-center">
            <div className="p-3">
              <Image
                src="/profilepic.jpg"
                alt="profilepic"
                className="img-fluid"
                width={500}
                height={300}
              />
            </div>
          </Col>
          {/* Descrição mobile */}
          <Col xs={12} className="mobile-description text-center">
            <h2>
              {texts[language]?.hero?.intro1}
              {texts[language]?.hero?.intro2}
              {texts[language]?.hero?.intro3}
            </h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
