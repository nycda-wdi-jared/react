import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import demo from './demo';

const Reducers = combineReducers({
    demo,
    form: formReducer,
    routing: routerReducer
});

export default Reducers;
