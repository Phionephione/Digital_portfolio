import React, { useState } from 'react';
import Section from './Section';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  const [cardStyle, setCardStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCardStyle({
      '--mouse-x': `${x}px`,
      '--mouse-y': `${y}px`,
      backgroundImage: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(45, 212, 191, 0.2), transparent 250px)`
    });
  };

  const handleMouseLeave = () => {
    setCardStyle({});
  };

  return (
    <Section title="02. Education">
      <div 
        style={cardStyle as React.CSSProperties}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 animate-fade-in-up"
      >
        <h3 className="text-xl font-bold text-white">{EDUCATION.degree}</h3>
        <p className="text-blue-300 mt-1">{EDUCATION.institution}</p>
        <p className="text-gray-400 mt-1">{EDUCATION.years}</p>
      </div>
    </Section>
  );
};

export default Education;