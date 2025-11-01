
import React from 'react';
import Section from './Section';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    // FIX: Update the section number due to the addition of the Education section.
    <Section title="05. Technical Skills">
      <div className="space-y-8">
        {SKILL_CATEGORIES.map((category) => (
          <div key={category.title}>
            <h3 className="text-xl font-semibold text-blue-300 mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span 
                  key={skill.name}
                  className="bg-gray-800 text-teal-300 text-sm font-medium px-4 py-2 rounded-full shadow-md border border-gray-700"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;