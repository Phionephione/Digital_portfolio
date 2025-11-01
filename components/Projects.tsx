
import React from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import { PROJECTS, PERSONAL_INFO } from '../constants';

const Projects: React.FC = () => {
  return (
    // FIX: Update the section number due to the addition of the Education section.
    <Section title="04. My Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <div className="text-center mt-16">
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          I'm constantly working on new and exciting projects. Many more are available to view on my{' '}
          <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-semibold transition-colors">
            GitHub
          </a>
          , awaiting deployment!
        </p>
      </div>
    </Section>
  );
};

export default Projects;