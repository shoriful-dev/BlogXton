/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        Container: '1170px',
      },
      fontFamily: {
        Inter: 'Inter',
        Prompt: 'Prompt',
      },
      colors: {
        red: '#FF4C60',
      },
      backgroundImage: {
        BannerImage1: "url('./src/assets/banner1.png')"
      }
    },
  },
  plugins: [],
};

