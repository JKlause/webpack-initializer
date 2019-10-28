module.exports = (path, pkgArray, devBool) => {
  const { execSync } = require('child_process');

  if(devBool) {
    console.log('devDependencies are loading');
    pkgArray.forEach(pkg => execSync(`npm i -D ${pkg}`, {
      cwd: path,
      stdio: 'inherit'
    }));
    console.log('devDependencies finished loading');
  } 
  else {
    console.log('Dependencies are loading');
    pkgArray.forEach(pkg => execSync(`npm i ${pkg}`, {
      cwd: path,
      stdio: 'inherit'
    }));
    console.log('Dependencies finished loading');
  }
};