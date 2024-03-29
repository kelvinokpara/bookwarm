/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#FC4300",
      },
      fontFamily: {
        spacemono: "Space Mono, monospace",
        worksans: "Work Sans, sans-serif",
      },
    },
  },
  plugins: [],
};
