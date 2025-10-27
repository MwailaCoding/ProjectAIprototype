import { useState } from 'react';
import { Target, Clock, Trophy, TrendingUp, MapPin, Filter } from 'lucide-react';
import { zindiChallenges } from '../data/enhancedMockData';

export default function ZindiChallenges() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...Array.from(new Set(zindiChallenges.map(c => c.category)))];

  const filteredChallenges = selectedCategory === 'all'
    ? zindiChallenges
    : zindiChallenges.filter(c => c.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Beginner': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Advanced': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'active': return 'bg-green-500/20 text-green-400';
      case 'upcoming': return 'bg-blue-500/20 text-blue-400';
      case 'completed': return 'bg-gray-500/20 text-gray-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full">
              <Target className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2 sm:px-0">
            Real-World <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Challenges</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 px-2 sm:px-0">
            Apply your AI skills to solve actual problems and create impact
          </p>
        </div>

        <div className="mb-6 sm:mb-8 flex flex-wrap gap-2 sm:gap-3 justify-center px-2 sm:px-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-6 py-2 rounded-lg font-medium transition-all text-sm sm:text-base ${
                selectedCategory === category
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              <Filter className="w-4 h-4 inline mr-2" />
              {category === 'all' ? 'All Challenges' : category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {filteredChallenges.map((challenge) => (
            <div
              key={challenge.id}
              className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-cyan-500/50 transition-all"
            >
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-semibold border ${getStatusColor(challenge.status)}`}>
                      {challenge.status.toUpperCase()}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-semibold border ${getDifficultyColor(challenge.difficulty)}`}>
                      {challenge.difficulty}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{challenge.title}</h3>
                  <p className="text-sm sm:text-base text-gray-400 mb-3">{challenge.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
                <div className="bg-slate-900/50 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <Trophy className="w-4 h-4 text-yellow-400" />
                    <span className="text-xs text-gray-400">PRIZE</span>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white">{challenge.prize}</div>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <Clock className="w-4 h-4 text-red-400" />
                    <span className="text-xs text-gray-400">DEADLINE</span>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white">{challenge.deadline}</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span className="text-xs sm:text-sm text-gray-400">TERRITORY</span>
                </div>
                <span className="text-xs sm:text-sm text-purple-400 font-semibold">
                  {challenge.mountain} Mountain
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {challenge.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded border border-cyan-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-cyan-500 text-white py-2 sm:py-3 px-4 rounded-lg font-semibold hover:bg-cyan-600 transition-all text-sm sm:text-base">
                  Apply Solution
                </button>
                <button className="bg-slate-700 text-gray-300 py-2 sm:py-3 px-4 rounded-lg font-semibold hover:bg-slate-600 transition-all text-sm sm:text-base">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
          <TrendingUp className="w-12 h-12 sm:w-16 sm:h-16 text-orange-400 mx-auto mb-4" />
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Ready to Make Real Impact?</h3>
          <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto">
            Submit your solutions to Zindi.africa challenges and win prizes while solving real-world problems
          </p>
          <a
            href="https://zindi.africa/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-orange-600 transition-all text-sm sm:text-base"
          >
            Visit Zindi.africa
          </a>
        </div>
      </div>
    </div>
  );
}

