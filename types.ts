export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title:string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
}

export interface Certification {
  title: string;
  description: string;
}

// FIX: Add missing EducationInfo interface
export interface EducationInfo {
  degree: string;
  institution: string;
  years: string;
}
