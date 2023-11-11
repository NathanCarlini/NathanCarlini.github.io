/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purp: "#7A0498",
        grey: "#232323",
      },
      backgroundImage: {
        'SAEcc': "url('./assets/SAEcc.png')",
        'SAEccc': "url('./assets/SAEccc.png')",
        'SAEdv': "url('./assets/SAEdv.png')",
        'SAEdvc': "url('./assets/SAEdvc.png')",
        'SAEoh': "url('./assets/SAEoh.png')",
        'SAEohc': "url('./assets/SAEohc.png')",
      }
    },
  },
  plugins: [],
};
