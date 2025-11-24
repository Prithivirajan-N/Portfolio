import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Prithivirajan N.dev</div>

      {/* Hamburger for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={menuOpen ? "rotate1" : ""}></span>
        <span className={menuOpen ? "fade" : ""}></span>
        <span className={menuOpen ? "rotate2" : ""}></span>
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        <li>
          <a
            href="/resume.pdf"
            className="resume-btn"
            download
            onClick={() => setMenuOpen(false)}
          >
            Download Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
