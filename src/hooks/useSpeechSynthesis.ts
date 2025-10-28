import { useState, useEffect, useCallback, useRef } from 'react';

interface UseSpeechSynthesisReturn {
  isSpeaking: boolean;
  speak: (text: string, personality?: string) => void;
  stop: () => void;
  isSupported: boolean;
}

const personalitySettings: Record<string, Partial<SpeechSynthesisUtterance>> = {
  'The Builder': { rate: 1.1, pitch: 1.0 },
  'The Steward': { rate: 0.9, pitch: 0.9 },
  'The Strategist': { rate: 1.2, pitch: 1.1 },
  'The Sage': { rate: 0.8, pitch: 0.8 }
};

export function useSpeechSynthesis(): UseSpeechSynthesisReturn {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    // Check for browser support
    setIsSupported('speechSynthesis' in window);

    return () => {
      if (utteranceRef.current) {
        speechSynthesis.cancel();
      }
    };
  }, []);

  const speak = useCallback((text: string, personality: string = 'The Builder') => {
    if (!('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported');
      return;
    }

    // Cancel any current speech
    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    const settings = personalitySettings[personality] || personalitySettings['The Builder'];

    // Apply personality settings
    utterance.rate = settings.rate || 1.0;
    utterance.pitch = settings.pitch || 1.0;
    utterance.volume = 1;

    // Choose voice based on personality
    const voices = speechSynthesis.getVoices();
    if (voices.length > 0) {
      // Try to find a good voice match
      const personalityVoices: Record<string, string[]> = {
        'The Builder': ['male', 'deep'],
        'The Steward': ['female', 'soft'],
        'The Strategist': ['male', 'confident'],
        'The Sage': ['male', 'calm', 'wise']
      };

      const preferredTypes = personalityVoices[personality] || personalityVoices['The Builder'];
      let selectedVoice = null;

      for (const voice of voices) {
        const nameLower = voice.name.toLowerCase();
        if (preferredTypes.some(type => nameLower.includes(type))) {
          selectedVoice = voice;
          break;
        }
      }

      if (selectedVoice) {
        utterance.voice = selectedVoice;
      } else if (voices.length > 0) {
        utterance.voice = voices[0];
      }
    }

    // Event handlers
    utterance.onstart = () => {
      setIsSpeaking(true);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      utteranceRef.current = null;
    };

    utterance.onerror = (event) => {
      console.error('Speech synthesis error:', event);
      setIsSpeaking(false);
      utteranceRef.current = null;
    };

    utteranceRef.current = utterance;
    speechSynthesis.speak(utterance);
  }, []);

  const stop = useCallback(() => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
      utteranceRef.current = null;
    }
  }, []);

  return {
    isSpeaking,
    speak,
    stop,
    isSupported
  };
}

