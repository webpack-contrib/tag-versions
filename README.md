<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]
[![tests][tests]][tests-url]
[![chat][chat]][chat-url]

# tag-versions

A command line tool, installed globally on build that wrapps `omichelsen/compare-versions` for use in our CircleCI 2.0 build containers.

## Requirements

This module requires a minimum of Node v6.9.0.

## Getting Started

To begin, you'll need to install `tag-versions`:

```console
$ npm i -g @webpack-contrib/tag-versions --save-dev
```

Wraps compare-versions to perform semver comparisons on libraries dist-tags consumable from a simple bash script( see below ).

## CLI

```console
$ compver --name webpack --gte next --lt latest

  Options
    --name            The name of the pacakge to compare.
    --gte             The dist-tag used in the left side of the comparison.
    --lt              The dist-tag used in the right side of the comparison.

  Intended usage
    $ if [[ $(compver --name webpack --gte next --lt latest) < 1 ]] ; then echo n00p; else npm run test ; fi
  
  Examples
    $ compver --name superLib --gte '10.1.8' --lt '10.0.4' // outputs 1
    $ compver --name superLib --gte '10.0.8' --lt '10.0.8' // outputs 0
    $ compver --name superLib --gte '10.1.1' --lt '10.2.2' // outputs -1
```

## License

#### [MIT](./LICENSE)

[npm]: https://img.shields.io/npm/v/tag-versions.svg
[npm-url]: https://npmjs.com/package/tag-versions

[node]: https://img.shields.io/node/v/tag-versions.svg
[node-url]: https://nodejs.org

[deps]: https://david-dm.org/webpack-contrib/tag-versions.svg
[deps-url]: https://david-dm.org/webpack-contrib/tag-versions

[tests]: 	https://img.shields.io/circleci/project/github/webpack-contrib/tag-versions.svg
[tests-url]: https://circleci.com/gh/webpack-contrib/tag-versions

[cover]: https://codecov.io/gh/webpack-contrib/tag-versions/branch/master/graph/badge.svg
[cover-url]: https://codecov.io/gh/webpack-contrib/tag-versions

[chat]: https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg
[chat-url]: https://gitter.im/webpack/webpack