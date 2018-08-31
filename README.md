# is-ascii-safe [![Build status](https://travis-ci.org/mathiasbynens/is-ascii-safe.svg?branch=master)](https://travis-ci.org/mathiasbynens/is-ascii-safe)

_is-ascii-safe_ determines whether a given string is ASCII-safe, i.e. if it consists of ASCII characters (U+0000 to U+007F) only.

## Installation

To use _is-ascii-safe_ programmatically, install it as a dependency via [npm](https://www.npmjs.com/):

```bash
npm install is-ascii-safe --save
```

## Usage

```js
const isAsciiSafe = require('is-ascii-safe');

isAsciiSafe('abc');
// → true
isAsciiSafe('a𝌆b');
// → false
isAsciiSafe('Iñtërnâtiônàlizætiøn☃💩');
// → false
```

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |
