import {
  night as nightTheme,
  winter as winterTheme,
} from "daisyui/src/theming/themes";
import daisyui from "daisyui";
import twTypography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        night: {
          ...nightTheme,
          primary: "#B131FA",
          secondary: "#FF1CC0",
          accent: "#3F8EFC",
          "base-100": "#272727",
        },
        light: {
          ...winterTheme,
          primary: "#B131FA",
          secondary: "#FF1CC0",
          accent: "#3F8EFC",
        },
      },
    ],
    darkTheme: "night",
  },
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [twTypography, daisyui],
};

export default tailwindConfig;
