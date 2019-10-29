const { write } = require('./writer');

const setupTestStr = `var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });
`;


module.exports = (path) => {
  write(`${path}/src/setupTests.js`, setupTestStr);
};