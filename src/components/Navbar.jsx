import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import logo from '../assets/rename.png';

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className="logo-container">
          <img
            src={logo}
            alt="Logo"

          />
        </div>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => { navigate('/'); setIsMenuOpen(false); }}>Home</Link>
          <Link to="/director" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/workshop" onClick={() => setIsMenuOpen(false)}>Workshops</Link>
          
          <a href="#learning-section" onClick={() => scrollToSection('learning-section')}>Learning</a>
          <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
          <a href="#contacted-section" onClick={() => scrollToSection('contacted-section')}>Contact</a>
        </div>
        <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
