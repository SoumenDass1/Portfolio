import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <a href="#">Soumen Dass</a>
        </div>
        
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
