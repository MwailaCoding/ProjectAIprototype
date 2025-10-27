import { Download, FileText, TrendingUp, Users, DollarSign } from 'lucide-react';

export default function CaseStudyBuilder() {
  const caseStudies = [
    {
      id: 'case1',
      studentName: 'David Builder',
      title: 'EduChain Platform',
      problem: 'Students struggle to verify credentials across institutions',
      solution: 'Blockchain-based credential verification system',
      impact: '12K+ students verified, $200K revenue',
      mountain: 'Education',
      status: 'Scaling',
      funding: '$150K secured'
    },
    {
      id: 'case2',
      studentName: 'Sarah Chen',
      title: 'AgriConnect App',
      problem: 'Small-scale farmers lack market access and fair pricing',
      solution: 'Mobile marketplace connecting farmers to buyers',
      impact: '8K farmers, $500K in transactions',
      mountain: 'Business',
      status: 'Launched',
      funding: '$80K secured'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-full">
              <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2 sm:px-0">
            Success <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Stories</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 px-2 sm:px-0">
            Real case studies from our pilot program for the fundraising dinner
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-6 hover:border-cyan-500/50 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-sm text-cyan-400">By {study.studentName}</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-400 border border-green-500/30">
                  {study.status}
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                  <div className="text-xs text-gray-400 mb-1">PROBLEM</div>
                  <div className="text-sm text-white">{study.problem}</div>
                </div>
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-3">
                  <div className="text-xs text-gray-400 mb-1">SOLUTION</div>
                  <div className="text-sm text-white">{study.solution}</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center">
                  <Users className="w-5 h-5 text-green-400 mx-auto mb-1" />
                  <div className="text-lg font-bold text-green-400">{study.impact}</div>
                  <div className="text-xs text-gray-400">Impact</div>
                </div>
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-3 text-center">
                  <DollarSign className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
                  <div className="text-lg font-bold text-cyan-400">{study.funding}</div>
                  <div className="text-xs text-gray-400">Funded</div>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3 text-center">
                  <TrendingUp className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                  <div className="text-lg font-bold text-purple-400">{study.mountain}</div>
                  <div className="text-xs text-gray-400">Mountain</div>
                </div>
              </div>

              <button className="w-full bg-cyan-500 text-white py-2.5 rounded-lg font-semibold hover:bg-cyan-600 transition-all flex items-center justify-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Download Case Study</span>
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-xl p-6 sm:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Join Success Stories</h3>
          <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto">
            Launch your venture through Project AI Studio and become the next case study
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-sm sm:text-base">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
}

