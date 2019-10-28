const { writeJSON } = require('./writer');

const babelObj = {
  'presets': [
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  'plugins': [
    '@babel/plugin-proposal-class-properties'
  ]
};

module.exports = (path) => {
  writeJSON(path, babelObj);
};