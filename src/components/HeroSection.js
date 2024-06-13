// HeroSection.js

import React from 'react';
import './HeroSection.css'; // Import CSS file for styling

const HeroSection = ({ totalSeminars, attendedSeminars }) => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2>Dashboard Overview</h2>
        <div className="seminar-info">
          <div className="box1">
            <h3>Total Seminars Provided:</h3>
            <p>{totalSeminars}</p>
          </div>
          <div className="box2">
            <h3>Seminars Attended:</h3>
            <p>{attendedSeminars}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
