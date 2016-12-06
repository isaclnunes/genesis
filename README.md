# React Weather App

ReactJS Single Page Application that displays a 5 day weather forecast for a given location.

## About

This SPA displays a 5 day weather forecast for a given location. You can enter the name of a city in the input and it should fetch the 5 day forecast for that city.
If no city is provided the default is London, Uk.

## How to

**Install dependencies** - Please use Yarn to install the dependencies instead of npm. The reason for this is that I'm using unstable beta versions of some tools (e.g. webpack). This app has a yarn.lock file which will ensure we have consistent installs across machines. The non-deterministic npm install might pull in different versions of a library.

**Run development environment**
```bash
npm run start
```
**Build the development bundle**
```bash
npm run build-dev
```
**Build and run the production bundle**
```bash
npm run serve
```
**Build the production bundle**
```bash
npm run build-prod
```
**Build and run the production bundle**
```bash
npm run serve-dist
```
**Run linter**
```bash
npm run lint
```
**Run tests**
```bash
npm run test
```

## Stack/Features

Some of these are hardly used but I wanted to include them as they are really nice.

&nbsp; &nbsp; ✓ Modern JavaScript syntax ([ES6](http://es6-features.org/)+) via [Babel](http://babeljs.io/)<br>
&nbsp; &nbsp; ✓ CSS modules (SASS and Less) and modern CSS syntax via [PostCSS](https://github.com/postcss/postcss)<br>
&nbsp; &nbsp; ✓ Component-based UI architecture via [React](http://facebook.github.io/react/), [Webpack](https://webpack.github.io/) and [CSS Modules](https://github.com/css-modules/css-modules)<br>
&nbsp; &nbsp; ✓ [Code-splitting](https://github.com/webpack/docs/wiki/code-splitting) and async chunk loading via [Webpack](https://webpack.github.io/) and [ES6 System.import()](http://www.2ality.com/2014/09/es6-modules-final.html)<br>
&nbsp; &nbsp; ✓ Hot Module Replacement ([HMR](https://webpack.github.io/docs/hot-module-replacement.html)) /w [React Hot Loader](http://gaearon.github.io/react-hot-loader/)<br>
&nbsp; &nbsp; ✓ Integration with [Bootstrap](http://getbootstrap.com/) via [React Bootstrap](https://react-bootstrap.github.io/).<br>
&nbsp; &nbsp; ✓ Linting<br>
&nbsp; &nbsp; ✓ Testing with [Jest](https://facebook.github.io/jest/), [Enzyme](http://airbnb.io/enzyme/) and [react-addons-test-utils](https://facebook.github.io/react/docs/test-utils.html)<br>

## License
[MIT license](http://opensource.org/licenses/mit-license.php)
