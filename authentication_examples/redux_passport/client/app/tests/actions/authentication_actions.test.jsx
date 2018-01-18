import expect from 'expect';

import * as actions from './../../actions/indexes/Authentication_Index';
import * as types from './../../actions/types/Authentication_Types';

import CreateAccountForm from './../../components/user_forms/CreateAccountForm';
import CreateAccountPage from './../../components/pages/CreateAccountPage';
import LoginForm from './../../components/user_forms/LoginForm';
import LoginPage from './../../components/pages/LoginPage';

describe('Create Account components', () =>{
	it('Create Account form should exist', () =>{
		expect(CreateAccountForm).toExist();
	});
	it('Create Account page should exist', () =>{
		expect(CreateAccountPage).toExist();
	});
})
describe('Login components', () =>{
	it('Login form should exist', () =>{
		expect(LoginForm).toExist();
	});
	it('Login page should exist', () =>{
		expect(LoginPage).toExist();
	});
})
describe('Create Account Actions', ()=>{
	it('Should generate create account form action', () => {
		const newUser = {
			name: 'joeyjoey',
			username: 'johnnyjohn',
			password: 'aaaaaaaa',
			confirmPassword: 'aaaaaaaa'
		};
		const action = {
			type: types.CREATE_USER,
			name: newUser.name,
			username: newUser.username
		}
		const res = actions.createAccountForm(newUser.name, newUser.username);

		expect(res).toEqual(action);
	});
	// it('Should add information input to database', () => {
	// 	const newUser = [{
	// 		name: 'joeyjoey',
	// 		username: 'johnnyjohn',
	// 		password: 'aaaaaaaa',
	// 		confirmPassword: 'aaaaaaaa'
	// 	}];
	// 	const action = {
	// 		type: types.CREATE_USER,
	// 		newUser
	// 	}
	// 	const res = actions.createAccountForm(newUser);

		
	// })
});
describe('Login Actions', () => {
	it('should generate login form action', () => {
		const loginUser = {
			username: 'johnnyjohn',
		};
		const action = {
			type: types.LOGIN_USER,
			username: loginUser.username
		}
		const res = actions.loginForm(loginUser.username);

		expect(res).toEqual(action);
	});
});