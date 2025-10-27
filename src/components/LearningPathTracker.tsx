import { Book, ExternalLink, Award, Clock, TrendingUp } from 'lucide-react';
import { learningModules } from '../data/enhancedMockData';

export default function LearningPathTracker() {
  const getProgressColor = (progress: number) => {
    if (progress === 0) return 'text-gray-400';
    if (progress < 50) return 'text-yellow-400';
    if (progress < 80) return 'text-blue-400';
    return 'text-green-400';
  };

  const overallProgress = Math.round(
    learningModules.reduce((sum, m) => sum + m.progress, 0) / learningModules.length
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full">
              <Book className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2 sm:px-0">
            Learning <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Path</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 px-2 sm:px-0">
            Master AI skills aligned with the times and seasons
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
              <span className="text-2xl sm:text-3xl font-bold text-white">{overallProgress}%</span>
            </div>
            <div className="text-gray-400 text-sm sm:text-base mb-3">Overall Progress</div>
            <div className="w-full bg-slate-700 rounded-full h-2 sm:h-3">
              <div 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 sm:h-3 rounded-full transition-all"
                style={{width: `${overallProgress}%`}}
              ></div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
              <span className="text-2xl sm:text-3xl font-bold text-white">2/4</span>
            </div>
            <div className="text-gray-400 text-sm sm:text-base mb-3">Certificates Earned</div>
            <div className="flex items-center space-x-1">
              {['🎓', '🎓', '⭕', '⭕'].map((badge, i) => (
                <span key={i} className="text-2xl sm:text-3xl">{badge}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Active Learning Tracks</h2>
          
          {learningModules.map((module) => (
            <div
              key={module.id}
              className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-cyan-500/50 transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 sm:mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-white">{module.title}</h3>
                    <span className="text-xs sm:text-sm bg-slate-700 px-2 py-1 rounded text-gray-300">
                      {module.platform}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">{module.description}</p>
                  
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                    <div className="flex items-center text-xs sm:text-sm text-gray-400">
                      <Clock className="w-4 h-4 mr-1" />
                      {module.duration}
                    </div>
                    {module.certificate && (
                      <div className="flex items-center text-xs sm:text-sm text-green-400">
                        <Award className="w-4 h-4 mr-1" />
                        Certificate
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {module.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded border border-cyan-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:w-1/3 flex flex-col items-end">
                  <div className={`text-3xl sm:text-4xl font-bold ${getProgressColor(module.progress)} mb-2`}>
                    {module.progress}%
                  </div>
                  <div className="w-full sm:w-48 bg-slate-700 rounded-full h-2 sm:h-3">
                    <div 
                      className={`h-2 sm:h-3 rounded-full transition-all ${
                        module.progress === 0 ? 'bg-gray-600' :
                        module.progress < 50 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                        module.progress < 80 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                        'bg-gradient-to-r from-green-500 to-emerald-500'
                      }`}
                      style={{width: `${module.progress}%`}}
                    ></div>
                  </div>
                  
                  {module.progress === 0 ? (
                    <a
                      href={module.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 sm:mt-4 w-full sm:w-auto bg-cyan-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-all flex items-center justify-center space-x-2"
                    >
                      <span>Start Learning</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <a
                      href={module.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 sm:mt-4 w-full sm:w-auto bg-slate-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-slate-600 transition-all flex items-center justify-center space-x-2"
                    >
                      <span>Continue</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 rounded-xl sm:rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Recommended Next Steps</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {learningModules
              .filter(m => m.progress === 0)
              .slice(0, 3)
              .map((module) => (
                <div key={module.id} className="bg-slate-900/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">{module.title}</h4>
                  <p className="text-sm text-gray-400 mb-3">{module.description}</p>
                  <a
                    href={module.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center space-x-1"
                  >
                    <span>Enroll now</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

