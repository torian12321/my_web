const path = require('path');

module.exports = {
  'react'    : 'preact-compat',
  'react-dom': 'preact-compat',
  // Not necessary unless you consume a module using `createClass`
  'create-react-class': 'preact-compat/lib/create-react-class',

  LESS_conf: path.resolve(__dirname, '../src/styles/conf'),
  manifest : path.resolve(__dirname, '../src/static/manifest.json'),

  Main  : path.resolve(__dirname, '../src/views/Main'),

  BG     : path.resolve(__dirname, '../src/components/BG'),
  Menu   : path.resolve(__dirname, '../src/components/Menu'),  

  // UI
  Avatar   : path.resolve(__dirname, '../src/components/Avatar'),
  Grid     : path.resolve(__dirname, '../src/components/Grid'),
  Icon     : path.resolve(__dirname, '../src/components/Icon'),
  Menu     : path.resolve(__dirname, '../src/components/Menu'),
  Quote    : path.resolve(__dirname, '../src/components/Quote'),
  Rating   : path.resolve(__dirname, '../src/components/Rating'),
  Section: path.resolve(__dirname, '../src/components/Section'),
  Title    : path.resolve(__dirname, '../src/components/Title'),

  // Form
  Input    : path.resolve(__dirname, '../src/components/form/Input'),
  Textarea : path.resolve(__dirname, '../src/components/form/Textarea'),
  Button   : path.resolve(__dirname, '../src/components/form/Button'),
};