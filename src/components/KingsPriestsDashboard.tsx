import { useState } from 'react';
import { Scale, Crown, Users, TrendingUp, AlertCircle, CheckCircle, Lightbulb } from 'lucide-react';
import { mockUser } from '../data/mockData';

export default function KingsPriestsDashboard() {
  const [kingBalance, setKingBalance] = useState(mockUser.kingBalance);
  const [priestBalance, setPriestBalance] = useState(mockUser.priestBalance);

  const getBalanceStatus = () => {
    const diff = Math.abs(kingBalance - priestBalance);
    if (diff <= 10) return { status: 'optimal', color: 'text-green-400', bg: 'bg-green-500/20', message: 'Perfect Balance - Operating in sweet spot!' };
    if (diff <= 20) return { status: 'good', color: 'text-yellow-400', bg: 'bg-yellow-500/20', message: 'Good Balance - Minor adjustments recommended' };
    return { status: 'warning', color: 'text-red-400', bg: 'bg-red-500/20', message: 'Imbalance Detected - Risk of burnout or financial strain' };
  };

  const getRecommendations = () => {
    if (kingBalance > priestBalance + 15) {
      return [
        'Schedule time for ministry and service activities',
        'Connect with your faith community',
        'Reflect on purpose beyond profit',
        'Mentor others in your field'
      ];
    } else if (priestBalance > kingBalance + 15) {
      return [
        'Focus on revenue-generating activities',
        'Review business metrics and KPIs',
        'Develop leadership skills',
        'Strengthen financial foundations'
      ];
    }
    return [
      'Maintain current balance with consistent habits',
      'Continue integrating purpose and profit',
      'Share your balance strategy with others',
      'Document what works for future reference'
    ];
  };

  const balance = getBalanceStatus();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full">
              <Scale className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2 sm:px-0">
            Kings & Priests <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Balance System</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 px-2 sm:px-0">
            Maintain harmony between wealth creation and ministry impact
          </p>
        </div>

        <div className={`mb-6 sm:mb-8 ${balance.bg} border border-current rounded-xl sm:rounded-2xl p-4 sm:p-6`}>
          <div className="flex items-center space-x-3 sm:space-x-4">
            {balance.status === 'optimal' ? (
              <CheckCircle className={`w-6 h-6 sm:w-8 sm:h-8 ${balance.color} flex-shrink-0`} />
            ) : (
              <AlertCircle className={`w-6 h-6 sm:w-8 sm:h-8 ${balance.color} flex-shrink-0`} />
            )}
            <div>
              <h3 className={`text-lg sm:text-xl font-bold ${balance.color}`}>
                {balance.status === 'optimal' ? 'Optimal Balance' : balance.status === 'good' ? 'Good Balance' : 'Balance Warning'}
              </h3>
              <p className="text-sm sm:text-base text-white">{balance.message}</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-700/10 border border-blue-500/30 rounded-xl sm:rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">King Meter</h2>
                  <p className="text-xs sm:text-sm text-gray-400">Wealth & Leadership</p>
                </div>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-400">{kingBalance}%</div>
            </div>

            <div className="mb-6">
              <input
                type="range"
                min="0"
                max="100"
                value={kingBalance}
                onChange={(e) => setKingBalance(Number(e.target.value))}
                className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>

            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-xs sm:text-sm font-semibold text-gray-400 mb-2">FOCUS AREAS</h3>
              {[
                { name: 'Business Leadership', value: 85 },
                { name: 'Wealth Creation', value: 70 },
                { name: 'Strategic Planning', value: 60 },
                { name: 'Market Influence', value: 58 }
              ].map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between text-xs sm:text-sm mb-1">
                    <span className="text-gray-300">{item.name}</span>
                    <span className="text-blue-400">{item.value}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{width: `${item.value}%`}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-purple-700/10 border border-purple-500/30 rounded-xl sm:rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">Priest Meter</h2>
                  <p className="text-xs sm:text-sm text-gray-400">Ministry & Service</p>
                </div>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-purple-400">{priestBalance}%</div>
            </div>

            <div className="mb-6">
              <input
                type="range"
                min="0"
                max="100"
                value={priestBalance}
                onChange={(e) => setPriestBalance(Number(e.target.value))}
                className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
            </div>

            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-xs sm:text-sm font-semibold text-gray-400 mb-2">FOCUS AREAS</h3>
              {[
                { name: 'Spiritual Impact', value: 80 },
                { name: 'Service & Ministry', value: 75 },
                { name: 'Community Building', value: 68 },
                { name: 'Purpose Alignment', value: 65 }
              ].map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between text-xs sm:text-sm mb-1">
                    <span className="text-gray-300">{item.name}</span>
                    <span className="text-purple-400">{item.value}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full" style={{width: `${item.value}%`}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">Integration Advisor</h2>
          </div>

          <div className="mb-4 sm:mb-6">
            <div className="relative h-20 sm:h-24 bg-slate-900 rounded-xl overflow-hidden">
              <div className="absolute inset-0 flex">
                <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600" style={{width: `${kingBalance}%`}}></div>
                <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600" style={{width: `${priestBalance}%`}}></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-slate-900/80 px-3 sm:px-6 py-1.5 sm:py-2 rounded-full border border-cyan-500">
                  <span className="text-white font-bold text-xs sm:text-sm">Balance: {Math.abs(kingBalance - priestBalance)}%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 flex items-center space-x-2">
                <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                <span>Recommendations</span>
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {getRecommendations().map((rec, i) => (
                  <div key={i} className="flex items-start space-x-2 sm:space-x-3 bg-slate-900/50 rounded-lg p-2 sm:p-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-300">{rec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Legacy Language Translator</h3>
              <div className="space-y-2 sm:space-y-3">
                {[
                  { ministry: 'Taking territory', business: 'Market penetration' },
                  { ministry: 'Anointing', business: 'Competitive advantage' },
                  { ministry: 'Stewardship', business: 'Resource management' },
                  { ministry: 'Harvest', business: 'Revenue generation' }
                ].map((term, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-lg p-2 sm:p-3">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-purple-400">{term.ministry}</span>
                      <span className="text-gray-500">⇄</span>
                      <span className="text-blue-400">{term.business}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 sm:p-6">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">28 Days</div>
              <div className="text-xs sm:text-sm text-gray-400">Current Balance Streak</div>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 sm:p-6">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">94%</div>
              <div className="text-xs sm:text-sm text-gray-400">Integration Score</div>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 sm:p-6">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-2">Low</div>
              <div className="text-xs sm:text-sm text-gray-400">Burnout Risk</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
