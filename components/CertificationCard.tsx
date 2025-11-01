
import React, { useState } from 'react';
import { Certification } from '../types';

const CertificationCard: React.FC<{ certification: Certification }> = ({ certification }) => {
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
    <div 
      style={cardStyle as React.CSSProperties}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-blue-500 hover:-translate-y-1 h-full"
    >
      <h3 className="text-xl font-bold text-blue-300 mb-2">{certification.title}</h3>
      <p className="text-gray-400">{certification.description}</p>
    </div>
  );
};

export default CertificationCard;