import webpack            from 'webpack';
import HtmlWebpackPlugin  from 'html-webpack-plugin';
import ExtractTextPlugin  from 'extract-text-webpack-plugin';
import autoprefixer       from 'autoprefixer';
import OpenBrowserPlugin  from 'open-browser-webpack-plugin';

import { PATHS }          from './configs';
import { loaders }        from './webpack-loaders';

const env = process.env.NODE_ENV;

const loadPlugins = () => {
  const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify(env),
    __DEV__: env === 'development'
  };

  const plugins = [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new HtmlWebpackPlugin({
      inject: true,
      template: `${PATHS.src}/index.html`
    }),
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
  ];

  switch (env) {
    case 'production':
      plugins.push(new webpack.optimize.DedupePlugin());
      plugins.push(new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
          warnings: false,
          screw_ie8: true
        },
        output: {
          comments: false
        }
      }));
      break;
    case 'development':
      plugins.push(new webpack.HotModuleReplacementPlugin());
      plugins.push(new webpack.NoErrorsPlugin());
      plugins.push(new OpenBrowserPlugin({ url: 'http://localhost:3000' }));
      break;
  }
  plugins.push(new ExtractTextPlugin({ filename: 'pina.css', allChunks: true }));
  plugins.push(new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' }));

  return plugins;
};

const getAppEntryPoints = () => {
  const entry = [
    'font-awesome-loader',
    'bootstrap-loader/extractStyles',
    './src/index.jsx'
  ];

  if (env === 'development') {
    entry.unshift('react-hot-loader/patch', 'webpack-hot-middleware/client');
  }

  return entry;
};

const config = {
  devtool: env === 'production' ? 'source-map' : 'cheap-source-map',
  entry: getAppEntryPoints(),
  target: env === 'test' ? 'node' : 'web',
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.json', '.js', '.jsx', '.scss']
  },
  output: {
    path: PATHS.dist,
    publicPath: '',
    filename: env === 'production' ? 'bundle-[chunkhash].js' : 'bundle.js'
  },
  plugins: loadPlugins(),
  module: {
    rules: loaders(env)
  }
};

export default config;
