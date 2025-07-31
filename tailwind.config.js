import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";

export const content = ["./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      primary: "#326d6d",
      secondary: "#ebcbcb",
      light: "#f7f7f7",
      dark: "#333333",
      beige: "#f4efe9",
    },
    fontFamily: {
      sans: ["Lato", ..._fontFamily.sans],
      title: ["Quicksand", ..._fontFamily.sans],
    },
    animation: {
      "spin-slow": "spin 4s linear infinite",
    },
  },
};
export const plugins = [];
