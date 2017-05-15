const path = require('path');

module.exports = {
  plugins: {
    'postcss-import': {
      root: __dirname,
      path: [path.join(__dirname, './components')],
    },
    'postcss-mixins': {},
    'postcss-each': {},
    'postcss-reporter': { clearMessages: true },
  },
};
