import React from 'react';
import { Home, FileText, Stethoscope, User, HelpCircle } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>MedForm</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#home"><Home size={20} /> Home</a></li>
        <li><a href="#form"><FileText size={20} /> Medical Form</a></li>
        <li><a href="#exams"><Stethoscope size={20} /> Exams</a></li>
        <li><a href="#profile"><User size={20} /> Profile</a></li>
        <li><a href="#help"><HelpCircle size={20} /> Help</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;