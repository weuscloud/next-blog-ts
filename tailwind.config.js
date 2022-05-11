module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      colors:{
        'gray-0':"#F4F5F5",/*：背景色 */
        'gray-1':"#FAFAFA",/*: hover 色 */
        'gray-2':"#86909c",/*：字体色 */
        'white-0':"#fff",
        'accent-1': '#FAFAFA',
        'blue-0':'#007fff',/* 蓝：字体色 */
        'link-color':'#1890ff',
        'success-color':'#52c41a',
        'warning-color':'#faad14',
        'error-color':'#f5222d',
        'primary-color':'#f5f5f5'
      }
    },
    flex:{
      '1': '1 1 auto',
      '4': '4 1 auto',
    }
  },
  plugins: [],
}
