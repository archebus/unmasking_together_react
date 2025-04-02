import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Unmasking Together</h3>
            <p>A neuro-affirming counselling space dedicated to supporting individuals in embracing their authentic selves.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/events">What's On</a></li>
              <li><a href="/work-with-me">Work With Me</a></li>
              <li><a href="/resources">Resources</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <address>
              <p>Email: <a href="mailto:hello@unmaskingtogether.com">hello@unmaskingtogether.com</a></p>
              <p>Instagram: <a href="https://instagram.com/unmaskingtogether" target="_blank" rel="noopener noreferrer">@unmaskingtogether</a></p>
            </address>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Unmasking Together. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;