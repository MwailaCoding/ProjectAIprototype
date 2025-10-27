import { useState } from 'react';
import { TrendingUp, Users, Building, Coins, ArrowRight, DollarSign } from 'lucide-react';

interface WealthSimulatorProps {
  onNavigate?: (view: string) => void;
}

export default function WealthSimulator({ onNavigate }: WealthSimulatorProps) {
  const [investmentAmount, setInvestmentAmount] = useState(50000);
  const [growthRate, setGrowthRate] = useState(25);
  const [reinvestmentRate, setReinvestmentRate] = useState(30);

  const calculateProjections = () => {
    const generations = [
      { year: 2025, generation: 'You', wealth: investmentAmount, impact: 100 },
      { year: 2030, generation: 'You', wealth: investmentAmount * (1 + growthRate/100) * 5, impact: 5000 },
      { year: 2040, generation: 'Your Children', wealth: investmentAmount * Math.pow(1 + growthRate/100, 2) * 3, impact: 25000 },
      { year: 2060, generation: 'Grandchildren', wealth: investmentAmount * Math.pow(1 + growthRate/100, 3) * 5, impact: 100000 },
      { year: 2080, generation: 'Great-Grandchildren', wealth: investmentAmount * Math.pow(1 + growthRate/100, 4) * 8, impact: 500000 }
    ];
    return generations;
  };

  const projections = calculateProjections();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full">
              <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2 sm:px-0">
            Generational <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Wealth Simulator</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 px-2 sm:px-0">
            Project the long-term impact of your ventures across 5 generations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <label className="text-xs sm:text-sm text-gray-400 mb-2 block">Initial Investment</label>
            <div className="flex items-center space-x-3 mb-4">
              <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0" />
              <input
                type="number"
                value={investmentAmount}
                onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                className="bg-slate-900 text-white text-lg sm:text-2xl font-bold border border-slate-600 rounded-lg px-3 sm:px-4 py-2 w-full focus:outline-none focus:border-cyan-500"
              />
            </div>
            <input
              type="range"
              min="10000"
              max="500000"
              step="10000"
              value={investmentAmount}
              onChange={(e) => setInvestmentAmount(Number(e.target.value))}
              className="w-full accent-green-500"
              style={{touchAction: 'manipulation'}}
            />
          </div>

          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <label className="text-xs sm:text-sm text-gray-400 mb-2 block">Annual Growth Rate</label>
            <div className="flex items-center space-x-3 mb-4">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 flex-shrink-0" />
              <div className="text-xl sm:text-2xl font-bold text-white">{growthRate}%</div>
            </div>
            <input
              type="range"
              min="5"
              max="100"
              value={growthRate}
              onChange={(e) => setGrowthRate(Number(e.target.value))}
              className="w-full accent-cyan-500"
              style={{touchAction: 'manipulation'}}
            />
          </div>

          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <label className="text-xs sm:text-sm text-gray-400 mb-2 block">Reinvestment Rate</label>
            <div className="flex items-center space-x-3 mb-4">
              <Coins className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 flex-shrink-0" />
              <div className="text-xl sm:text-2xl font-bold text-white">{reinvestmentRate}%</div>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={reinvestmentRate}
              onChange={(e) => setReinvestmentRate(Number(e.target.value))}
              className="w-full accent-yellow-500"
              style={{touchAction: 'manipulation'}}
            />
          </div>
        </div>

        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center px-2 sm:px-0">5-Generation Impact Timeline</h2>
          <div className="relative">
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500"></div>

            <div className="space-y-6 sm:space-y-8">
              {projections.map((proj, i) => (
                <div key={i} className="relative pl-14 sm:pl-20">
                  <div className="absolute left-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold border-4 border-slate-900 text-xs sm:text-base">
                    {proj.year}
                  </div>

                  <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-cyan-500/50 transition-all">
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{proj.generation}</h3>
                        <p className="text-sm sm:text-base text-gray-400">Generation {i + 1}</p>
                      </div>
                      <Users className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 flex-shrink-0" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg sm:rounded-xl p-3 sm:p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-400">FINANCIAL WEALTH</span>
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold text-green-400">
                          ${(proj.wealth / 1000000).toFixed(1)}M
                        </div>
                        <div className="text-xs sm:text-sm text-gray-400 mt-1">
                          {i === 0 ? 'Initial Investment' : `${((proj.wealth / projections[i-1].wealth - 1) * 100).toFixed(0)}% Growth`}
                        </div>
                      </div>

                      <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg sm:rounded-xl p-3 sm:p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Building className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-400">MINISTRY IMPACT</span>
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold text-purple-400">
                          {proj.impact >= 1000 ? `${(proj.impact / 1000).toFixed(0)}K` : proj.impact}+
                        </div>
                        <div className="text-xs sm:text-sm text-gray-400 mt-1">
                          {i === 0 ? 'Direct Reach' : 'Lives Touched'}
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 sm:mt-4 space-y-2">
                      {i === 0 && (
                        <div className="text-xs sm:text-sm text-gray-400">
                          • Launch initial venture with strong foundation
                        </div>
                      )}
                      {i === 1 && (
                        <div className="text-xs sm:text-sm text-gray-400">
                          • Establish multiple revenue streams and scale operations
                        </div>
                      )}
                      {i === 2 && (
                        <div className="text-xs sm:text-sm text-gray-400">
                          • Transfer wealth and knowledge to next generation
                        </div>
                      )}
                      {i === 3 && (
                        <div className="text-xs sm:text-sm text-gray-400">
                          • Expand influence across multiple territories
                        </div>
                      )}
                      {i === 4 && (
                        <div className="text-xs sm:text-sm text-gray-400">
                          • Legacy established across 7 mountains of culture
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-xl sm:rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Legacy Building Roadmap</h3>
            <div className="space-y-3 sm:space-y-4">
              {[
                { phase: 'Years 1-5', focus: 'Foundation & Growth', color: 'text-cyan-400' },
                { phase: 'Years 6-15', focus: 'Scaling & Multiplication', color: 'text-blue-400' },
                { phase: 'Years 16-35', focus: 'Succession Planning', color: 'text-purple-400' },
                { phase: 'Years 36-55', focus: 'Generational Transfer', color: 'text-pink-400' },
                { phase: 'Years 56+', focus: 'Legacy Perpetuation', color: 'text-yellow-400' }
              ].map((phase, i) => (
                <div key={i} className="bg-slate-900/50 rounded-lg p-3 sm:p-4 flex items-center justify-between">
                  <div>
                    <div className={`font-bold text-sm sm:text-base ${phase.color}`}>{phase.phase}</div>
                    <div className="text-gray-400 text-xs sm:text-sm">{phase.focus}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-xl sm:rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Impact Metrics Summary</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 sm:p-4">
                <div className="text-xs sm:text-sm text-gray-400 mb-1">TOTAL WEALTH CREATED</div>
                <div className="text-2xl sm:text-3xl font-bold text-green-400">
                  ${(projections[projections.length - 1].wealth / 1000000).toFixed(1)}M
                </div>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3 sm:p-4">
                <div className="text-xs sm:text-sm text-gray-400 mb-1">CUMULATIVE IMPACT</div>
                <div className="text-2xl sm:text-3xl font-bold text-purple-400">
                  {(projections.reduce((sum, p) => sum + p.impact, 0) / 1000).toFixed(0)}K Lives
                </div>
              </div>

              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-3 sm:p-4">
                <div className="text-xs sm:text-sm text-gray-400 mb-1">TERRITORY INFLUENCE</div>
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400">7/7 Mountains</div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 sm:p-4">
                <div className="text-xs sm:text-sm text-gray-400 mb-1">LEGACY SUSTAINABILITY</div>
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400">5+ Generations</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Ready to Build Your Legacy?</h3>
          <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto">
            These projections show what's possible when you combine purpose-driven ventures with wise stewardship
            and strategic reinvestment. Your decisions today shape generations tomorrow.
          </p>
          <button 
            onClick={() => onNavigate?.('incubator')}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center space-x-2 mx-auto text-sm sm:text-base"
          >
            <span>Start Building Now</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
