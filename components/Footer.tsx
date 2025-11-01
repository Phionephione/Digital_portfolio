
import React from 'react';
import { PERSONAL_INFO, GithubIcon, LinkedInIcon } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-gray-800 text-center">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
        <a 
          href={`mailto:${PERSONAL_INFO.email}`} 
          className="text-lg text-blue-400 hover:text-blue-300 transition-colors duration-300"
        >
          {PERSONAL_INFO.email}
        </a>
      </div>
      <div className="flex justify-center items-center space-x-6 mb-8">
        <a 
          href={PERSONAL_INFO.socials.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-white transition-colors duration-300"
          aria-label="GitHub Profile"
        >
          <GithubIcon className="h-7 w-7" />
        </a>
        <a 
          href={PERSONAL_INFO.socials.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-white transition-colors duration-300"
          aria-label="LinkedIn Profile"
        >
          <LinkedInIcon className="h-7 w-7" />
        </a>
      </div>
      <p className="text-gray-500 text-sm">
        &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
