import path                   from 'path'
import express                from 'express'
import webpack                from 'webpack'
import config                 from './config/webpack.config.dev.babel'
import webpackDevMiddleware   from 'webpack-dev-middleware'
import webpackHotMiddleware   from 'webpack-hot-middleware'
import Dashboard              from 'webpack-dashboard'
import DashboardPlugin        from 'webpack-dashboard/plugin'

const app = express();
const compiler = webpack(config);

// Apply CLI dashboard for your webpack dev server
// const dashboard = new Dashboard();
// compiler.apply(new DashboardPlugin(dashboard.setData));

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

function log() {
  arguments[0] = '\nWebpack: ' + arguments[0];
  console.log.apply(console, arguments);
}

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  },
  historyApiFallback: true,
  open: true
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', false);
  res.sendFile(path.join(__dirname, './src/index.html'));
});

app.listen(port, host, (err) => {
  if (err) {
    log(err);
    return;
  }

  log('🚧  App is listening at http://%s:%s', host, port);
});
