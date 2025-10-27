import { Mountain as MountainType } from '../types';
import { mockMountains } from '../data/mockData';
import { GraduationCap, Building, Briefcase, Tv, Palette, Users, Church, TrendingUp, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const iconMap: Record<string, any> = {
  GraduationCap,
  Building,
  Briefcase,
  Tv,
  Palette,
  Users,
  Church
};

export default function TerritoryMap() {
  const [selectedMountain, setSelectedMountain] = useState<MountainType | null>(null);

  const getOpportunities = (mountain: MountainType) => {
    const opportunitiesMap: Record<string, string[]> = {
      education: ['AI Tutoring Platforms', 'Credential Verification Systems', 'Virtual Learning Environments', 'Assessment Tools'],
      government: ['Civic Engagement Apps', 'Transparency Platforms', 'Digital Identity Solutions', 'Smart City Infrastructure'],
      business: ['FinTech Solutions', 'Supply Chain Optimization', 'Ethical Investment Platforms', 'B2B SaaS'],
      media: ['Content Distribution Networks', 'Creator Economy Tools', 'Truth-Verification Systems', 'Alternative Social Platforms'],
      arts: ['NFT Marketplaces', 'Digital Creation Tools', 'Arts Funding Platforms', 'Virtual Galleries'],
      family: ['Parenting Apps', 'Family Finance Tools', 'Communication Platforms', 'Educational Resources'],
      religion: ['Digital Ministry Platforms', 'Community Management Tools', 'Giving & Stewardship Apps', 'Content Management']
    };
    return opportunitiesMap[mountain.id] || [];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            7 Mountains <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Territory Map</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300">
            Strategic influence across the seven spheres of cultural impact
          </p>
        </div>

        <div className="mb-8 sm:mb-12 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Overall Territory Progress</h3>
              <p className="text-sm sm:text-base text-gray-400">Combined influence across all mountains</p>
            </div>
            <div className="text-right">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400">63%</div>
              <div className="text-xs sm:text-sm text-gray-400">Average Progress</div>
            </div>
          </div>
          <div className="mt-4 w-full bg-slate-700 rounded-full h-2 sm:h-3">
            <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 h-2 sm:h-3 rounded-full" style={{width: '63%'}}></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {mockMountains.map((mountain) => {
            const Icon = iconMap[mountain.icon];
            return (
              <button
                key={mountain.id}
                onClick={() => setSelectedMountain(mountain)}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-cyan-500/50 transition-all transform hover:scale-105 text-left group"
              >
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${mountain.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-xl sm:text-2xl font-bold text-white">{mountain.progress}%</div>
                    <div className="text-xs text-gray-400">Progress</div>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{mountain.name}</h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{mountain.description}</p>

                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-gray-400">{mountain.projects} Active Projects</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </div>

                <div className="mt-3 sm:mt-4 w-full bg-slate-700 rounded-full h-2">
                  <div className={`bg-gradient-to-r ${mountain.color} h-2 rounded-full transition-all`} style={{width: `${mountain.progress}%`}}></div>
                </div>
              </button>
            );
          })}
        </div>

        {selectedMountain && (
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-cyan-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
              <div className="flex items-center space-x-3 sm:space-x-4">
                {(() => {
                  const Icon = iconMap[selectedMountain.icon];
                  return <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${selectedMountain.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>;
                })()}
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">{selectedMountain.name}</h2>
                  <p className="text-sm sm:text-base text-gray-300">{selectedMountain.description}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedMountain(null)}
                className="text-gray-400 hover:text-white text-xl sm:text-2xl"
              >
                ×
              </button>
            </div>

            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                  <span>Current Opportunities</span>
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {getOpportunities(selectedMountain).map((opp, i) => (
                    <div key={i} className="bg-slate-900/50 rounded-lg p-3 sm:p-4 border border-slate-600 hover:border-cyan-500/50 transition-all">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                        <span className="text-white font-medium text-sm sm:text-base">{opp}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Statistics</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-slate-900/50 rounded-lg p-3 sm:p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-white font-bold">{selectedMountain.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className={`bg-gradient-to-r ${selectedMountain.color} h-2 rounded-full`} style={{width: `${selectedMountain.progress}%`}}></div>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 rounded-lg p-3 sm:p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-xs sm:text-sm">Active Projects</span>
                      <span className="text-white font-bold text-sm sm:text-base">{selectedMountain.projects}</span>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 rounded-lg p-3 sm:p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-xs sm:text-sm">Market Impact</span>
                      <span className="text-green-400 font-bold text-sm sm:text-base">High</span>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 rounded-lg p-3 sm:p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-xs sm:text-sm">Current Season</span>
                      <span className="text-yellow-400 font-bold text-sm sm:text-base">Plenty</span>
                    </div>
                  </div>
                </div>

                <button className="mt-4 sm:mt-6 w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-sm sm:text-base">
                  Start Project in This Territory
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
