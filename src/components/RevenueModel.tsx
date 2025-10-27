import { DollarSign, TrendingUp, Target, Users } from 'lucide-react';
import { revenueStreams, unitEconomics, fiveYearProjections } from '../data/investorData';

interface RevenueModelProps {
  onNavigate?: (view: string) => void;
}

export default function RevenueModel({ onNavigate }: RevenueModelProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full">
              <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Revenue <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Model</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300">
            Sustainable model with clear path to profitability
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8">
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-4 sm:p-6">
            <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mb-3" />
            <div className="text-sm text-gray-400 mb-1">Cost per Student</div>
            <div className="text-2xl font-bold text-white">${unitEconomics.costPerStudent.toLocaleString()}</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-4 sm:p-6">
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mb-3" />
            <div className="text-sm text-gray-400 mb-1">Revenue per Student</div>
            <div className="text-2xl font-bold text-white">${unitEconomics.revenuePerStudent.toLocaleString()}</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-4 sm:p-6">
            <Target className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 mb-3" />
            <div className="text-sm text-gray-400 mb-1">Gross Margin</div>
            <div className="text-2xl font-bold text-white">{unitEconomics.grossMargin}%</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-4 sm:p-6">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mb-3" />
            <div className="text-sm text-gray-400 mb-1">Break-Even</div>
            <div className="text-2xl font-bold text-white">{unitEconomics.breakEven} students</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Revenue Streams</h3>
            <div className="space-y-3">
              {revenueStreams.map((stream, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm text-gray-400 mb-1">
                    <span>{stream.source}</span>
                    <span>${(stream.amount / 1000).toFixed(0)}K ({stream.percentage}%)</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                      style={{width: `${stream.percentage}%`}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">5-Year Projections</h3>
            <div className="space-y-2">
              {fiveYearProjections.map((year) => (
                <div key={year.year} className="flex justify-between items-center p-2 bg-slate-900/50 rounded">
                  <span className="text-sm text-gray-400">Year {year.year}</span>
                  <span className="text-sm font-bold text-white">{year.students} students</span>
                  <span className="text-sm font-bold text-cyan-400">${(year.revenue / 1000).toFixed(0)}K</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-6 sm:p-8 text-center">
          <TrendingUp className="w-12 h-12 sm:w-16 sm:h-16 text-green-400 mx-auto mb-4" />
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Investment Opportunity</h3>
          <p className="text-sm sm:text-base text-gray-300 mb-6 max-w-2xl mx-auto">
            Scalable model with 90% margin potential at scale. Join us in transforming youth entrepreneurship.
          </p>
          <button 
            onClick={() => onNavigate?.('fundraising')}
            className="bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-green-600 transition-all text-sm sm:text-base"
          >
            View Fundraising Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

