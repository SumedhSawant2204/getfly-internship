// NavBar.js

import React from 'react';
import './NavBars.css'; // Import CSS file for styling


const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/graduation.png" alt="HIGHER STUDIES" />
      </div>
      <div className="navbar-links">
        <a href="/">Dashboard</a>
        <a href="/my-app/src/index.js">Notification</a>
        <a href="/faq">FAQ</a>
        
    
      </div>
    </nav>
  );
}

export default NavBar;
