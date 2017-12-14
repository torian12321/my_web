import React		        from 'react';
import ReactDOM	        from 'react-dom';
import { Provider }     from 'react-redux';
import { createStore }  from 'redux';
import reducer          from './reducers';
import Main    	        from './views/Main';
import scripts	        from './scripts';
import styles		        from './styles';

//let store = createStore(reducer);
const store = createStore(
	reducer, /* preloadedState, */
	window.devToolsExtension ? window.devToolsExtension() : f => f
//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<Provider store={store}>
		<Main />
	</Provider>,
  document.getElementById('root')
);

if (process.env.NODE_ENV === 'production') {
	// cache all assets if browser supports serviceworker
	if ('serviceWorker' in navigator && location.protocol === 'https:') {
		navigator.serviceWorker.register('/service-worker.js');
	}
}