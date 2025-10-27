import { useState } from 'react';
import { Sparkles, TrendingUp, Target, Zap, ChevronRight, Mountain, Scale, Clock } from 'lucide-react';
import { generateProjectPlan, detectMountain } from '../utils/aiEngine';

interface LandingPageProps {
  onNavigate: (view: string) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  const [ideaInput, setIdeaInput] = useState('');
  const [generatedPlan, setGeneratedPlan] = useState<any>(null);

  const generatePlan = () => {
    if (!ideaInput.trim()) {
      return;
    }

    const plan = generateProjectPlan({
      name: ideaInput,
      problem: ideaInput
    });

    setGeneratedPlan({
      idea: plan.name,
      technical: plan.technical,
      business: plan.business,
      mountain: plan.mountainName,
      timing: plan.timing
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Aurora Borealis Effect */}
      <div className="absolute inset-0 opacity-30" style={{
        background: 'linear-gradient(135deg, rgba(212,175,55,0.1), rgba(106,13,173,0.1), rgba(65,105,225,0.1))',
        animation: 'aurora 20s ease-in-out infinite alternate'
      }}></div>
      
      {/* Light Particles Effect */}
      <div className="absolute inset-0 bg-starfield opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="flex items-center space-x-2 sm:space-x-3 bg-kings-gold/10 border border-kings-gold/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-glow-small">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-divine-light" />
              <span className="text-divine-light font-medium text-xs sm:text-base">From Skillset to Expression</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
            Build Ventures That
            <br />
            <span className="text-divine-light" style={{
              background: 'linear-gradient(135deg, #D4AF37, #6A0DAD, #4169E1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(255,215,0,0.5)'
            }}>
              Transform Territory
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-2 sm:px-0">
            The only incubator that balances purpose and profit, aligns with your divine calling,
            and helps you build generational wealth while taking territory across the 7 mountains of culture.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <button
              onClick={() => onNavigate('dashboard')}
              className="btn-king text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all w-full sm:w-auto"
            >
              <span>Start Your Journey</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('territory')}
              className="bg-slate-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-slate-600 transition-all w-full sm:w-auto"
            >
              Explore Territory Map
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
            <Mountain className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">7 Mountains Territory</h3>
            <p className="text-gray-400">
              Strategic influence across Education, Government, Business, Media, Arts, Family, and Religion
            </p>
            <div className="mt-4 bg-slate-700/50 rounded-lg p-3">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Territory Conquered</span>
                <span className="text-cyan-400 font-bold">4/7</span>
              </div>
              <div className="w-full bg-slate-600 rounded-full h-2">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{width: '57%'}}></div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 hover:border-green-500/50 transition-all">
            <Scale className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Kings & Priests Balance</h3>
            <p className="text-gray-400">
              Maintain harmony between wealth creation and ministry impact for sustainable success
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">68%</div>
                <div className="text-xs text-gray-400">King</div>
              </div>
              <div className="w-16 h-16 rounded-full border-4 border-green-400 flex items-center justify-center">
                <Scale className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">72%</div>
                <div className="text-xs text-gray-400">Priest</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 hover:border-yellow-500/50 transition-all">
            <Clock className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Joseph Principle Timing</h3>
            <p className="text-gray-400">
              Launch ventures during seasons of plenty, prepare during times of abundance
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Current Season</span>
                <span className="text-yellow-400 font-bold">PLENTY</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Optimal Launch Window</span>
                <span className="text-green-400 font-bold">90 Days</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-4 sm:p-6 lg:p-8 border border-slate-600">
          <div className="text-center mb-4 sm:mb-6">
            <Zap className="w-8 h-8 sm:w-12 sm:h-12 text-yellow-400 mx-auto mb-3 sm:mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Interactive Idea Generator</h2>
            <p className="text-sm sm:text-base text-gray-300">Transform your vision into a complete technical and business plan</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="mb-3 sm:mb-4">
              <input
                type="text"
                value={ideaInput}
                onChange={(e) => setIdeaInput(e.target.value)}
                placeholder="Describe your venture idea..."
                className="w-full bg-slate-900 text-white border border-slate-600 rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:border-cyan-500 transition-all"
              />
            </div>
            <button
              onClick={generatePlan}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 sm:py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-sm sm:text-base"
            >
              Generate Complete Plan
            </button>

            {generatedPlan && (
              <div className="mt-4 sm:mt-6 bg-slate-900 rounded-xl p-4 sm:p-6 border border-cyan-500/30">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="flex-1 pr-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">{generatedPlan.idea}</h3>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <span className="text-xs sm:text-sm bg-cyan-500/20 text-cyan-400 px-2 sm:px-3 py-1 rounded-full">
                        {generatedPlan.mountain}
                      </span>
                      <span className="text-xs sm:text-sm bg-green-500/20 text-green-400 px-2 sm:px-3 py-1 rounded-full">
                        {generatedPlan.timing}
                      </span>
                    </div>
                  </div>
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 flex-shrink-0" />
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-400 mb-2">TECHNICAL PLAN</h4>
                    <p className="text-sm sm:text-base text-gray-300">{generatedPlan.technical}</p>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-400 mb-2">BUSINESS MODEL</h4>
                    <p className="text-sm sm:text-base text-gray-300">{generatedPlan.business}</p>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('incubator')}
                  className="mt-4 sm:mt-6 w-full bg-slate-700 text-white py-2.5 sm:py-3 rounded-lg font-medium hover:bg-slate-600 transition-all flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <span>Continue to Full Incubator</span>
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 sm:mt-12 lg:mt-16 grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Traditional Incubators</h3>
            <ul className="space-y-2 sm:space-y-3">
              {['Teach technical skills', 'Focus on profit metrics', 'Generic business advice', 'Individual success focus', 'Market trend following'].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-gray-400 text-sm sm:text-base">
                  <div className="w-2 h-2 bg-gray-600 rounded-full flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Project AI Studio</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                'Activates divine calling & purpose',
                'Measures kingdom territory taken',
                'Provides prophetic timing insight',
                'Builds generational legacy',
                'Balances purpose & profit',
                'Uses values-aligned AI co-founders'
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-white text-sm sm:text-base">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Join the Kings & Priests Fundraising Dinner</h3>
          <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto">
            Transform youth into venture builders. Invest in the digital future and watch them take territory across all mountains of influence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button
              onClick={() => onNavigate('fundraising')}
              className="bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-orange-600 transition-all text-sm sm:text-base"
            >
              View Investment Opportunity
            </button>
            <button
              onClick={() => onNavigate('analytics')}
              className="bg-slate-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-slate-600 transition-all text-sm sm:text-base"
            >
              See Pilot Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
