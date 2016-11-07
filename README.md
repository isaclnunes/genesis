# This is a WIP
I'm updating this as I figure life out

## TL;DR;
(Another) Starter Kit for ReactJS. Check the Stack/Features section of this README file. Clone it, fork it, contribute to it if you like.

There is a much better project for you to learn and it is in fact quite awesome!
Have a look at Peter Mouland's [React Lego](https://github.com/peter-mouland/react-lego)

## Intro
I have put this starter kit together for the following reasons:
- I have tried other starter kits and I always struggled to add new stuff (or the stuff that I wanted)
- I wanted to understand how to fully set up a project like this
- I wanted something with the latest libs

This starter kit is using the latest available libraries as from 22/10/2016 and I will *try* to keep it up to date, but you know, nowadays libs and best practices change almost as quickly as Taylor Swift changes boyfriends.

## How to use

**Step 1**. Make sure that you have [Node.js](https://nodejs.org/) v6 or newer installed on your
machine.

**Step 2**. Clone this repository to bootstrap your project:

```shell
$ git clone https://github.com/tpina/genesis.git MyApp
$ cd MyApp
$ yarn
```

**Step 3**. Compile and launch your app by running:

```bash
# Start for development
npm run start
```

### Bundles

You can build (and serve) two types of bundles, the development bundle and the production one.

The main difference is that the production bundle is optimized to production.

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

### Running tests

I have done some very basic testing. To run them:
```bash
npm run test
```

### Running lint on src folder
```bash
npm run lint
```

## Stack/Features

&nbsp; &nbsp; ✓ Modern JavaScript syntax ([ES6](http://es6-features.org/)+) via [Babel](http://babeljs.io/)<br>
&nbsp; &nbsp; ✓ CSS modules (SASS and Less) and modern CSS syntax via [PostCSS](https://github.com/postcss/postcss)<br>
&nbsp; &nbsp; ✓ Component-based UI architecture via [React](http://facebook.github.io/react/), [Webpack](https://webpack.github.io/) and [CSS Modules](https://github.com/css-modules/css-modules)<br>
&nbsp; &nbsp; ✓ [Code-splitting](https://github.com/webpack/docs/wiki/code-splitting) and async chunk loading via [Webpack](https://webpack.github.io/) and [ES6 System.import()](http://www.2ality.com/2014/09/es6-modules-final.html)<br>
&nbsp; &nbsp; ✓ Hot Module Replacement ([HMR](https://webpack.github.io/docs/hot-module-replacement.html)) /w [React Hot Loader](http://gaearon.github.io/react-hot-loader/)<br>
&nbsp; &nbsp; ✓ Integration with [Bootstrap](http://getbootstrap.com/) via [React Bootstrap](https://react-bootstrap.github.io/).<br>
&nbsp; &nbsp; ✓ [Font Awesome](http://fontawesome.io/) via [Font Awersome Loader](https://github.com/shakacode/font-awesome-loader). (see [`webpack.config.js`](webpack.config.js))<br>
&nbsp; &nbsp; ✓ Linting<br>
&nbsp; &nbsp; ✓ Express<br>
&nbsp; &nbsp; ✓ Testing with [Jest](https://facebook.github.io/jest/), [Enzyme](http://airbnb.io/enzyme/) and [react-addons-test-utils](https://facebook.github.io/react/docs/test-utils.html)<br>

## License
[MIT license](http://opensource.org/licenses/mit-license.php)

Go crazy folks...
