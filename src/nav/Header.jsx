import React from "react";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav"; // New import
import logo from '/src/assets/icons/puppyluv.svg';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={logo} alt="Puppy Luv Logo" className="logo" />
        </Link>
        <ul className="desktop-nav">  {/* Added className */}
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <MobileNav /> {/* New component */}
      </nav>
    </header>
  );
}

export default Header;







