import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#567B81',
        secondary: '#B2D9E0',
        tertiary: '#faedcd',
        quaternary: '#F9B97F',
        quinary: '#CC7229',
        accent: '#A7BA93',
      },
    },
  },
  plugins: [],
} satisfies Config;
