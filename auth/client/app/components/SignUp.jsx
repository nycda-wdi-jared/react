import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    signUpForm(e){
    	e.preventDefault();
    	var newUser = {
    		name: this.refs.name.value,
    		username: this.refs.username.value,
    		password: this.refs.password.value
    	}
        fetch('/api/sign-up', {
            method: 'post',
            body: JSON.stringify(newUser),
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'include'
        }).then((response) => response.json())
        .then((results) => {
        	browserHistory.push("/login");
        });
    }
	componentWillMount(){
	}
  	render() {
	    return (
	        <div>
	       		<nav className="navbar navbar-light bg-faded">
					<Link className="nav-links" to="/">Home</Link>
					<Link className="nav-links" to="/login">Login</Link>
				</nav>
				<div className="text-center">
		        	<h1>Hello Passport</h1>
		        	<h2>Not a member. Please Sign Up</h2>
					<div className="well center-block" id="sign-in-div">
						<form id="sign-in-form" onSubmit={this.signUpForm.bind(this)}>
							<label>Name</label><br></br>
							<input type="text" ref="name" /><br></br>
							<label>Username</label><br></br>
							<input type="text" ref="username" /><br></br>
							<label>Password</label><br></br>
							<input type="password" ref="password"/><br></br>
							<input className="btn btn-danger" type="submit" />
						</form>
					</div>
				</div>
	        </div>
	    );
  	}
};
