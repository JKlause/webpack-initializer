const fs = require('fs');

function write(path, str) {
  fs.writeFileSync(path, str);
}

function writeJSON(path, obj) {
  const str = JSON.stringify(obj, null, 2);
  fs.writeFileSync(path, str);
}

module.exports = {
  write,
  writeJSON
};