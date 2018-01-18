import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';

import * as auth_reducers from './../reducers/Authentication_Reducers'; 
import * as user_reducers from './../reducers/User_Home_Reducers';

export var configure = (initialState = {}) => {
	var reducers = combineReducers({
		auth: auth_reducers.authenticationReducer,
		user: user_reducers.userHomeReducer
	});

	const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
	return createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}