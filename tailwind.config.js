import defaultTheme from 'tailwindcss/defaultTheme'

const colors =require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      /* fontFamily: {
       'lato': ['Lato', 'sans-serif'],
       sans: ["Lato", ...defaultTheme.fontFamily.sans]
      }, */
      colors: {
        'front': {
        DEFAULT: '#1d1e22',
      },
      
       
      },
    },
    plugins: [],
  }
}
