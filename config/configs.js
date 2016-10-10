import path from 'path'

export const PATHS = {
  root: path.join(__dirname, '../'),
  dist: path.join(__dirname, '../dist')
}

export const LOADERS = {
  cssLoader:      'css-loader?sourceMap&modules&importLoaders=2&localIdentName=[name]__[local]__[hash:base64:5]',
  styleLoader:    'style-loader',
  postcssLoader:  'postcss-loader',
  sassLoader:     'sass-loader?sourceMap',
  htmlLoader:     'html-loader',
  fileLoader:     'file-loader'
}
