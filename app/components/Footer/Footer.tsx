'use client'
import React from 'react'
import './Footer.scss'


const Footer = () => {
  return (
    <div className='footercontainer' id='contato'>
      <div className="contact-icons">
              <a href="https://www.linkedin.com/in/leonardo-castanha-escribano-640b8b17a/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-steam fa-4x"></i>
              </a>
              <a href="https://discord.gg/Ah7cW2RcTD" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-discord fa-4x"></i>
              </a>
              <a href="https://patreon.com/seuPerfil" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-patreon fa-4x"></i>
              </a>

        </div>
    </div>
  )
}

export default Footer
