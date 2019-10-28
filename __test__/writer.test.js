const { write, writeJSON } = require('../writers/writer');
const fs = require('fs');

fs.writeFileSync = jest.fn();

describe('writer', () => {

  it('writes files', () => {
    const str = 'George';
    const path = '__test__/test-data/george.txt';
    write(path, str);
    expect(fs.writeFileSync.mock.calls[0][0]).toBe(path);
    expect(fs.writeFileSync.mock.calls[0][1]).toBe(str);
  });

  it('jsonifies an obj and writes to a file', () => {
    const obj = {
      name: 'joe',
      hair: 'brown'
    };
    const path = '__test__/test-data/json-joe.txt';
    writeJSON(path, obj);
    expect(fs.writeFileSync.mock.calls[1][0]).toBe(path);
    expect(fs.writeFileSync.mock.calls[1][1]).toEqual(JSON.stringify(obj, null, 2));
  });
});