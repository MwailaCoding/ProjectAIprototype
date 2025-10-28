import { VoiceCommand } from '../types/voice';

// Command keywords for intent detection
const navigationCommands = ['navigate', 'go to', 'show', 'open', 'switch', 'visit'];
const queryCommands = ['what', 'who', 'where', 'when', 'how', 'why', 'tell me', 'explain', 'describe'];
const actionCommands = ['launch', 'create', 'start', 'build', 'set', 'update', 'change'];

const viewMappings: Record<string, string> = {
  'dashboard': 'dashboard',
  'learning': 'learning',
  'challenges': 'challenges',
  'territory': 'territory',
  'balance': 'balance',
  'seasons': 'seasons',
  'incubator': 'incubator',
  'wealth': 'wealth',
  'pitch': 'pitch',
  'fundraising': 'fundraising',
  'studios': 'studios',
  'problems': 'problems',
  'team': 'team',
  'cases': 'cases',
  'partners': 'partners',
  'pilot': 'pilot',
  'events': 'events',
  'impact': 'impact',
  'advisory': 'advisory',
  'testimonials': 'testimonials',
  'revenue': 'revenue',
  'legal': 'legal',
  'analytics': 'analytics',
  'voice': 'voice'
};

export function parseVoiceCommand(transcript: string): VoiceCommand {
  const lowerTranscript = transcript.toLowerCase().trim();
  
  // Check for navigation commands
  for (const cmd of navigationCommands) {
    if (lowerTranscript.startsWith(cmd)) {
      const params = lowerTranscript.substring(cmd.length).trim();
      
      // Extract view name
      for (const [key, view] of Object.entries(viewMappings)) {
        if (params.includes(key)) {
          return {
            type: 'navigation',
            intent: 'navigate',
            params: { view },
            confidence: 0.9
          };
        }
      }
    }
  }

  // Check for query commands
  for (const cmd of queryCommands) {
    if (lowerTranscript.startsWith(cmd) || lowerTranscript.includes(cmd)) {
      return {
        type: 'query',
        intent: 'query',
        params: { question: transcript },
        confidence: 0.85
      };
    }
  }

  // Check for action commands
  for (const cmd of actionCommands) {
    if (lowerTranscript.startsWith(cmd)) {
      return {
        type: 'action',
        intent: cmd,
        params: { action: cmd, context: transcript },
        confidence: 0.8
      };
    }
  }

  // Unknown command
  return {
    type: 'unknown',
    intent: 'unknown',
    confidence: 0.3
  };
}

// Wake word detection
export function detectWakeWord(transcript: string): boolean {
  const wakeWords = ['hey studio', 'studio', 'hey project'];
  const lowerTranscript = transcript.toLowerCase().trim();
  
  return wakeWords.some(word => lowerTranscript.includes(word));
}

// Extract command after wake word
export function extractCommandAfterWakeWord(transcript: string): string {
  const lowerTranscript = transcript.toLowerCase().trim();
  
  const wakeWords = ['hey studio', 'studio', 'hey project'];
  
  for (const wakeWord of wakeWords) {
    if (lowerTranscript.startsWith(wakeWord)) {
      return transcript.substring(wakeWord.length).trim();
    }
  }
  
  return transcript;
}





