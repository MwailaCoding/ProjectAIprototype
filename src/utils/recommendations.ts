// Smart Recommendations Engine

export interface UserState {
  kingBalance: number;
  priestBalance: number;
  territoriesConquered: number;
  currentProjects: number;
  wealthProjection: number;
}

export interface Recommendation {
  type: 'opportunity' | 'warning' | 'suggestion' | 'celebration';
  priority: 'high' | 'medium' | 'low';
  title: string;
  message: string;
  action?: string;
  icon?: string;
}

export function generateRecommendations(userState: UserState): Recommendation[] {
  const recommendations: Recommendation[] = [];

  // Balance recommendations
  const balanceDiff = Math.abs(userState.kingBalance - userState.priestBalance);
  if (balanceDiff > 20) {
    recommendations.push({
      type: 'warning',
      priority: 'high',
      title: 'Balance Alert',
      message: userState.kingBalance > userState.priestBalance
        ? 'Your King score is significantly higher. Consider allocating time to ministry and service.'
        : 'Your Priest score is significantly higher. Consider focusing on revenue-generating activities.',
      action: 'View Balance Dashboard',
      icon: '⚠️'
    });
  }

  if (balanceDiff < 10) {
    recommendations.push({
      type: 'celebration',
      priority: 'high',
      title: 'Perfect Balance!',
      message: 'You\'re maintaining excellent harmony between purpose and profit.',
      icon: '🎯'
    });
  }

  // Territory recommendations
  if (userState.territoriesConquered < 3) {
    recommendations.push({
      type: 'opportunity',
      priority: 'high',
      title: 'Expand Your Territory',
      message: 'Consider launching projects in additional mountains for greater cultural impact.',
      action: 'Explore Territory Map',
      icon: '🗻'
    });
  }

  if (userState.territoriesConquered >= 5) {
    recommendations.push({
      type: 'celebration',
      priority: 'low',
      title: 'Mountain Conqueror',
      message: 'You\'ve gained significant influence across multiple cultural sectors!',
      icon: '🏆'
    });
  }

  // Project recommendations
  if (userState.currentProjects === 0) {
    recommendations.push({
      type: 'opportunity',
      priority: 'high',
      title: 'Start Your First Venture',
      message: 'Launch your first project to begin building generational wealth and impact.',
      action: 'Visit Incubator',
      icon: '🚀'
    });
  }

  if (userState.currentProjects >= 3) {
    recommendations.push({
      type: 'suggestion',
      priority: 'medium',
      title: 'Focus on Scaling',
      message: 'With multiple active projects, consider consolidating efforts on your most promising ventures.',
      action: 'View Analytics',
      icon: '📈'
    });
  }

  // Wealth recommendations
  if (userState.wealthProjection > 1000000) {
    recommendations.push({
      type: 'celebration',
      priority: 'medium',
      title: 'Milestone Achieved!',
      message: 'Your wealth projection exceeds $1M. Consider stewardship planning and strategic reinvestment.',
      icon: '💰'
    });
  }

  // Seasonal recommendations
  const currentMonth = new Date().getMonth();
  if (currentMonth >= 0 && currentMonth <= 2) {
    recommendations.push({
      type: 'opportunity',
      priority: 'high',
      title: 'AI Revolution Season',
      message: 'Current market conditions favor AI-powered solutions. Consider launching within 90 days.',
      action: 'Check Seasons Hub',
      icon: '⚡'
    });
  }

  return recommendations.sort((a, b) => {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    const typeOrder = { warning: 0, opportunity: 1, suggestion: 2, celebration: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority] ||
           typeOrder[a.type] - typeOrder[b.type];
  });
}

export function getNextBestAction(userState: UserState): Recommendation | null {
  const recommendations = generateRecommendations(userState);
  return recommendations.find(r => r.type === 'opportunity' || r.type === 'warning') || null;
}

