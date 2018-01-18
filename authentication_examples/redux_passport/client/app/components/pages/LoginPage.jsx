import React, { Component } from 'react';
import { Link } from 'react-router';

import LoginNavBar from './../navs/LoginNavBar'
import LoginForm from './../user_forms/LoginForm';

export default class LoginPage extends Component {
	render() {
		return (
			<div>
				<LoginNavBar/>
				<h1 className="page-title text-center">Please Login</h1>
				<LoginForm/>
				<p className="text-center">If you haven't registered yet, please <Link to="/register">Sign Up</Link></p>
			</div>
		);
	}
}