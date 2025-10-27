import { TrendingUp, Users, Rocket, DollarSign, CheckCircle, Target } from 'lucide-react';
import { pilotMetrics } from '../data/investorData';

export default function PilotResults() {
  const phases = [
    { name: 'Phase I: Recruitment', months: 'Month 1-2', completed: true },
    { name: 'Phase II: Training', months: 'Month 3-4', completed: true },
    { name: 'Phase III: Building', months: 'Month 5-6', completed: true },
    { name: 'Phase IV: Launch', months: 'Month 7-8', completed: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full">
              <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Pilot <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Results</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300">
            Proven concept with measurable impact
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 sm:p-6">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mb-3" />
            <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{pilotMetrics.studentsEnrolled}</div>
            <div className="text-xs sm:text-sm text-gray-400">Students Enrolled</div>
          </div>
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 sm:p-6">
            <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mb-3" />
            <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{pilotMetrics.projectsLaunched}</div>
            <div className="text-xs sm:text-sm text-gray-400">Projects Launched</div>
          </div>
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 sm:p-6">
            <Target className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 mb-3" />
            <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{pilotMetrics.completionRate}%</div>
            <div className="text-xs sm:text-sm text-gray-400">Completion Rate</div>
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 sm:p-6">
            <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mb-3" />
            <div className="text-3xl sm:text-4xl font-bold text-white mb-1">${(pilotMetrics.fundingSecured / 1000).toFixed(0)}K</div>
            <div className="text-xs sm:text-sm text-gray-400">Funding Secured</div>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Timeline</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {phases.map((phase) => (
              <div
                key={phase.name}
                className={`border-2 rounded-lg p-4 ${
                  phase.completed
                    ? 'border-green-500 bg-green-500/10'
                    : 'border-gray-600 bg-gray-900/50'
                }`}
              >
                <div className="flex items-center space-x-2 mb-2">
                  {phase.completed && <CheckCircle className="w-5 h-5 text-green-400" />}
                  <span className="text-xs text-gray-400">{phase.months}</span>
                </div>
                <div className="text-sm font-semibold text-white">{phase.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <h3 className="text-lg font-bold text-white mb-4">Success Metrics</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Students Employed</span>
                <span className="text-lg font-bold text-green-400">{pilotMetrics.studentsEmployed}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Ventures with Revenue</span>
                <span className="text-lg font-bold text-cyan-400">{pilotMetrics.venturesWithRevenue}</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-4 sm:p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Phase II Ready</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4">
              Building on pilot success with 100 students in Q1 2025
            </p>
            <button className="bg-green-500 text-white px-6 sm:px-8 py-3 rounded-lg font-bold hover:bg-green-600 transition-all">
              Join Phase II
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

