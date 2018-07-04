function requireIfExists(modulePath, baseDir = './', def = {}) {
  try {
    const path = require.resolve(modulePath, { paths: [baseDir] });

    return require(path);
  }
  catch (e) {
    return def;
  }
}

module.exports = {
  requireIfExists,
};
