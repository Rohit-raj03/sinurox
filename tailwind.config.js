module.exports = {
  darkMode: 'class', // enable class based dark mode
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-body': '#05070b',
        'bg-surface': '#0b0f19',
        'bg-card': 'rgba(15, 22, 36, 0.72)',
        'bg-card-hover': 'rgba(23, 33, 54, 0.85)',
        'border-card': 'rgba(255,255,255,0.08)',
        'accent-yt': '#ff0033',
        'accent-gold': '#f59e0b',
        'accent-ig': '#e1306c',
        'accent-cyan': '#06b6d4',
        'accent-fb': '#1877f2',
        'accent-snap': '#fffc00',
        'text-primary': '#ffffff',
        'text-secondary': '#94a3b8',
      },
    },
  },
  plugins: [],
};
