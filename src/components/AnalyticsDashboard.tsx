import { BarChart3, TrendingUp, Target, Award, Flag, Mountain, Users, DollarSign } from 'lucide-react';
import { mockMountains, mockAchievements } from '../data/mockData';
import MountainBarChart from './charts/MountainBarChart';

export default function AnalyticsDashboard() {
  const territoryScores = mockMountains.map(m => ({
    name: m.name,
    progress: m.progress,
    color: m.color
  }));

  const achievements = mockAchievements;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full">
              <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2 sm:px-0">
            Impact <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Analytics</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 px-2 sm:px-0">
            Track your progress across territories and measure kingdom advancement
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <Mountain className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">63%</div>
            <div className="text-gray-400 text-xs sm:text-sm">Territory Taken</div>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <Target className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">$2.5M</div>
            <div className="text-gray-400 text-xs sm:text-sm">Wealth Created</div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">75K+</div>
            <div className="text-gray-400 text-xs sm:text-sm">Lives Impacted</div>
          </div>

          <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
              <span className="text-yellow-400 font-bold text-sm sm:text-lg">4/5</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">80%</div>
            <div className="text-gray-400 text-xs sm:text-sm">Achievements</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center space-x-3">
              <Mountain className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 flex-shrink-0" />
              <span className="text-base sm:text-2xl">Territory Conquest Scorecard</span>
            </h2>

            <div className="space-y-4">
              {territoryScores.map((territory) => (
                <div key={territory.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">{territory.name}</span>
                    <span className="text-cyan-400 font-bold">{territory.progress}%</span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-slate-700 rounded-full h-3">
                      <div
                        className={`bg-gradient-to-r ${territory.color} h-3 rounded-full transition-all`}
                        style={{width: `${territory.progress}%`}}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 sm:mt-6 grid grid-cols-3 gap-2 sm:gap-4">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-2 sm:p-3 text-center">
                <div className="text-xl sm:text-2xl font-bold text-green-400">4</div>
                <div className="text-xs text-gray-400">Strong</div>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-2 sm:p-3 text-center">
                <div className="text-xl sm:text-2xl font-bold text-yellow-400">2</div>
                <div className="text-xs text-gray-400">Growing</div>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-2 sm:p-3 text-center">
                <div className="text-xl sm:text-2xl font-bold text-red-400">1</div>
                <div className="text-xs text-gray-400">Emerging</div>
              </div>
            </div>
          </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center space-x-3">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0" />
                <span className="text-base sm:text-2xl">Purpose-Profit Integration</span>
            </h2>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Mission Alignment</span>
                  <span className="text-purple-400 font-bold">92%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '92%'}}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Commercial Viability</span>
                  <span className="text-green-400 font-bold">85%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Impact Multiplication</span>
                  <span className="text-cyan-400 font-bold">88%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{width: '88%'}}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Legacy Sustainability</span>
                  <span className="text-yellow-400 font-bold">80%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-1">86%</div>
                <div className="text-sm text-gray-400">Overall Integration Score</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Interactive Territory Chart</h2>
          <MountainBarChart data={territoryScores} />
        </div>

        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
            <Award className="w-6 h-6 text-yellow-400" />
            <span>Achievements & Milestones</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`rounded-xl p-4 border-2 transition-all ${
                  achievement.unlocked
                    ? 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/50'
                    : 'bg-slate-900/50 border-slate-600'
                }`}
              >
                <div className="flex items-start space-x-3 mb-3">
                  <div className={`text-3xl ${achievement.unlocked ? 'grayscale-0' : 'grayscale opacity-50'}`}>
                    {achievement.icon === 'Flag' && <Flag className="w-8 h-8 text-cyan-400" />}
                    {achievement.icon === 'Scale' && '⚖️'}
                    {achievement.icon === 'Compass' && '🧭'}
                    {achievement.icon === 'Trophy' && '🏆'}
                    {achievement.icon === 'Mountain' && <Mountain className="w-8 h-8 text-purple-400" />}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-bold ${achievement.unlocked ? 'text-white' : 'text-gray-500'}`}>
                      {achievement.name}
                    </h3>
                    <p className={`text-sm ${achievement.unlocked ? 'text-gray-300' : 'text-gray-600'}`}>
                      {achievement.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-semibold uppercase ${
                    achievement.unlocked ? 'text-yellow-400' : 'text-gray-600'
                  }`}>
                    {achievement.category}
                  </span>
                  {achievement.unlocked && (
                    <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full font-semibold">
                      UNLOCKED
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Digital Land Claimed</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Platforms Built</span>
                <span className="text-white font-bold">7</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Users Served</span>
                <span className="text-white font-bold">12.5K</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Markets Entered</span>
                <span className="text-white font-bold">4</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Partnerships</span>
                <span className="text-white font-bold">15</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Wealth Creation Index</h3>
            <div className="mb-4">
              <div className="text-4xl font-bold text-green-400 mb-2">$2.5M</div>
              <div className="text-sm text-gray-400">Total Value Generated</div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Revenue</span>
                <span className="text-green-400">$1.2M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Asset Value</span>
                <span className="text-cyan-400">$800K</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Investments</span>
                <span className="text-purple-400">$500K</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Kingdom Advancement</h3>
            <div className="space-y-3">
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3">
                <div className="text-2xl font-bold text-purple-400 mb-1">75K+</div>
                <div className="text-xs text-gray-400">Lives Directly Impacted</div>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                <div className="text-2xl font-bold text-blue-400 mb-1">250K+</div>
                <div className="text-xs text-gray-400">Indirect Reach</div>
              </div>
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-3">
                <div className="text-2xl font-bold text-cyan-400 mb-1">5 Gen</div>
                <div className="text-xs text-gray-400">Legacy Projection</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
