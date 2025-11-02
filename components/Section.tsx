import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  const titleParts = title.split('.');
  const number = titleParts.length > 1 ? `${titleParts[0]}.` : '';
  const text = titleParts.length > 1 ? titleParts.slice(1).join('.').trim() : title;

  return (
    <section className="py-8 md:py-12 animate-fade-in-up">
      <div className="flex items-center justify-start mb-8 md:mb-12">
        <span className="text-2xl md:text-4xl font-bold text-blue-300 mr-3 md:mr-4">{number}</span>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-100 whitespace-nowrap">{text}</h2>
        <div className="h-px bg-gray-700 w-full ml-4 md:ml-6 hidden md:block"></div>
      </div>
      {children}
    </section>
  );
};

export default Section;
