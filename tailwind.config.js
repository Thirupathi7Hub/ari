/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fefaf0',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        luxury: {
          gold: '#D4AF37',
          'dark-gold': '#B8860B',
          charcoal: '#1a1a1a',
          cream: '#fefaf0',
          'off-white': '#f8f8f8'
        }
      },
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'playfair': ['Playfair Display', 'serif'],
        'great-vibes': ['Great Vibes', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
        'serenade': ['Serenade', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'fade-in-left': 'fadeInLeft 0.6s ease-out',
        'fade-in-right': 'fadeInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'bounce-in': 'bounceIn 0.8s ease-out',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
        'slide-in-top': 'slideInFromTop 0.5s ease-out',
        'slide-in-bottom': 'slideInFromBottom 0.5s ease-out',
        'text-shimmer': 'text-shimmer 3s ease-in-out infinite',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 100%)',
        'luxury-gradient': 'linear-gradient(135deg, #fefaf0 0%, #fff9f0 100%)',
        'dark-gradient': 'linear-gradient(135deg, #B8860B 0%, #D4AF37 100%)',
      },
      boxShadow: {
        'luxury': '0 20px 40px rgba(212, 175, 55, 0.1)',
        'luxury-lg': '0 25px 50px rgba(212, 175, 55, 0.15)',
        'luxury-xl': '0 30px 60px rgba(212, 175, 55, 0.2)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      }
    },
  },
  plugins: [],
}