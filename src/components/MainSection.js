// MainSection.js

import React from 'react';
import SeminarCard from './SeminarCard'; // Create SeminarCard component separately
import './MainSection.css'; // Import CSS file for styling

const MainSection = ({ seminars }) => {
  return (
    <section className="main-section">
      <h2>Latest Seminars</h2>
      <div className="seminar-list">
        {seminars.map(seminar => (
          <SeminarCard
            key={seminar.id}
            title={seminar.title}
            description={seminar.description}
            timings={seminar.timings}
            venue={seminar.venue}
          />
        ))}
      </div>
    </section>
  );
}

export default MainSection;
