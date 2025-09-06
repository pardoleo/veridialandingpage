"use client";
import React from "react";
import "./HeroSection.scss";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const HeroSection = () => {
  const { language } = useLanguage();

  return (
    <div className="hero-section-container position-relative" id="home">
      <div className="language-switcher-wrapper d-none d-lg-block">
        <LanguageSwitcher />
      </div>

      <Container>
        {/* Desktop */}
        <Row className="desktop-hero-section d-none d-lg-flex">
          <Col lg={12} className="logo">
            <Image
              src="/veridialogo.png"
              alt="Veridia MMO Logo"
              width={500}
              height={250}
            />
          </Col>
          <Col lg={12}>
            <div className="subscribe-box">
              <h2>Inscreva-se para o playtest:</h2>
              <form
                action="https://formspree.io/f/{seu-id}" 
                method="POST"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Insira seu e-mail"
                  required
                />
                <button type="submit">Enviar</button>
              </form>
            </div>
          </Col>
        </Row>

        {/* Mobile */}
        <Row className="mobileherosection d-lg-none">
          <Col xs={12} className="logo">
            <Image
              src="/veridialogo.png"
              alt="Veridia MMO Logo"
              width={500}
              height={250}
            />
          </Col>
          <Col xs={12}>
            <div className="subscribe-box">
              <h2>Inscreva-se para o playtest:</h2>
              <form
                action="https://formspree.io/f/{seu-id}" 
                method="POST"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Insira seu e-mail"
                  required
                />
                <button type="submit">Enviar</button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
