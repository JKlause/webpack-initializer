const installer = require('./installer');

const pkgArray = [
  'react',
  'react-dom'
];

module.exports = (path) => {
  installer(path, pkgArray, false);
};