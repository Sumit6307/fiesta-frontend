export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        '404': "url('/src/assets/background404.jpg')",
      }
    },
  },
  plugins: [],
};
