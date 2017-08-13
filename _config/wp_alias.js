const path = require('path');

module.exports = {
    // 'react'    : 'preact-compat',
    // 'react-dom': 'preact-compat',
    // // Not necessary unless you consume a module using `createClass`
    // 'create-react-class': 'preact-compat/lib/create-react-class',

    LESS_conf: path.resolve(__dirname, '../src/styles/conf'),

    Main  : path.resolve(__dirname, '../src/views/Main'),
    data  : path.resolve(__dirname, '../src/data'),
    
    BG     : path.resolve(__dirname, '../src/components/BG'),
    Section: path.resolve(__dirname, '../src/components/Section'),
    Menu   : path.resolve(__dirname, '../src/components/Menu'),  

    // UI
    Loading  : path.resolve(__dirname, '../src/components/Loading'),
    Grid     : path.resolve(__dirname, '../src/components/Grid'),
    Link     : path.resolve(__dirname, '../src/components/Link'),
    Rating   : path.resolve(__dirname, '../src/components/Rating'),
    Quote    : path.resolve(__dirname, '../src/components/Quote'),
    Avatar   : path.resolve(__dirname, '../src/components/Avatar'),
    Img      : path.resolve(__dirname, '../src/components/Img'),
    Icon     : path.resolve(__dirname, '../src/components/Icon'),
    IconBtn  : path.resolve(__dirname, '../src/components/IconBtn'),
    Menu     : path.resolve(__dirname, '../src/components/Menu'),
    
    // Form
    Radio    : path.resolve(__dirname, '../src/components/form/Radio'),
    Checkbox : path.resolve(__dirname, '../src/components/form/Checkbox'),
    Input    : path.resolve(__dirname, '../src/components/form/Input'),
    Textarea : path.resolve(__dirname, '../src/components/form/Textarea'),
    Button   : path.resolve(__dirname, '../src/components/form/Button'),
    Range    : path.resolve(__dirname, '../src/components/form/Range'),
    Select   : path.resolve(__dirname, '../src/components/form/Select'),
};