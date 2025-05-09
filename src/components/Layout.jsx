import { FaGithub, FaInstagram, FaTwitter, FaLinkedin, FaCodepen } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#09122C' }}>
      {/* Hamburger */}
      


      {children}

      {/* Socials */}
      <div className="left-socials">
        <ul className="icon-list">
          <li className="icon-item"><a href="https://github.com/" className='icon-link'><FaGithub /></a></li>
          <li className="icon-item"><a href="https://instagram.com/" className='icon-link'><FaInstagram /></a></li>
          <li className="icon-item"><a href="https://twitter.com/" className='icon-link'><FaTwitter /></a></li>
          <li className="icon-item"><a href="https://linkedin.com/" className='icon-link'><FaLinkedin /></a></li>
          <li className="icon-item"><a href="https://codepen.io/" className='icon-link'><FaCodepen /></a></li>
        </ul>
        <div className="vertical-line" />
      </div>

      <div className="right-email">
        <a href="mailto:reza.maulana.aziiz@gmail.com" className="email-link">
          reza.maulana.aziiz@gmail.com
        </a>
        <div className="vertical-line" />
      </div>
    </div>
  );
};

export default Layout;
