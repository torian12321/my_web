import React from 'react';
import ReactDOM from 'react-dom';
import Main from './views/Main';
import styles from './styles';
import scripts from './scripts';

ReactDOM.render(
  <Main />,
  document.getElementById('🎃')
);

if (process.env.NODE_ENV === 'production') {
	// cache all assets if browser supports serviceworker
	if ('serviceWorker' in navigator && location.protocol === 'https:') {
		navigator.serviceWorker.register('/service-worker.js');
	}
}