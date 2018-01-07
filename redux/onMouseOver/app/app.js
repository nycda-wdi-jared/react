// FRONT-END: React Router
// Rendering our Router Component with {routes} component; Passing down {browser history}

// DEPENDENCIES================================================================
import React from 'react';
import ReactDOM from 'react-dom';
var { Provider } = require('react-redux');
import { Router, browserHistory } from 'react-router';
// Importing all of the routes contained in the {routes} component
import routes from './routes.js';
var store = require('./store/store.js').configure();

// ENTRY POINT (to application)==================================================
// Rendering application and mounting to DOM
ReactDOM.render(
	<Provider store={store}>
    	<Router history={browserHistory}>{routes}</Router>
    </Provider>,
  document.getElementById('app')
);