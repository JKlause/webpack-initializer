const { write } = require('./writer');

const eslintIgnoreStr = `node_modules
public
vendor
coverage
build
docs
`;


module.exports = (path) => {
  write(`${path}/.eslintignore`, eslintIgnoreStr);
};