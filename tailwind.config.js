// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Make sure this path covers your layout and page files
  ],
  theme: {
    extend: {
      fontFamily: {
        // Map the CSS variables defined in your layout.tsx to Tailwind utility classes
        'geist-sans': ['var(--font-geist-sans)'],
        'geist-mono': ['var(--font-geist-mono)'],
        'ins-sans': ['var(--font-ins-sans)'], // This is the new one for Instrument Sans
        'ins-serif': ['var(--font-ins-serif)'], // This is the new one for Instrument Sans
        // Add Instrument Serif if you plan to use it:
        // 'ins-serif': ['var(--font-ins-serif)'],
      },
    },
  },
  plugins: [],
}