/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps/docs/**/*.{js,ts,jsx,tsx,mdx}",
    "./packages/acme-core/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

