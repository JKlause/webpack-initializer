const installer = require('../installer/installer');
const childProcess = require('child_process');


childProcess.execSync = jest.fn();

describe('installer', () => {

  it('installs dependencies', () => {
    const path = '__test__/test-data/george.txt';
    const pkgArray = [
      'joe',
      'bill'
    ];
    const devBool = false;
    installer(path, pkgArray, devBool);
    expect(childProcess.execSync.mock.calls[0][0]).toEqual('npm i joe');

  });

  it('installs dev dependencies', () => {
    const path = '__test__/test-data/george.txt';
    const pkgArray = [
      'joe',
      'bill'
    ];
    const devBool = true;
    installer(path, pkgArray, devBool);
    expect(childProcess.execSync.mock.calls[2][0]).toEqual('npm i -D joe');
  });
});