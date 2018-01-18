import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import routes from './routes';
//var store = require('./store/ConfigureStore').configure();
import { configure } from './store/ConfigureStore';
import * as actions from './actions/indexes/User_Home_Index';

$(document).foundation();

require('style!css!sass!applicationStyles')

ReactDOM.render(
	<Provider store={configure()}>
    	<Router history={browserHistory}>{routes}</Router>
    </Provider>,
  document.getElementById('app')
);