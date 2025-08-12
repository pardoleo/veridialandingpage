'use client'
import React from 'react'
import './AboutMe.scss'
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import { useLanguage } from '@/app/context/LanguageContext';


const AboutMe = () => {
  const { language, texts } = useLanguage();
  return (
    <div className='aboutmecontainer' id='sobre-mim'>
      <Container>
        <div className="aboutme-title">
          <h1>{texts[language]?.about?.title}</h1>
        </div>
        {/* Tabs */}
        <Row>
          <Col>
            <Tabs defaultActiveKey="professional" id="about-me-tabs">

              <Tab eventKey="professional" title={texts[language]?.about?.titleTagProf}>
                <p>
                  {texts[language]?.about?.professional1} <p />
                  {texts[language]?.about?.professional2} <p />
                  {texts[language]?.about?.professional3} <p />
                </p>
              </Tab>
              <Tab eventKey="personal" title={texts[language]?.about?.titleTagPers}>
                <p>
                  {texts[language]?.about?.personal1} <p />
                  {texts[language]?.about?.personal2} <p />

                </p>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutMe