import { TrendingUp, DollarSign, Target, Users, AlertTriangle, CheckCircle } from 'lucide-react';

export default function FundraisingDashboard() {
  const metrics = [
    { label: 'Investment Readiness', value: 82, color: 'cyan' },
    { label: 'Market Validation', value: 75, color: 'green' },
    { label: 'Financial Health', value: 68, color: 'blue' },
    { label: 'Team Strength', value: 90, color: 'purple' }
  ];

  const fundingStage = 'Seed';
  const askAmount = '$500K';
  const valuation = '$2.5M';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full">
              <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2 sm:px-0">
            Investment <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Readiness</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 px-2 sm:px-0">
            Demonstrate readiness for the Kings & Priests fundraising dinner
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="text-gray-400 text-xs sm:text-sm mb-2">{metric.label}</div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-3">{metric.value}%</div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full bg-gradient-to-r ${
                    metric.color === 'cyan' ? 'from-cyan-500 to-blue-500' :
                    metric.color === 'green' ? 'from-green-500 to-emerald-500' :
                    metric.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                    'from-purple-500 to-pink-500'
                  }`}
                  style={{width: `${metric.value}%`}}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center space-x-3">
              <Target className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
              <span>Funding Details</span>
            </h2>
            <div className="space-y-4">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">FUNDING STAGE</div>
                <div className="text-2xl font-bold text-green-400">{fundingStage}</div>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">ASKING AMOUNT</div>
                <div className="text-2xl font-bold text-blue-400">{askAmount}</div>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">VALUATION</div>
                <div className="text-2xl font-bold text-purple-400">{valuation}</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center space-x-3">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
              <span>Key Milestones</span>
            </h2>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-semibold">MVP Launched</div>
                  <div className="text-xs text-gray-400">Q1 2025</div>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-semibold">First Customers</div>
                  <div className="text-xs text-gray-400">500+ users</div>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <Target className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-semibold">Revenue Break-even</div>
                  <div className="text-xs text-gray-400">Target: Q3 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Ready for the Kings & Priests Dinner</h3>
          <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto">
            Your venture is prepared for investor presentation. Showcase your impact and secure funding to scale kingdom advancement.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button className="bg-cyan-500 text-white px-6 sm:px-8 py-3 rounded-lg font-bold hover:bg-cyan-600 transition-all">
              Generate Pitch Deck
            </button>
            <button className="bg-slate-700 text-white px-6 sm:px-8 py-3 rounded-lg font-bold hover:bg-slate-600 transition-all">
              View Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

