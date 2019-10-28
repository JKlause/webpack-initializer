const fs = require('fs');

const packageJSONWriter = require('./writers/package-json-writer');
const eslintWriter = require('./writers/eslint-writer');
const eslintIgnoreWriter = require('./writers/eslint-ignore-writer');
const babelWriter = require('./writers/babel-writer');
const webpackWriter = require('./writers/webpack-writer');
const gitIgnoreWriter = require('./writers/gitignore-writer');
const travisWriter = require('./writers/travis-writer');
const { writeIndexJS, writeIndexHTML } = require('./writers/src-index-writer');
const dependencyInstaller = require('./installer/dependencies-installer');
const devDependencyInstaller = require('./installer/dev-dependencies-installer');

const args = process.argv;
const folder = args[args.length - 1];


if(folder !== '.') fs.mkdirSync(folder);
fs.mkdirSync(`${folder}/src`);

packageJSONWriter(folder);
eslintWriter(folder);
eslintIgnoreWriter(folder);
babelWriter(folder);
webpackWriter(folder);
gitIgnoreWriter(folder);
travisWriter(folder);
writeIndexJS(folder);
writeIndexHTML(folder);
dependencyInstaller(folder);
devDependencyInstaller(folder);
