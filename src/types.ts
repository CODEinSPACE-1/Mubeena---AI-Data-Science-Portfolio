export interface SkillItem {
  id: string;
  name: string;
  category: 'AI & Data' | 'Frontend' | 'Tools';
  level: number; // 0 - 100
  iconName: string;
  description: string;
  color: string;
  accentHex: string;
}

export interface ProjectData {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  description: string;
  features: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  caseStudy: {
    problem: string;
    solution: string;
    architecture: string[];
    impact: string;
  };
}

export interface TimelineMilestone {
  year: string;
  title: string;
  status: 'completed' | 'current' | 'upcoming';
  description: string;
  highlights: string[];
}

export interface TechStackItem {
  name: string;
  role: string;
  category: string;
  color: string;
  glow: string;
  icon: string;
  version?: string;
}
