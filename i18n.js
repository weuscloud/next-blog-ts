module.exports = {
    locales: ['zh-CN','en-US'], // Array with the languages that you want to use
    defaultLocale: 'zh-CN', // Default language of your website
    pages: {
      '*': ['common','nav','footer'], // Namespaces that you want to import per page (we stick to one namespace for all the application in this tutorial)
    },
  };