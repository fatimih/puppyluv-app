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
        <Link 
          to="/" 
          onClick={() => handleClick('/')}
          className={location.pathname === "/" ? "active-nav-link" : ""}
        >
          Home
        </Link>
      </li>
      <li>
        <Link 
          to="/services" 
          onClick={() => handleClick('/services')}
          className={location.pathname === "/services" ? "active-nav-link" : ""}
        >
          Services
        </Link>
      </li>
      <li>
        <Link 
          to="/about" 
          onClick={() => handleClick('/about')}
          className={location.pathname === "/about" ? "active-nav-link" : ""}
        >
          About
        </Link>
      </li>
      <li>
        <Link 
          to="/contact" 
          onClick={() => handleClick('/contact')}
          className={location.pathname === "/contact" ? "active-nav-link" : ""}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;


