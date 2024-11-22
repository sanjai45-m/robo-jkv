import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import logo from '../assets/jkv-logo.png';
const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className="logo">
        <img src={logo} alt="Logo" style={{ height: '50px', width: 'auto' }} />

        </div>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#workshops" onClick={() => setIsMenuOpen(false)}>Workshops</a>
          <a href="#learning" onClick={() => setIsMenuOpen(false)}>Learning</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
        <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;