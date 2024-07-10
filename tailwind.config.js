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
      colors:{
        white: "#FFFFFF",
        black: "#000000",
        primary: "#fca5a5",
        secondary: "#262626",
        accent: "#FFAF8A",
        yellow: "FFFF00"
        
      }
    },
  },
  plugins: [],
}