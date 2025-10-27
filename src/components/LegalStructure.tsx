import { FileText, Shield, CheckCircle, DollarSign } from 'lucide-react';

export default function LegalStructure() {
  const templates = [
    'Co-Founder Agreement',
    'Client Contract Template',
    'Employment Agreement',
    'NDA Template',
    'IP Assignment Agreement',
    'Service Level Agreement'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full">
              <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Legal <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Structure</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300">
            IP protection, entity formation, and compliance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-8">
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 sm:p-6">
            <FileText className="w-8 h-8 text-blue-400 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Entity Setup</h3>
            <p className="text-sm text-gray-400 mb-4">Choose the right legal structure for your venture</p>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition-all text-sm">
              Start Setup
            </button>
          </div>

          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 sm:p-6">
            <Shield className="w-8 h-8 text-green-400 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">IP Protection</h3>
            <p className="text-sm text-gray-400 mb-4">Secure your intellectual property</p>
            <button className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition-all text-sm">
              Protect IP
            </button>
          </div>

          <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 sm:p-6">
            <DollarSign className="w-8 h-8 text-purple-400 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Cost Estimator</h3>
            <p className="text-sm text-gray-400 mb-4">Estimate your legal costs</p>
            <button className="w-full bg-purple-500 text-white py-2 rounded-lg font-semibold hover:bg-purple-600 transition-all text-sm">
              Calculate Costs
            </button>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-8">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Contract Templates Library</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {templates.map((template, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 p-3 bg-slate-900/50 rounded-lg hover:bg-slate-900 transition-all cursor-pointer"
              >
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-sm text-white">{template}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6 sm:p-8 text-center">
          <Shield className="w-12 h-12 sm:w-16 sm:h-16 text-purple-400 mx-auto mb-4" />
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Need Legal Help?</h3>
          <p className="text-sm sm:text-base text-gray-300 mb-6 max-w-2xl mx-auto">
            Connect with our network of qualified attorneys specializing in startups
          </p>
          <button className="bg-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-purple-600 transition-all text-sm sm:text-base">
            Get Legal Assistance
          </button>
        </div>
      </div>
    </div>
  );
}

