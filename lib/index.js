"use strict";

exports.__esModule = true;

exports["default"] = function () {
  return {
    visitor: {
      CallExpression: function CallExpression(path) {
        if (path.get("callee").matchesPattern("LOG.debug")) {
          path.remove();
        }
      }
    }
  };
};

module.exports = exports["default"];

