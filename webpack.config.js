var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./scss/main.scss'],
  output: {
    filename: 'dist/bundle.js'
  },
  module: {
    rules: [
      { // css / sass / scss loader for webpack
        test: /\.(css|sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader',
              options: { url: false }          
            }, 
            { loader: 'sass-loader',
              options: { url: false }          
            }
          ],
          //
        })
      }
    ]   
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: 'dist/[name].bundle.css',
      allChunks: true,
    }),
  ],
};
