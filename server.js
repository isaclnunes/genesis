import webpack              from 'webpack'
import WebpackDevServer     from 'webpack-dev-server'
import config               from './config/webpack.config.babel'
import DashboardPlugin      from 'webpack-dashboard/plugin'
import webpackHotMiddleware from 'webpack-hot-middleware'

// config.plugins.push(new DashboardPlugin());
const compiler = webpack(config);

compiler.plugin('compile', () => {
  console.log('Bundling... this will take a few seconds');
});

const server = new WebpackDevServer(
  compiler, {
    publicPath: config.output.publicPath,
    path: '/',
    stats: {
      colors: true
    },
    open: true,
    inline: true,
    historyApiFallback: true,
    headers: {'Access-Control-Allow-Origin': '*'},
    hot: true
  }
)

server.use(webpackHotMiddleware(compiler));

compiler.plugin('done', () => {
  server.listen(3000, (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:3000');
  })
});
