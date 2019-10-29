module.exports = (path, pkgArray, devBool) => {
  const { execSync } = require('child_process');

  console.log(`${devBool ? 'dev' : ''}Dependencies are loading`);
  execSync(`npm i ${devBool ? '-D' : ''} ${pkgArray.join(' ')}`, {
    cwd: path,
    stdio: 'inherit'
  });
  console.log(`${devBool ? 'dev' : ''}Dependencies finished loading`);
};