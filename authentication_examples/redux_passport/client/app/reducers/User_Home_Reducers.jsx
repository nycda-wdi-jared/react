import * as types from './../actions/types/User_Home_Types';
import * as auth_types from './../actions/types/Authentication_Types';

const initialState = {
	applications: [],
	showForm: false,
	showApplications: false
}

export var userHomeReducer = (state = initialState, action) => {
	switch(action.type){
		case types.USER_HOME:
			return { ...state, user: action.user, applications: action.applications }
		case types.USER_APPLICATION:
			return { ...state, application: action.application }
		case types.UPDATE_USER_DATA:
            return Object.assign({}, state, {
                applications: state.applications.concat(action.createdApplication)
            });
		case types.SHOW_HIDE_APPLICATIONS:
			return { ...state, showApplications: !state.showApplications }
		case types.SHOW_HIDE_FORM:
			return { ...state, showForm: !state.showForm }
		default:
			return state;
	}
}