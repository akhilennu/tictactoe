// const standard = require('@neutrinojs/standardjs');
const react = require('@neutrinojs/react');
// const jest = require('@neutrinojs/jest');
const eslint = require('@neutrinojs/eslint');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    // standard(),
    react({
      html: {
        title: 'tictactoe'
      },
      publicPath: ''
    }),
    // jest(),
  ],
};
