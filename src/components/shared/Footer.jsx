// Footer.jsx
import React from 'react';
import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavLinks from '../NavLinks';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-nav-social">
        <nav className="footer-nav">
          <NavLinks />
        </nav>
        <div className="footer-social-icons">
          <a
            href="https://www.instagram.com/puppyluvsd/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-icon"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://bsky.app/profile/puppyluvsd.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            className="bluesky-icon"
          >
            {/* The Bluesky icon is rendered via CSS background-image */}
          </a>
        </div>
      </div>
      <div className="footer-text">
        <p>© 2025 Puppy Luv.</p>
      </div>
    </footer>
  );
};

export default Footer;



