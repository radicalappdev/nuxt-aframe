/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    colors: {

      purple: '#8854d0',
      cyan: '#0fb9b1',
      green: '#20bf6b',
      red: '#eb3b5a',
      blue: '#3867d6',
      orange: '#fa8231',
      yellow: '#f7b731',
      white: '#fff',
      black: "#000",

      gray: {
        100: '#CECDD0',
        200: '#B6B4B8',
        300: '#9D9BA1',
        400: '#858289',
        500: '#6D6972',
        600: '#54505A',
        700: '#3C3743',
        800: '#241e2b',
        900: '#0c0614'
      },

      card: '#ffffff',
      link: '#3C68BC'
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
