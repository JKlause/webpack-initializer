const { write } = require('./writer');

const travisStr = `language: node_js
node_js: node`;


module.exports = (path) => {
  write(`${path}/.travis.yml`, travisStr);
};