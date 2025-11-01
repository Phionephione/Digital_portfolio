
import React, { useState } from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, tags, image, githubUrl, liveUrl } = project;
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
      className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-blue-500 hover:-translate-y-2 group flex flex-col"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-blue-300 mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="bg-blue-900/50 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-4 flex items-center space-x-4">
           <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-300 border border-blue-300 font-semibold px-6 py-2 rounded-md hover:bg-blue-300 hover:text-gray-900 transition-colors duration-300"
              aria-label={`View code for ${title}`}
            >
              View Code
            </a>
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-teal-300 border border-teal-300 font-semibold px-6 py-2 rounded-md hover:bg-teal-300 hover:text-gray-900 transition-colors duration-300"
                aria-label={`View live demo for ${title}`}
              >
                Live Demo
              </a>
            )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;