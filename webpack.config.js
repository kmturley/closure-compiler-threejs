const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ClosurePlugin = require('closure-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

const OUTPUT_FOLDER = 'dist';
 
module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, OUTPUT_FOLDER),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { context: './src', from: '*.html', to: './' },
    ]),
  ],
  devServer: {
    contentBase: './' + OUTPUT_FOLDER,
    hot: true,
    host: '0.0.0.0',
    port: 8080,
  },
  optimization: {
    minimizer: [
      new ClosurePlugin({mode: 'STANDARD'}, {
        // formatting: 'PRETTY_PRINT',
        // debug: true,
        // renaming: false
      })
    ]
  }
};
