module.exports = (path, pkgArray, devBool) => {
  const { execSync } = require('child_process');
  console.log('Dependencies are loading');
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
  console.log('Dependencies finished loading');
};