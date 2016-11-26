import ExtractTextPlugin  from 'extract-text-webpack-plugin'

const availableLoaders = {
  cssLoader: 'css-loader?sourceMap&modules&importLoaders=2&localIdentName=[name]__[local]__[hash:base64:5]',
  styleLoader: 'style-loader',
  postcssLoader: 'postcss-loader',
  sassLoader: 'sass-loader?sourceMap',
  htmlLoader: 'html-loader',
  fileLoader: 'file-loader'
};

const loaders = () => (
  [
    { enforce: 'pre', test: /\.(js|jsx)$/, loader: ['eslint-loader'], exclude: [/node_modules/] },
    { test: /\.(js|jsx)$/, exclude: /node_modules/, loaders: ['babel-loader'] },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({ fallbackLoader: availableLoaders.styleLoader,
        loader: [
          availableLoaders.cssLoader,
          availableLoaders.postcssLoader
        ]
      })
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: availableLoaders.styleLoader,
        loader: [
          availableLoaders.cssLoader,
          availableLoaders.postcssLoader,
          availableLoaders.sassLoader
        ]
      })
    },
    {
      test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url?limit=10000',
    },
    {
      test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
      loader: [availableLoaders.fileLoader]
    },
    {
      test: /\.html$/,
      loader: [availableLoaders.htmlLoader]
    }
  ]
);

export default loaders;
