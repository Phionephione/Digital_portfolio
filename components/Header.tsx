
import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, GithubIcon, LinkedInIcon, DYNAMIC_TITLES } from '../constants';

const Header: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const delay = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const currentTitle = DYNAMIC_TITLES[titleIndex];
      const updatedText = isDeleting
        ? currentTitle.substring(0, displayedText.length - 1)
        : currentTitle.substring(0, displayedText.length + 1);

      setDisplayedText(updatedText);

      if (!isDeleting && updatedText === currentTitle) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setTitleIndex((prevIndex) => (prevIndex + 1) % DYNAMIC_TITLES.length);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, titleIndex]);


  return (
    <header className="py-20 md:py-32 text-center animate-fade-in-up flex flex-col items-center justify-center min-h-[80vh]">
      <p className="mb-4 text-xl sm:text-2xl md:text-3xl text-blue-400 font-medium">
        Welcome To My Digital Portfolio
      </p>
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight">
        {PERSONAL_INFO.name}
      </h1>
       <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-300 h-8">
        I'm an&nbsp;
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 font-semibold border-r-2 border-teal-400 animate-blink pr-1">
          {displayedText}
        </span>
      </p>
      <div className="mt-8 flex justify-center items-center space-x-6">
        <a 
          href={PERSONAL_INFO.socials.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-white transition-colors duration-300"
          aria-label="GitHub Profile"
        >
          <GithubIcon className="h-8 w-8" />
        </a>
        <a 
          href={PERSONAL_INFO.socials.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-white transition-colors duration-300"
          aria-label="LinkedIn Profile"
        >
          <LinkedInIcon className="h-8 w-8" />
        </a>
      </div>
    </header>
  );
};

export default Header;