/** @type {import('tailwindcss').Config} */
module.exports = {
  // ⚠️ यहाँ ध्यान दें: './src/**/*.{js,jsx,ts,tsx}' जोड़ना ज़रूरी है
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",          // 👈 यह src के अंदर की सभी फ़ाइलों को स्कैन करेगा
    "./src/app/**/*.{js,jsx,ts,tsx}",      // 👈 अगर src/app फोल्डर है
    "./src/components/**/*.{js,jsx,ts,tsx}" // 👈 अगर src/components फोल्डर है
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
