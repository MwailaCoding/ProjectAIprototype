export interface LearningModule {
  id: string;
  title: string;
  platform: string;
  description: string;
  duration: string;
  progress: number;
  skills: string[];
  certificate: boolean;
  url: string;
}

export const learningModules: LearningModule[] = [
  {
    id: 'datacamp-ai-essentials',
    title: 'AI Career Essentials',
    platform: 'Datacamp',
    description: 'Master the fundamentals of AI including machine learning, neural networks, and data science.',
    duration: '6 weeks',
    progress: 45,
    skills: ['Machine Learning', 'Data Analysis', 'Python', 'Neural Networks'],
    certificate: true,
    url: 'https://www.datacamp.com/'
  },
  {
    id: 'alx-career-ready',
    title: 'ALX AI Career Essentials',
    platform: 'ALX Africa',
    description: 'Intensive career-ready program focusing on practical AI applications and industry skills.',
    duration: '12 weeks',
    progress: 0,
    skills: ['AI Applications', 'Career Readiness', 'Industry Skills'],
    certificate: true,
    url: 'https://www.alxafrica.com/programme/career-ready-skills-training/'
  },
  {
    id: 'powerlearn-ai-safari',
    title: 'Power Learn Project AI Safari',
    platform: 'Power Learn Project',
    description: 'Beginner-friendly AI exploration journey covering core concepts and hands-on projects.',
    duration: '8 weeks',
    progress: 0,
    skills: ['AI Fundamentals', 'Hands-on Projects', 'Core Concepts'],
    certificate: true,
    url: 'https://powerlearnprojectafrica.org/programs/ai-safari'
  },
  {
    id: 'datacamp-ml-intermediate',
    title: 'Machine Learning for Business',
    platform: 'Datacamp',
    description: 'Learn how to apply ML to solve real business problems and create value.',
    duration: '10 weeks',
    progress: 0,
    skills: ['ML for Business', 'Applied ML', 'Value Creation'],
    certificate: true,
    url: 'https://www.datacamp.com/'
  }
];

export interface ZindiChallenge {
  id: string;
  title: string;
  category: string;
  mountain: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  prize: string;
  deadline: string;
  status: 'active' | 'upcoming' | 'completed';
  description: string;
  skills: string[];
}

export const zindiChallenges: ZindiChallenge[] = [
  {
    id: 'farm-yield-prediction',
    title: 'Crop Yield Prediction for Small Farmers',
    category: 'Agriculture',
    mountain: 'Business',
    difficulty: 'Intermediate',
    prize: '$5,000',
    deadline: '2025-02-15',
    status: 'active',
    description: 'Build ML models to predict crop yields and help farmers optimize their harvest.',
    skills: ['Machine Learning', 'Time Series', 'Data Analysis']
  },
  {
    id: 'health-outreach',
    title: 'Health Outreach Optimization',
    category: 'Health',
    mountain: 'Government',
    difficulty: 'Advanced',
    prize: '$10,000',
    deadline: '2025-03-01',
    status: 'active',
    description: 'Optimize mobile health clinic routes to maximize community coverage.',
    skills: ['Optimization', 'Route Planning', 'Data Science']
  },
  {
    id: 'financial-inclusion',
    title: 'Credit Scoring for Financial Inclusion',
    category: 'Finance',
    mountain: 'Business',
    difficulty: 'Intermediate',
    prize: '$7,500',
    deadline: '2025-02-28',
    status: 'active',
    description: 'Develop credit scoring models for underserved populations.',
    skills: ['Machine Learning', 'Risk Assessment', 'Finance']
  },
  {
    id: 'education-assessment',
    title: 'Automated Educational Assessment',
    category: 'Education',
    mountain: 'Education',
    difficulty: 'Beginner',
    prize: '$3,000',
    deadline: '2025-02-10',
    status: 'upcoming',
    description: 'Create AI-powered assessment tools for remote learning.',
    skills: ['NLP', 'Educational Technology', 'AI Applications']
  }
];

export interface PitchTemplate {
  id: string;
  name: string;
  sections: string[];
  mountain: string;
}

export const pitchTemplates: PitchTemplate[] = [
  {
    id: 'fintech',
    name: 'FinTech Venture Pitch',
    sections: ['Problem', 'Solution', 'Market', 'Model', 'Financials', 'Ask'],
    mountain: 'Business'
  },
  {
    id: 'legal',
    name: 'LegalTech Solution Pitch',
    sections: ['Problem', 'Solution', 'Compliance', 'Model', 'Financials', 'Ask'],
    mountain: 'Government'
  },
  {
    id: 'agritech',
    name: 'AgriTech Innovation Pitch',
    sections: ['Problem', 'Solution', 'Impact', 'Model', 'Financials', 'Ask'],
    mountain: 'Business'
  },
  {
    id: 'edtech',
    name: 'EduTech Platform Pitch',
    sections: ['Problem', 'Solution', 'Market', 'Model', 'Financials', 'Ask'],
    mountain: 'Education'
  }
];

