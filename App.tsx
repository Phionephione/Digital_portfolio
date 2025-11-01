
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import Education from './components/Education';

const App: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Account for scroll position to fix the hover effect when scrolled down
      const y = event.clientY + window.scrollY;
      // Set properties on the root element so the ::after pseudo-element can access them
      document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.style.removeProperty('--mouse-x');
      document.documentElement.style.removeProperty('--mouse-y');
    };
  }, []);


  return (
    <div className="interactive-grid-background bg-gray-900 text-gray-100 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Header />
        <main className="py-12 md:py-16">
          <About />
          <Education />
          <Certifications />
          <Projects />
          <Skills />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
