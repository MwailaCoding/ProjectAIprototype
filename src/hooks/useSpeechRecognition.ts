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
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let interimText = '';
      let finalText = '';

      for (let i = 0; i < event.results.length; i++) {
        const result = event.results[i];
        const transcript = result.item(0).transcript;
        
        if (result.isFinal) {
          finalText += transcript + ' ';
        } else {
          interimText += transcript + ' ';
        }
      }

      console.log('Recognition result - Interim:', interimText, 'Final:', finalText);

      if (interimText.trim()) {
        setInterimTranscript(interimText.trim());
      }

      if (finalText) {
        setTranscript(finalText.trim());
        setInterimTranscript('');
        if (onResult) {
          onResult(finalText.trim());
        }
      }
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error('Speech recognition error:', event.error, event.message);
      let errorMessage = `Speech recognition error: ${event.error}`;
      
      if (event.error === 'network') {
        errorMessage = 'Network error. Check your internet connection.';
      } else if (event.error === 'not-allowed') {
        errorMessage = 'Microphone permission denied. Please allow microphone access.';
      } else if (event.error === 'no-speech') {
        errorMessage = 'No speech detected. Try again.';
      } else if (event.error === 'aborted') {
        errorMessage = 'Speech recognition was interrupted.';
      } else if (event.error === 'audio-capture') {
        errorMessage = 'Microphone not found or not accessible.';
      } else if (event.error === 'service-not-allowed') {
        errorMessage = 'Speech recognition service is not available.';
      }
      
      setError(errorMessage);
      setIsListening(false);
      isListeningRef.current = false;
    };

    recognition.onend = () => {
      console.log('Recognition ended, isListeningRef:', isListeningRef.current);
      
      // Only restart if we're still supposed to be listening
      if (isListeningRef.current && recognition.continuous) {
        try {
          console.log('Restarting recognition...');
          recognition.start();
        } catch (err) {
          console.log('Recognition restart error (already listening):', err);
        }
      } else {
        setIsListening(false);
      }
    };

    recognitionRef.current = recognition;

    return () => {
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
      setError('Failed to start speech recognition');
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
      recognitionRef.current.stop();
      setIsListening(false);
    } catch (err) {
      console.error('Error stopping speech recognition:', err);
      isListeningRef.current = false;
      setIsListening(false);
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
