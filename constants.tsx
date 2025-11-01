
import React from 'react';
// FIX: Import EducationInfo which is now defined in types.ts
import { Project, SkillCategory, EducationInfo, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Chirag B J",
  email: "chiragbj8@gmail.com",
  about: "I'm a passionate Full Stack Developer with a knack for creating dynamic and user-friendly web applications. With a strong foundation in the MERN stack (MongoDB, Express.js, React, and Node.js), I enjoy turning complex problems into simple, beautiful, and intuitive designs. I'm always eager to learn new technologies and improve my skills to deliver high-quality software.",
  socials: {
    github: "https://github.com/Phionephione",
    linkedin: "https://www.linkedin.com/in/chirag-bj/",
  }
};

export const DYNAMIC_TITLES = [
  "Aspiring Developer",
  "Problem Solver",
  "Tech Enthusiast",
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "CSS" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "flask" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Render" },
      { name: "Vercel" },
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Software Engineering From EA (Job Simulation)",
    description: "Patched a bugfix and optimized the EA Sports College Football codebase by implementing an improved data structure.",
  },
  {
    title: "Generative AI Tools",
    description: "Gained foundational knowledge and practical skills in utilizing various Generative AI tools and platforms.",
  },
  {
    title: "Solutions Architecture From AWS (Job Simulation)",
    description: "Designed a simple and scalable hosting architecture based on Elastic Beanstalk for a client experiencing significant growth and slow response times.",
  },
  {
    title: "Web Development From City of Moreton Bay (Job Simulation)",
    description: "Completed a job simulation involving website planning and creation. Created a sitemap and userflow using a diagram creation tool. Used HTML & CSS to create a landing page.",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Student Assistant Chatbot",
    description: "A helpful chatbot designed to assist students by answering common questions, providing resources, and offering guidance on academic matters.",
    tags: ["Python", "NLTK", "Tkinter", "AI Chatbot"],
    image: "https://i.imgur.com/kEw5iB8.png",
    githubUrl: "https://github.com/Phionephione/Student-Assistant-Chatbot",
    liveUrl: "https://student-assistant-chatbot-8u56.onrender.com",
  },
  {
    title: "WeebVibe",
    description: "A web application for anime and manga enthusiasts to discover new series, track their watch progress, and engage with a community of fans.",
    tags: ["React", "Node.js", "MongoDB", "MERN"],
     image: "https://i.imgur.com/fL3n5gS.jpg",
    githubUrl: "https://github.com/Phionephione/WeebVibe",
    liveUrl: "https://weebvibe.onrender.com",
  },
];

// FIX: Add and export missing EDUCATION constant
export const EDUCATION: EducationInfo = {
  degree: "Bachelor Computer Applications",
  institution: "KLE Society's degree college, Bengaluru",
  years: "2023 - 2026",
};

// SVG Icons
export const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
);

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

export const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5 0V6.375c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125-1.125h-4.5A1.125 1.125 0 0110.5 10.5z" />
    </svg>
);