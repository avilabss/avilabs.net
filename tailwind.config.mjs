/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-family-sans)",
        article: "var(--font-family-article)",
        articleTitle: "var(--font-family-article-title)",
        code: "var(--font-family-code)",
      },
      colors: {
        brand: {
          900: "var(--brand-900)",
        },
        body: {
          100: "var(--body-100)",
          200: "var(--body-200)",
          300: "var(--body-300)",
          400: "var(--body-400)",
          500: "var(--body-500)",
          600: "var(--body-600)",
          700: "var(--body-700)",
          800: "var(--body-800)",
          900: "var(--body-900)",
        },
        text: {
          100: "var(--text-100)",
          200: "var(--text-200)",
          300: "var(--text-300)",
          400: "var(--text-400)",
          500: "var(--text-500)",
          600: "var(--text-600)",
          700: "var(--text-700)",
          800: "var(--text-800)",
          900: "var(--text-900)",
        },
      },
    },
  },
  plugins: [],
};
