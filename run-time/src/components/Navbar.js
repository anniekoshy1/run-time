// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for client-side routing
import logo from '../assets/images/logo.jpg';
import './Navbar.css'; // Import CSS file specific to Navbar

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Run Icon" width="40px" />
        <span>Run Time</span>
      </div>
      <ul className={`nav-links ${isOpen ? 'nav-active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/gear">Gear & Equipment</Link></li>
        <li><Link to="/training">Training</Link></li>
        <li><Link to="/recovery">Recovery & Injury Prevention</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
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