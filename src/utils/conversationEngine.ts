// Conversation Engine - Generates context-aware responses
// Uses intelligent router to combine knowledge base + API responses

import { getCoFounderAdvice } from './aiEngine';
import { routeQuery, QueryResponse } from './intelligentRouter';
import { searchKnowledgeBase, getQuickAnswer } from './knowledgeBase';

interface StudentContext {
  name?: string;
  projects?: any[];
  balance?: { king: number; priest: number };
  territoriesConquered?: number;
  currentView?: string;
  learningProgress?: number;
  currentSeason?: string;
}

interface ConversationResponse {
  text: string;
  shouldNavigate?: string;
  action?: string;
}

// Load student data from localStorage
function getStudentContext(): StudentContext {
  try {
    const studentData = localStorage.getItem('studentData');
    if (studentData) {
      return JSON.parse(studentData);
    }
  } catch (error) {
    console.error('Error loading student context:', error);
  }
  
  return {
    balance: { king: 47, priest: 47 },
    territoriesConquered: 4,
    learningProgress: 45,
    currentSeason: 'plenty'
  };
}

export async function generateResponse(
  query: string, 
  personality: string = 'The Builder'
): Promise<ConversationResponse> {
  const context = getStudentContext();
  const lowerQuery = query.toLowerCase().trim();

  // Use intelligent router to get best response
  const routedResponse = await routeQuery(query, context, personality);
  
  return {
    text: routedResponse.answer,
    shouldNavigate: routedResponse.shouldNavigate
  };
}

// Synchronous version for backwards compatibility
export function generateResponseSync(
  query: string, 
  personality: string = 'The Builder'
): ConversationResponse {
  const context = getStudentContext();
  const lowerQuery = query.toLowerCase().trim();

  // Quick responses for common queries
  if (lowerQuery.match(/^(hi|hello|hey|greetings)/)) {
    return {
      text: `Hello! I'm your AI co-founder, ${personality}. How can I assist you with your kingdom venture today?`
    };
  }

  // Try knowledge base first for instant responses
  const quickAnswer = getQuickAnswer(query);
  if (quickAnswer) {
    return { text: quickAnswer };
  }

  // Handle specific queries
  if (lowerQuery.includes('balance')) {
    const { king, priest } = context.balance || { king: 47, priest: 47 };
    return {
      text: `Your current balance shows ${king}% King and ${priest}% Priest. You're ${Math.abs(king - priest) < 10 ? 'perfectly balanced' : 'slightly imbalanced'}. To maximize impact, aim for a balanced score between ${Math.min(king, priest)} and ${Math.max(king, priest)}.`
    };
  }

  if (lowerQuery.includes('territory') || lowerQuery.includes('mountain')) {
    const conquered = context.territoriesConquered || 4;
    return {
      text: `You've conquered ${conquered} out of 7 mountains. That's ${Math.round((conquered / 7) * 100)}% completion. Remember, each mountain you conquer expands your influence and creates generational impact. What mountain are you focusing on next?`
    };
  }

  if (lowerQuery.includes('project') || lowerQuery.includes('venture')) {
    const projects = context.projects || [];
    const count = projects.length;
    return {
      text: `You have ${count} active ${count === 1 ? 'project' : 'projects'}. ${count > 0 ? 'Keep building strategically.' : 'Ready to launch a new kingdom venture? Navigate to the Incubator to get started.'}`
    };
  }

  if (lowerQuery.includes('season')) {
    const season = context.currentSeason || 'plenty';
    return {
      text: `According to the Joseph Principle, we're in the ${season.toUpperCase()} season. ${season === 'plenty' ? 'This is a time to launch boldly and build momentum.' : season === 'harvest' ? 'Focus on scaling and maximizing your current ventures.' : season === 'preparation' ? 'Use this time to build infrastructure and prepare for expansion.' : 'Focus on wisdom, consolidation, and strategic positioning.'}`
    };
  }

  if (lowerQuery.includes('learning') || lowerQuery.includes('progress') || lowerQuery.includes('education')) {
    const progress = context.learningProgress || 45;
    return {
      text: `Your learning progress is at ${progress}%. You're making great strides in developing both technical and business skills. Continue learning through our partner platforms like Datacamp and ALX.`
    };
  }

  if (lowerQuery.match(/^(advice|guidance|help|suggest)/)) {
    const advice = getCoFounderAdvice(personality, { mountain: context.currentView });
    return {
      text: advice.text
    };
  }

  // Default fallback
  return {
    text: `I understand you're asking: "${query}". Let me think about this from a ${personality} perspective... ${getCoFounderAdvice(personality, {}).text}`
  };
}

// Fallback response generator for unsupported queries
export function generateFallbackResponse(personality: string): string {
  const fallbacks = {
    'The Builder': 'I focus on practical implementation. Could you rephrase your question with more specific details about what you want to build?',
    'The Steward': 'I help ensure ethical alignment and sustainability. What aspect of values and principles would you like guidance on?',
    'The Strategist': 'I analyze markets and positioning. What strategic challenge are you facing?',
    'The Sage': 'I consider long-term impact and purpose. How can I help you align your venture with your divine calling?'
  };

  return fallbacks[personality as keyof typeof fallbacks] || fallbacks['The Builder'];
}





