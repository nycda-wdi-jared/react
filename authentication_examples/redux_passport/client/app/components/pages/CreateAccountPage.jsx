import React, { Component } from 'react';
import { Link } from 'react-router';

import CreateAccountForm from './../user_forms/CreateAccountForm';
import CreateAccountNavBar from './../navs/CreateAccountNavBar';

export default class CreateAccountPage extends Component {
	render() {
		return (
			<div>
				<CreateAccountNavBar/>
				<h1 className="page-title text-center">Create an Account</h1>
				<CreateAccountForm/>
				<p className="text-center">Already have an account? Please <Link to="/login">login</Link></p>
			</div>
		);
	}
}