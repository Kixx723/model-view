const path = require('path');

module.exports = {
  // Define the entry point of your application
  entry: './src/index.js', // Adjust this path to where your main JavaScript file is located

  // Define the output of your bundle
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  // Configure how to fallback when certain modules are not available
  resolve: {
    fallback: {
      fs: false, // Ignore fs module
      path: require.resolve('path-browserify'), // Provide a fallback for the path module
    },
  },

  // Add additional configurations as needed
};
