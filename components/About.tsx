
import React from 'react';
import Section from './Section';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <Section title="01. About Me">
      <p className="text-gray-300 text-lg leading-relaxed max-w-4xl text-center md:text-left mx-auto md:mx-0">
        {PERSONAL_INFO.about}
      </p>
    </Section>
  );
};

export default About;
