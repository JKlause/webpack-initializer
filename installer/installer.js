const { execSync } = require('child_process');

module.exports = (path, pkgArray, devBool) => {
  if(devBool) {
    pkgArray.forEach(pkg => execSync(`npm i -D ${pkg}`, {
      cwd: path,
      stdio: 'inherit'
    }));
  } 
  else {
    pkgArray.forEach(pkg => execSync(`npm i ${pkg}`, {
      cwd: path,
      stdio: 'inherit'
    }));
  }
};