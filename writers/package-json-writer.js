const { writeJSON } = require('./writer');

const pckgJSONObj = {
  'name': 'starter-code',
  'version': '1.0.0',
  'description': '',
  'main': 'src/index.js',
  'jest': {
    'setupFilesAfterEnv': [
      '<rootDir>src/setupTests.js'
    ],
    'snapshotSerializers': [
      'enzyme-to-json/serializer'
    ],
    'moduleNameMapper': {
      '\\.(css)$': 'identity-obj-proxy',
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js'
    }
  },
  'scripts': {
    'test': 'jest --verbose',
    'test:watch': 'npm run test -- --watch',
    'start': 'webpack-dev-server --hot --mode development --devtool eval-source-map',
    'build': 'webpack -p --devtool source-map'
  },
  'keywords': [],
  'author': '',
  'license': 'ISC',
  'dependencies': {
    'react': '^16.11.0',
    'react-dom': '^16.11.0'
  },
  'devDependencies': {
    '@babel/core': '^7.6.4',
    '@babel/plugin-proposal-class-properties': '^7.5.5',
    '@babel/preset-env': '^7.6.3',
    '@babel/preset-react': '^7.6.3',
    'autoprefixer': '^9.7.0',
    'babel-eslint': '^10.0.3',
    'babel-loader': '^8.0.6',
    'clean-webpack-plugin': '^3.0.0',
    'css-loader': '^3.2.0',
    'enzyme': '^3.10.0',
    'enzyme-adapter-react-16': '^1.15.1',
    'enzyme-to-json': '^3.4.3',
    'eslint': '^6.6.0',
    'eslint-plugin-babel': '^5.3.0',
    'eslint-plugin-react': '^7.16.0',
    'file-loader': '^4.2.0',
    'html-webpack-plugin': '^3.2.0',
    'identity-obj-proxy': '^3.0.0',
    'jest': '^24.9.0',
    'postcss-import': '^12.0.1',
    'postcss-loader': '^3.0.0',
    'postcss-nested': '^4.1.2',
    'postcss-simple-vars': '^5.0.2',
    'prop-types': '^15.7.2',
    'style-loader': '^1.0.0',
    'url-loader': '^2.2.0',
    'webpack': '^4.41.2',
    'webpack-cli': '^3.3.9',
    'webpack-dev-server': '^3.9.0'
  }
};



module.exports = (path) => {
  writeJSON(path, pckgJSONObj);
};