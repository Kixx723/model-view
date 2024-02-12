const path = require('path');

module.exports = function override(config, env) {
  // Override the Webpack config here.
  config.resolve.fallback = {
    fs: false,
    path: require.resolve('path-browserify'),
  };

  return config;
};