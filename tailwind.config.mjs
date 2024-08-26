/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        display: ['Orbitron', 'sans-serif']
      },
      colors: {
        'burnt-orange': '#ff8c42',
        'gold': '#ffd700',
      }
    },
  },
  plugins: [],
}

