// Intelligent Query Router
// Decides when to use local knowledge base vs Hugging Face API
import { StudentContext } from './conversationEngine';
import { searchKnowledgeBase, getQuickAnswer, KnowledgeTopic } from './knowledgeBase';
import { getAIResponse } from './huggingFaceClient';

export interface QueryResponse {
  answer: string;
  source: 'knowledge-base' | 'api' | 'fallback';
  confidence: number;
  shouldNavigate?: string;
}

type QueryIntent = 
  | 'navigation' 
  | 'status' 
  | 'definition' 
  | 'explanation' 
  | 'how-to' 
  | 'analysis' 
  | 'advice' 
  | 'greeting'
  | 'unknown';

function detectIntent(query: string): QueryIntent {
  const lowerQuery = query.toLowerCase().trim();
  
  // Navigation intent
  const navKeywords = ['go to', 'show', 'open', 'navigate', 'take me to', 'view', 'switch to'];
  if (navKeywords.some(kw => lowerQuery.includes(kw))) {
    return 'navigation';
  }
  
  // Greeting
  if (['hi', 'hello', 'hey', 'greetings'].some(g => lowerQuery.startsWith(g))) {
    return 'greeting';
  }
  
  // Status check
  const statusKeywords = ['my ', 'am i', 'is my', 'check my', 'show my', 'what\'s my', 'my current'];
  if (statusKeywords.some(kw => lowerQuery.includes(kw))) {
    return 'status';
  }
  
  // How-to
  const howKeywords = ['how do', 'how to', 'how can', 'how do i', 'how should i'];
  if (howKeywords.some(kw => lowerQuery.includes(kw))) {
    return 'how-to';
  }
  
  // Definition/explanation
  const defKeywords = ['what is', 'what are', 'tell me about', 'explain', 'describe', 'what does'];
  if (defKeywords.some(kw => lowerQuery.includes(kw))) {
    return 'definition';
  }
  
  // Analysis/advice
  const adviceKeywords = ['should i', 'what should', 'recommend', 'suggest', 'advice', 'guidance'];
  if (adviceKeywords.some(kw => lowerQuery.includes(kw))) {
    return 'advice';
  }
  
  return 'unknown';
}

async function getLocalResponse(query: string, context: StudentContext): Promise<QueryResponse> {
  // Search knowledge base
  const kbResults = searchKnowledgeBase(query);
  
  if (kbResults.length > 0 && kbResults[0].confidence > 0.3) {
    const bestMatch = kbResults[0].topic;
    
    // Check if this is a navigation request
    const navMatch = bestMatch.suggestedActions?.find(action => 
      action.toLowerCase().includes('navigating to')
    );
    
    let shouldNavigate: string | undefined;
    if (navMatch) {
      const match = navMatch.match(/Navigating to (.+?) now/i);
      if (match) {
        shouldNavigate = match[1].toLowerCase();
      }
    }
    
    // For high confidence, use short answer, for lower use detailed
    const answer = kbResults[0].confidence > 0.7 
      ? bestMatch.shortAnswer
      : bestMatch.detailedAnswer;
    
    return {
      answer,
      source: 'knowledge-base',
      confidence: kbResults[0].confidence,
      shouldNavigate
    };
  }
  
  return {
    answer: '',
    source: 'fallback',
    confidence: 0
  };
}

async function getContextualFallback(query: string, context: StudentContext): Promise<QueryResponse> {
  const intent = detectIntent(query);
  
  // Generate context-aware fallback based on intent
  let answer = '';
  
  if (intent === 'greeting') {
    answer = `Hello! I'm your voice assistant. I can help you navigate the app, explain features, check your progress, or answer questions about Project AI Studio. What would you like to know?`;
  } else if (intent === 'status') {
    answer = `You can check your status on the Dashboard. Would you like to know about your territories, balance, projects, or learning progress?`;
  } else if (intent === 'how-to') {
    answer = `I can guide you through specific features. Try asking "How do I start a project?" or "How do I improve my balance?" or tell me what specific action you need help with.`;
  } else if (intent === 'definition' || intent === 'explanation') {
    answer = `You can ask me about the 7 Mountains, Kings & Priests balance, Joseph Principle, generational wealth, or any feature in the app. What specific concept would you like me to explain?`;
  } else if (intent === 'navigation') {
    answer = `I can help you navigate to any section. Try "Take me to the dashboard" or "Show the territory map" or tell me which section you'd like to visit.`;
  } else {
    answer = `I understand you're asking: "${query}". Let me search my knowledge base for that. If you could be more specific about what feature or concept you need help with, I can provide a better answer.`;
  }
  
  return {
    answer,
    source: 'fallback',
    confidence: 0.3
  };
}

export async function routeQuery(
  query: string, 
  context: StudentContext, 
  personality: string = 'The Builder'
): Promise<QueryResponse> {
  const intent = detectIntent(query);
  
  // Fast local responses for navigation ONLY
  if (intent === 'navigation') {
    const local = await getLocalResponse(query, context);
    if (local.confidence > 0.5) {
      return local;
    }
  }
  
  // Try knowledge base first for all queries
  const local = await getLocalResponse(query, context);
  
  // If we have a good local answer (high confidence), use it
  if (local.confidence > 0.6) {
    return local;
  }
  
  // For anything complex, unclear, or with low confidence, try Hugging Face API
  // This includes: analysis, advice, definitions, how-to, status, unknown - basically everything
  try {
    const apiResponse = await Promise.race([
      getAIResponse(query, context),
      new Promise<null>((resolve) => setTimeout(() => resolve(null), 4000))
    ]);
    
    if (apiResponse && apiResponse.response && apiResponse.response.trim()) {
      // Clean up the response
      let cleanResponse = apiResponse.response.trim();
      
      // If local had some answer, prepend it with "Based on your profile, " for context
      if (local.confidence > 0.3 && local.answer) {
        cleanResponse = `Based on your current progress and the Project AI Studio platform, ${cleanResponse}`;
      }
      
      return {
        answer: cleanResponse,
        source: 'api',
        confidence: 0.8
      };
    }
  } catch (error) {
    console.warn('API call failed:', error);
  }
  
  // Fallback to local if API didn't work
  if (local.confidence > 0.3) {
    return local;
  }
  
  // Final fallback
  const fallback = await getContextualFallback(query, context);
  return fallback;
}

