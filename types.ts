export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  category: 'NLP' | 'Development' | 'AI';
}

export interface TechnicalSkillGroup {
  category: string;
  skills: string[];
}

export interface LanguageSkill {
  language: string;
  level: string;
  proficiency: number; // 0-100 for visualization
}
