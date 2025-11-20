/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'porcelain': '#fcfbf9',
        'ink-black': '#1a1a1a',
        'cinnabar': '#aa381e',
        'jade': '#00a86b',
        'jade-dark': '#007a4d',
        'stone-paper': '#e6e5e3',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        calligraphy: ['"Ma Shan Zheng"', 'cursive'],
      },
      backgroundImage: {
        'rice-paper': "url('https://www.transparenttextures.com/patterns/rice-paper.png')",
      }
    },
  },
  plugins: [],
}