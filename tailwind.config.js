/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        hotpink: "#ff2d92",
        softpink: "#ff9ac6"
      },
      fontFamily: {
        romantic: ["'Pacifico'", "cursive"],
        display: ["'Poppins'", "system-ui", "sans-serif"]
      },
      boxShadow: {
        "soft-pink": "0 0 40px rgba(255, 45, 146, 0.55)"
      }
    }
  },
  plugins: []
};

