**NOT READY FOR USE YET**

# piy
[![npm version](https://img.shields.io/npm/v/piy.svg)](https://www.npmjs.com/package/piy)
[![Build Status](https://travis-ci.org/dawsonbotsford/piy.svg?branch=master)](https://travis-ci.org/dawsonbotsford/piy)
[![npm download count](http://img.shields.io/npm/dm/piy.svg?style=flat)](http://npmjs.org/piy)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> npm module to python commands ported into node

<br>

## Install

```
npm install --save piy
```


<br>

## Usage

```js
const piy = require('piy');

piy.pop([1,2,3], 1);
//=> [1,3]

piy.print('hackathons');
//=> 'hackathons'
```


<br>

## API

### piy.print(target)

### piy.pop(arr, index)

Pops the element at array `index` in `arr`. The native js pop does not allow for removal at index.

<br>

## License

MIT © [Dawson Botsford](http://dawsonbotsford.com)


---
If you like this, star it. If you want to follow me, follow me.
