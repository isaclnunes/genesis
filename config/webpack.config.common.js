import webpack            from 'webpack'
import path               from 'path'
import autoprefixer       from 'autoprefixer'
import ExtractTextPlugin  from 'extract-text-webpack-plugin'
import { PATHS, LOADERS } from './configs'

var isDevelopment = process.env.NODE_ENV !== 'production';

console.log(isDevelopment ? '#### development environment ####\n' : '#### production environment ####\n');

module.exports = {
  output: {
    path: PATHS.dist,
    publicPath: '/',
    filename: isDevelopment ? 'bundle.js' : 'bundle-[chunkhash].js'
  },
  resolve: {
    modules: [
      'src',
      'node_modules'
    ],
    extensions: ['.json', '.js', '.jsx', '.scss']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: ['eslint-loader'],
        exclude: [
          /node_modules/
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: LOADERS.styleLoader,
          loader: [
            LOADERS.cssLoader,
            LOADERS.postcssLoader
          ]
        })
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: LOADERS.styleLoader,
          loader: [
            LOADERS.cssLoader,
            LOADERS.postcssLoader,
            LOADERS.sassLoader
          ]
        })
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=10000',
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: [LOADERS.fileLoader]
      },
      {
        test: /\.html$/,
        loader: [LOADERS.htmlLoader]
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        context: PATHS.root,
        output: {
          path: PATHS.dist
        },
        postcss: [
          autoprefixer({
            browsers: [
              '>1%',
              'last 4 versions',
              'Firefox ESR',
              'not ie < 9'
            ]
          })
        ]
      }
    })
  ]
};
