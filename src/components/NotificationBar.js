// SeminarCard.js

import React from 'react';
import './NotificationBar.css'; // Import CSS file for styling

const NotificationBar = ({ title, description, timings, venue }) => {
  return (
    <div className="notification-bar">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Timings:</strong> {timings}</p>
      <p><strong>Venue:</strong> {venue}</p>
      <button>Apply Now</button>
    </div>
  );
}

export default NotificationBar;
