import React, { useState } from 'react';
import './Navbar.css'; // Optional: Separate CSS for Navbar styles
import logo from '../assets/images/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Run Icon" width="40px" />
        <span>Run Time</span>
      </div>
      <ul className={`nav-links ${isOpen ? 'nav-active' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/gear">Gear & Equipment</a></li>
        <li><a href="/training">Training</a></li>
        <li><a href="/recovery">Recovery & Injury Prevention</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
      <div className="burger" onClick={toggleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;