import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";
import { COLORS_SYSTEM, TYPOGRAPHY_SYSTEM } from "./styles/@index"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...COLORS_SYSTEM
      }
    }
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addComponents }: PluginAPI) {
      addComponents(TYPOGRAPHY_SYSTEM)
    }
  ]
};

export default config;