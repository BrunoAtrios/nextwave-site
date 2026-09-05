/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#06070a',
        'bg-secondary': '#0d1118',
        'bg-tertiary': '#151b25',
        'accent-primary': '#1677ff',
        'accent-glow': '#59a5ff',
        'accent-cyan': '#b9d9ff',
        'text-primary': '#f7f9fc',
        'text-secondary': '#b7c1d0',
        'text-muted': '#718096',
        'border': '#243043',
      },
      fontFamily: {
        'sans': ['Arial', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite 2s',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(22, 119, 255, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(22, 119, 255, 0.8)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
