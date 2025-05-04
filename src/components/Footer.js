
import React from 'react';
import { Heart, Shield, FileText, ExternalLink, Facebook, Twitter, Instagram, Link } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">MedForm</h2>
            <p className="footer-tagline">
              Streamlining healthcare documentation for better patient outcomes.
            </p>
            <div className="footer-social">
              <a href="https://facebook.com" aria-label="Facebook" className="social-icon">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="social-icon">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="social-icon">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="social-icon">
                <Link size={20} />
              </a>
            </div>
          </div>
          
          <div className="footer-nav">
            <div className="footer-nav-column">
              <h3>Company</h3>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#blog">Blog</a></li>
              </ul>
            </div>
            
            <div className="footer-nav-column">
              <h3>Resources</h3>
              <ul>
                <li><a href="#help">Help Center</a></li>
                <li><a href="#guides">User Guides</a></li>
                <li><a href="#api">API Documentation</a></li>
                <li><a href="#updates">Updates</a></li>
              </ul>
            </div>
            
            <div className="footer-nav-column">
              <h3>Legal</h3>
              <ul>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#compliance">Compliance</a></li>
                <li><a href="#security">Security</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} MedForm. All Rights Reserved.
          </p>
          <div className="footer-badges">
            <span className="footer-badge">
              <Shield size={16} /> HIPAA Compliant
            </span>
            <span className="footer-badge">
              <Heart size={16} /> Healthcare Focused
            </span>
            <span className="footer-badge">
              <FileText size={16} /> Certified Forms
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;