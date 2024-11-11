// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',  
        },
        secondary: {
          light: '#F3F4F6',  
          DEFAULT: '#1F2937',  
        },
        accent: {
          success: '#10B981',  
          error: '#EF4444',  
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), 
  ],
}
