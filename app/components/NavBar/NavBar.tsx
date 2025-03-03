"use client"

import React, { useState } from 'react';
import { Navbar, Offcanvas, Button, Nav } from 'react-bootstrap';
import './NavBar.scss'
import Image from 'next/image'

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" className="custom-navbar d-lg-none justify-content-center fixed-top">
        <button onClick={handleShow} className='menu-button'>
          <i className="fa-solid fa-angles-down"></i>
        </button>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose} placement="top" className="popup-navbar d-lg-none">
        <Offcanvas.Header closeButton>
          {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#sobre-mim">Sobre Mim</Nav.Link>
              <Nav.Link href="#projetos">Projetos</Nav.Link>
              <Nav.Link href="#contato">Contato</Nav.Link>
        </Offcanvas.Body>
      </Offcanvas>


      {/* Desktop */}
      <div className="left-bar sidebar d-none d-lg-block fixed-sidebar">
        <div className="nav-content-desktop">
            <div className="navbar-img">
              <Image src="/devlogo.png" alt="logo" width={100} height={100} />
            </div>
            <h1 className="navbar-name">Davi Castanha</h1>
            <Nav className="nav-anchors-desktop">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#sobre-mim">Sobre Mim</Nav.Link>
              <Nav.Link href="#projetos">Projetos</Nav.Link>
              <Nav.Link href="#contato">Contato</Nav.Link>
            </Nav>
            <div className="contact-icons">
              <a href="https://www.linkedin.com/in/davicastanhaescribano/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in fa-2x"></i>
              </a>
              <a href="https://github.com/DaviCastanha" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github fa-2x"></i>
              </a>
              <a href="https://wa.me/5511985452742" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp fa-2x"></i>
              </a>
            </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;

