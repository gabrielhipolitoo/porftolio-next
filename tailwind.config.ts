import { tailwindColors } from "./src/app/tailwindColors";
/** @type { import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: {
    "@tailwindcss/postcss": {},
  },
  theme: {
    extend: {
      colors: {
        background: "#ffff",
      },
    },
  },
};

export default config;
