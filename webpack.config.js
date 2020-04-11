const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    ampify: './src',
  },
  output: {
    library: '[name]',
    libraryTarget: 'window',
    filename: '[name].js',
  },
  plugins: [new CopyPlugin([{ from: './src/ampify.json', to: 'ampify.json' }])],
};
