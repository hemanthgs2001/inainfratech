/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#14202E',
        steel: '#2E4A63',
        'steel-light': '#3D6690',
        safety: '#E8871E',
        'safety-dark': '#C56F14',
        concrete: '#ECE8E1',
        paper: '#F7F5F1',
        slate: {
          DEFAULT: '#4B5563',
          light: '#6B7280'
        }
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace']
      },
      clipPath: {
        cut: 'polygon(0 0, 100% 0, 100% 92%, 0 100%)'
      }
    }
  },
  plugins: []
};
