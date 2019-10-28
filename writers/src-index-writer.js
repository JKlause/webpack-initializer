const { write } = require('./writer');

const indexJSStr = `import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

render(
  <App />,
  document.getElementById('root')
);
`;

const indexHTMLStr = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>joe-init</title>
</head>

<body>
  <div id="root"></div>
</body>

</html>`;

function writeIndexJS(path) {
  write(path, indexJSStr);
}

function writeIndexHTML(path) {
  write(path, indexHTMLStr);
}


module.exports = {
  writeIndexJS,
  writeIndexHTML
};