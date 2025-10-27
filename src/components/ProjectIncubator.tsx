import { useState } from 'react';
import { Rocket, Hammer, Shield, Target, Lightbulb, Mountain, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react';
import { aiCoFounders, legacyTerms } from '../data/mockData';
import AIChatInterface from './ai/AIChatInterface';

export default function ProjectIncubator() {
  const [projectName, setProjectName] = useState('');
  const [problemStatement, setProblemStatement] = useState('');
  const [selectedMountain, setSelectedMountain] = useState('');
  const [selectedCoFounder, setSelectedCoFounder] = useState<string | null>(null);
  const [showChat, setShowChat] = useState(false);
  const [projectLaunched, setProjectLaunched] = useState(false);

  const handleLaunch = () => {
    if (!projectName || !selectedCoFounder || !selectedMountain) {
      alert('Please fill in project name, select a mountain, and choose a co-founder');
      return;
    }
    setProjectLaunched(true);
    // Simulate project launch with a toast-like notification
    setTimeout(() => {
      alert(`🎉 Project "${projectName}" launched successfully!\n\nYou're working with: ${selectedCoFounder}\nMountain: ${selectedMountain}`);
    }, 100);
  };

  const getCoFounderIcon = (avatar: string) => {
    switch(avatar) {
      case 'Hammer': return Hammer;
      case 'Shield': return Shield;
      case 'Target': return Target;
      case 'Lightbulb': return Lightbulb;
      default: return Rocket;
    }
  };

  const mountains = [
    { id: 'education', name: 'Education', color: 'from-blue-500 to-blue-700' },
    { id: 'government', name: 'Government', color: 'from-red-500 to-red-700' },
    { id: 'business', name: 'Business', color: 'from-green-500 to-green-700' },
    { id: 'media', name: 'Media', color: 'from-purple-500 to-purple-700' },
    { id: 'arts', name: 'Arts', color: 'from-pink-500 to-pink-700' },
    { id: 'family', name: 'Family', color: 'from-orange-500 to-orange-700' },
    { id: 'religion', name: 'Religion', color: 'from-yellow-500 to-yellow-700' }
  ];

  const valuesChecks = [
    { name: 'Purpose Alignment', score: 85, status: 'green' },
    { name: 'Ethical Foundation', score: 92, status: 'green' },
    { name: 'Sustainability', score: 78, status: 'yellow' },
    { name: 'Impact Potential', score: 88, status: 'green' },
    { name: 'Scalability', score: 72, status: 'yellow' },
    { name: 'Kingdom Advancement', score: 90, status: 'green' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full">
              <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2 sm:px-0">
            Project <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Incubator 2.0</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 px-2 sm:px-0">
            Launch ventures aligned with your values and designed for generational impact
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Values-Aligned Project Canvas</h2>

              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="text-xs sm:text-sm text-gray-400 mb-2 block">Project Name</label>
                  <input
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="e.g., FaithFinance Platform"
                    className="w-full bg-slate-900 text-white border border-slate-600 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:border-cyan-500 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="text-xs sm:text-sm text-gray-400 mb-2 block">Problem Statement with Purpose</label>
                  <textarea
                    value={problemStatement}
                    onChange={(e) => setProblemStatement(e.target.value)}
                    placeholder="What problem are you solving and why does it matter for kingdom advancement?"
                    rows={4}
                    className="w-full bg-slate-900 text-white border border-slate-600 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:border-cyan-500 resize-none text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="text-xs sm:text-sm text-gray-400 mb-2 block">Target Territory (Mountain)</label>
                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-2 sm:gap-3">
                    {mountains.map((mountain) => (
                      <button
                        key={mountain.id}
                        onClick={() => setSelectedMountain(mountain.id)}
                        className={`p-2 sm:p-3 rounded-lg border-2 transition-all ${
                          selectedMountain === mountain.id
                            ? `bg-gradient-to-r ${mountain.color} border-white text-white`
                            : 'bg-slate-900 border-slate-600 text-gray-400 hover:border-slate-500'
                        }`}
                      >
                        <Mountain className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-1" />
                        <div className="text-xs sm:text-sm font-semibold">{mountain.name}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">AI Co-Founder Suite</h2>
              <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">Select an AI advisor to guide this project phase</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {aiCoFounders.map((cofounder) => {
                  const Icon = getCoFounderIcon(cofounder.avatar);
                  const isSelected = selectedCoFounder === cofounder.name;
                  return (
                    <button
                      key={cofounder.name}
                      onClick={() => setSelectedCoFounder(cofounder.name)}
                      className={`text-left bg-slate-900/50 border-2 rounded-xl p-3 sm:p-4 transition-all hover:scale-105 ${
                        isSelected ? 'border-cyan-500 shadow-lg shadow-cyan-500/30' : 'border-slate-700'
                      }`}
                    >
                      <div className="flex items-start space-x-3 mb-2 sm:mb-3">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          isSelected ? 'bg-gradient-to-br from-cyan-500 to-blue-500' : 'bg-slate-700'
                        }`}>
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-white">{cofounder.name}</h3>
                          <p className="text-xs sm:text-sm text-gray-400">{cofounder.role}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2">
                        {cofounder.expertise.map((skill) => (
                          <span key={skill} className="text-xs bg-slate-700 text-gray-300 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs sm:text-sm text-gray-500 italic">{cofounder.personality}</p>
                    </button>
                  );
                })}
              </div>

              {selectedCoFounder && (
                <>
                  <div className="mt-4 sm:mt-6 bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-3 sm:p-4">
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">{selectedCoFounder} says:</div>
                        <p className="text-gray-300 text-xs sm:text-sm">
                          {selectedCoFounder === 'The Builder' && "Let's focus on building a solid technical foundation. I recommend starting with a MVP that validates your core hypothesis."}
                          {selectedCoFounder === 'The Steward' && "Ensure your business model aligns with ethical principles. Consider how this creates sustainable value for all stakeholders."}
                          {selectedCoFounder === 'The Strategist' && "Based on current market conditions, this is an optimal time to launch. Focus on differentiation and clear positioning."}
                          {selectedCoFounder === 'The Sage' && "Remember your purpose beyond profit. This venture should create generational impact and advance kingdom values."}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowChat(!showChat)}
                    className="mt-4 sm:mt-6 w-full bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-3 sm:p-4 text-cyan-400 hover:bg-cyan-500/20 transition-all flex items-center justify-center space-x-2"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span className="text-sm sm:text-base font-medium">
                      {showChat ? 'Hide' : 'Chat with'} {selectedCoFounder}
                    </span>
                  </button>

                  {showChat && (
                    <div className="mt-4">
                      <AIChatInterface 
                        coFounderName={selectedCoFounder} 
                        projectContext={{ mountain: selectedMountain, projectName, problemStatement }}
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Values Alignment Check</h3>
              <div className="space-y-3">
                {valuesChecks.map((check) => (
                  <div key={check.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-300">{check.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className={`text-sm font-bold ${
                          check.status === 'green' ? 'text-green-400' : 'text-yellow-400'
                        }`}>
                          {check.score}%
                        </span>
                        {check.status === 'green' ? (
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-yellow-400" />
                        )}
                      </div>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${
                          check.status === 'green'
                            ? 'from-green-500 to-emerald-500'
                            : 'from-yellow-500 to-orange-500'
                        }`}
                        style={{width: `${check.score}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 sm:mt-6 bg-green-500/10 border border-green-500/30 rounded-lg p-3 sm:p-4">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">84%</div>
                  <div className="text-xs sm:text-sm text-gray-400">Overall Alignment Score</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Legacy Language Guide</h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {legacyTerms.map((term, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-purple-400 font-semibold">{term.ministry}</span>
                      <span className="text-gray-500">⇄</span>
                      <span className="text-sm text-blue-400 font-semibold">{term.business}</span>
                    </div>
                    <p className="text-xs text-gray-500">{term.example}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Impact Projection</h3>
              <div className="space-y-3">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                  <div className="text-xs text-gray-400 mb-1">5-YEAR REVENUE</div>
                  <div className="text-2xl font-bold text-green-400">$2.5M</div>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3">
                  <div className="text-xs text-gray-400 mb-1">LIVES IMPACTED</div>
                  <div className="text-2xl font-bold text-purple-400">50K+</div>
                </div>
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-3">
                  <div className="text-xs text-gray-400 mb-1">TERRITORY INFLUENCE</div>
                  <div className="text-2xl font-bold text-cyan-400">High</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
          <button 
            onClick={handleLaunch}
            disabled={projectLaunched}
            className={`bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all w-full sm:w-auto ${
              projectLaunched ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {projectLaunched ? '✓ Project Launched' : 'Launch Project with AI Co-Founders'}
          </button>
          <p className="text-gray-400 mt-3 sm:mt-4 text-xs sm:text-sm">
            {projectLaunched 
              ? 'Project launched! Check your dashboard to see your active venture.'
              : 'Your project canvas will be saved and AI advisors will begin strategic planning'
            }
          </p>
        </div>
      </div>
    </div>
  );
}
