import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    signInForm(e){
        e.preventDefault()
    	var signInUser = {
    		username: this.refs.username.value,
    		password: this.refs.password.value
    	}
        fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify(signInUser),
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include'
        }).then((response) => {
            if(response.status == 401){
                alert("Login Failed for Username and/or Password")
            } else {
                localStorage.setItem('token', response.headers.get('Auth'));
                browserHistory.push("/home")
            }
        });
    }
	componentWillMount(){
        fetch('/api/signed-in', {
            headers: {
                Auth: localStorage.getItem('token'),
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'include'
        }).then((response) => response.json())
        .then((results) => {
            if(results.message){
                if(results.message !== "unauthorized"){
                    browserHistory.push("/home")
                }
            }
        });
	}
  	render() {
	    return (
	        <div>
	       		<nav className="navbar navbar-light bg-faded">
					<Link className="nav-links" to="/">Home</Link>
					<Link className="nav-links" to="/sign-up">Sign Up</Link>
				</nav>
				<div className="text-center">
		        	<h1>Hello Passport</h1>
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
	        </div>
	    );
  	}
};
