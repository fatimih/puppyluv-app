import React, { useState, useEffect } from "react"; // Add useState, useEffect
import { Link, useLocation } from "react-router-dom"; // Add useLocation
import MobileNav from "./MobileNav"; // Keep this unchanged
import logo from '/src/assets/icons/puppyluv.svg'; // Keep this unchanged

function Header() {
  // Add these lines for active link tracking
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("/");

  // Add this useEffect hook
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <header>
      <nav>
        <Link to="/">
          <img src={logo} alt="Puppy Luv Logo" className="logo" />
        </Link>
        <ul className="desktop-nav">
          <li>
            <Link 
              to="/" 
              className={activeLink === "/" ? "active-nav-link" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/services" 
              className={activeLink === "/services" ? "active-nav-link" : ""}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={activeLink === "/about" ? "active-nav-link" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={activeLink === "/contact" ? "active-nav-link" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
        <MobileNav /> {/* This stays exactly the same */}
      </nav>
    </header>
  );
}

export default Header;






