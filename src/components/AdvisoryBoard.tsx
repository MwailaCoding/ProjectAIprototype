import { Users, Award, Linkedin } from 'lucide-react';
import { advisoryBoard } from '../data/investorData';

export default function AdvisoryBoard() {
  const getTypeBadge = (type: string) => {
    if (type === 'King') return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    if (type === 'Priest') return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
    return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full">
              <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Advisory <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Board</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300">
            Experienced leaders guiding our vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {advisoryBoard.map((member) => (
            <div
              key={member.id}
              className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-cyan-500/50 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl sm:text-2xl">
                  {member.name.charAt(0)}
                </div>
                <span className={`px-2 py-1 rounded text-xs font-semibold border ${getTypeBadge(member.type)}`}>
                  {member.type}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-sm text-cyan-400 mb-2">{member.title}</p>
              <p className="text-xs text-gray-400 mb-3">{member.bio}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-purple-400 font-semibold">{member.mountain} Mountain</span>
                <button className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-all">
                  <Linkedin className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/30 rounded-xl p-6 sm:p-8 text-center">
          <Award className="w-12 h-12 sm:w-16 sm:h-16 text-orange-400 mx-auto mb-4" />
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Join Our Advisory Board</h3>
          <p className="text-sm sm:text-base text-gray-300 mb-6 max-w-2xl mx-auto">
            We're looking for Kings and Priests who share our vision
          </p>
          <button className="bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-orange-600 transition-all text-sm sm:text-base">
            Apply to Advisory Board
          </button>
        </div>
      </div>
    </div>
  );
}

