// Voice Assistant Types

export interface VoiceCommand {
  type: 'navigation' | 'query' | 'action' | 'unknown';
  intent: string;
  params?: Record<string, any>;
  confidence: number;
}

export interface ConversationMessage {
  id: string;
  type: 'user' | 'assistant';
  text: string;
  timestamp: Date;
  audioUrl?: string;
}

export interface VoiceSettings {
  personality: 'The Builder' | 'The Steward' | 'The Strategist' | 'The Sage';
  wakeWordEnabled: boolean;
  autoReadResponses: boolean;
  speechRate: number;
  volume: number;
}

export interface SpeechRecognitionState {
  isListening: boolean;
  isProcessing: boolean;
  transcript: string;
  interimTranscript: string;
  error: string | null;
}

export interface SpeechSynthesisState {
  isSpeaking: boolean;
  currentUtterance: string | null;
}





