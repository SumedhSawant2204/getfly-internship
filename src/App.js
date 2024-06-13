// App.js

import React from 'react';
import NavBar from './components/NavBars';
import HeroSection from './components/HeroSection';
import MainSection from './components/MainSection';
import './App.css'; // Import global CSS file for styling

function App() {
  // Dummy data for demonstration
  const seminars = [
    {
      id: 1,
      title: 'Introduction to React.js',
      description: 'Learn the basics of React.js and its core concepts.',
      timings: 'June 25, 2024 at 10:00 AM',
      venue: 'Online'
    },
    {
      id: 2,
      title: 'Advanced JavaScript Techniques',
      description: 'Explore advanced JavaScript techniques and best practices.',
      timings: 'July 5, 2024 at 2:00 PM',
      venue: 'In-person'
    },
    {
      id: 3,
      title: 'Advanced JavaScript Techniques',
      description: 'Explore advanced JavaScript techniques and best practices.',
      timings: 'July 5, 2024 at 2:00 PM',
      venue: 'online'
    },
    {
      id: 4,
      title: 'Advanced JavaScript Techniques',
      description: 'Explore advanced JavaScript techniques and best practices.',
      timings: 'July 5, 2024 at 2:00 PM',
      venue: 'In-person'
    },
    {
      id: 5,
      title: 'Advanced JavaScript Techniques',
      description: 'Explore advanced JavaScript techniques and best practices.',
      timings: 'July 5, 2024 at 2:00 PM',
      venue: 'online'
    },
    // Add more seminar objects as needed
  ];

  return (
    <div className="App">
      <NavBar />
      <HeroSection totalSeminars={10} attendedSeminars={5} />
      <MainSection seminars={seminars} />
    </div>
  );
}

export default App;
