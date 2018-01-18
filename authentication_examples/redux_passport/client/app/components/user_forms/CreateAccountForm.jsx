import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/indexes/Authentication_Index';

class CreateAccountForm extends Component {
	onCreateUser(e){
		e.preventDefault();

		var name = this.refs.name.value;
		var username = this.refs.username.value;
		var password = this.refs.password.value;
		var confirmPassword = this.refs.confirmPassword.value;
		var {dispatch} = this.props;

		if (name.length > 0) {
			this.refs.name.value = '';
		} else {
			this.refs.name.value = '';
			alert('Please Enter Name/Nickname')
		}

		if (username.length > 0) {
			this.refs.username.value = '';
		} else {
			this.refs.usernamename.value = '';
			alert('Please Enter Username');
		}

		if(username.length > 5 && username.length < 12){
			this.refs.username.value = '';
    	} else {
    		this.refs.username.value = '';
      		alert('Username must be between 6 and 12 characters');
    	}

		if (password.length > 7) {
			this.refs.password.value = '';
		} else {
			this.refs.password.value = '';
			alert('Password Must be at least 8 characters');
		}

		if (confirmPassword.length > 0) {
			this.refs.confirmPassword.value = '';
		} else {
			alert('Please confirm password');
		}

		if (confirmPassword === password){
			this.refs.confirmPassword.value = '';
		} else {
			this.refs.confirmPassword.value = '';
			alert("Passwords don't match");
		}
		dispatch(actions.createNewAccount(name, username, password, confirmPassword));
	}
	render() {
		return (
			<div className="grid-x">
				<div className="small-4 cell">
				</div>
				<div className="small-4 cell">
					<form onSubmit={this.onCreateUser.bind(this)}>
							<label>
								Name/Nickname
								<input type="text" ref="name" placeholder="Enter Name/Nickname"/>
							</label>
							<label>
								Username
								<input type="text" ref="username" placeholder="Enter Username"/>
							</label>
							<label>
								Password
								<input type="password" ref="password" placeholder="Enter Password"/>
							</label>
							<label>
								Confirm Password
								<input type="password" ref="confirmPassword" placeholder="Confirm Password"/>
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

export default connect()(CreateAccountForm);