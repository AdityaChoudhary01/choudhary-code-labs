/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        // --- Light Mode Palette ---
        'light-bg': '#F0F2F5',      
        'light-card': 'rgba(255, 255, 255, 0.7)', 
        'light-text': '#1f2937',     
        'light-heading': '#111827',  
        'light-accent': '#3B82F6',   

 
        'dark-bg': '#0F172A',       
        'dark-card': 'rgba(15, 23, 42, 0.7)',
        'dark-text': '#E2E8F0',       
        'dark-heading': '#FFFFFF',
        'dark-accent': '#60A5FA',    
      },
      backdropBlur: {
        'xl': '24px',
      }
    },
  },
  plugins: [],
}
