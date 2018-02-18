import React, { Component } from 'react';
import {browserHistory} from 'react-router';

export default class SignInForm extends Component {
    signInForm(e){
        e.preventDefault()
    	var signInUser = {
    		username: this.refs.username.value,
    		password: this.refs.password.value
    	}
        fetch('/api/sign-in', {
            method: 'post',
            body: JSON.stringify(signInUser),
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'same-origin'
        }).then((response) => {
            if(response.status == 401){
                alert("Login Failed for Username and/or Password")
            } else {
                browserHistory.push("/home")
            }
        });
    }
	render(){
		return(
			<div className="text-center">
	        	<h2>Please Sign in</h2>
				<div className="well center-block" id="sign-in-div">
					<form id="sign-in-form" onSubmit={this.signInForm.bind(this)}>
						<label>Username</label><br></br>
						<input type="text" ref="username" /><br></br>
						<label>Password</label><br></br>
						<input type="password" ref="password"/><br></br>
						<input className="btn btn-danger" type="submit" />
					</form>
				</div>
			</div>
		)
	}
}