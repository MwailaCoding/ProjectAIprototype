export interface Partner {
  id: string;
  name: string;
  logo: string;
  tier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
  investment: number;
  impact: string;
}

export const partners: Partner[] = [
  {
    id: 'datacamp',
    name: 'Datacamp',
    logo: '📊',
    tier: 'Gold',
    investment: 50000,
    impact: 'AI Career Essentials platform access'
  },
  {
    id: 'alx',
    name: 'ALX Africa',
    logo: '🎓',
    tier: 'Gold',
    investment: 100000,
    impact: 'ALX AI Career Essentials integration'
  },
  {
    id: 'zindi',
    name: 'Zindi.africa',
    logo: '🎯',
    tier: 'Silver',
    investment: 25000,
    impact: 'Real-world challenge platform partnership'
  },
  {
    id: 'powerlearn',
    name: 'Power Learn Project',
    logo: '🔋',
    tier: 'Silver',
    investment: 50000,
    impact: 'AI Safari curriculum integration'
  }
];

export interface SponsorshipTier {
  id: string;
  name: string;
  investment: string;
  studentsSponsored: number;
  benefits: string[];
  roi: string;
}

export const sponsorshipTiers: SponsorshipTier[] = [
  {
    id: 'bronze',
    name: 'Bronze',
    investment: '$10K',
    studentsSponsored: 2,
    benefits: [
      '2 students sponsored for 6 months',
      'Company logo on website',
      'Quarterly impact reports',
      'Invitation to demo days'
    ],
    roi: 'High student placement rate'
  },
  {
    id: 'silver',
    name: 'Silver',
    investment: '$50K',
    studentsSponsored: 10,
    benefits: [
      'Launch specialized studio in your sector',
      'Customized curriculum',
      'Direct recruitment pipeline',
      'Monthly success reports',
      'Branded program delivery'
    ],
    roi: 'Skilled talent pipeline + brand visibility'
  },
  {
    id: 'gold',
    name: 'Gold',
    investment: '$100K',
    studentsSponsored: 20,
    benefits: [
      'Full cohort sponsorship (20 students)',
      'Priority recruitment access',
      'Custom venture partnerships',
      'Co-branding opportunities',
      'Quarterly executive briefings'
    ],
    roi: 'Strategic talent acquisition + innovation'
  },
  {
    id: 'platinum',
    name: 'Platinum',
    investment: '$250K+',
    studentsSponsored: 50,
    benefits: [
      'Custom impact program',
      'Dedicated program director',
      'Exclusive events & dinners',
      'Board representation',
      'Annual impact study'
    ],
    roi: 'Market leadership + transformation impact'
  }
];

export interface PilotMetrics {
  studentsEnrolled: number;
  projectsLaunched: number;
  completionRate: number;
  studentsEmployed: number;
  fundingSecured: number;
  venturesWithRevenue: number;
}

export const pilotMetrics: PilotMetrics = {
  studentsEnrolled: 50,
  projectsLaunched: 12,
  completionRate: 85,
  studentsEmployed: 8,
  fundingSecured: 230000,
  venturesWithRevenue: 4
};

export interface Event {
  id: string;
  title: string;
  type: 'cohort' | 'dinner' | 'demo' | 'pitch' | 'networking';
  date: string;
  location: string;
  attendees?: string;
  description: string;
}

export const events: Event[] = [
  {
    id: 'cohort-q1',
    title: 'Q1 2025 Cohort Launch',
    type: 'cohort',
    date: '2025-01-15',
    location: 'Virtual',
    description: 'Kickoff for 50-student cohort, onboarding week'
  },
  {
    id: 'dinner-jan',
    title: 'Kings & Priests Dinner',
    type: 'dinner',
    date: '2025-01-25',
    location: 'Nairobi',
    attendees: '50',
    description: 'Fundraising dinner with investors and partners'
  },
  {
    id: 'networking-jan',
    title: 'Student Networking Event',
    type: 'networking',
    date: '2025-01-30',
    location: 'Nairobi',
    description: 'Bi-weekly networking for students and alumni'
  },
  {
    id: 'cohort-q2',
    title: 'Q2 2025 Cohort Launch',
    type: 'cohort',
    date: '2025-04-15',
    location: 'Virtual',
    description: 'Second cohort of 50 students'
  },
  {
    id: 'pitch-q1',
    title: 'Quarterly Pitch Competition',
    type: 'pitch',
    date: '2025-03-20',
    location: 'Nairobi',
    description: 'Top 10 teams pitch to investors'
  },
  {
    id: 'demo-q1',
    title: 'Q1 Demo Day',
    type: 'demo',
    date: '2025-03-30',
    location: 'Virtual',
    description: 'Showcase of Q1 cohort projects'
  }
];

