import webpack            from 'webpack'
import merge              from 'webpack-merge'
import path               from 'path'
import HtmlWebpackPlugin  from 'html-webpack-plugin'
import ExtractTextPlugin  from 'extract-text-webpack-plugin'
import config             from './webpack.config.common'

module.exports = merge(config, {
  devtool: 'cheap-module-source-map',
  entry: {
    application: [
      'font-awesome-loader',
      'bootstrap-loader/extractStyles',
      './src/index.jsx'
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
        'screw_ie8': true
      },
      output: {
        comments: false
      }
    }),
    new ExtractTextPlugin({ filename: 'pina-[chunkhash].css', allChunks: true }),
    new HtmlWebpackPlugin({ inject: true, template: './src/index.html' }),
    new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery" })
  ]
});
