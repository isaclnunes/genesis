import webpack            from 'webpack'
import merge              from 'webpack-merge'
import path               from 'path'
import HtmlWebpackPlugin  from 'html-webpack-plugin'
import ExtractTextPlugin  from 'extract-text-webpack-plugin'
import config             from './webpack.config.common'

module.exports = merge(config, {
  devtool: 'source-map',
  entry: {
    application: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      'font-awesome-loader',
      'bootstrap-loader/extractStyles',
      './src/index.jsx'
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({ filename: 'pina.css', allChunks: true }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html'
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
});
