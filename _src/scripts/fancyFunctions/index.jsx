import manifest from 'manifest';

import message_tab     from './message_tab';
import message_console from './message_console';

module.exports = () => {
    message_tab();
    message_console(`${ manifest.name } - ${ manifest.description }`, manifest.theme_color);
};