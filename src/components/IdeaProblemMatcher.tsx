import { useState } from 'react';
import { Search, Target, TrendingUp, MapPin, ArrowRight } from 'lucide-react';
import { strategicProblems } from '../data/enhancedMockData';

export default function IdeaProblemMatcher() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMountain, setSelectedMountain] = useState('all');

  const mountains = ['all', 'Business', 'Education', 'Government', 'Media', 'Arts', 'Family', 'Religion'];
  
  const filteredProblems = strategicProblems.filter(problem => {
    const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         problem.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMountain = selectedMountain === 'all' || problem.mountain === selectedMountain;
    return matchesSearch && matchesMountain;
  });

  const getSeasonColor = (season: string) => {
    switch(season) {
      case 'plenty': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30';
      case 'harvest': return 'text-green-400 bg-green-500/10 border-green-500/30';
      case 'preparation': return 'text-blue-400 bg-blue-500/10 border-blue-500/30';
      case 'famine': return 'text-gray-400 bg-gray-500/10 border-gray-500/30';
      default: return 'text-gray-400 bg-gray-500/10 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full">
              <Target className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2 sm:px-0">
            Strategic Problem <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Matching</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 px-2 sm:px-0">
            Connect your ideas with strategic problems from the prophetic mandate
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-4">
              <div className="flex items-center space-x-2 mb-4">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search strategic problems..."
                  className="flex-1 bg-slate-900 text-white border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-500"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {mountains.map((mountain) => (
                  <button
                    key={mountain}
                    onClick={() => setSelectedMountain(mountain)}
                    className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-all text-sm sm:text-base ${
                      selectedMountain === mountain
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    {mountain === 'all' ? 'All' : mountain}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {filteredProblems.map((problem) => (
                <div
                  key={problem.id}
                  className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-4 sm:p-6 hover:border-cyan-500/50 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2 py-1 rounded text-xs font-semibold border ${getSeasonColor(problem.season)}`}>
                          {problem.season.toUpperCase()}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-semibold border ${
                          problem.priority === 'High' ? 'bg-red-500/20 text-red-400 border-red-500/30' :
                          problem.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                          'bg-blue-500/20 text-blue-400 border-blue-500/30'
                        }`}>
                          {problem.priority} PRIORITY
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{problem.title}</h3>
                      <p className="text-sm sm:text-base text-gray-400 mb-3">{problem.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-purple-400" />
                      <span className="text-sm text-purple-400 font-semibold">{problem.mountain} Mountain</span>
                    </div>
                    <div className="text-sm sm:text-base text-cyan-400 font-bold">{problem.impact}</div>
                  </div>

                  <button className="w-full sm:w-auto bg-cyan-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-all flex items-center justify-center space-x-2">
                    <span>Match My Idea</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Matching Criteria</h3>
              <div className="space-y-3">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                  <div className="text-xs text-gray-400 mb-1">MOUNTAIN ALIGNMENT</div>
                  <div className="text-sm font-semibold text-green-400">✓ Checked</div>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                  <div className="text-xs text-gray-400 mb-1">SKILL SET</div>
                  <div className="text-sm font-semibold text-blue-400">✓ Matched</div>
                </div>
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                  <div className="text-xs text-gray-400 mb-1">MARKET TIMING</div>
                  <div className="text-sm font-semibold text-yellow-400">✓ Optimal</div>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3">
                  <div className="text-xs text-gray-400 mb-1">IMPACT POTENTIAL</div>
                  <div className="text-sm font-semibold text-purple-400">✓ High</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Problem Sources</h3>
              <div className="space-y-2 text-sm sm:text-base text-gray-300">
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4 text-cyan-400" />
                  <span>Prophetic mandate research</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                  <span>Market analysis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4 text-cyan-400" />
                  <span>Zindi challenges</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

