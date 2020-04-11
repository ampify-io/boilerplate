const { name } = require('./package');

module.exports = {
  entry: {
    ampify: './src',
  },
  output: {
    library: '[name]',
    libraryTarget: 'window',
    filename: '[name].js',
  },
};
