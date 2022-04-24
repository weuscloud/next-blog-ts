const nextTranslate = require('next-translate');
module.exports = nextTranslate({
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
});