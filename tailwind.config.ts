import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        green: "var(--green)",
        yellow: "var(--yellow)",
        blue: "var(--blue)",

        strokeGreen: "var(--border-green)",
        strokeYellow: "var(--border-yellow)",
        strokeBlue: "var(--border-blue)",

        shadowGreen: "var(--shadow-green)",
        shadowYellow: "var(--shadow-yellow)",
        shadowBlue: "var(--shadow-blue)",
      },
      boxShadow: {
        lightShadow: "0 0 10px 4px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
