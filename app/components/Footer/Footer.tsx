'use client'
import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footercontainer' id='contato'>
      <div className="contact-icons">
              <a href="https://www.linkedin.com/in/leonardo-castanha-escribano-640b8b17a/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in fa-4x"></i>
              </a>
              <a href="https://github.com/pardoleo" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github fa-4x"></i>
              </a>
              <a href="https://wa.me/5511948866757" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp fa-4x"></i>
              </a>
        </div>
    </div>
  )
}

export default Footer
