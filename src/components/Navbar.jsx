import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Prithivirajan N.dev</div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>
          <a
            href="/resume.pdf"
            className="resume-btn"
            download
          >
            Download Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
