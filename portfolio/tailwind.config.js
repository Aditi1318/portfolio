// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        orbitron: ['Orbitron', 'monospace'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'bounce-slow': 'bounce 2s infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'neon-flicker': 'neon-flicker 2s infinite alternate',
        'glitch-1': 'glitch-1 0.5s infinite',
        'glitch-2': 'glitch-2 0.5s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'gradient-shift': {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        'neon-flicker': {
          '0%, 18%, 22%, 25%, 53%, 57%, 100%': {
            'text-shadow': '0 0 5px #06b6d4, 0 0 10px #06b6d4, 0 0 15px #06b6d4, 0 0 20px #06b6d4, 0 0 35px #06b6d4, 0 0 40px #06b6d4',
          },
          '20%, 24%, 55%': {
            'text-shadow': 'none',
          },
        },
        'glitch-1': {
          '0%, 14%, 15%, 49%, 50%, 99%, 100%': {
            transform: 'translate(0)',
          },
          '15%, 49%': {
            transform: 'translate(-2px, 2px)',
          },
        },
        'glitch-2': {
          '0%, 20%, 21%, 62%, 63%, 99%, 100%': {
            transform: 'translate(0)',
          },
          '21%, 62%': {
            transform: 'translate(2px, -2px)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

