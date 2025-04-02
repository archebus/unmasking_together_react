import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">
            <h1>Unmasking Together</h1>
          </a>
        </div>

        <div className="navbar-menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </div>

        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="/about">About</a></li>
          <li><a href="/events">What's On</a></li>
          <li><a href="/work-with-me">Work With Me</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;