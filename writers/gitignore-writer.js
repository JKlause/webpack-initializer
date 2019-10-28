const { write } = require('./writer');

const gitIgnoreStr = `node_modules
.env
dist
`;


module.exports = (path) => {
  write(path, gitIgnoreStr);
};