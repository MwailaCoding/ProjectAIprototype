import { useState } from 'react';
import { Presentation, Download, Save, Lightbulb, DollarSign, Users, Rocket } from 'lucide-react';
import { pitchTemplates } from '../data/enhancedMockData';

export default function PitchDeckBuilder() {
  const [selectedTemplate, setSelectedTemplate] = useState(pitchTemplates[0].id);
  const [activeSection, setActiveSection] = useState(0);

  const template = pitchTemplates.find(t => t.id === selectedTemplate);
  const sections = template?.sections || ['Problem', 'Solution', 'Market', 'Model', 'Financials', 'Ask'];
  
  const [pitchData, setPitchData] = useState<Record<string, string>>({
    problem: '',
    solution: '',
    market: '',
    model: '',
    financials: '',
    ask: ''
  });

  const getAI = (section: string) => {
    const suggestions: Record<string, string> = {
      problem: 'Identify a pain point affecting your target mountain. What specific problem are people facing?',
      solution: 'Describe your unique approach. How does your solution differ from existing alternatives?',
      market: 'Define your target market size. Who are your customers and how big is the opportunity?',
      model: 'Explain how you make money. What is your revenue model and pricing strategy?',
      financials: 'Show 5-year projections. Include revenue, costs, and key milestones.',
      ask: 'State what you need. How much funding and what will you use it for?'
    };
    return suggestions[section.toLowerCase()] || '';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full">
              <Presentation className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2 sm:px-0">
            Pitch Deck <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Builder</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 px-2 sm:px-0">
            Create investor-ready presentations for the Kings & Priests dinner
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="lg:col-span-2 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Pitch Sections</h2>
            
            <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
              {sections.map((section, index) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(index)}
                  className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap text-sm sm:text-base ${
                    activeSection === index
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <div className="bg-slate-900/50 rounded-lg p-4 sm:p-6 mb-4">
              <div className="flex items-center space-x-2 mb-3">
                <Lightbulb className="w-5 h-5 text-yellow-400" />
                <span className="text-sm text-gray-400">AI Suggestion</span>
              </div>
              <p className="text-sm sm:text-base text-gray-300">{getAI(sections[activeSection])}</p>
            </div>

            <textarea
              value={pitchData[sections[activeSection].toLowerCase()] || ''}
              onChange={(e) => setPitchData({
                ...pitchData,
                [sections[activeSection].toLowerCase()]: e.target.value
              })}
              placeholder={`Enter your ${sections[activeSection]}...`}
              rows={8}
              className="w-full bg-slate-900 text-white border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 resize-none text-sm sm:text-base"
            />
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Pitch Templates</h3>
              {pitchTemplates.map((templ) => (
                <button
                  key={templ.id}
                  onClick={() => setSelectedTemplate(templ.id)}
                  className={`w-full text-left p-3 rounded-lg mb-2 transition-all text-sm sm:text-base ${
                    selectedTemplate === templ.id
                      ? 'bg-cyan-500/20 border-2 border-cyan-500 text-white'
                      : 'bg-slate-900 border-2 border-slate-700 text-gray-300 hover:border-slate-600'
                  }`}
                >
                  {templ.name}
                </button>
              ))}
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Pitch Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Sections Completed</span>
                  <span className="text-lg font-bold text-cyan-400">
                    {Object.values(pitchData).filter(v => v).length}/{sections.length}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Estimated Time</span>
                  <span className="text-lg font-bold text-white">5 minutes</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <button className="w-full bg-cyan-500 text-white py-3 rounded-lg font-bold hover:bg-cyan-600 transition-all flex items-center justify-center space-x-2">
                <Save className="w-5 h-5" />
                <span>Save Draft</span>
              </button>
              <button className="w-full bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600 transition-all flex items-center justify-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Export PDF</span>
              </button>
              <button className="w-full bg-purple-500 text-white py-3 rounded-lg font-bold hover:bg-purple-600 transition-all flex items-center justify-center space-x-2">
                <Rocket className="w-5 h-5" />
                <span>Practice Pitch</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

