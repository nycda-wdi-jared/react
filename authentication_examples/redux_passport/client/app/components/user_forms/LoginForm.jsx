import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/indexes/Authentication_Index';

class LoginForm extends Component {
	onLoginSubmit(e){
		e.preventDefault();

		var creds = {};
		var username = this.refs.username.value;
		var password = this.refs.password.value;
		var {dispatch} = this.props;

		if (username.length > 0) {
			this.refs.username.value = '';
			creds.username = username;
		}

		if (password.length > 0) {
			this.refs.password.value = '';
			creds.password = password;
		}

		dispatch(actions.loginUser(username, password));
	}
	render() {
		return (
			<div className="grid-x">
				<div className="small-4 cell">
				</div>
				<div className="small-4 cell">
					<form onSubmit={this.onLoginSubmit.bind(this)}>
						<label> 
							Login
							<input type="text" ref="username" placeholder="Enter Username"/>
						</label>
						<label>
							Password
							<input type="password" ref="password" placeholder="Enter Password"/>
						</label>
						<div className="text-center">
							<input className="button success expanded" type="submit" value="Submit"/>
						</div>
					</form>
				</div>
				<div className="small-4 cell">
				</div>
			</div>
		);
	}
};

export default connect()(LoginForm);