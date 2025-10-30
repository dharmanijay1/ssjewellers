
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    
    // Include all relevant file paths
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom font families
      fontFamily: {
        'inter': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'playfair': ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      
      // Custom color palette
      colors: {
        // Gold colors
        'gold': {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#D4AF37', // Primary gold
          600: '#ca8a04',
          700: '#B8860B', // Dark gold
          800: '#92400e',
          900: '#78350f',
        },
        
        // Charcoal colors
        'charcoal': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#2A2A2A', // Light charcoal
          900: '#1C1C1C', // Primary charcoal
        },
        
        // Luxury colors
        'luxury': {
          'cream': '#FBF8F3',
          'ivory': '#FFFEF7',
          'silver': '#C0C0C0',
        }
      },
      
      // Custom box shadows
      boxShadow: {
        'luxury': '0 20px 60px rgba(212, 175, 55, 0.15)',
        'luxury-deep': '0 30px 80px rgba(0, 0, 0, 0.3)',
        'luxury-light': '0 10px 30px rgba(0, 0, 0, 0.1)',
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.4)',
      },
      
      // Custom animations
      animation: {
        'gold-shimmer': 'goldShimmer 3s infinite',
        'floating': 'floating 6s ease-in-out infinite',
        'fade-in-lux': 'fadeInLux 1.5s ease-out',
        'diamond-spin': 'diamondSpin 2s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      
      // Custom keyframes
      keyframes: {
        goldShimmer: {
          '0%': { 'background-position': '-200% center' },
          '100%': { 'background-position': '200% center' },
        },
        floating: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        fadeInLux: {
          '0%': { opacity: '0', transform: 'translateY(60px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        diamondSpin: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.1)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
      },
      
      // Custom background images
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 100%)',
        'charcoal-gradient': 'linear-gradient(135deg, #1C1C1C 0%, #2A2A2A 100%)',
        'luxury-pattern': "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"luxury\" x=\"0\" y=\"0\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\"><circle cx=\"10\" cy=\"10\" r=\"2\" fill=\"%23D4AF37\" opacity=\"0.1\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23luxury)\"/></svg>')",
      },
      
      // Custom border radius
      borderRadius: {
        'luxury': '20px',
        'luxury-lg': '30px',
      },
      
      // Custom spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // Custom screens
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [
    // You can add Tailwind plugins here if needed
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
}