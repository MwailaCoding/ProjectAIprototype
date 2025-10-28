import { useState } from 'react';
import { Mic, MicOff, Settings, Volume2, X } from 'lucide-react';
import { useSpeechRecognition } from '../hooks/useSpeechRecognition';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';
import { parseVoiceCommand, detectWakeWord } from '../utils/voiceCommands';
import { generateResponse } from '../utils/conversationEngine';
import { ConversationMessage, VoiceCommand } from '../types/voice';

const QUICK_TOPICS = [
  { label: '7 Mountains', keywords: 'seven mountains' },
  { label: 'Kings & Priests', keywords: 'kings priests balance' },
  { label: 'Joseph Principle', keywords: 'joseph principle seasons' },
  { label: 'My Status', keywords: 'my balance territories progress' },
  { label: 'Start Project', keywords: 'how start project launch venture' },
  { label: 'Navigation', keywords: 'show dashboard territory map' }
];

export default function VoiceAssistant() {
  const [conversation, setConversation] = useState<ConversationMessage[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [wakeWordMode, setWakeWordMode] = useState(false);
  const [personality, setPersonality] = useState<'The Builder' | 'The Steward' | 'The Strategist' | 'The Sage'>('The Builder');
  const [showSettings, setShowSettings] = useState(false);
  const [browserSupport, setBrowserSupport] = useState({
    speech: 'speechSynthesis' in window,
    recognition: !!(window as any).SpeechRecognition || !!(window as any).webkitSpeechRecognition
  });

  const handleTranscript = (transcript: string) => {
    if (transcript) {
      if (wakeWordMode && detectWakeWord(transcript)) {
        setWakeWordMode(false);
        setIsListening(true);
        return;
      }
      
      if (isListening) {
        processCommand(transcript);
        setIsListening(false);
      }
    }
  };

  const { 
    transcript, 
    interimTranscript,
    isListening: recListening, 
    startListening, 
    stopListening,
    error: speechError 
  } = useSpeechRecognition(handleTranscript);
  
  const { speak, isSpeaking, stop: stopSpeaking } = useSpeechSynthesis();

  const processCommand = async (commandText: string) => {
    const userMessage: ConversationMessage = {
      id: Date.now().toString(),
      type: 'user',
      text: commandText,
      timestamp: new Date()
    };

    setConversation(prev => [...prev, userMessage]);

    // Parse command
    const command: VoiceCommand = parseVoiceCommand(commandText);
    
    // Handle navigation commands
    if (command.type === 'navigation' && command.params?.view) {
      // For now, just show a message - actual navigation would be handled by parent
      const navResponse: ConversationMessage = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        text: `I would navigate to ${command.params.view}, but this is a demo. Please use the navigation menu to navigate.`,
        timestamp: new Date()
      };
      setConversation(prev => [...prev, navResponse]);
      speak(navResponse.text, personality);
      return;
    }

    // Generate contextual response using async version
    const response = await generateResponse(commandText, personality);
    const aiMessage: ConversationMessage = {
      id: (Date.now() + 1).toString(),
      type: 'assistant',
      text: response.text,
      timestamp: new Date()
    };

    setConversation(prev => [...prev, aiMessage]);
    
    // Speak the response
    speak(aiMessage.text, personality);
  };
  
  const handleQuickTopic = (keywords: string) => {
    // Simulate clicking mic, asking the question, and processing
    processCommand(keywords);
  };

  const toggleListening = () => {
    if (recListening) {
      stopListening();
      setIsListening(false);
    } else {
      startListening();
      setIsListening(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Starfield background */}
      <div className="absolute inset-0 bg-starfield opacity-20 pointer-events-none"></div>
      
      {/* Aurora effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Browser Support Warning */}
        {(!browserSupport.speech || !browserSupport.recognition) && (
          <div className="mb-6 p-4 bg-yellow-500/20 border border-yellow-500/50 rounded-xl">
            <h3 className="text-yellow-400 font-semibold mb-2">Browser Compatibility Notice</h3>
            <div className="text-sm text-gray-300 space-y-1">
              <p>• Speech Recognition: {browserSupport.recognition ? '✅ Supported' : '❌ Not Supported'}</p>
              <p>• Speech Synthesis: {browserSupport.speech ? '✅ Supported' : '❌ Not Supported'}</p>
              {!browserSupport.recognition && (
                <p className="text-yellow-400 mt-2">💡 Tip: Use Chrome, Edge, or Safari for best voice assistant experience</p>
              )}
            </div>
          </div>
        )}

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Voice Assistant</h1>
            <p className="text-gray-400">Say "Hey Studio" or click the mic to start</p>
          </div>
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-2 rounded-lg bg-slate-700 text-gray-300 hover:bg-slate-600 transition-all"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>

        {/* Settings Panel */}
        {showSettings && (
          <div className="mb-8 bg-slate-800 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Settings</h3>
              <button onClick={() => setShowSettings(false)} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">AI Personality</label>
                <select
                  value={personality}
                  onChange={(e) => setPersonality(e.target.value as any)}
                  className="w-full bg-slate-700 text-white border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-500"
                >
                  <option value="The Builder">The Builder</option>
                  <option value="The Steward">The Steward</option>
                  <option value="The Strategist">The Strategist</option>
                  <option value="The Sage">The Sage</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setWakeWordMode(!wakeWordMode)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    wakeWordMode 
                      ? 'bg-cyan-500 text-white' 
                      : 'bg-slate-700 text-gray-300'
                  }`}
                >
                  {wakeWordMode ? 'Wake Word: ON' : 'Wake Word: OFF'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Waveform Visualization */}
        <div className="flex items-center justify-center mb-8">
          <div className="relative w-64 h-64">
            {/* Outer circle with glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-kings-gold/20 to-divine-light/20 blur-2xl"></div>
            
            {/* Middle ring */}
            <div className={`absolute inset-4 rounded-full border-2 transition-all ${
              isListening 
                ? 'border-cyan-500 animate-pulse' 
                : isSpeaking 
                ? 'border-purple-500' 
                : 'border-kings-gold/30'
            }`}></div>
            
            {/* Center circle */}
            <div className="absolute inset-12 rounded-full bg-slate-800 flex items-center justify-center">
              {isListening ? (
                <div className="flex space-x-1">
                  <div className="w-3 h-8 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
                  <div className="w-3 h-12 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-3 h-16 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-3 h-12 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                  <div className="w-3 h-8 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              ) : isSpeaking ? (
                <div className="flex space-x-1">
                  <div className="w-3 h-8 bg-purple-500 rounded-full" style={{ animationDelay: '0s' }}></div>
                  <div className="w-3 h-12 bg-purple-500 rounded-full" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-3 h-16 bg-purple-500 rounded-full" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-3 h-12 bg-purple-500 rounded-full" style={{ animationDelay: '0.3s' }}></div>
                  <div className="w-3 h-8 bg-purple-500 rounded-full" style={{ animationDelay: '0.4s' }}></div>
                </div>
              ) : (
                <Mic className="w-12 h-12 text-gray-400" />
              )}
            </div>
          </div>
        </div>

        {/* Live Transcript Display - Always show when listening */}
        {recListening && (
          <div className="mb-6 max-w-2xl mx-auto">
            <div className="bg-slate-800/50 border border-cyan-500/30 rounded-2xl p-6">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Listening...</p>
              </div>
              <div className="min-h-[60px] flex items-center">
                {interimTranscript ? (
                  <p className="text-lg text-white font-medium">
                    {interimTranscript}
                    <span className="inline-block w-2 h-5 bg-cyan-500 ml-1 animate-pulse"></span>
                  </p>
                ) : (
                  <p className="text-gray-400 text-center w-full italic">Speak now...</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Microphone Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={toggleListening}
            className={`w-20 h-20 rounded-full flex items-center justify-center shadow-2xl transition-all ${
              recListening 
                ? 'bg-red-500 hover:bg-red-600' 
                : 'bg-gradient-to-r from-kings-gold to-divine-light hover:shadow-kings-gold/50'
            }`}
          >
            {recListening ? (
              <MicOff className="w-10 h-10 text-white" />
            ) : (
              <Mic className="w-10 h-10 text-white" />
            )}
          </button>
        </div>

        {/* Error Message */}
        {speechError && (
          <div className="mb-4 p-4 bg-red-500/20 border border-red-500 rounded-lg">
            <p className="text-red-400 text-sm">{speechError}</p>
          </div>
        )}

        {/* Quick Topics */}
        <div className="max-w-2xl mx-auto mb-6">
          <h3 className="text-sm font-semibold text-gray-400 mb-3">Try Asking About:</h3>
          <div className="flex flex-wrap gap-2">
            {QUICK_TOPICS.map((topic, index) => (
              <button
                key={index}
                onClick={() => handleQuickTopic(topic.keywords)}
                className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-lg text-sm hover:bg-cyan-500/20 transition-all"
              >
                {topic.label}
              </button>
            ))}
          </div>
        </div>

        {/* Conversation History */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold text-white mb-4">Conversation</h2>
          <div className="bg-slate-800 rounded-xl p-6 space-y-4 max-h-96 overflow-y-auto">
            {conversation.length === 0 && (
              <div className="text-center text-gray-400 text-sm py-8">
                <p className="mb-3">No conversation yet.</p>
                <p>Click a topic above, click the microphone, or say "Hey Studio" to start.</p>
              </div>
            )}
            {conversation.map((msg) => (
              <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`rounded-lg px-4 py-3 max-w-[80%] ${
                  msg.type === 'user' 
                    ? 'bg-cyan-500/20 border border-cyan-500/30 text-white' 
                    : 'bg-slate-700 border border-slate-600 text-gray-300'
                }`}>
                  <p className="text-sm">{msg.text}</p>
                  <p className="text-xs mt-1 text-gray-500">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}




