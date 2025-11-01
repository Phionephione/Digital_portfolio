
import React from 'react';
import Section from './Section';
import CertificationCard from './CertificationCard';
import { CERTIFICATIONS } from '../constants';

const Certifications: React.FC = () => {
  return (
    // FIX: Update the section number due to the addition of the Education section.
    <Section title="03. My Certifications">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CERTIFICATIONS.map((cert, index) => (
          <CertificationCard key={index} certification={cert} />
        ))}
      </div>
    </Section>
  );
};

export default Certifications;