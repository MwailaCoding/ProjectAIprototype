import { Building, TrendingUp, Users, Award } from 'lucide-react';
import { partners, sponsorshipTiers } from '../data/investorData';

export default function CorporatePartners() {
  const getTierColor = (tier: string) => {
    switch(tier) {
      case 'Bronze': return 'from-orange-500 to-amber-500';
      case 'Silver': return 'from-gray-400 to-slate-400';
      case 'Gold': return 'from-yellow-400 to-amber-400';
      case 'Platinum': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full">
              <Building className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Corporate <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Partners</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300">
            Our ecosystem of strategic partners and sponsors
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-4 sm:p-6 hover:border-cyan-500/50 transition-all text-center"
            >
              <div className="text-4xl sm:text-5xl mb-3">{partner.logo}</div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">{partner.name}</h3>
              <span className={`px-2 py-1 rounded text-xs font-semibold bg-gradient-to-r ${getTierColor(partner.tier)}`}>
                {partner.tier}
              </span>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">Become a Partner</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {sponsorshipTiers.map((tier) => (
              <div
                key={tier.id}
                className={`bg-gradient-to-br ${getTierColor(tier.name)} border-2 border-transparent rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:scale-105 transition-all cursor-pointer`}
              >
                <div className="flex items-center justify-between mb-4">
                  <Award className="w-8 h-8 text-white" />
                  <span className="text-2xl sm:text-3xl font-bold text-white">{tier.investment}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{tier.name} Partner</h3>
                <div className="text-white/90 mb-4 text-sm sm:text-base">
                  {tier.studentsSponsored} students sponsored
                </div>
                <ul className="space-y-2 mb-6 text-sm text-white/80">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 flex-shrink-0"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-white text-gray-900 px-4 py-2 rounded-lg font-bold text-sm text-center hover:bg-gray-100 transition-all">
                  Learn More
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-6 sm:p-8 text-center">
          <TrendingUp className="w-12 h-12 sm:w-16 sm:h-16 text-cyan-400 mx-auto mb-4" />
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Join Our Ecosystem</h3>
          <p className="text-sm sm:text-base text-gray-300 mb-6 max-w-2xl mx-auto">
            Partner with us to transform youth into kingdom entrepreneurs and build generational impact
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-sm sm:text-base">
            Become a Partner
          </button>
        </div>
      </div>
    </div>
  );
}

