export interface Mountain {
  id: string;
  name: string;
  description: string;
  progress: number;
  color: string;
  icon: string;
  projects: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  mountain: string;
  progress: number;
  kingScore: number;
  priestScore: number;
  status: 'planning' | 'building' | 'launched' | 'scaling';
}

export interface User {
  id: string;
  name: string;
  kingBalance: number;
  priestBalance: number;
  currentSeason: string;
  territoriesConquered: number;
  wealthProjection: number;
}

export interface Season {
  name: string;
  type: 'plenty' | 'preparation' | 'famine' | 'harvest';
  sector: string;
  recommendation: string;
  timing: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  category: 'territory' | 'balance' | 'season' | 'legacy';
}
