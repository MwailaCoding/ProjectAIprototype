import { useState } from 'react';
import { Sun, Cloud, Snowflake, Sprout, TrendingUp, Calendar, AlertTriangle, CheckCircle } from 'lucide-react';
import { mockSeasons } from '../data/mockData';

export default function SeasonsHub() {
  const [selectedSector, setSelectedSector] = useState('all');

  const getSeasonIcon = (type: string) => {
    switch(type) {
      case 'plenty': return Sun;
      case 'harvest': return Sprout;
      case 'preparation': return Cloud;
      case 'famine': return Snowflake;
      default: return Sun;
    }
  };

  const getSeasonColor = (type: string) => {
    switch(type) {
      case 'plenty': return { bg: 'from-yellow-500 to-orange-500', text: 'text-yellow-400', border: 'border-yellow-500/30' };
      case 'harvest': return { bg: 'from-green-500 to-emerald-500', text: 'text-green-400', border: 'border-green-500/30' };
      case 'preparation': return { bg: 'from-blue-500 to-cyan-500', text: 'text-blue-400', border: 'border-blue-500/30' };
      case 'famine': return { bg: 'from-slate-500 to-slate-700', text: 'text-slate-400', border: 'border-slate-500/30' };
      default: return { bg: 'from-yellow-500 to-orange-500', text: 'text-yellow-400', border: 'border-yellow-500/30' };
    }
  };

  const sectors = ['all', 'Technology', 'Education', 'Finance', 'Media', 'Healthcare'];
  const filteredSeasons = selectedSector === 'all'
    ? mockSeasons
    : mockSeasons.filter(s => s.sector === selectedSector);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Joseph Principle <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Intelligence Hub</span>
          </h1>
          <p className="text-xl text-gray-300">
            Understand the times and seasons for optimal venture timing
          </p>
        </div>

        <div className="mb-12 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">4</div>
              <div className="text-gray-400">Plenty Seasons</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">2</div>
              <div className="text-gray-400">Harvest Seasons</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">1</div>
              <div className="text-gray-400">Preparation Seasons</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-400 mb-2">0</div>
              <div className="text-gray-400">Famine Seasons</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full border-8 border-slate-700"></div>
              <div className="absolute w-48 h-48 rounded-full border-8 border-slate-600"></div>
              <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                <Sun className="w-16 h-16 text-white" />
              </div>
            </div>

            <div className="relative h-64 flex items-center justify-center">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 bg-yellow-500/20 border border-yellow-500/50 rounded-lg px-4 py-2">
                <span className="text-yellow-400 font-bold">AI Revolution</span>
              </div>
              <div className="absolute right-0 top-1/2 transform translate-x-4 -translate-y-1/2 bg-green-500/20 border border-green-500/50 rounded-lg px-4 py-2">
                <span className="text-green-400 font-bold">EdTech</span>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 bg-blue-500/20 border border-blue-500/50 rounded-lg px-4 py-2">
                <span className="text-blue-400 font-bold">Finance</span>
              </div>
              <div className="absolute left-0 top-1/2 transform -translate-x-4 -translate-y-1/2 bg-yellow-500/20 border border-yellow-500/50 rounded-lg px-4 py-2">
                <span className="text-yellow-400 font-bold">Media</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 flex justify-center space-x-2">
          {sectors.map((sector) => (
            <button
              key={sector}
              onClick={() => setSelectedSector(sector)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                selectedSector === sector
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50'
                  : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
              }`}
            >
              {sector === 'all' ? 'All Sectors' : sector}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {filteredSeasons.map((season, i) => {
            const SeasonIcon = getSeasonIcon(season.type);
            const colors = getSeasonColor(season.type);
            return (
              <div
                key={i}
                className={`bg-slate-800/50 backdrop-blur border ${colors.border} rounded-2xl p-6 hover:scale-105 transition-transform`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center`}>
                      <SeasonIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{season.name}</h3>
                      <span className={`text-sm ${colors.text} font-semibold uppercase`}>{season.type}</span>
                    </div>
                  </div>
                  <span className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {season.sector}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="bg-slate-900/50 rounded-lg p-3">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                      <div>
                        <div className="text-xs text-gray-400 mb-1">RECOMMENDATION</div>
                        <div className="text-white">{season.recommendation}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 rounded-lg p-3">
                    <div className="flex items-start space-x-2">
                      <Calendar className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                      <div>
                        <div className="text-xs text-gray-400 mb-1">TIMING</div>
                        <div className="text-white">{season.timing}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {season.type === 'plenty' && (
                  <div className="mt-4 bg-green-500/10 border border-green-500/30 rounded-lg p-3 flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-medium">Optimal Launch Window</span>
                  </div>
                )}

                {season.type === 'preparation' && (
                  <div className="mt-4 bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 flex items-center space-x-2">
                    <AlertTriangle className="w-5 h-5 text-blue-400" />
                    <span className="text-blue-400 font-medium">Build Resilience Now</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Abundance Readiness Assessment</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Stewardship Capacity</span>
                  <span className="text-cyan-400 font-bold">82%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{width: '82%'}}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Resource Management</span>
                  <span className="text-green-400 font-bold">78%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{width: '78%'}}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Multiplication Potential</span>
                  <span className="text-purple-400 font-bold">85%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Legacy Preparation</span>
                  <span className="text-yellow-400 font-bold">75%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Strategic Recommendations</h3>
              <div className="space-y-3">
                {[
                  'Launch AI ventures within 90-day window',
                  'Scale existing EdTech platforms now',
                  'Prepare financial infrastructure for 2026',
                  'Build media alternatives during disruption'
                ].map((rec, i) => (
                  <div key={i} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{rec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
