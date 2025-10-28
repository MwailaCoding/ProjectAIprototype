// Comprehensive Knowledge Base for Voice Assistant
// Covers all features, concepts, and navigation

export interface KnowledgeTopic {
  keywords: string[];
  shortAnswer: string;
  detailedAnswer: string;
  relatedTopics: string[];
  suggestedActions?: string[];
  category: 'concept' | 'feature' | 'how-to' | 'navigation';
}

export const knowledgeBase: Record<string, KnowledgeTopic> = {
  // CORE CONCEPTS
  'seven-mountains': {
    keywords: ['7 mountains', 'seven mountains', 'territory', 'mountains', 'cultural influence'],
    shortAnswer: 'The 7 Mountains are key spheres of cultural influence: Education, Government, Business, Media, Arts & Entertainment, Family, and Religion.',
    detailedAnswer: `The 7 Mountains strategy focuses on taking territory across Education, Government, Business, Media, Arts & Entertainment, Family, and Religion. Each mountain represents a sphere of cultural influence where kingdom-minded entrepreneurs can create lasting impact. Your territory progress shows how much influence you've gained in each area. Conquering territory means establishing sustainable ventures that transform culture from a biblical worldview.`,
    relatedTopics: ['territory-map', 'territory-conquest', 'progress-tracking'],
    suggestedActions: ['Navigate to Territory Map', 'View your territory progress', 'Check which mountains need focus'],
    category: 'concept'
  },
  
  'kings-priests': {
    keywords: ['kings and priests', 'king priest balance', 'balance system', 'king score', 'priest score'],
    shortAnswer: 'The Kings & Priests balance maintains harmony between wealth creation (King) and ministry impact (Priest).',
    detailedAnswer: `The Kings & Priests balance is a system that helps you maintain harmony between wealth creation and ministry impact. The King represents your business excellence, wealth creation, and leadership in the marketplace. The Priest represents your ministry impact, spiritual service, and purpose-driven work. An optimal balance prevents burnout, financial strain, and ensures both purpose and profit flourish together. The system monitors your activities in both areas and alerts you when you're imbalanced.`,
    relatedTopics: ['balance-dashboard', 'king-score', 'priest-score', 'imbalance-warning'],
    suggestedActions: ['Navigate to Kings & Priests Balance', 'Check your current balance', 'View integration recommendations'],
    category: 'concept'
  },
  
  'joseph-principle': {
    keywords: ['joseph principle', 'seasons', 'timing', 'plenty', 'famine', 'harvest', 'preparation'],
    shortAnswer: 'The Joseph Principle teaches strategic timing based on four seasons: Plenty, Harvest, Preparation, and Famine.',
    detailedAnswer: `The Joseph Principle is based on Joseph's strategic management in Egypt during seven years of plenty and seven years of famine. It teaches four seasons: Plenty (launch boldly, build momentum), Harvest (scale ventures, maximize opportunity), Preparation (build infrastructure, develop skills), and Famine (consolidate, strategic positioning). The Seasons Hub analyzes market conditions and shows when each sector is in which season, helping you time your ventures strategically.`,
    relatedTopics: ['seasons-hub', 'current-season', 'timing-intelligence'],
    suggestedActions: ['Navigate to Seasons Hub', 'Check current season', 'View seasonal opportunities'],
    category: 'concept'
  },
  
  'generational-wealth': {
    keywords: ['generational wealth', 'five generation', 'legacy', 'wealth simulator', 'impact'],
    shortAnswer: 'Generational wealth focuses on building sustainable ventures that impact five generations through business excellence.',
    detailedAnswer: `Generational wealth goes beyond personal financial success. It's about building ventures that create sustainable impact for five generations. The Wealth Simulator models how your ventures multiply wealth, jobs created, lives impacted, and legacy established over multiple generations. It's not just about money, but about creating systems that continue generating value, influence, and kingdom advancement long after you're gone.`,
    relatedTopics: ['wealth-simulator', 'legacy-building', 'multi-generation'],
    suggestedActions: ['Navigate to Wealth Simulator', 'Run 5-generation projection', 'View legacy impact'],
    category: 'concept'
  },
  
  // FEATURE EXPLANATIONS
  'territory-map': {
    keywords: ['territory map', 'show mountains', 'territory visualization'],
    shortAnswer: 'The Territory Map shows your progress across all 7 Mountains with detailed visualization of your influence.',
    detailedAnswer: `The Territory Map displays a visual representation of your progress across Education, Government, Business, Media, Arts & Entertainment, Family, and Religion. Each mountain shows your percentage of territory conquered, active projects in that area, and opportunities available. Click any mountain to see detailed information about your progress, projects, and strategic opportunities in that realm.`,
    relatedTopics: ['territory-progress', 'mountain-selection'],
    suggestedActions: ['Navigate to Territory Map', 'Click a mountain for details'],
    category: 'feature'
  },
  
  'project-incubator': {
    keywords: ['incubator', 'launch project', 'create venture', 'ai co-founders'],
    shortAnswer: 'The Project Incubator helps you launch ventures with AI co-founder advisors and values-aligned guidance.',
    detailedAnswer: `The Project Incubator provides tools to launch your kingdom venture. You can define your project, select a target mountain, choose an AI co-founder advisor (The Builder, The Steward, The Strategist, or The Sage), and get personalized guidance. The incubator includes values alignment checking, legacy language translator, and impact projections showing potential 5-year revenue and lives impacted.`,
    relatedTopics: ['ai-co-founders', 'launch-project', 'values-alignment'],
    suggestedActions: ['Navigate to Project Incubator', 'Start a new project', 'Chat with AI co-founder'],
    category: 'feature'
  },
  
  'wealth-simulator': {
    keywords: ['wealth simulator', 'simulate wealth', 'five generation', 'legacy impact'],
    shortAnswer: 'The Wealth Simulator models how your ventures impact five generations including wealth, jobs, and lives.',
    detailedAnswer: `The Wealth Simulator uses interactive sliders to project your venture's impact over five generations. You can adjust factors like initial investment, growth rate, job creation potential, and giving percentage to see how wealth multiplies while maintaining kingdom values. It shows generational wealth progression, jobs created across generations, and transformation impact.`,
    relatedTopics: ['generational-wealth', 'legacy-building'],
    suggestedActions: ['Navigate to Wealth Simulator', 'Adjust projection sliders', 'View 5-generation impact'],
    category: 'feature'
  },
  
  'pitch-builder': {
    keywords: ['pitch builder', 'pitch deck', 'investor pitch', 'presentation'],
    shortAnswer: 'The Pitch Builder helps create investor pitch decks with templates, AI suggestions, and export capability.',
    detailedAnswer: `The Pitch Builder provides templates for creating investor pitch decks. It includes section-by-section guidance for Problem, Solution, Market, Business Model, Traction, Team, Ask, and more. The AI suggests content based on your project details, and you can export your pitch deck as a PDF or presentation format.`,
    relatedTopics: ['fundraising', 'investment'],
    suggestedActions: ['Navigate to Pitch Builder', 'Start building your pitch', 'Export your deck'],
    category: 'feature'
  },
  
  // HOW-TO GUIDES
  'how-start-project': {
    keywords: ['start project', 'create venture', 'launch', 'begin'],
    shortAnswer: 'To start a project, navigate to the Project Incubator, define your venture idea, select a mountain, and choose an AI co-founder.',
    detailedAnswer: `Here's how to start your kingdom venture: First, navigate to the Project Incubator. Define your project name and problem statement. Select which of the 7 Mountains your venture targets - Education, Government, Business, Media, Arts, Family, or Religion. Choose an AI co-founder advisor that matches your needs. The Builder focuses on implementation, The Steward on ethics, The Strategist on positioning, and The Sage on purpose alignment. Complete the values alignment check and start building.`,
    relatedTopics: ['project-incubator', 'project-setup'],
    suggestedActions: ['Navigate to Project Incubator', 'Begin project setup', 'Select your mountain'],
    category: 'how-to'
  },
  
  'how-improve-balance': {
    keywords: ['improve balance', 'balance kings priests', 'fix imbalance', 'adjust balance'],
    shortAnswer: 'Adjust your activities between King work (business, wealth) and Priest work (ministry, service) to maintain balance.',
    detailedAnswer: `To improve your Kings & Priests balance, you need to ensure both King and Priest scores stay within 10% of each other. If your King score is too high, schedule time for ministry activities, connect with your faith community, and reflect on purpose beyond profit. If your Priest score is too high, focus on revenue-generating activities, review business metrics, develop leadership skills, and strengthen financial foundations. The Integration Advisor provides personalized recommendations based on your current imbalance.`,
    relatedTopics: ['balance-dashboard', 'integration-advisor'],
    suggestedActions: ['Navigate to Kings & Priests Balance', 'View recommendations', 'Adjust your activities'],
    category: 'how-to'
  },
  
  'how-choose-mountain': {
    keywords: ['choose mountain', 'select territory', 'which mountain', 'target mountain'],
    shortAnswer: 'Choose a mountain based on your passion, skills, and divine calling - where you feel called to create influence.',
    detailedAnswer: `Choosing a mountain is about aligning your venture with your divine calling and natural gifting. Consider: Where do you feel called to create influence? What skills do you have? What problems move you? Are you passionate about transforming education (Education)? Building transparent government (Government)? Creating ethical business (Business)? Shaping narratives (Media)? Inspiring culture (Arts)? Strengthening families (Family)? Or advancing faith (Religion)? Don't rush - prayerfully consider where your heart and gifts align. You can conquer multiple mountains over time.`,
    relatedTopics: ['seven-mountains', 'territory-selection'],
    suggestedActions: ['View Territory Map', 'Explore all 7 Mountains', 'Reflect on your calling'],
    category: 'how-to'
  },
  
  // PERSONAL STATUS
  'my-balance': {
    keywords: ['my balance', 'balance status', 'am i balanced', 'my king priest'],
    shortAnswer: 'Your balance shows your King and Priest scores. Check the Kings & Priests dashboard for detailed status.',
    detailedAnswer: `Your balance is tracked through the Kings & Priests system. Navigate to the Kings & Priests dashboard to see your exact King and Priest percentages. A difference of 10% or less indicates perfect balance. If the difference is greater, the Integration Advisor will provide recommendations to restore balance. Optimal balance prevents burnout and ensures both your business and ministry thrive.`,
    relatedTopics: ['balance-dashboard', 'balance-status'],
    suggestedActions: ['Navigate to Kings & Priests Balance', 'Check your scores'],
    category: 'feature'
  },
  
  'my-territories': {
    keywords: ['my territories', 'territories conquered', 'my progress', 'how many territories'],
    shortAnswer: 'Your territories conquered shows how many of the 7 Mountains you have influence in.',
    detailedAnswer: `Your territory conquest is tracked on your Dashboard and Territory Map. You can see which mountains you're active in, your progress percentage in each, and how many projects you have in each mountain. Focus on deepening influence in one mountain before moving to the next for maximum impact.`,
    relatedTopics: ['territory-progress', 'dashboard'],
    suggestedActions: ['Navigate to Dashboard', 'View Territory Map', 'Check your progress'],
    category: 'feature'
  },
  
  'my-season': {
    keywords: ['current season', 'what season', 'season we in', 'timing'],
    shortAnswer: 'Your current season is shown in the Dashboard and Seasons Hub based on the Joseph Principle timing intelligence.',
    detailedAnswer: `According to the Joseph Principle, different sectors go through seasons of Plenty, Harvest, Preparation, and Famine. Your current season determines the best timing for launching ventures, scaling operations, or building infrastructure. Check the Seasons Hub for detailed information about your current season, timing recommendations, and sector-specific opportunities.`,
    relatedTopics: ['seasons-hub', 'timing'],
    suggestedActions: ['Navigate to Seasons Hub', 'Check current season'],
    category: 'feature'
  },
  
  // NAVIGATION HELPERS
  'navigate-dashboard': {
    keywords: ['dashboard', 'home', 'main view'],
    shortAnswer: 'Navigate to Dashboard to see your overview, metrics, and current project status.',
    detailedAnswer: `The Dashboard provides a comprehensive overview of your journey. You'll see your territories conquered, active projects, balance score, wealth projection, current project details, skills progress, territory influence map, recent achievements, and generational impact preview. It's your command center for tracking your progress.`,
    relatedTopics: ['dashboard-features'],
    suggestedActions: ['Navigating to Dashboard now...'],
    category: 'navigation'
  },
  
  'navigate-territory': {
    keywords: ['territory map', 'mountains', 'territory'],
    shortAnswer: 'Navigate to Territory Map to view your progress across all 7 Mountains.',
    relatedTopics: ['seven-mountains'],
    suggestedActions: ['Navigating to Territory Map now...'],
    category: 'navigation'
  },
  
  'navigate-balance': {
    keywords: ['balance', 'kings priests', 'kings and priests'],
    shortAnswer: 'Navigate to Kings & Priests Balance to view and adjust your King and Priest scores.',
    relatedTopics: ['kings-priests'],
    suggestedActions: ['Navigating to Kings & Priests Balance now...'],
    category: 'navigation'
  },
  
  'navigate-seasons': {
    keywords: ['seasons', 'joseph principle', 'timing'],
    shortAnswer: 'Navigate to Seasons Hub to view timing intelligence and seasonal opportunities.',
    relatedTopics: ['joseph-principle'],
    suggestedActions: ['Navigating to Seasons Hub now...'],
    category: 'navigation'
  },
  
  'navigate-incubator': {
    keywords: ['incubator', 'launch', 'project', 'venture'],
    shortAnswer: 'Navigate to Project Incubator to start building your kingdom venture.',
    relatedTopics: ['project-incubator'],
    suggestedActions: ['Navigating to Project Incubator now...'],
    category: 'navigation'
  },
  
  'navigate-learning': {
    keywords: ['learning', 'education', 'skills', 'certificates'],
    shortAnswer: 'Navigate to Learning Path to track your progress on Datacamp, ALX, and Power Learn Project.',
    relatedTopics: ['education'],
    suggestedActions: ['Navigating to Learning Path now...'],
    category: 'navigation'
  },
  
  'navigate-challenges': {
    keywords: ['challenges', 'zindi', 'competitions'],
    shortAnswer: 'Navigate to Zindi Challenges to browse real-world problems and impact opportunities.',
    relatedTopics: ['real-world-impact'],
    suggestedActions: ['Navigating to Zindi Challenges now...'],
    category: 'navigation'
  },
  
  'navigate-wealth': {
    keywords: ['wealth', 'simulator', 'generations'],
    shortAnswer: 'Navigate to Wealth Simulator to project your 5-generation impact.',
    relatedTopics: ['generational-wealth'],
    suggestedActions: ['Navigating to Wealth Simulator now...'],
    category: 'navigation'
  },
  
  'navigate-pitch': {
    keywords: ['pitch', 'deck', 'presentation', 'investor'],
    shortAnswer: 'Navigate to Pitch Builder to create your investor presentation.',
    relatedTopics: ['pitch-builder'],
    suggestedActions: ['Navigating to Pitch Builder now...'],
    category: 'navigation'
  },
  
  'navigate-fundraising': {
    keywords: ['fundraising', 'investment', 'readiness'],
    shortAnswer: 'Navigate to Fundraising Dashboard to view investment readiness and metrics.',
    relatedTopics: ['investment'],
    suggestedActions: ['Navigating to Fundraising Dashboard now...'],
    category: 'navigation'
  },
  
  'navigate-analytics': {
    keywords: ['analytics', 'metrics', 'stats'],
    shortAnswer: 'Navigate to Analytics to view detailed progress tracking and impact metrics.',
    relatedTopics: ['progress-tracking'],
    suggestedActions: ['Navigating to Analytics now...'],
    category: 'navigation'
  },
  
  // Feature: Zindi Challenges
  'challenges': {
    keywords: ['challenges', 'zindi', 'competitions', 'prize', 'problem solving', 'real world problems'],
    shortAnswer: 'Zindi Challenges features real-world problems from Africa with prizes ranging from $3K to $10K. You can browse challenges by category and track your progress.',
    detailedAnswer: `Zindi Challenges are real-world problems from Zindi.africa that you can solve to gain experience and win prizes. Each challenge has a prize amount ($3K-$10K), deadline, and impact metrics. You can filter challenges by category (Finance, Healthcare, Agriculture, etc.) and match them to your target mountain. Challenges help you build your portfolio while solving African problems.`,
    relatedTopics: ['real-world-impact', 'problem-solving'],
    suggestedActions: ['Navigate to Zindi Challenges', 'Browse active challenges', 'Filter by category'],
    category: 'feature'
  },
  
  // Feature: Learning Path
  'learning-path': {
    keywords: ['learning', 'education', 'skills', 'certificates', 'datacamp', 'alx', 'plp'],
    shortAnswer: 'The Learning Path tracks your progress on Datacamp, ALX, and Power Learn Project with certificates and skill badges.',
    detailedAnswer: `The Learning Path section integrates with Datacamp, ALX (Africa Leadership X), and Power Learn Project (PLP). You can track your learning progress, see modules completed, certificates earned, and skill badges achieved. This builds your educational foundation while developing both technical (AI, coding) and business skills.`,
    relatedTopics: ['education', 'skills-development'],
    suggestedActions: ['Navigate to Learning Path', 'View your certificates', 'Check skill progress'],
    category: 'feature'
  },
  
  // Feature: Team Matcher
  'team-matcher': {
    keywords: ['team', 'co-founder', 'partner', 'match', 'teammates', 'collaboration'],
    shortAnswer: 'The Team Matcher helps you find compatible co-founders based on skills, goals, and values alignment.',
    detailedAnswer: `The Team Matcher connects you with potential co-founders who share your vision and complement your skills. It considers your balance (King/Priest), target mountain, skill compatibility, and values alignment to suggest the best matches. You can see compatibility scores and reach out to build your venture team.`,
    relatedTopics: ['co-founders', 'team-building'],
    suggestedActions: ['Navigate to Team Matcher', 'View potential matches', 'Check compatibility scores'],
    category: 'feature'
  },
  
  // Feature: Problem Matcher
  'problem-matcher': {
    keywords: ['problems', 'strategic problems', 'opportunities', 'find problems', 'match problems'],
    shortAnswer: 'The Problem Matcher shows strategic problems aligned with your mountain and skills.',
    detailedAnswer: `The Problem Matcher displays strategic problems facing Africa across all 7 Mountains. You can search by mountain, category, or keyword to find problems that match your calling and expertise. Each problem includes impact potential, territory scope, and recommended next steps.`,
    relatedTopics: ['opportunities', 'problem-solving'],
    suggestedActions: ['Navigate to Problem Matcher', 'Search for problems', 'Filter by mountain'],
    category: 'feature'
  },
  
  // Feature: Fundraising Dashboard
  'fundraising': {
    keywords: ['fundraising', 'investment', 'readiness', 'investor', 'funding', 'pitch'],
    shortAnswer: 'The Fundraising Dashboard shows your investment readiness score, key metrics, and fundraising milestones.',
    detailedAnswer: `The Fundraising Dashboard displays your investment readiness score (typically 82%+), funding stage indicators (seed, series A, etc.), key metrics (ARR, growth rate, burn), and fundraising milestones. It shows what investors care about and helps you prepare for funding conversations.`,
    relatedTopics: ['investment', 'pitch-deck'],
    suggestedActions: ['Navigate to Fundraising Dashboard', 'Check readiness score', 'View key metrics'],
    category: 'feature'
  },
  
  // Feature: Studio Incubation
  'studios': {
    keywords: ['studios', 'studio incubation', 'fintech', 'legaltech', 'agritech', 'healthtech', 'edutech', 'mediatech'],
    shortAnswer: 'Studio Incubation offers six specialized studios: FinTech, LegalTech, AgriTech, HealthTech, EduTech, and MediaTech.',
    detailedAnswer: `Studio Incubation provides specialized environments for launching ventures in specific industries. Each studio has resources, mentors, and templates tailored to that sector. You can categorize your project and receive studio-specific guidance for FinTech, LegalTech, AgriTech, HealthTech, EduTech, or MediaTech.`,
    relatedTopics: ['specialization', 'industry-specific'],
    suggestedActions: ['Navigate to Studio Incubation', 'Choose your studio', 'View studio resources'],
    category: 'feature'
  },
  
  // Feature: Analytics Dashboard
  'analytics': {
    keywords: ['analytics', 'metrics', 'stats', 'tracking', 'data', 'performance'],
    shortAnswer: 'The Analytics Dashboard provides detailed progress tracking, impact metrics, and performance analytics across all your ventures.',
    detailedAnswer: `The Analytics Dashboard gives you a comprehensive view of your progress. You can track territory taken percentage, wealth created, lives impacted, active projects, skills development, and overall impact metrics. It shows you where you're excelling and areas needing attention.`,
    relatedTopics: ['progress-tracking', 'metrics'],
    suggestedActions: ['Navigate to Analytics', 'View detailed metrics', 'Track your progress'],
    category: 'feature'
  },
  
  // Feature: Wealth Simulator
  'wealth-simulator-feature': {
    keywords: ['wealth simulator', 'simulate', 'project wealth', 'impact projection'],
    shortAnswer: 'The Wealth Simulator models how your ventures create generational impact over five generations.',
    detailedAnswer: `The Wealth Simulator uses interactive sliders to project your venture's impact. Adjust factors like initial investment, growth rate, job creation, lives impacted, and giving percentage. See how wealth, impact, and legacy multiply across five generations. It helps you visualize the true long-term value of your kingdom venture.`,
    relatedTopics: ['generational-wealth', 'impact-modeling'],
    suggestedActions: ['Navigate to Wealth Simulator', 'Run projections', 'See 5-generation impact'],
    category: 'feature'
  },
  
  // Feature: Case Studies
  'case-studies': {
    keywords: ['case studies', 'examples', 'success stories', 'portfolio', 'projects'],
    shortAnswer: 'Case Studies showcase successful ventures launched through the platform with real results and impact.',
    detailedAnswer: `Case Studies highlight successful ventures built by students in the program. Each case study shows the problem solved, solution implemented, mountains conquered, revenue generated, lives impacted, and lessons learned. Use these as inspiration and templates for your own venture.`,
    relatedTopics: ['success-stories', 'examples'],
    suggestedActions: ['Navigate to Case Studies', 'Browse success stories', 'Get inspired'],
    category: 'feature'
  },
  
  // Feature: Testimonials
  'testimonials': {
    keywords: ['testimonials', 'reviews', 'feedback', 'what people say', 'student stories'],
    shortAnswer: 'Testimonials show real feedback from students about their experience with Project AI Studio.',
    detailedAnswer: `Testimonials feature real stories from students who have transformed their lives through the platform. Read about how others found their calling, launched ventures, conquered territories, and built generational wealth while maintaining kingdom balance.`,
    relatedTopics: ['success-stories', 'feedback'],
    suggestedActions: ['Navigate to Testimonials', 'Read student stories'],
    category: 'feature'
  },
  
  // Feature: Corporate Partners
  'corporate-partners': {
    keywords: ['partners', 'corporate', 'sponsors', 'collaborations', 'network'],
    shortAnswer: 'Corporate Partners are organizations that support and collaborate with Project AI Studio.',
    detailedAnswer: `Corporate Partners are companies and organizations that provide resources, mentorship, and opportunities for students. These partnerships help connect you with potential clients, investors, and collaborators. Each partner brings unique value to specific mountains or industries.`,
    relatedTopics: ['network', 'partnerships'],
    suggestedActions: ['Navigate to Corporate Partners', 'Explore opportunities', 'Connect with partners'],
    category: 'feature'
  },
  
  // Feature: Events
  'events': {
    keywords: ['events', 'calendar', 'workshops', 'training', 'meetups'],
    shortAnswer: 'The Event Calendar shows upcoming workshops, trainings, and networking events.',
    detailedAnswer: `The Event Calendar lists all upcoming events including workshops on launching ventures, Kings & Priests balance training, Joseph Principle timing sessions, pitch practice, and networking meetups. You can RSVP and add events to your calendar.`,
    relatedTopics: ['networking', 'training'],
    suggestedActions: ['Navigate to Event Calendar', 'View upcoming events', 'RSVP'],
    category: 'feature'
  },
  
  // Feature: Pilot Results
  'pilot-results': {
    keywords: ['pilot', 'results', 'impact', 'outcomes', 'track record'],
    shortAnswer: 'Pilot Results showcase the real impact of Project AI Studio with actual metrics and outcomes.',
    detailedAnswer: `Pilot Results display concrete metrics from the beta program including: ventures launched, territories conquered, balance scores achieved, wealth generated, lives impacted, and success rates. This proves the platform's effectiveness and validates the model.`,
    relatedTopics: ['proof', 'validation', 'impact'],
    suggestedActions: ['Navigate to Pilot Results', 'View impact data'],
    category: 'feature'
  },
  
  // Feature: Legal Structure
  'legal': {
    keywords: ['legal', 'structure', 'company', 'incorporation', 'compliance'],
    shortAnswer: 'The Legal Structure guide helps you understand incorporation, compliance, and legal setup for your venture.',
    detailedAnswer: `The Legal Structure section provides guidance on setting up your venture legally. It covers business registration, incorporation options (LLC, Corporation, etc.), compliance requirements, intellectual property protection, and legal considerations specific to each mountain (e.g., education licensing, media regulations).`,
    relatedTopics: ['compliance', 'setup'],
    suggestedActions: ['Navigate to Legal Structure', 'Learn legal requirements'],
    category: 'feature'
  },
  
  // Feature: Revenue Model
  'revenue-model': {
    keywords: ['revenue', 'model', 'pricing', 'monetization', 'business model'],
    shortAnswer: 'The Revenue Model explains how Project AI Studio makes money and its sustainability model.',
    detailedAnswer: `The Revenue Model section describes how Project AI Studio generates revenue through student fees, corporate partnerships, grants, and investment returns from successful ventures. It shows the platform's financial sustainability and commitment to affordable access.`,
    relatedTopics: ['business-model', 'sustainability'],
    suggestedActions: ['Navigate to Revenue Model', 'Understand pricing'],
    category: 'feature'
  },
  
  // Feature: Advisory Board
  'advisory-board': {
    keywords: ['advisory', 'board', 'mentors', 'advisors', 'guidance'],
    shortAnswer: 'The Advisory Board consists of experienced leaders who provide strategic guidance.',
    detailedAnswer: `The Advisory Board includes experts in each mountain, successful entrepreneurs, business leaders, and ministry veterans. They provide strategic guidance, review ventures, offer mentorship, and help students navigate challenges. Each advisor brings decades of relevant experience.`,
    relatedTopics: ['mentorship', 'guidance'],
    suggestedActions: ['Navigate to Advisory Board', 'Meet the advisors'],
    category: 'feature'
  },
  
  // Concept: AI Co-Founders
  'ai-co-founders': {
    keywords: ['ai co-founders', 'co-founder', 'the builder', 'the steward', 'the strategist', 'the sage'],
    shortAnswer: 'AI Co-Founders are four specialized AI advisors: The Builder (technical), The Steward (ethics), The Strategist (strategy), and The Sage (purpose).',
    detailedAnswer: `AI Co-Founders are four AI personalities that guide you through different aspects of venture building. The Builder focuses on technical implementation and architecture. The Steward ensures ethical alignment and sustainability. The Strategist analyzes markets and positioning. The Sage considers long-term purpose and legacy. Each has unique expertise and personality.`,
    relatedTopics: ['ai-advisors', 'guidance'],
    suggestedActions: ['Navigate to Project Incubator', 'Chat with AI co-founder'],
    category: 'concept'
  },
  
  // Concept: Legacy Terms
  'legacy-terms': {
    keywords: ['legacy language', 'ministry business', 'terminology', 'language translator'],
    shortAnswer: 'Legacy Terms translates between ministry language and business language to help you communicate effectively in both worlds.',
    detailedAnswer: `The Legacy Language Guide translates ministry terminology into business terms and vice versa. For example: "Taking territory" = "Market penetration", "Anointing" = "Competitive advantage", "Stewardship" = "Resource management". This helps you communicate in both ministry and business contexts.`,
    relatedTopics: ['communication', 'terminology'],
    suggestedActions: ['View Legacy Terms in Project Incubator'],
    category: 'concept'
  },
  
  // Concept: Values Alignment
  'values-alignment': {
    keywords: ['values', 'alignment', 'ethical', 'purpose', 'kingdom values'],
    shortAnswer: 'Values Alignment ensures your ventures align with biblical principles while creating profit and impact.',
    detailedAnswer: `Values Alignment checks how well your venture aligns with kingdom principles including purpose alignment, ethical foundation, sustainability, impact potential, scalability, and kingdom advancement. You get a score (typically 84%+) showing how well your venture balances profit with purpose.`,
    relatedTopics: ['ethics', 'purpose'],
    suggestedActions: ['Complete values check in Project Incubator'],
    category: 'concept'
  }
};

