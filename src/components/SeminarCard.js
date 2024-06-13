// SeminarCard.js

import React from 'react';
import './SeminarCard.css'; // Import CSS file for styling

const SeminarCard = ({ title, description, timings, venue }) => {
  return (
    <div className="seminar-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Timings:</strong> {timings}</p>
      <p><strong>Venue:</strong> {venue}</p>
      <button>Apply Now</button>
    </div>
  );
}

export default SeminarCard;
