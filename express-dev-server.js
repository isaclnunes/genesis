import path                   from 'path'
import express                from 'express'
import webpack                from 'webpack'
import config                 from './config/webpack.config.dev.babel'
import webpackDevMiddleware   from 'webpack-dev-middleware'
import webpackHotMiddleware   from 'webpack-hot-middleware'
import Dashboard              from 'webpack-dashboard'
import DashboardPlugin        from 'webpack-dashboard/plugin'

const app           = express();
const compiler      = webpack(config);
const host          = process.env.HOST || 'localhost';
const isDevelopment = process.env.NODE_ENV !== 'production';
const HTML_FILE     = path.join(__dirname, './src/index.html');
const HTML_DIST_FILE     = path.join(__dirname, './dist/index.html');
const DIST_DIR      = path.join(__dirname, "dist");

// Apply CLI dashboard for your webpack dev server
// const dashboard = new Dashboard();
// compiler.apply(new DashboardPlugin(dashboard.setData));

function log() {
  arguments[0] = '\nServer: ' + arguments[0];
  console.log.apply(console, arguments);
}

app.set("port", process.env.PORT || 3000);

if (isDevelopment) {
  // Use devMiddleware if in development
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {
      colors: true
    },
    historyApiFallback: true
  }));
  // Use HMR if in development
  app.use(webpackHotMiddleware(compiler));

  app.get("*", (req, res) => res.sendFile(HTML_FILE));
} else {
  app.use(express.static(DIST_DIR));
  app.get("*", (req, res) => res.sendFile(HTML_DIST_FILE));
}

app.listen(app.get("port"), (err) => {
  if (err) {
    log(err);
    return;
  }

  log('App is listening at http://localhost:%s', app.get("port"));
});
