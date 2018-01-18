import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router';

import * as types from './../types/Authentication_Types';

export function createNewAccount(name, username, password, confirmPassword){
     return function(dispatch){
		const newUser = {name, username, password, confirmPassword};
		fetch('/api/users/create', {
			method: 'post',
			body: JSON.stringify(newUser),
			headers: {
				'content-type': 'application/json'
			}
		}).then((response) => response.json())
		.then((results) => {
			try {
				if(results.createdAt){
					browserHistory.push('/login');
					dispatch({
						type: types.CREATE_USER,
						createUser: results
					})
				} else if (results.name === "SequelizeUniqueConstraintError") {
					throw 'Username already taken'
				}
			}
			catch(err){
				dispatch({
					type: types.CREATE_USER_ERROR,
					error: err
				})
				alert(err)
			}
		});
     	return null;
	}
};

export function loginForm(username){
	return { type: types.LOGIN_USER, username}
};

export function loginUser(username, password){
	return function(dispatch){
		dispatch(loginForm(username,password));
		const loginUser = {username, password};
		fetch('/api/users/login', {
			method: 'post',
			body: JSON.stringify(loginUser),
			headers: {
				'content-type': 'application/json',
			},
			credentials: 'include'
		}).then((response) => response.json())
		.then((results) => {
			if(results.message === "authentication failed"){
				throw alert("Authentication Failed");
				browserHistory.push('/login')
			}
			if(results.success = true){
				browserHistory.push('/userhome');
			}
		});
	}
};

export function logoutForm(){
	return { type: types.LOGOUT_USER }
};

export function logoutUser(){
	return function(dispatch){
		dispatch(logoutForm())
		fetch('/api/users/logout', {
			headers: {
				'content-type': 'application/json',
			},
			credentials: 'include'
		}).then((results) => {
			browserHistory.push('/');
		})
	}
}