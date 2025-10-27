import { useState } from 'react';
import { Users, CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { teamMembers } from '../data/enhancedMockData';

export default function TeamMatcher() {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  const getMatchScore = () => {
    return Math.floor(Math.random() * 30) + 70; // 70-100%
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full">
              <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2 sm:px-0">
            Team <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Matcher</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 px-2 sm:px-0">
            Find the perfect co-founders for your venture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-cyan-500/50 transition-all cursor-pointer"
              onClick={() => setSelectedMember(member.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                  {member.name.charAt(0)}
                </div>
                <div className={`px-2 py-1 rounded text-xs font-semibold border ${
                  member.availability === 'Available' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                  member.availability === 'Committed' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                  'bg-gray-500/20 text-gray-400 border-gray-500/30'
                }`}>
                  {member.availability}
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-sm text-gray-400 mb-4">{member.bio}</p>

              <div className="mb-4">
                <div className="text-xs text-gray-400 mb-2">SKILLS</div>
                <div className="flex flex-wrap gap-2">
                  {member.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-purple-500/10 text-purple-400 px-2 py-1 rounded border border-purple-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-sm text-gray-400 mb-4">
                <div className="flex items-center space-x-2">
                  <span>Territory:</span>
                  <span className="text-purple-400 font-semibold">{member.mountain}</span>
                </div>
              </div>

              <button className="w-full bg-cyan-500 text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-all flex items-center justify-center space-x-2">
                <span>View Profile</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {selectedMember && (
          <div className="mt-8 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Compatibility Match</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-1">{getMatchScore()}%</div>
                <div className="text-xs text-gray-400">Overall Match</div>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">85%</div>
                <div className="text-xs text-gray-400">Skill Fit</div>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">90%</div>
                <div className="text-xs text-gray-400">Vision Alignment</div>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-1">78%</div>
                <div className="text-xs text-gray-400">Personality Match</div>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 sm:py-4 px-6 rounded-xl font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-sm sm:text-base">
              Send Co-founder Request
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

