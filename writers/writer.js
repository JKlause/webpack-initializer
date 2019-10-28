const fs = require('fs').promises;

function write(path, str) {
  fs.writeFile(path, str);
}

function writeJson(path, obj) {
  const str = JSON.stringify(obj);
  fs.writeFile(path, str);
}

module.exports = {
  write,
  writeJson
};