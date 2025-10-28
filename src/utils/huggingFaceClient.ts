// Hugging Face Inference API Client
// Free tier - no API key required
import { StudentContext } from './conversationEngine';

const HF_API_URL = "https://api-inference.huggingface.co/models/google/flan-t5-base";

export interface HFResponse {
  response: string | null;
  fromCache: boolean;
  source: 'api' | 'fallback';
}

// Build context prompt from user data
function buildContextPrompt(context: StudentContext): string {
  const lines: string[] = [];
  
  lines.push(`Context: Project AI Studio - A purpose-driven incubator combining divine calling with entrepreneurial excellence.`);
  lines.push(`\nUser Profile:`);
  lines.push(`- Territory Progress: ${context.territoriesConquered || 4} out of 7 mountains`);
  lines.push(`- Balance: King ${context.balance?.king || 47}%, Priest ${context.balance?.priest || 47}%`);
  lines.push(`- Learning Progress: ${context.learningProgress || 45}%`);
  lines.push(`- Current Season: ${context.currentSeason || 'plenty'}`);
  lines.push(`- Active Projects: ${context.projects?.length || 3}`);
  
  if (context.currentView) {
    lines.push(`- Current Page: ${context.currentView}`);
  }
  
  lines.push(`\nCore Concepts:`);
  lines.push(`- 7 Mountains: Education, Government, Business, Media, Arts, Family, Religion`);
  lines.push(`- Kings & Priests: Balance wealth creation (King) with ministry impact (Priest)`);
  lines.push(`- Joseph Principle: Strategic timing based on seasons (plenty, harvest, preparation, famine)`);
  lines.push(`- Generational Wealth: Building ventures that impact five generations`);
  
  return lines.join('\n');
}

export async function getAIResponse(
  question: string, 
  context: StudentContext
): Promise<HFResponse> {
  const contextPrompt = buildContextPrompt(context);
  const fullPrompt = `${contextPrompt}\n\nQuestion: ${question}\n\nAnswer:`;
  
  try {
    const response = await fetch(HF_API_URL, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputs: fullPrompt })
    });
    
    if (!response.ok) {
      throw new Error(`API returned ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data && data.length > 0 && data[0].generated_text) {
      return {
        response: data[0].generated_text,
        fromCache: false,
        source: 'api'
      };
    }
    
    throw new Error('Invalid API response');
  } catch (error) {
    console.warn('Hugging Face API unavailable:', error);
    
    return {
      response: null,
      fromCache: false,
      source: 'fallback'
    };
  }
}

// Simple query function for direct questions
export async function queryHuggingFace(question: string): Promise<string | null> {
  try {
    const response = await fetch(HF_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ inputs: question })
    });
    
    if (response.ok) {
      const data = await response.json();
      return data[0]?.generated_text || null;
    }
  } catch (error) {
    console.warn('HF API error:', error);
  }
  
  return null;
}

