import { useState, useEffect, useRef, useCallback } from 'react';

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: (event: SpeechRecognitionEvent) => void;
  onerror: (event: SpeechRecognitionErrorEvent) => void;
  onend: () => void;
}

interface SpeechRecognitionEvent {
  results: SpeechRecognitionResultList;
  resultIndex: number;
}

interface SpeechRecognitionResultList {
  length: number;
  item(index: number): SpeechRecognitionResult;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
  isFinal: boolean;
  length: number;
  item(index: number): SpeechRecognitionAlternative;
  [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

interface SpeechRecognitionErrorEvent {
  error: string;
  message: string;
}

interface UseSpeechRecognitionReturn {
  transcript: string;
  interimTranscript: string;
  isListening: boolean;
  isSupported: boolean;
  startListening: () => void;
  stopListening: () => void;
  error: string | null;
}

export function useSpeechRecognition(onResult?: (transcript: string) => void): UseSpeechRecognitionReturn {
  const [transcript, setTranscript] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSupported, setIsSupported] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const isListeningRef = useRef(false);
  const silenceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastSpeechTimeRef = useRef<number>(0);
  const isMobileRef = useRef<boolean>(false);

  useEffect(() => {
    const SpeechRecognition = 
      (window as any).SpeechRecognition || 
      (window as any).webkitSpeechRecognition;
    
    setIsSupported(!!SpeechRecognition);

    if (!SpeechRecognition) {
      setError('Speech recognition not supported in this browser');
      return;
    }

    const recognition = new SpeechRecognition() as SpeechRecognition;
    // Use continuous for better mobile compatibility, but control it manually
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';
    
    // Detect mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    isMobileRef.current = isMobile;
    
    // Mobile browsers need special handling
    if (isMobile) {
      // On mobile, we need continuous for it to work properly
      recognition.continuous = true;
    }

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let interimText = '';
      let finalText = '';

      for (let i = 0; i < event.results.length; i++) {
        const result = event.results[i];
        const transcript = result.item(0).transcript;
        
        if (result.isFinal) {
          finalText += transcript + ' ';
          lastSpeechTimeRef.current = Date.now();
        } else {
          interimText += transcript + ' ';
          lastSpeechTimeRef.current = Date.now();
        }
      }

      console.log('Recognition result - Interim:', interimText, 'Final:', finalText);

      if (interimText.trim()) {
        setInterimTranscript(interimText.trim());
        // Reset silence timeout when speech detected
        if (silenceTimeoutRef.current) {
          clearTimeout(silenceTimeoutRef.current);
        }
        // Set new timeout for silence detection (longer on mobile)
        const silenceTimeout = isMobileRef.current ? 3000 : 2000;
        silenceTimeoutRef.current = setTimeout(() => {
          console.log('Silence detected, auto-stopping...');
          if (isListeningRef.current && recognitionRef.current) {
            isListeningRef.current = false;
            try {
              recognitionRef.current.stop();
            } catch (err) {
              console.error('Error auto-stopping:', err);
            }
          }
        }, silenceTimeout);
      }

      if (finalText) {
        setTranscript(finalText.trim());
        setInterimTranscript('');
        
        // Clear silence timeout
        if (silenceTimeoutRef.current) {
          clearTimeout(silenceTimeoutRef.current);
        }
        
        if (onResult) {
          onResult(finalText.trim());
        }
        
        // Auto-stop after getting final result (like Siri)
        setTimeout(() => {
          if (isListeningRef.current && recognitionRef.current) {
            isListeningRef.current = false;
            try {
              recognitionRef.current.stop();
            } catch (err) {
              console.error('Error auto-stopping after final result:', err);
            }
          }
        }, 500);
      }
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error('Speech recognition error:', event.error, event.message);
      let errorMessage = `Speech recognition error: ${event.error}`;
      
      if (event.error === 'network') {
        errorMessage = 'Network error. Check your internet connection.';
      } else if (event.error === 'not-allowed') {
        errorMessage = 'Microphone permission denied. Please allow microphone access in your browser settings.';
      } else if (event.error === 'no-speech') {
        // Don't show error for no-speech on mobile, it's common
        console.log('No speech detected');
        return;
      } else if (event.error === 'aborted') {
        console.log('Speech recognition aborted');
        return;
      } else if (event.error === 'audio-capture') {
        errorMessage = 'Microphone not found or not accessible. Please check your device settings.';
      } else if (event.error === 'service-not-allowed') {
        errorMessage = 'Speech recognition service is not available. Ensure you are using HTTPS.';
      }
      
      setError(errorMessage);
      setIsListening(false);
      isListeningRef.current = false;
    };

    recognition.onend = () => {
      console.log('Recognition ended, isListeningRef:', isListeningRef.current);
      
      // Clear any pending silence timeout
      if (silenceTimeoutRef.current) {
        clearTimeout(silenceTimeoutRef.current);
        silenceTimeoutRef.current = null;
      }
      
      // Don't auto-restart - user should click to start again (Siri-like)
      // This works better on both desktop and mobile
      setIsListening(false);
      isListeningRef.current = false;
    };

    recognitionRef.current = recognition;

    return () => {
      // Clear any pending timeout
      if (silenceTimeoutRef.current) {
        clearTimeout(silenceTimeoutRef.current);
        silenceTimeoutRef.current = null;
      }
      
      if (recognitionRef.current) {
        recognitionRef.current.abort();
        recognitionRef.current = null;
      }
    };
  }, [onResult]);

  const startListening = useCallback(() => {
    if (!recognitionRef.current) {
      setError('Speech recognition not initialized');
      return;
    }

    if (isListeningRef.current) {
      console.log('Already listening, skipping start');
      return;
    }

    // Check for HTTPS requirement on mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile && window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') {
      setError('Speech recognition requires HTTPS on mobile devices. Please use a secure connection.');
      return;
    }

    try {
      console.log('Starting speech recognition...');
      setTranscript('');
      setInterimTranscript('');
      setError(null);
      isListeningRef.current = true;
      setIsListening(true);
      recognitionRef.current.start();
    } catch (err) {
      console.error('Error starting speech recognition:', err);
      const errorMsg = err instanceof Error ? err.message : 'Failed to start speech recognition';
      setError(errorMsg);
      setIsListening(false);
      isListeningRef.current = false;
    }
  }, []);

  const stopListening = useCallback(() => {
    if (!recognitionRef.current) {
      return;
    }

    if (!isListeningRef.current) {
      return;
    }

    try {
      console.log('Stopping speech recognition...');
      isListeningRef.current = false;
      
      // Clear silence timeout
      if (silenceTimeoutRef.current) {
        clearTimeout(silenceTimeoutRef.current);
        silenceTimeoutRef.current = null;
      }
      
      recognitionRef.current.stop();
      setIsListening(false);
    } catch (err) {
      console.error('Error stopping speech recognition:', err);
      isListeningRef.current = false;
      setIsListening(false);
      
      // Clear timeout on error too
      if (silenceTimeoutRef.current) {
        clearTimeout(silenceTimeoutRef.current);
        silenceTimeoutRef.current = null;
      }
    }
  }, []);

  return {
    transcript,
    interimTranscript,
    isListening,
    isSupported,
    startListening,
    stopListening,
    error
  };
}

