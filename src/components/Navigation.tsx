import { useState } from 'react';
import { Home, LayoutDashboard, Map, Scale, TrendingUp, Rocket, BarChart3, Menu, X, Book, Target, Presentation, DollarSign, Building2, Lightbulb, Users, Coins, FileText, Handshake, Calendar, TrendingUp as TrendingUpIcon, Users as UsersIcon, Quote, DollarSign as DollarSignIcon, Shield, Briefcase, Building2 as Building2Icon } from 'lucide-react';

interface NavigationProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export default function Navigation({ currentView, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const primaryNavItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'learning', label: 'Learning', icon: Book },
    { id: 'challenges', label: 'Challenges', icon: Target },
    { id: 'territory', label: 'Territory', icon: Map },
    { id: 'balance', label: 'Balance', icon: Scale },
    { id: 'seasons', label: 'Seasons', icon: TrendingUp }
  ];

  const secondaryNavItems = [
    { id: 'incubator', label: 'Incubator', icon: Rocket },
    { id: 'wealth', label: 'Wealth', icon: Coins },
    { id: 'pitch', label: 'Pitch', icon: Presentation },
    { id: 'fundraising', label: 'Fundraising', icon: DollarSign },
    { id: 'studios', label: 'Studios', icon: Building2 },
    { id: 'problems', label: 'Problems', icon: Lightbulb },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'cases', label: 'Cases', icon: FileText },
    { id: 'partners', label: 'Partners', icon: Handshake },
    { id: 'pilot', label: 'Pilot', icon: Briefcase },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'impact', label: 'Impact', icon: TrendingUpIcon },
    { id: 'advisory', label: 'Advisory', icon: UsersIcon },
    { id: 'testimonials', label: 'Stories', icon: Quote },
    { id: 'revenue', label: 'Revenue', icon: DollarSignIcon },
    { id: 'legal', label: 'Legal', icon: Shield },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 }
  ];

  const navItems = [...primaryNavItems, ...secondaryNavItems];

  const handleNavigate = (view: string) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-lg relative" style={{
      background: 'linear-gradient(135deg, rgba(13, 19, 33, 1), rgba(30, 41, 59, 1))',
      boxShadow: '0 4px 30px rgba(212,175,55,0.1)',
      zIndex: 100
    }}>
      {/* Starfield background */}
      <div className="absolute inset-0 bg-starfield opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
            <span className="text-sm sm:text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              <span className="hidden sm:inline">Project AI Studio</span>
              <span className="sm:hidden">AI Studio</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {primaryNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                    isActive
                      ? 'bg-kings-gold text-white shadow-lg shadow-kings-gold/50 animate-glow-pulse'
                      : 'text-gray-300 hover:bg-slate-700/50 hover:text-divine-light hover:shadow-md hover:shadow-divine-light/20'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-xs font-medium">{item.label}</span>
                </button>
              );
            })}
            
            {/* Secondary items in dropdown */}
            <div className="relative" style={{ zIndex: moreDropdownOpen ? 1000 : 'auto' }}>
              <button 
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-300 hover:bg-slate-700/50 hover:text-divine-light transition-all"
              >
                <span className="text-xs font-medium">More</span>
                {moreDropdownOpen ? (
                  <svg className="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
              
              {moreDropdownOpen && (
                <>
                  {/* Dropdown menu */}
                  <div 
                    className="absolute right-0 top-full mt-2 w-72 bg-slate-900 border-2 border-kings-gold/30 rounded-xl shadow-2xl"
                    style={{
                      position: 'absolute',
                      top: '100%',
                      right: 0,
                      marginTop: '0.5rem',
                      zIndex: 10001
                    }}
                  >
                    <div className="p-2">
                      <div className="mb-1.5 px-2 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                        More Sections
                      </div>
                      <div className="space-y-0.5">
                        {secondaryNavItems.map((item) => {
                          const Icon = item.icon;
                          const isActive = currentView === item.id;
                          return (
                            <button
                              key={item.id}
                              onClick={() => {
                                handleNavigate(item.id);
                                setMoreDropdownOpen(false);
                              }}
                              className={`w-full flex items-center space-x-2.5 px-3 py-2 rounded-md text-sm transition-all ${
                                isActive
                                  ? 'bg-kings-gold/20 text-divine-light'
                                  : 'text-gray-300 hover:bg-slate-700/80 hover:text-white'
                              }`}
                            >
                              <Icon className="w-4 h-4 flex-shrink-0" />
                              <span>{item.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  
                  {/* Backdrop to close dropdown when clicking outside */}
                  <div 
                    className="fixed inset-0"
                    style={{ zIndex: 9998 }}
                    onClick={() => setMoreDropdownOpen(false)}
                  ></div>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:bg-slate-700 hover:text-white transition-all"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Slide-out Menu */}
        <div className={`lg:hidden fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="fixed left-0 top-0 bottom-0 w-64 bg-gradient-to-b from-slate-900 to-slate-800 shadow-2xl">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b border-slate-700">
                <div className="flex items-center space-x-2">
                  <Rocket className="w-6 h-6 text-cyan-400" />
                  <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    AI Studio
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-gray-300 hover:bg-slate-700 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                <nav className="space-y-2">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = currentView === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavigate(item.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all text-left ${
                          isActive
                            ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50'
                            : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              <div className="p-4 border-t border-slate-700">
                <button
                  onClick={() => {
                    handleNavigate('landing');
                  }}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-700 hover:text-white transition-all"
                >
                  <Home className="w-5 h-5" />
                  <span className="font-medium">Back to Home</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
