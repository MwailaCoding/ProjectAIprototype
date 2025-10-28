import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Mic, Volume2, VolumeX } from 'lucide-react';
import { getCoFounderAdvice } from '../../utils/aiEngine';
import { useSpeechRecognition } from '../../hooks/useSpeechRecognition';
import { useSpeechSynthesis } from '../../hooks/useSpeechSynthesis';

interface Message {
  type: 'user' | 'ai';
  text: string;
  timestamp: Date;
}

interface AIChatInterfaceProps {
  coFounderName: string;
  projectContext: any;
}

export default function AIChatInterface({ coFounderName, projectContext }: AIChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Voice hooks
  const { 
    transcript, 
    isListening, 
    startListening, 
    stopListening, 
    error: speechError 
  } = useSpeechRecognition((transcript) => {
    setInput(transcript);
  });
  
  const { speak, isSpeaking, stop: stopSpeaking } = useSpeechSynthesis();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    // Stop listening if active
    if (isListening) stopListening();

    const userMessage: Message = {
      type: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const inputText = input;
    setInput('');
    setIsTyping(true);

    // Simulate AI processing
    setTimeout(() => {
      const aiResponse = getCoFounderAdvice(coFounderName, projectContext);
      const aiMessage: Message = {
        type: 'ai',
        text: aiResponse.text,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
      
      // Speak the response if voice is enabled
      if (voiceEnabled) {
        speak(aiResponse.text, coFounderName);
      }
    }, 1000);
  };
  
  const handleVoiceToggle = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-[500px] bg-slate-900 rounded-lg border border-slate-700">
      {/* Chat Header */}
    <div className="p-4 border-b border-slate-700 flex items-center space-x-3">
      <Bot className="w-6 h-6 text-cyan-400" />
      <div>
        <h3 className="font-semibold text-white">{coFounderName}</h3>
        <p className="text-xs text-gray-400">AI Co-Founder</p>
      </div>
    </div>

    {/* Messages */}
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.length === 0 && (
        <div className="text-center text-gray-400 text-sm py-8">
          Start a conversation with {coFounderName} to get project guidance
        </div>
      )}
      {messages.map((message, index) => (
        <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
          <div className={`flex items-start space-x-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
              message.type === 'user' ? 'bg-cyan-500' : 'bg-purple-500'
            }`}>
              {message.type === 'user' ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-white" />}
            </div>
            <div className={`rounded-lg p-3 ${
              message.type === 'user' 
                ? 'bg-cyan-500/20 border border-cyan-500/30 text-white' 
                : 'bg-slate-800 border border-slate-700 text-gray-300'
            }`}>
              <p className="text-sm">{message.text}</p>
              <p className="text-xs mt-1 text-gray-500">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        </div>
      ))}
      {isTyping && (
        <div className="flex justify-start">
          <div className="flex space-x-2">
            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-3">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>

    {/* Input */}
    <div className="p-4 border-t border-slate-700">
      <div className="flex space-x-2">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={`Ask ${coFounderName} anything...`}
          className="flex-1 bg-slate-800 text-white border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-500 resize-none"
          rows={2}
        />
        <div className="flex flex-col space-y-2">
          <button
            onClick={handleVoiceToggle}
            className={`px-4 py-2 rounded-lg transition-all ${
              isListening 
                ? 'bg-red-500 text-white hover:bg-red-600' 
                : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
            }`}
            title={isListening ? 'Stop recording' : 'Start voice input'}
          >
            <Mic className={`w-4 h-4 ${isListening ? 'animate-pulse' : ''}`} />
          </button>
          <button
            onClick={() => setVoiceEnabled(!voiceEnabled)}
            className={`px-4 py-2 rounded-lg transition-all ${
              voiceEnabled 
                ? 'bg-purple-500 text-white hover:bg-purple-600' 
                : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
            }`}
            title={voiceEnabled ? 'Disable voice output' : 'Enable voice output'}
          >
            {voiceEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
          <button
            onClick={sendMessage}
            disabled={!input.trim() || isTyping}
            className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            title="Send message"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
      {speechError && (
        <p className="text-xs text-red-400 mt-2">{speechError}</p>
      )}
      {isListening && (
        <p className="text-xs text-cyan-400 mt-2 animate-pulse">Listening...</p>
      )}
    </div>
  </div>
  );
}

