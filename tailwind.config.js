/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sidebar: {
          "": "#F7F9FC",
          text: "#344054",
          active: "#E3EAFB",
          brand: "#101928",
          gray: "#475367",
        },
        brand: {
          gray: "#667185",
          dark: "#1D2739",
          text: "#555E68",
          bold: "#101928",
          pink: "#FFECE5",
          blue: "#175CFF",
        },
        table: {
          gray: "#F9FAFB",
        },
      },
    },
  },
  plugins: [],
};
