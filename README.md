# babel-plugin-transform-remove-logdebug

Remove LOG.debug calls

## Installation

```sh
$ npm install deekit/babel-plugin-transform-remove-logdebug
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["transform-remove-logdebug"]
}
```

### Via CLI

```sh
$ babel --plugins transform-remove-logdebug script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["transform-remove-logdebug"]
});
```
