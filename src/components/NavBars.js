// NavBar.js

import React from 'react';
import './NavBars.css'; // Import CSS file for styling

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/path/to/logo.png" alt="HIGHER STUDIES" />
      </div>
      <div className="navbar-links">
        <a href="/">DASHBOARD</a>
        <a href="/notification">NOTIFICATION</a>
        <a href="/faq">FAQ</a>
      </div>
    </nav>
  );
}

export default NavBar;
