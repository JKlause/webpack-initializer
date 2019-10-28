const fs = require('fs');
const args = process.argv;
const folder = args[args.length - 1];

const packageJSONWriter = require('./writers/package-json-writer');
const eslintWriter = require('./writers/eslint-writer');
const babelWriter = require('./writers/babel-writer');
const webpackWriter = require('./writers/webpack-writer');
const gitIgnoreWriter = require('./writers/gitignore-writer');
const travisWriter = require('./writers/travis-writer');
const { writeIndexJS, writeIndexHTML } = require('./writers/src-index-writer');
const dependencyInstaller = require('./installer/dependencies-installer');
const devDependencyInstaller = require('./installer/dev-dependencies-installer');


if(folder !== '.') fs.mkdirSync(folder);
fs.mkdirSync(`${folder}/src`);

packageJSONWriter(folder);
eslintWriter(folder);
babelWriter(folder);
webpackWriter(folder);
gitIgnoreWriter(folder);
travisWriter(folder);
writeIndexJS(`${folder}/src/index.js`);
writeIndexHTML(`${folder}/src/index.html`);
dependencyInstaller(folder);
devDependencyInstaller(folder);
