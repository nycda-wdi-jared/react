import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router';

import * as types from './../types/User_Home_Types';

export var setShowHideForm = () => {
	return {
		type: types.SHOW_HIDE_FORM
	};
};

export var setShowHideApplications = () => {
	return {
		type: types.SHOW_HIDE_APPLICATIONS
	};
};

export function userHome(){
     return function(dispatch){
		fetch('/api/userhome', {
			headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'include'
		}).then((response) => response.json())
		.then((results) => {
			if(results != 401){
				dispatch({
					type: types.USER_HOME,
					applications: results.applications,
					user: results.user
				})
			} else {
				browserHistory.push('/');
			}
		});
	}
};

export function userHomeApplication(id){
     return function(dispatch){
		fetch('/api/application/' + id, {
		headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        credentials: 'include'
		}).then((response) => response.json())
		.then((results) => {
			dispatch({
				type: types.USER_APPLICATION,
				application: results
			})
		});
	}
};

export function userApplications(){
	return function(dispatch){
		fetch('/api/applications', {
		headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        credentials: 'include'
		}).then((response) => response.json())
		.then((results) => {
			if(results != 401){
				dispatch({
					type: types.USER_APPLICATIONS,
					applications: results.applications
				})
			}
		});
	}
}

export function createNewRecord(creds){
    return function(dispatch, getState){
		const newRecord = {
			companyName: creds.companyName, 
			position: creds.position, 
			dateApplied: creds.dateApplied, 
			replied: creds.replied, 
			nextEvent: creds.nextEvent, 
			notes: creds.notes, 
			resumeSubmitted: creds.resumeSubmitted
		};
		fetch('/api/record/create', {
			method: 'post',
			body: JSON.stringify(newRecord),
			headers: {
				'content-type': 'application/json'
			},
			credentials: 'include'
		}).then((response) => response.json())
		.then((result) => {
			dispatch({
				type: types.UPDATE_USER_DATA,
				createdApplication: result
			})
		});
	};
};



