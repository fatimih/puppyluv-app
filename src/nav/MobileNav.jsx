import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Instagram } from 'lucide-react';
import logo from '../assets/icons/puppyluv.svg';
import blueskyIcon from '../assets/icons/bluesky.svg';

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
          <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
        <div className="mobile-social-icons">
          <a href="https://www.instagram.com/puppyluvsd/" target="_blank" rel="noopener noreferrer">
            <Instagram size={24} />
          </a>
          <a
            href="https://bsky.app/profile/puppyluvsd.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            className="bluesky-icon"
          >
            <blueskyIcon size={24} />
          </a>



        </div>
      </div>
    </div>
  );
};

export default MobileNav;
