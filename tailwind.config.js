module.exports = {
  darkMode: 'class',
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'gray-1': '#1d1d1d',
        'gray-4': '#515151',
        'gray-7': '#999999',
        'gray-10': '#cbcbcb',
        'blue-1': '#111d2c',
        'blue-4': '#164c7e',
        'blue-7': '#3c9ae8',
        'blue-10': '#b7e3fa',
      }
    },
    flex: {
      '1': '1 1 auto',
      '4': '4 1 auto',
    }
  },
  plugins: [],
}
