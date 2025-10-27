import { useState } from 'react';
import { Building2, Users, TrendingUp, MapPin } from 'lucide-react';
import { studioCategories } from '../data/enhancedMockData';

export default function StudioIncubation() {
  const [selectedStudio, setSelectedStudio] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full">
              <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2 sm:px-0">
            Studio <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Incubation</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 px-2 sm:px-0">
            Join specialized studios aligned with your mountain and calling
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {studioCategories.map((studio) => (
            <button
              key={studio.id}
              onClick={() => setSelectedStudio(studio.id)}
              className={`bg-slate-800/50 backdrop-blur border-2 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all text-left hover:scale-105 ${
                selectedStudio === studio.id
                  ? 'border-cyan-500 shadow-lg shadow-cyan-500/50'
                  : 'border-slate-700'
              }`}
            >
              <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br ${studio.color} flex items-center justify-center mb-4`}>
                <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{studio.name}</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4">{studio.description}</p>
              
              <div className="mb-4">
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400 mb-2">
                  <Users className="w-4 h-4" />
                  <span>{studio.projects} Active Projects</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {studio.focus.slice(0, 2).map((focus) => (
                  <span
                    key={focus}
                    className="text-xs bg-purple-500/10 text-purple-400 px-2 py-1 rounded border border-purple-500/30"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>

        {selectedStudio && (
          <div className="mt-8 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Join This Studio</h2>
            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 sm:py-4 px-6 rounded-xl font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-sm sm:text-base">
              Apply to Studio
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

