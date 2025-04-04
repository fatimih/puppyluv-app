import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Instagram } from 'lucide-react';
import logo from '../assets/icons/puppyluv.svg';
// Remove this import as we're using the CSS background approach
// import blueskyIcon from '../assets/icons/bluesky.svg';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the menu
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="mobile-nav">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="mobile-menu-button"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMenu} className="mobile-logo-container">
          <img src={logo} alt="Puppy Luv Logo" className="mobile-logo" />
        </Link>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
        <div className="mobile-social-icons">
          <a 
            href="https://www.instagram.com/puppyluvsd/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram size={24} className="instagram-icon" />
          </a>
          <a
            href="https://bsky.app/profile/puppyluvsd.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            className="bluesky-icon"
            aria-label="Bluesky"
          >
            {/* No content needed here - the icon displays via CSS background-image */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
