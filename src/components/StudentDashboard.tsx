import { TrendingUp, Target, Clock, Award, ArrowRight, Zap, Mountain, DollarSign } from 'lucide-react';
import { mockUser, mockProjects, mockMountains } from '../data/mockData';

export default function StudentDashboard() {
  const currentProject = mockProjects[0];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'planning': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'building': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'launched': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'scaling': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
            Welcome back, <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{mockUser.name}</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-400">Continue building your legacy across the 7 mountains</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <Mountain className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mb-2 sm:mb-3" />
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{mockUser.territoriesConquered}/7</div>
            <div className="text-gray-400 text-xs sm:text-sm">Territories</div>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <Target className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mb-2 sm:mb-3" />
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">3</div>
            <div className="text-gray-400 text-xs sm:text-sm">Active Projects</div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <Award className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mb-2 sm:mb-3" />
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">94%</div>
            <div className="text-gray-400 text-xs sm:text-sm">Balance Score</div>
          </div>

          <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 mb-2 sm:mb-3" />
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">$2.5M</div>
            <div className="text-gray-400 text-xs sm:text-sm">5-Yr Projection</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="lg:col-span-2 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-2 sm:gap-0">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Current Project</h2>
                <p className="text-sm sm:text-base text-gray-400">Your primary focus right now</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-semibold border ${getStatusColor(currentProject.status)}`}>
                {currentProject.status.toUpperCase()}
              </span>
            </div>

            <div className="bg-slate-900/50 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-3 sm:mb-4">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{currentProject.name}</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">{currentProject.description}</p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div>
                  <div className="text-xs sm:text-sm text-gray-400 mb-1">Progress</div>
                  <div className="flex items-center space-x-2">
                    <div className="text-xl sm:text-2xl font-bold text-cyan-400">{currentProject.progress}%</div>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{width: `${currentProject.progress}%`}}></div>
                  </div>
                </div>

                <div>
                  <div className="text-xs sm:text-sm text-gray-400 mb-1">Territory</div>
                  <div className="text-base sm:text-lg font-semibold text-white capitalize">{currentProject.mountain}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-2 sm:p-3">
                  <div className="text-xs text-gray-400 mb-1">KING SCORE</div>
                  <div className="text-lg sm:text-xl font-bold text-blue-400">{currentProject.kingScore}%</div>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-2 sm:p-3">
                  <div className="text-xs text-gray-400 mb-1">PRIEST SCORE</div>
                  <div className="text-lg sm:text-xl font-bold text-purple-400">{currentProject.priestScore}%</div>
                </div>
              </div>
            </div>

            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-3 sm:p-4">
              <h4 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Next Steps</h4>
              <div className="space-y-2">
                {[
                  'Complete user authentication flow',
                  'Design blockchain integration architecture',
                  'Set up testing environment',
                  'Prepare pitch deck for investors'
                ].map((step, i) => (
                  <div key={i} className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center text-cyan-400 text-xs sm:text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                <h3 className="text-base sm:text-lg font-bold text-white">Current Season</h3>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 sm:p-4 mb-2 sm:mb-3">
                <div className="text-xl sm:text-2xl font-bold text-yellow-400 mb-1">PLENTY</div>
                <div className="text-gray-300 text-xs sm:text-sm">AI Revolution Window</div>
              </div>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Optimal Launch</span>
                  <span className="text-green-400 font-semibold">90 Days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sector</span>
                  <span className="text-cyan-400 font-semibold">Technology</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                <h3 className="text-base sm:text-lg font-bold text-white">Skills Progress</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">AI Skills</span>
                    <span className="text-cyan-400 font-bold">85%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Business</span>
                    <span className="text-green-400 font-bold">72%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{width: '72%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mb-2 sm:mb-3" />
              <div className="text-xs text-gray-400 mb-1">BALANCE STREAK</div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">28 Days</div>
              <div className="text-xs sm:text-sm text-gray-400">Keep it up!</div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Territory Influence Map</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
            {mockMountains.map((mountain) => (
              <div key={mountain.id} className="text-center">
                <div className={`w-full aspect-square rounded-xl bg-gradient-to-br ${mountain.color} p-4 mb-2 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10" style={{height: `${100 - mountain.progress}%`}}></div>
                  <div className="text-white font-bold text-2xl relative z-10">{mountain.progress}%</div>
                </div>
                <div className="text-white text-sm font-medium">{mountain.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Recent Achievements</h3>
            <div className="space-y-3">
              {[
                { name: 'First Territory', icon: '🏔️', date: '2 days ago' },
                { name: 'Balance Master', icon: '⚖️', date: '1 week ago' },
                { name: 'Legacy Builder', icon: '🏆', date: '2 weeks ago' }
              ].map((achievement, i) => (
                <div key={i} className="bg-slate-900/50 rounded-lg p-3 sm:p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="text-xl sm:text-2xl">{achievement.icon}</div>
                    <div>
                      <div className="text-white font-semibold text-sm sm:text-base">{achievement.name}</div>
                      <div className="text-gray-400 text-xs sm:text-sm">{achievement.date}</div>
                    </div>
                  </div>
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Generational Impact Preview</h3>
            <div className="space-y-4">
              <div className="bg-slate-900/50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">5-Year Wealth</span>
                  <span className="text-green-400 font-bold">$2.5M</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Ministry Impact</span>
                  <span className="text-purple-400 font-bold">10K+ Lives</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '65%'}}></div>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center justify-center space-x-2 text-sm sm:text-base">
                <span>View Full Projection</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
