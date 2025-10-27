/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Biblical Color Symbolism
        'kings-gold': '#D4AF37',
        'priests-purple': '#6A0DAD',
        'divine-light': '#FFD700',
        'covenant-blue': '#4169E1',
        'holy-fire': '#FF6B35',
        'living-water': '#00CED1',
        'emerald-glory': '#50C878',
      },
      boxShadow: {
        'glow-small': '0 0 10px #FFD700',
        'glow-medium': '0 0 20px #FFD700',
        'glow-large': '0 0 40px #FFD700',
        'halo': '0 0 60px rgba(212,175,55,0.6)',
      },
      animation: {
        'divine-reveal': 'divineReveal 0.8s ease-out',
        'glory-pulse': 'gloryPulse 2s ease-in-out infinite',
        'covenant-shimmer': 'covenantShimmer 3s ease infinite',
      },
    },
  },
  plugins: [],
};
