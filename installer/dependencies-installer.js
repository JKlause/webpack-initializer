const installer = require('./installer');

const pkgArray = [
  'react',
  'react-dom',
  'react-redux',
  'react-router-dom',
  'redux'
];

module.exports = (path) => {
  installer(path, pkgArray, false);
};