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
        if(this.refs.password.value === this.refs.confirmPassword.value){
        	var newUser = {
        		name: this.refs.name.value,
                email: this.refs.email.value,
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
                credentials: 'same-origin'
            }).then((response) => response.json())
            .then((results) => {
            	browserHistory.push("/login");
            });
        } else {
            alert('Passwords do not match')
        }
    }
	componentWillMount(){
        fetch('/api/signed-in', {
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'same-origin'
        }).then((response) => response.json())
        .then((results) => {
            if(results.message){
                if(results.message !== "no req.user"){
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
                            <label>Email</label><br></br>
                            <input type="text" ref="email" /><br></br>
							<label>Password</label><br></br>
							<input type="password" ref="password"/><br></br>
                            <label>Confirm Password</label><br></br>
                            <input type="password" ref="confirmPassword"/><br></br>
							<input className="btn btn-danger" type="submit" />
						</form>
					</div>
				</div>
	        </div>
	    );
  	}
};
