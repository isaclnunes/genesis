import webpack            from 'webpack'
import WebpackDevServer   from 'webpack-dev-server'
import config             from './config/webpack.config.dev.babel'
import DashboardPlugin    from 'webpack-dashboard/plugin'

// config.plugins.push(new DashboardPlugin());

const server = new WebpackDevServer(
  webpack(config), {
    publicPath: config.output.publicPath,
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

server.listen(3000, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:3000');
})
