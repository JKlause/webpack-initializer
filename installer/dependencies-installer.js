const installer = require('./installer');

const pkgArray = [
  'react',
  'react-dom',
  'react-router-dom'
];

module.exports = (path) => {
  installer(path, pkgArray, false);
};