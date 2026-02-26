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
        primary: {
          DEFAULT: "#0066FF",
          dark: "#242E49",
        },
        secondary: {
          DEFAULT: "#3A384F",
        },
        accent: {
          green: "#B9FF66",
          blue: "#8FBCFF",
        },
        gray: {
          50: "#F7F7F7",
          100: "#F3F4F6",
          200: "#E5E5E5",
          400: "#B2B2B2",
          600: "#464646",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        pontano: ["Pontano Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
