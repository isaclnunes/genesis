
/* eslint global-require: 0 */
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./AppRouter.prod');
} else {
  module.exports = require('./AppRouter.dev');
}
