// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}', // Adjust according to your Remix project's structure
    './remix.config.js',
    './remix.env.d.ts',
    './app/**/*.tsx',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
