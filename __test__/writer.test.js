const { write, writeJson } = require('../writers/writer');
const fs = require('fs').promises;

describe('writer', () => {

  it('writes a string to a file', () => {
    const str = 'George';
    const path = '__test__/test-data/george.txt';
    write(path, str);
    fs.readFile(path, 'utf-8')
      .then(resolved => {
        expect(resolved).toEqual(str);
      });

  });
  it('jsonifies an obj and writes to a file', () => {
    const obj = {
      name: 'joe',
      hair: 'brown'
    };
    const path = '__test__/test-data/json-joe.txt';
    writeJson(path, obj);
    fs.readFile(path, 'utf-8')
      .then(resolved => {
        expect(resolved).toEqual(JSON.stringify(obj));
      });
  });


});