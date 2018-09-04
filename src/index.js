import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';
import App from '@/containers/App';

import 'bootstrap';
import 'reset-css/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/global.scss';


WebFont.load({
	google: {
		families: [
			'Playfair Display:400,500,600,700:latin,latin-ext',
			'Raleway:100,300,400,500,600,700:latin,latin-ext',
		]
	}
});

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
