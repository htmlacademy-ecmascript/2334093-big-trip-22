const path = require('path');
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'buld'),
    clean: true,
  },

  devtool: 'source-map',
  plugins: [
    new CopyPlugin ({
      patterns: [{ from: 'public '}],
    }),
  ],
};
