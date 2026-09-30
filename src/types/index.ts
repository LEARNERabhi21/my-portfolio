export type ProjectCategory = 'All' | 'Web' | 'Automation' | 'AI' | 'React' | 'Zoho' | 'Python';

export interface ProjectCaseStudy {
  problem: string;
  requirements: string[];
  approach: string;
  architecture: string;
  technologies: string[];
  implementation: string[];
  challenges: string;
  solutions: string;
  result: string;
  lessonsLearned: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ('Web' | 'Automation' | 'AI' | 'React' | 'Zoho' | 'Python')[];
  description: string;
  featured: boolean;
  status: 'Production' | 'Live' | 'Completed' | 'In Development';
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  metrics?: { label: string; value: string }[];
  caseStudy: ProjectCaseStudy;
}

export interface SkillItem {
  name: string;
  description?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  period: string;
  type: string;
  summary: string;
  bullets: string[];
  technologies: string[];
  verifiedImpact: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
  category: string;
  skillsCovered: string[];
}

export interface LearningItem {
  id: string;
  title: string;
  category: 'AI & Machine Learning' | 'Modern Software Architecture' | 'Backend & Data Systems' | 'Cloud & DevOps';
  status: 'In Progress' | 'Exploring' | 'Deep Dive';
  focus: string;
  description: string;
  milestones: string[];
  technologies: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  serviceType?: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  positioning: string;
  bioSummary: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
  };
  stats: {
    label: string;
    value: string;
    sublabel: string;
  }[];
}
