
import React, { useState, useEffect } from 'react';
import { Home, FileText, Stethoscope, User, HelpCircle, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <span>MedForm</span>
        </div>
        
        <button className="navbar-toggle" onClick={toggleMenu} aria-expanded={isOpen} aria-label="Toggle navigation">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            <li>
              <a href="#home" onClick={() => setIsOpen(false)}>
                <Home size={20} />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#form" onClick={() => setIsOpen(false)}>
                <FileText size={20} />
                <span>Medical Form</span>
              </a>
            </li>
            <li>
              <a href="#exams" onClick={() => setIsOpen(false)}>
                <Stethoscope size={20} />
                <span>Exams</span>
              </a>
            </li>
            <li>
              <a href="#profile" onClick={() => setIsOpen(false)}>
                <User size={20} />
                <span>Profile</span>
              </a>
            </li>
            <li>
              <a href="#help" onClick={() => setIsOpen(false)}>
                <HelpCircle size={20} />
                <span>Help</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
