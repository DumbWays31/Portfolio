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
        primary: '#1D3557',
        secondary: '#D4E09B',
        tertiary: '#F1FAEE',
        quaternary: '#CBDFBD',
        quinary: '#F19C79',
        accent: '#A7BA93',
      },
    },
  },
  plugins: [],
} satisfies Config;
