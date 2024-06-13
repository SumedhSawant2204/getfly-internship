// MainSection.js

import React from 'react';
import NotificationBar from './NotificationBar'; // Create SeminarCard component separately
import './NotificationSection.css'; // Import CSS file for styling

const NotificationSection = ({ notification }) => {
  return (
    <section className="notification-section">
      <h2>Latest Notification</h2>
      <div className="notification-list">
        {notification.map(notification => (
          <NotificationBar
            key={notification.id}
            title={notification.title}
            description={notification.description}
            timings={notification.timings}
            venue={notification.venue}
          />
        ))}
      </div>
    </section>
  );
}

export default NotificationSection;
