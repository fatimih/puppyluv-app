import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavLinks = () => {
  const location = useLocation();

  const handleClick = (path) => {
    // If the user is already on the page, scroll to top
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <ul className="nav-links">
      <li>
        <Link to="/" onClick={() => handleClick('/')}>Home</Link>
      </li>
      <li>
        <Link to="/services" onClick={() => handleClick('/services')}>Services</Link>
      </li>
      <li>
        <Link to="/about" onClick={() => handleClick('/about')}>About</Link>
      </li>
      <li>
        <Link to="/contact" onClick={() => handleClick('/contact')}>Contact</Link>
      </li>
    </ul>
  );
};

export default NavLinks;


