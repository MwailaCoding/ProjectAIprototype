import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { events } from '../data/investorData';

export default function EventCalendar() {
  const getEventTypeColor = (type: string) => {
    switch(type) {
      case 'cohort': return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
      case 'dinner': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'demo': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'pitch': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'networking': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full">
              <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Event <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Calendar</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300">
            Upcoming cohorts, dinners, and networking events
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-cyan-500/50 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-semibold border ${getEventTypeColor(event.type)}`}>
                      {event.type.toUpperCase()}
                    </span>
                    <span className="text-xs text-gray-400">{event.date}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">{event.description}</p>
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    {event.attendees && (
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{event.attendees} attendees</span>
                      </div>
                    )}
                  </div>
                </div>
                <button className="bg-cyan-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-all text-sm whitespace-nowrap">
                  RSVP
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6 sm:p-8 text-center">
          <Clock className="w-12 h-12 sm:w-16 sm:h-16 text-purple-400 mx-auto mb-4" />
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-sm sm:text-base text-gray-300 mb-6 max-w-2xl mx-auto">
            Join our mailing list to get notified about new events and opportunities
          </p>
          <button className="bg-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-purple-600 transition-all text-sm sm:text-base">
            Subscribe to Events
          </button>
        </div>
      </div>
    </div>
  );
}

