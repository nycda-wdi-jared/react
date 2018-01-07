import * as redux from 'redux';
import thunk from 'redux-thunk';

import { reduceOpacityReducer } from '../reducers/reducers.js';

export var configure = (initialState = {}) => {

	var store = redux.createStore(reduceOpacityReducer, initialState, redux.compose(
		redux.applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f 
		));

	return store;
};