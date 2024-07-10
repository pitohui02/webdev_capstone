/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'loginBg': "url('./assets/login-bg.png')",
        'signupBg': "url('./assets/signup-page.jpg')",
      },
      backgroundColor:{
        'black': "#000000",
      }
    },
  },
  plugins: [],
}