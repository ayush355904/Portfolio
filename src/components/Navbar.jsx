import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <a href="#home" className="logo">
          <span>K</span>artik
        </a>

        {/* Navigation */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Professional Social Links */}
        <div className="social-links">

          <a
            href="https://github.com/ayush355904"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <span>LinkedIn</span>
          </a>

          <a
            href="https://leetcode.com/u/3zQ49OdJC3/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn leetcode-btn"
          >
            <span>LeetCode</span>
          </a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;