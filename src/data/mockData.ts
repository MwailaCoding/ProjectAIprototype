import { Mountain, Project, User, Season, Achievement } from '../types';

export const mockMountains: Mountain[] = [
  {
    id: 'education',
    name: 'Education',
    description: 'Transform learning through innovative EdTech solutions',
    progress: 65,
    color: 'from-blue-500 to-blue-700',
    icon: 'GraduationCap',
    projects: 12
  },
  {
    id: 'government',
    name: 'Government',
    description: 'Build transparent and efficient civic technology',
    progress: 40,
    color: 'from-red-500 to-red-700',
    icon: 'Building',
    projects: 8
  },
  {
    id: 'business',
    name: 'Business',
    description: 'Create wealth through ethical enterprise',
    progress: 85,
    color: 'from-green-500 to-green-700',
    icon: 'Briefcase',
    projects: 24
  },
  {
    id: 'media',
    name: 'Media',
    description: 'Shape narratives with truth-driven content',
    progress: 55,
    color: 'from-purple-500 to-purple-700',
    icon: 'Tv',
    projects: 15
  },
  {
    id: 'arts',
    name: 'Arts & Entertainment',
    description: 'Inspire culture through creative excellence',
    progress: 70,
    color: 'from-pink-500 to-pink-700',
    icon: 'Palette',
    projects: 18
  },
  {
    id: 'family',
    name: 'Family',
    description: 'Strengthen foundations through family tech',
    progress: 50,
    color: 'from-orange-500 to-orange-700',
    icon: 'Users',
    projects: 10
  },
  {
    id: 'religion',
    name: 'Religion',
    description: 'Advance faith through digital ministry',
    progress: 75,
    color: 'from-yellow-500 to-yellow-700',
    icon: 'Church',
    projects: 14
  }
];

export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'EduChain Platform',
    description: 'Blockchain-based credential verification system',
    mountain: 'education',
    progress: 75,
    kingScore: 80,
    priestScore: 70,
    status: 'building'
  },
  {
    id: '2',
    name: 'CivicTrust App',
    description: 'Transparent government spending tracker',
    mountain: 'government',
    progress: 45,
    kingScore: 60,
    priestScore: 85,
    status: 'planning'
  },
  {
    id: '3',
    name: 'FaithFinance',
    description: 'Values-aligned investment platform',
    mountain: 'business',
    progress: 90,
    kingScore: 95,
    priestScore: 75,
    status: 'scaling'
  }
];

export const mockUser: User = {
  id: '1',
  name: 'David Builder',
  kingBalance: 68,
  priestBalance: 72,
  currentSeason: 'abundance',
  territoriesConquered: 4,
  wealthProjection: 2500000
};

export const mockSeasons: Season[] = [
  {
    name: 'AI Revolution',
    type: 'plenty',
    sector: 'Technology',
    recommendation: 'Launch AI-powered solutions NOW',
    timing: '2025-2027 Peak Opportunity'
  },
  {
    name: 'EdTech Expansion',
    type: 'harvest',
    sector: 'Education',
    recommendation: 'Scale existing platforms',
    timing: 'Current Window: 18 months'
  },
  {
    name: 'Economic Shift',
    type: 'preparation',
    sector: 'Finance',
    recommendation: 'Build resilient systems',
    timing: 'Prepare for 2026-2028'
  },
  {
    name: 'Media Disruption',
    type: 'plenty',
    sector: 'Media',
    recommendation: 'Create alternative platforms',
    timing: 'Critical Window: Now'
  }
];

export const mockAchievements: Achievement[] = [
  {
    id: '1',
    name: 'First Territory',
    description: 'Launched your first project in a mountain sector',
    icon: 'Flag',
    unlocked: true,
    category: 'territory'
  },
  {
    id: '2',
    name: 'Balance Master',
    description: 'Maintained Kings & Priests balance for 30 days',
    icon: 'Scale',
    unlocked: true,
    category: 'balance'
  },
  {
    id: '3',
    name: 'Season Navigator',
    description: 'Successfully timed a launch with market seasons',
    icon: 'Compass',
    unlocked: false,
    category: 'season'
  },
  {
    id: '4',
    name: 'Legacy Builder',
    description: 'Created a project with 5+ year impact potential',
    icon: 'Trophy',
    unlocked: true,
    category: 'legacy'
  },
  {
    id: '5',
    name: 'Mountain Conqueror',
    description: 'Reached 50% progress in 3 different mountains',
    icon: 'Mountain',
    unlocked: false,
    category: 'territory'
  }
];

export const legacyTerms = [
  { ministry: 'Taking territory', business: 'Strategic market penetration', example: 'Capturing market share in underserved sectors' },
  { ministry: 'Anointing', business: 'Unique competitive advantage', example: 'Proprietary technology or exclusive partnerships' },
  { ministry: 'Stewardship', business: 'Resource management', example: 'Efficient capital allocation and ROI optimization' },
  { ministry: 'Harvest', business: 'Revenue generation', example: 'Monetization strategy and customer acquisition' },
  { ministry: 'Sowing seeds', business: 'Strategic investment', example: 'Early-stage funding and market research' },
  { ministry: 'Kingdom advancement', business: 'Market expansion', example: 'Geographic growth and product diversification' }
];

export const aiCoFounders = [
  {
    name: 'The Builder',
    role: 'Technical Implementation',
    avatar: 'Hammer',
    expertise: ['Architecture', 'Development', 'Infrastructure'],
    personality: 'Pragmatic and execution-focused'
  },
  {
    name: 'The Steward',
    role: 'Business Ethics & Sustainability',
    avatar: 'Shield',
    expertise: ['Ethics', 'Compliance', 'Sustainability'],
    personality: 'Values-driven and principled'
  },
  {
    name: 'The Strategist',
    role: 'Market Positioning & Timing',
    avatar: 'Target',
    expertise: ['Strategy', 'Marketing', 'Competitive Analysis'],
    personality: 'Analytical and forward-thinking'
  },
  {
    name: 'The Sage',
    role: 'Purpose Alignment & Legacy',
    avatar: 'Lightbulb',
    expertise: ['Vision', 'Impact', 'Long-term Planning'],
    personality: 'Wisdom-focused and inspiring'
  }
];