// Search function to find relevant topics
export function searchKnowledgeBase(query: string): { 
  topic: KnowledgeTopic; 
  confidence: number; 
  matchKeywords: string[] 
}[] {
  const lowerQuery = query.toLowerCase();
  const results: { topic: KnowledgeTopic; confidence: number; matchKeywords: string[] }[] = [];
  
  for (const [key, topic] of Object.entries(knowledgeBase)) {
    const matchKeywords = topic.keywords.filter(keyword => 
      lowerQuery.includes(keyword.toLowerCase()) || 
      keyword.toLowerCase().includes(lowerQuery)
    );
    
    // Also check if individual words in query match
    const queryWords = lowerQuery.split(' ').filter(w => w.length > 2);
    const wordMatches = queryWords.filter(word => 
      topic.keywords.some(kw => kw.toLowerCase().includes(word))
    );
    
    // Combine both matching strategies
    const totalMatches = new Set([...matchKeywords, ...wordMatches]);
    
    if (totalMatches.size > 0 || topic.keywords.some(kw => kw === lowerQuery.trim())) {
      // Higher confidence for exact matches
      const hasExactMatch = topic.keywords.some(kw => kw === lowerQuery.trim());
      const confidence = hasExactMatch 
        ? 1.0 
        : Math.min(1.0, (totalMatches.size / topic.keywords.length) + 0.3);
      
      results.push({ topic, confidence, matchKeywords: Array.from(totalMatches) });
    }
  }
  
  return results.sort((a, b) => b.confidence - a.confidence);
}

// Get quick answer for a topic
export function getQuickAnswer(query: string): string | null {
  const results = searchKnowledgeBase(query);
  // Lowered threshold to 0.3 to catch more queries
  if (results.length > 0 && results[0].confidence > 0.3) {
    return results[0].topic.shortAnswer;
  }
  return null;
}

