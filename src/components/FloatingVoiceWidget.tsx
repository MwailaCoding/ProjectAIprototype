import { useState } from 'react';
import { Mic, X, Send, MessageCircle } from 'lucide-react';
import { useSpeechRecognition } from '../hooks/useSpeechRecognition';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';
import { parseVoiceCommand, detectWakeWord } from '../utils/voiceCommands';
import { generateResponse } from '../utils/conversationEngine';
import { ConversationMessage } from '../types/voice';

interface FloatingVoiceWidgetProps {
  currentView: string;
  onNavigate?: (view: string) => void;
  personality?: string;
}

export default function FloatingVoiceWidget({ 
  currentView, 
  onNavigate,
  personality = 'The Builder' 
}: FloatingVoiceWidgetProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [conversation, setConversation] = useState<ConversationMessage[]>([]);
  const [wakeWordListening, setWakeWordListening] = useState(false);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleTranscript = (transcript: string) => {
    setInput(transcript);
    
    // Check for wake word
    if (detectWakeWord(transcript)) {
      setWakeWordListening(false);
      setIsExpanded(true);
      return;
    }

    // Process the command
    if (isExpanded && transcript) {
      processCommand(transcript);
    }
  };

  const { 
    transcript, 
    isListening, 
    startListening, 
    stopListening 
  } = useSpeechRecognition(handleTranscript);
  
  const { speak, isSpeaking } = useSpeechSynthesis();

  const processCommand = async (commandText: string) => {
    setIsProcessing(true);
    
    const userMessage: ConversationMessage = {
      id: Date.now().toString(),
      type: 'user',
      text: commandText,
      timestamp: new Date()
    };

    setConversation(prev => [...prev, userMessage]);

    // Parse command
    const command = parseVoiceCommand(commandText);

    if (command.type === 'navigation' && command.params?.view && onNavigate) {
      // Execute navigation
      const response: ConversationMessage = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        text: `Navigating to ${command.params.view}...`,
        timestamp: new Date()
      };
      setConversation(prev => [...prev, response]);
      
      setTimeout(() => {
        onNavigate(command.params.view);
        setIsExpanded(false);
      }, 500);
      setIsProcessing(false);
      return;
    }

    // Generate response
    const aiResponse = generateResponse(commandText, personality);
    const response: ConversationMessage = {
      id: (Date.now() + 1).toString(),
      type: 'assistant',
      text: aiResponse.text,
      timestamp: new Date()
    };

    setConversation(prev => [...prev, response]);
    
    // Speak the response
    speak(aiResponse.text, personality);
    
    setIsProcessing(false);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setConversation([]);
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;
    processCommand(input);
    setInput('');
  };

  const handleMicClick = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={toggleExpanded}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
          isExpanded 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-gradient-to-r from-kings-gold to-divine-light hover:shadow-kings-gold/50 hover:scale-110'
        }`}
        style={{
          animation: isExpanded ? 'none' : 'glow-pulse 2s ease-in-out infinite'
        }}
      >
        {isExpanded ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Mic className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Expanded Chat Interface */}
      {isExpanded && (
        <div className="fixed bottom-24 right-6 w-96 h-96 bg-slate-900 border-2 border-kings-gold rounded-2xl shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-slate-700 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5 text-cyan-400" />
              <h3 className="font-semibold text-white">Voice Assistant</h3>
            </div>
            <div className="flex items-center space-x-2">
              {wakeWordListening && (
                <span className="text-xs text-cyan-400 animate-pulse">Listening...</span>
              )}
              <button
                onClick={() => setWakeWordListening(!wakeWordListening)}
                className={`px-3 py-1 rounded text-xs ${
                  wakeWordListening 
                    ? 'bg-cyan-500 text-white' 
                    : 'bg-slate-700 text-gray-300'
                }`}
              >
                {wakeWordListening ? 'Stop' : 'Wake Word'}
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {conversation.length === 0 && (
              <div className="text-center text-gray-400 text-sm py-8">
                <p>Say "Hey Studio" or click the mic to start</p>
              </div>
            )}
            {conversation.map((msg) => (
              <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`rounded-lg px-3 py-2 max-w-[80%] ${
                  msg.type === 'user' 
                    ? 'bg-cyan-500/20 text-white' 
                    : 'bg-slate-800 text-gray-300'
                }`}>
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
            {isProcessing && (
              <div className="flex justify-start">
                <div className="bg-slate-800 rounded-lg px-3 py-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type or speak..."
                className="flex-1 bg-slate-800 text-white border border-slate-600 rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
              />
              <button
                onClick={handleMicClick}
                className={`px-3 py-2 rounded-lg transition-all ${
                  isListening 
                    ? 'bg-red-500 hover:bg-red-600' 
                    : 'bg-slate-700 hover:bg-slate-600 text-white'
                }`}
              >
                <Mic className={`w-4 h-4 ${isListening ? 'animate-pulse' : ''}`} />
              </button>
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="bg-cyan-500 text-white px-3 py-2 rounded-lg hover:bg-cyan-600 transition-all disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


