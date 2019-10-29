const { write } = require('./writer');

const AppJSStr = `import React from 'react';
export default function App() {
}
`;


module.exports = (path) => {
  write(`${path}/src/components/App.js`, AppJSStr);
};