export interface ImpactMetrics {
  totalStudents: number;
  activeVentures: number;
  jobsCreated: number;
  revenueGenerated: number;
  generationalWealth: number;
  kingdomScore: number;
}

export const impactMetrics: ImpactMetrics = {
  totalStudents: 150,
  activeVentures: 32,
  jobsCreated: 45,
  revenueGenerated: 1200000,
  generationalWealth: 8500000,
  kingdomScore: 87
};

export interface AdvisoryMember {
  id: string;
  name: string;
  title: string;
  type: 'King' | 'Priest' | 'Technical';
  mountain: string;
  bio: string;
}

export const advisoryBoard: AdvisoryMember[] = [
  {
    id: 'member1',
    name: 'Dr. Sarah Johnson',
    title: 'Business Strategist',
    type: 'King',
    mountain: 'Business',
    bio: 'Former McKinsey partner, 20+ years scaling ventures'
  },
  {
    id: 'member2',
    name: 'Pastor Michael Wang',
    title: 'Kingdom Strategist',
    type: 'Priest',
    mountain: 'Religion',
    bio: 'Thought leader in marketplace ministry and territory taking'
  },
  {
    id: 'member3',
    name: 'James Kariuki',
    title: 'CTO',
    type: 'Technical',
    mountain: 'Media',
    bio: 'AI expert, former Google AI lead, serial entrepreneur'
  },
  {
    id: 'member4',
    name: 'Dr. Amina Hassan',
    title: 'Legal Advisor',
    type: 'King',
    mountain: 'Government',
    bio: 'Tech lawyer, IP expert, startup legal strategy'
  },
  {
    id: 'member5',
    name: 'Bishop David Chen',
    title: 'Theology Advisor',
    type: 'Priest',
    mountain: 'Religion',
    bio: 'Scholar on Joseph Principle and biblical economics'
  },
  {
    id: 'member6',
    name: 'Patricia Okafor',
    title: 'Educational Strategist',
    type: 'King',
    mountain: 'Education',
    bio: 'Education innovation expert, ALX co-founder'
  }
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  type: 'student' | 'parent' | 'employer';
  quote: string;
  rating: number;
  impact?: string;
  video?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'test1',
    name: 'David Builder',
    role: 'EduChain Founder',
    type: 'student',
    quote: 'Project AI Studio transformed me from a coder to a kingdom entrepreneur. The Kings & Priests balance system kept me focused on purpose while building a profitable venture.',
    rating: 5,
    impact: 'Raised $150K, launched EduChain'
  },
  {
    id: 'test2',
    name: 'Sarah Chen',
    role: 'AgriConnect Founder',
    type: 'student',
    quote: 'The Joseph Principle timing feature helped me launch at the perfect moment. My venture is now generating $10K/month revenue while impacting 8,000+ farmers.',
    rating: 5,
    impact: '$500K in transactions processed'
  },
  {
    id: 'test3',
    name: 'Mrs. Okafor',
    role: 'Parent',
    type: 'parent',
    quote: 'My son went from unemployed to running his own AI company in 6 months. This program is life-transforming!',
    rating: 5
  },
  {
    id: 'test4',
    name: 'Tech Corp Ltd',
    role: 'Employer',
    type: 'employer',
    quote: 'Hired 3 Project AI Studio graduates. Their technical skills + business acumen make them exceptional team members.',
    rating: 5,
    impact: '3 hires from program'
  }
];

export interface RevenueStream {
  source: string;
  amount: number;
  percentage: number;
}

export const revenueStreams: RevenueStream[] = [
  { source: 'Student Contributions', amount: 100000, percentage: 35 },
  { source: 'Corporate Sponsorships', amount: 150000, percentage: 54 },
  { source: 'Success Fees', amount: 16000, percentage: 6 },
  { source: 'Studio Fees', amount: 12000, percentage: 4 },
  { source: 'Partnership Revenue', amount: 6000, percentage: 2 }
];

export const unitEconomics = {
  costPerStudent: 2000,
  revenuePerStudent: 2800,
  grossMargin: 40,
  breakEven: 75,
  scalabilityMargin: 90
};

export const fiveYearProjections = [
  { year: 1, students: 50, revenue: 140000 },
  { year: 2, students: 200, revenue: 560000 },
  { year: 3, students: 500, revenue: 1400000 },
  { year: 4, students: 1000, revenue: 2800000 },
  { year: 5, students: 2000, revenue: 5600000 }
];