export interface StudioCategory {
  id: string;
  name: string;
  description: string;
  focus: string[];
  projects: number;
  color: string;
}

export const studioCategories: StudioCategory[] = [
  {
    id: 'fintech',
    name: 'FinTech Studio',
    description: 'Payment, banking, investment, and financial innovation solutions',
    focus: ['Payment Systems', 'Digital Banking', 'Investment Platforms', 'Financial Inclusion'],
    projects: 8,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'legaltech',
    name: 'LegalTech Studio',
    description: 'Contract automation, compliance, legal process optimization',
    focus: ['Contract Automation', 'Compliance', 'Legal Process', 'Document Management'],
    projects: 5,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'agritech',
    name: 'AgriTech Studio',
    description: 'Farm management, supply chain, agricultural optimization',
    focus: ['Farm Management', 'Supply Chain', 'Crop Optimization', 'Market Access'],
    projects: 6,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'healthtech',
    name: 'HealthTech Studio',
    description: 'Diagnostics, telemedicine, health data management',
    focus: ['Diagnostics', 'Telemedicine', 'Health Data', 'Patient Care'],
    projects: 4,
    color: 'from-red-500 to-pink-500'
  },
  {
    id: 'edtech',
    name: 'EduTech Studio',
    description: 'Learning platforms, assessment tools, educational innovation',
    focus: ['Learning Platforms', 'Assessment Tools', 'Content Creation', 'Teacher Tools'],
    projects: 7,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'mediatech',
    name: 'MediaTech Studio',
    description: 'Content creation, distribution, digital media platforms',
    focus: ['Content Creation', 'Distribution', 'Digital Platforms', 'Creator Tools'],
    projects: 5,
    color: 'from-purple-500 to-blue-500'
  }
];

export interface TeamMember {
  id: string;
  name: string;
  skills: string[];
  mountain: string;
  availability: 'Available' | 'Committed' | 'Unavailable';
  bio: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'member1',
    name: 'Sarah Chen',
    skills: ['Python', 'Machine Learning', 'Data Science'],
    mountain: 'Business',
    availability: 'Available',
    bio: 'Data scientist with 3 years experience in ML applications'
  },
  {
    id: 'member2',
    name: 'Michael Okafor',
    skills: ['Business Development', 'Sales', 'Strategy'],
    mountain: 'Business',
    availability: 'Available',
    bio: 'Business strategist focused on market penetration'
  },
  {
    id: 'member3',
    name: 'Priya Patel',
    skills: ['Full Stack Development', 'React', 'Node.js'],
    mountain: 'Media',
    availability: 'Committed',
    bio: 'Full-stack developer passionate about tech-for-good'
  },
  {
    id: 'member4',
    name: 'David Kim',
    skills: ['UX/UI Design', 'Product Design', 'User Research'],
    mountain: 'Arts',
    availability: 'Available',
    bio: 'Designer with expertise in user-centered design'
  },
  {
    id: 'member5',
    name: 'Amina Hassan',
    skills: ['Legal', 'Compliance', 'Contract Law'],
    mountain: 'Government',
    availability: 'Available',
    bio: 'Legal expert specializing in tech compliance'
  }
];

export interface StrategicProblem {
  id: string;
  title: string;
  mountain: string;
  description: string;
  impact: string;
  season: 'plenty' | 'harvest' | 'preparation' | 'famine';
  priority: 'High' | 'Medium' | 'Low';
}

export const strategicProblems: StrategicProblem[] = [
  {
    id: 'prob1',
    title: 'Digital Financial Inclusion Gap',
    mountain: 'Business',
    description: 'Millions lack access to traditional banking and digital payment systems',
    impact: '250M+ underserved',
    season: 'plenty',
    priority: 'High'
  },
  {
    id: 'prob2',
    title: 'Farmer Market Access Challenge',
    mountain: 'Business',
    description: 'Small-scale farmers struggle to reach markets and fair pricing',
    impact: '500K+ farmers affected',
    season: 'harvest',
    priority: 'High'
  },
  {
    id: 'prob3',
    title: 'Transparency in Government Spending',
    mountain: 'Government',
    description: 'Citizens need better tools to track and analyze government budgets',
    impact: 'National scale',
    season: 'plenty',
    priority: 'High'
  },
  {
    id: 'prob4',
    title: 'Personalized Learning Gap',
    mountain: 'Education',
    description: 'One-size-fits-all education fails diverse learners',
    impact: 'Millions of students',
    season: 'plenty',
    priority: 'High'
  }
];

