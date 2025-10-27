import { TrendingUp, Users, Building, DollarSign, Award, Target } from 'lucide-react';
import { impactMetrics } from '../data/investorData';

export default function ImpactReporting() {
  const metrics = [
    { label: 'Total Students', value: impactMetrics.totalStudents, icon: Users, color: 'cyan' },
    { label: 'Active Ventures', value: impactMetrics.activeVentures, icon: Building, color: 'green' },
    { label: 'Jobs Created', value: impactMetrics.jobsCreated, icon: Target, color: 'yellow' },
    { label: 'Revenue Generated', value: `$${(impactMetrics.revenueGenerated / 1000000).toFixed(1)}M`, icon: DollarSign, color: 'purple' },
    { label: 'Generational Wealth', value: `$${(impactMetrics.generationalWealth / 1000000).toFixed(1)}M`, icon: Award, color: 'blue' },
    { label: 'Kingdom Score', value: `${impactMetrics.kingdomScore}%`, icon: TrendingUp, color: 'green' }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      green: 'bg-green-500/10 text-green-400 border-green-500/30',
      yellow: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
      purple: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      blue: 'bg-blue-500/10 text-blue-400 border-blue-500/30'
    };
    return colors[color] || colors.cyan;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full">
              <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Impact <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Reporting</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300">
            Measurable transformation across all 7 mountains
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className={`bg-slate-800/50 backdrop-blur border ${getColorClasses(metric.color)} rounded-xl sm:rounded-2xl p-4 sm:p-6`}
              >
                <Icon className="w-6 h-6 sm:w-8 sm:h-8 mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{metric.value}+</div>
                <div className="text-xs sm:text-sm text-gray-400">{metric.label}</div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-xl p-6 sm:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Ready to Measure Your Impact?</h3>
          <p className="text-sm sm:text-base text-gray-300 mb-6 max-w-2xl mx-auto">
            Join Project AI Studio and see your impact metrics tracked in real-time
          </p>
          <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-green-500/50 transition-all text-sm sm:text-base">
            Start Tracking Impact
          </button>
        </div>
      </div>
    </div>
  );
}

