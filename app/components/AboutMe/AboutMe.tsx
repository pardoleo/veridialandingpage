'use client'
import React from 'react'
import './AboutMe.scss'
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';

const AboutMe = () => {
  return (
    <div className='aboutmecontainer' id='sobre-mim'>
      <Container>
        {/* Primeira linha, contendo o título 'sobre mim' */}
        <div className="aboutme-title">
          <h1>Sobre Mim</h1>
        </div>
        {/* Segunda linha, contendo as tabs alternaveis */}
        <Row>
          <Col>
            <Tabs defaultActiveKey="personal" id="about-me-tabs">
              
              <Tab eventKey="professional" title="Profissional">
                <p>Sou um desenvolvedor Front-end focado em criar interfaces funcionais,
                  responsivas e otimizadas para SEO. Tenho experiência com HTML5, CSS3, JavaScript, React.js
                  e Next.js, além de habilidades práticas em construção de layouts e consumo de APIs. 
                  Busco sempre criar soluções adaptáveis e eficientes,
                  aplicando pensamento crítico e criatividade para entregar projetos de alta qualidade. 
                  Meu objetivo é continuar evoluindo como profissional, aprendendo novas tecnologias e 
                  entregando resultados que façam a diferença. <br /><br />
                  Com uma trajetória que inclui engenharia civil e um negócio próprio, 
                  desenvolvi um olhar analítico e uma abordagem prática para desafios. 
                  Essas experiências me ensinaram a unir criatividade e organização, 
                  além de fortalecer minha responsabilidade e habilidade de entregar resultados com excelência.
                </p>
              </Tab>
              <Tab eventKey="personal" title="Pessoal">
                <p>Gosto de explorar novas tecnologias,
                  aprender coisas diferentes, criar e compartilhar conhecimento. <br /><br />
                  Sou apaixonado por ajudar a encontrar soluções para problemas complexos.<br /><br />
                  No meu tempo livre, também curto atividades como jogos, leitura, projetos, DIY, música e cultura.<br /><br />
                  Acredito que aprendizado contínuo e equilíbrio são essenciais para 
                  alcançar nossos objetivos.
                </p>
              </Tab>
              {/* <Tab eventKey="academic" title="Acadêmica">
                <p>Como ja comento sobre minhas formações no pessoal e profissional, deixarei duas abas apenas.</p>
              </Tab> */}
            </Tabs>
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <p> Deixei essa parte caso precise de um texto em comum entre as tabs</p>
          </Col>
        </Row> */}
      </Container>
    </div>
  )
}

export default AboutMe
