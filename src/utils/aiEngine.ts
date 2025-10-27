// AI Engine with pattern matching and intelligent recommendations

export interface AIResponse {
  text: string;
  confidence: number;
  suggestions?: string[];
}

export interface ProjectIdea {
  name: string;
  problem: string;
  mountain?: string;
}

const techStackPatterns = {
  education: ['React', 'Node.js', 'PostgreSQL', 'AI/ML', 'Blockchain'],
  government: ['React', 'Python', 'Django', 'PostgreSQL', 'Security'],
  business: ['React', 'TypeScript', 'Firebase', 'Payment APIs', 'Analytics'],
  media: ['Next.js', 'Supabase', 'CDN', 'Video Processing', 'Social Features'],
  arts: ['React', 'WebGL', 'Payment Gateway', 'NFT', 'Marketplace'],
  family: ['React Native', 'Real-time DB', 'Secure Storage', 'Notifications', 'Calendar'],
  religion: ['WordPress', 'Custom Themes', 'Giving Platform', 'Community Features', 'Analytics']
};

const businessModels = {
  education: 'Freemium model with premium courses, B2B licensing for institutions, projected $500K ARR Year 1',
  government: 'SaaS subscription for municipalities, per-seat pricing, transparency packages starting at $299/month',
  business: 'Commission-based marketplace, premium features, enterprise partnerships',
  media: 'Subscription tiers, sponsored content, premium ad-free experience',
  arts: 'Transaction fees, premium listings, artist subscriptions',
  family: 'Subscription-based with tiered features, affiliate partnerships',
  religion: 'Donation-based with optional premium features, church partnerships'
};

const seasonTiming = {
  education: 'Current season: PLENTY - Launch within 90 days',
  government: 'Current season: PREPARATION - Build now for 2026 launch',
  business: 'Current season: PLENTY - Launch within 60 days',
  media: 'Current season: PLENTY - Critical window now',
  arts: 'Current season: HARVEST - Scale existing platforms',
  family: 'Current season: PLENTY - Launch within 120 days',
  religion: 'Current season: PREPARATION - Build infrastructure for launch'
};

export function detectMountain(idea: string): string {
  const keywords = {
    education: ['learn', 'teach', 'education', 'school', 'student', 'course', 'curriculum'],
    government: ['government', 'civic', 'citizen', 'transparency', 'public', 'policy', 'voting'],
    business: ['business', 'enterprise', 'revenue', 'sale', 'commerce', 'b2b', 'b2c'],
    media: ['content', 'media', 'social', 'news', 'publish', 'broadcast', 'stream'],
    arts: ['art', 'creative', 'music', 'design', 'entertainment', 'performance', 'gallery'],
    family: ['family', 'parent', 'children', 'home', 'relationship', 'communication'],
    religion: ['faith', 'church', 'ministry', 'prayer', 'worship', 'community', 'spiritual']
  };

  const lowerIdea = idea.toLowerCase();
  let maxScore = 0;
  let detectedMountain = 'business';

  Object.entries(keywords).forEach(([mountain, terms]) => {
    const score = terms.filter(term => lowerIdea.includes(term)).length;
    if (score > maxScore) {
      maxScore = score;
      detectedMountain = mountain;
    }
  });

  return detectedMountain;
}

export function generateProjectPlan(idea: ProjectIdea): any {
  const mountain = idea.mountain || detectMountain(`${idea.name} ${idea.problem}`);
  
  return {
    name: idea.name,
    mountain,
    technical: techStackPatterns[mountain as keyof typeof techStackPatterns]?.join(', ') || 'React, TypeScript, Node.js',
    business: businessModels[mountain as keyof typeof businessModels] || 'Freemium with premium features',
    timing: seasonTiming[mountain as keyof typeof seasonTiming] || 'Launch within 90 days',
    mountainName: mountain.charAt(0).toUpperCase() + mountain.slice(1)
  };
}

export function getCoFounderAdvice(cofounder: string, context: any): AIResponse {
  const responses: Record<string, any> = {
    'The Builder': {
      default: {
        text: "Let's focus on building a solid technical foundation. I recommend starting with a MVP that validates your core hypothesis while keeping costs low and iteration fast.",
        confidence: 0.92,
        suggestions: [
          'Set up staging environment',
          'Choose scalable architecture',
          'Implement version control',
          'Plan for CI/CD pipeline'
        ]
      },
      education: {
        text: "For EdTech projects, focus on user engagement and learning outcomes. Build analytics from day one to measure student progress.",
        confidence: 0.95
      }
    },
    'The Steward': {
      default: {
        text: "Ensure your business model aligns with ethical principles. Consider how this creates sustainable value for all stakeholders while maintaining profitability.",
        confidence: 0.88,
        suggestions: [
          'Define stakeholder value',
          'Set ethical guidelines',
          'Plan for long-term sustainability',
          'Consider environmental impact'
        ]
      }
    },
    'The Strategist': {
      default: {
        text: "Based on current market conditions, this is an optimal time to launch. Focus on clear differentiation and strong positioning against competitors.",
        confidence: 0.90,
        suggestions: [
          'Analyze competitor positioning',
          'Identify unique value proposition',
          'Develop go-to-market strategy',
          'Plan growth milestones'
        ]
      }
    },
    'The Sage': {
      default: {
        text: "Remember your purpose beyond profit. This venture should create generational impact and advance kingdom values. Let your calling guide your decisions.",
        confidence: 0.93,
        suggestions: [
          'Connect project to vision',
          'Define lasting impact',
          'Consider 5-generation legacy',
          'Document purpose statement'
        ]
      }
    }
  };

  const cofounderResponses = responses[cofounder];
  if (!cofounderResponses) {
    return {
      text: "I'm here to help guide your project. What specific challenge would you like to address?",
      confidence: 0.75
    };
  }

  const contextKey = context.mountain || 'default';
  return cofounderResponses[contextKey] || cofounderResponses.default || {
    text: "Let me provide guidance specific to your situation...",
    confidence: 0.80
  };
}

export function calculateSuccessProbability(project: any, balance: any): number {
  let probability = 50; // Base probability

  // Timing bonus
  if (project.timing?.includes('PLENTY')) {
    probability += 20;
  }

  // Balance bonus
  const balanceDiff = Math.abs(balance.king - balance.priest);
  if (balanceDiff < 10) {
    probability += 15;
  }

  // Mountain progress bonus
  if (balance.territoriesConquered >= 3) {
    probability += 10;
  }

  return Math.min(95, probability);
}

