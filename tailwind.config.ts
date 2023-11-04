import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark_bg_1: "#111B21",
        dark_bg_2: "#202C33",
        dark_bg_3: "#182229",
        dark_bg_4: "#111E35",
        dark_bg_5: "#233138",
        dark_border_1: "#222D34",
        dark_border_2: "#313D45",
        dark_hover_1: "#2A3942",
        dark_svg_1: "#AEBAC1",
        dark_svg_2: "#8696A0",
        blue_1: "#53BDEB",
        blue_2: "#3E7B96",
        dark_text_1: "#E9EDEF",
        dark_text_2: "#8696A0",
        dark_text_3: "#8696a0",
        dark_text_4: "#d1d6d8",
        dark_text_5: "#99beb7",
        dark_scrollbar: "#374045",
        green_1: "#00A884",
        green_2: "#008069",
        green_3: "#005C48",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
