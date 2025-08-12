'use client'
import './Projects.scss'
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Tabs, Tab, Card, Button } from 'react-bootstrap';
import projectsJson from './Projects.json'
import Image from 'next/image'
import { useLanguage } from '@/app/context/LanguageContext';


interface IProjectBtn {
  text: IProjectTitle;
  link: string;
}
interface IProjectTitle{
  pt: string;
  en: string;
}
interface IProjectDescription{
  pt: string;
  en: string;
}
interface IProject {
  id: number;
  title: IProjectTitle;
  category: string;
  imgSrc: string[];
  description: IProjectDescription;
  btn?: IProjectBtn[];
}

const projects: IProject[] = projectsJson;

function Projects() {
  const [activeKey, setActiveKey] = useState<string>('Todos');
  const [showMore, setShowMore] = useState(false);
  const { language, texts } = useLanguage();

  const filteredProjects = activeKey === 'Todos'
    ? projects
    : projects.filter(project => project.category === activeKey);

  const projectsToShow = showMore ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <Container id='projetos'>
      <Row>
        <Col>
          <Tabs activeKey={activeKey} onSelect={(k) => setActiveKey(k ?? 'Todos')}>
            <Tab eventKey="Todos" title={texts[language]?.projectTab} />
            <Tab eventKey="Web" title="Web" />
            <Tab eventKey="Mobile" title="Mobile" />
            <Tab eventKey="Apps" title="Apps" />
            <Tab eventKey="Games" title="Games" />
          </Tabs>
        </Col>
      </Row>
      <Row>
        {projectsToShow.map(project => (
          <Col key={project.id} md={3} className="mb-3">
            <ProjectCard project={project} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col className="text-center">
          {filteredProjects.length > 6 && (
            <Button variant="primary" onClick={() => setShowMore(!showMore)}>
              {showMore ? 'Ver Menos' : 'Ver Mais'}
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
}
interface IProjectCardParams{
  project: IProject;

}
// **Componente do Card**
const ProjectCard = ({ project}: IProjectCardParams) => {
  const { language, texts } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detecta se o usuário está no mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // IntersectionObserver só roda no mobile
  useEffect(() => {
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, [isMobile]);

  // Animação das imagens
  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.imgSrc.length);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isActive, project.imgSrc.length]);

  return (
    <div
      ref={cardRef}
      className="project-card"
      onMouseEnter={() => !isMobile && setIsActive(true)}
      onMouseLeave={() => !isMobile && setIsActive(false)}
      onTouchStart={() => isMobile && setIsActive(true)}
    >
      <Image src={project.imgSrc[currentImageIndex]} alt={project.title[language as keyof IProjectTitle]} width={500} height={300} />
      <div className="card-body">
        <h3>{project.title[language as keyof IProjectTitle]}</h3>
        <p>{project.description[language as keyof IProjectTitle]}</p>
        <div className="project-buttons">
          {project.btn?.map((button, index) => (
            <a key={index} href={button.link} target="_blank" rel="noopener noreferrer">
              <button className="btn">{button.text[language as keyof IProjectTitle]}</button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Projects;
