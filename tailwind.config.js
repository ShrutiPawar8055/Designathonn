/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: '#E1DCC9',
          dark: '#1A1209',
        },
        surface: {
          light: '#F0EBD8',
          dark: '#251A0F',
        },
        primary: {
          light: '#000000',
          dark: '#EDE8D8',
        },
        muted: {
          light: '#6B5B45',
          dark: '#A89070',
        },
        coffee: {
          light: '#1F150C',
          dark: '#E5D5B5',
        },
        heritage: {
          light: '#412D15',
          dark: '#C4A07A',
        },
        accent: {
          light: '#7A5C38',
          dark: '#C4A07A',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        heading: ['Playfair Display', 'serif'],
        body: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
