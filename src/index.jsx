var
React    = require('react'),
ReactDOM = require('react-dom'),
Main     = require('./views/Main'),
styles   = require('./styles'),
scripts  = require('./scripts');

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);

if (process.env.NODE_ENV === 'production') {
	// cache all assets if browser supports serviceworker
	if ('serviceWorker' in navigator && location.protocol === 'https:') {
		navigator.serviceWorker.register('./service-worker.js');
	}
}