import { Quote, Star, Play } from 'lucide-react';
import { testimonials } from '../data/investorData';

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full">
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Success <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Stories</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300">
            Real stories of transformation and impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-cyan-500/50 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      testimonial.type === 'student' ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' :
                      testimonial.type === 'parent' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                      'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                    } border`}>
                      {testimonial.type.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{testimonial.name}</h3>
                  <p className="text-sm text-cyan-400 mb-3">{testimonial.role}</p>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
              {testimonial.impact && (
                <div className="flex items-center space-x-2 text-sm text-green-400 font-semibold">
                  <span>Impact:</span>
                  <span>{testimonial.impact}</span>
                </div>
              )}
              {testimonial.type === 'student' && (
                <button className="mt-4 w-full bg-cyan-500 text-white py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-all flex items-center justify-center space-x-2">
                  <Play className="w-4 h-4" />
                  <span>Watch Full Story</span>
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl p-6 sm:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Share Your Story</h3>
          <p className="text-sm sm:text-base text-gray-300 mb-6 max-w-2xl mx-auto">
            Have a Project AI Studio success story? We'd love to hear from you
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/50 transition-all text-sm sm:text-base">
            Submit Your Testimonial
          </button>
        </div>
      </div>
    </div>
  );
}

