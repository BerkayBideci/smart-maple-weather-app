/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#C4C3C1",
      },
      backgroundImage: {
        clouds: "url(/background/clouds.jpg)"
      },
    },
  },
  plugins: [],
}
