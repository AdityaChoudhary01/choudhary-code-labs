module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        glass: 'rgba(255,255,255,0.15)',
        glassDark: 'rgba(30,41,59,0.45)'
      },
      backdropBlur: {
        xs: '2px'
      }
    },
  },
  plugins: [],
};
