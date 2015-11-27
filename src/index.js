export default function () {
  return {
    visitor: {
      CallExpression(path) {
        if (path.get("callee").matchesPattern("LOG.debug")) {
          path.remove();
        }
      }
    }
  };
}
