import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png'; // Ganti dengan path logo Anda

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Jangan sembunyikan navbar kalau menu sedang terbuka
      if (!menuOpen) {
        if (window.scrollY > lastScrollY) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
      }
      setLastScrollY(window.scrollY);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, menuOpen]);
  

  const toggleMenu = () => setMenuOpen(prev => !prev); // Toggle menu open/close

  return (
    <nav className={`navbar ${showNavbar ? 'visible' : 'hidden'}`}>
      <div className="nav-content">
        <img src={logo} alt="Logo" />
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a  className="underline-animate" href="#about">About </a></li>
          <li><a  className="underline-animate"href="#projects">Projects</a></li>
          <li><a  className="underline-animate"href="#contact">Contact</a></li>
          <li>
                <a
                href="/RezaMaulanaAziiz_CV.pdf"
                download="RezaMaulanaAziiz_CV.pdf"
                className="resume-button"
                >
                Resume
                </a>
            </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
