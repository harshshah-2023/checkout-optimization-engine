/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0B0D",              // deeper black
        surface: "#121316",         // card background
        primary: "#fbbf24",         // warm champagne gold (VERY IMPORTANT)
        secondary: "#1A1B1E",
        textPrimary: "#F3F1EC",     // ivory, not white
        textMuted: "#B6B2A8"   ,     // warm muted grey
        
   
      },
      boxShadow: {
        glow: "0 0 60px rgba(214, 180, 106, 0.35)"
      }
    }
  },
  plugins: []
};
