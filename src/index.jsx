import React		from 'react';
import ReactDOM	from 'react-dom';
import Main    	from './views/Main';
import scripts	from './scripts';
import styles		from './styles';

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);

if (process.env.NODE_ENV === 'production') {
	// cache all assets if browser supports serviceworker
	if ('serviceWorker' in navigator && location.protocol === 'https:') {
		navigator.serviceWorker.register('/service-worker.js');
	}
}