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
        BannerImage1: "url('./src/assets/banner1.png')",
        BannerImage2: "url('./src/assets/banner2.png')",
        BannerImage3: "url('./src/assets/banner3.png')",
        BannerImage4: "url('./src/assets/banner4.png')",
        BannerImage5: "url('./src/assets/banner5.png')",
        BannerImage6: "url('./src/assets/banner6.png')",
        BannerImage7: "url('./src/assets/banner7.png')",
        BannerImage8: "url('./src/assets/banner8.png')",
        FooterBG: "url('./src/assets/FooterBg.png')"
      }
    },
  },
  plugins: [],
};

