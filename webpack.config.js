const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {  
  entry: ['./scss/main.scss', './src/app.js'],
  output: {
    filename: 'dist/bundle.js'      
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {         
    rules: [
      { // css / sass / scss loader for webpack
        test: /\.(css|sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader'//,
             // options: { url: false }          
            }, 
            { loader: 'sass-loader'//,
             // options: { url: false }          
            }
          ],
          //
        })
      },
      /*    
      {
        test: /\.(png|jp(e*)g|svg)$/,  
        use: [{
            loader: 'url-loader',
            options: { 
                limit: 8000 // Convert images < 8kb to base64 strings
                //name: 'images/[hash]-[name].[ext]'
            }, 
        }]
      },*/
      {
        test: /\.(jpe?g|png|gif|svg)$/, 
        loader: "file-loader?name=/[name].[ext]",
        options: {
          publicPath: '/' 
        }
      }     
    ]   
  },
  plugins: [   
    new ExtractTextPlugin({ // define where to save the file
      filename: 'dist/[name].bundle.css',
      allChunks: true
    }),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'src/index.html'
    })
  ],
};
