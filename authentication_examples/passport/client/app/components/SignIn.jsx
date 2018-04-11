import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitButtonDisabled: false
        };
    }
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
    changePasswordForm(e){
        e.preventDefault();
        this.setState({
            submitButtonDisabled: true
        })
        fetch('/api/forgot-password', {
            method: 'post',
            body: JSON.stringify({email: this.refs.email.value}),
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'same-origin'
        }).then((response) => response.json())
        .then((results) => {
            console.log(results)
            this.setState({
                submitButtonDisabled: false
            })
            $(document).ready(function(){
                $('.modal').modal('close');
            });
        });
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
            if(results.message === "signed-in"){
                browserHistory.push("/home")
            }
        });

        $(document).ready(function(){
            $('.modal').modal();
        })
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
                    <a href="#modal1">Forgot Password?</a>
				</div>
                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <form onSubmit={this.changePasswordForm.bind(this)}>
                            <h3>Forgot Password? Provide Email</h3>
                            <label>Email</label>
                            <input type="text" ref="email"/>
                            <input 
                                type="submit" 
                                disabled={this.state.submitButtonDisabled} 
                                className="btn btn-info"
                            />
                        </form>
                    </div>
                </div>
                <div className="text-center" id="github_signin">
                    <a href="/auth/github">
                        <img
                            src="./github.png"
                            style={{height: '50px', width: 'auto'}}
                        />
                    </a>
                </div>
	        </div>
	    );
  	}
};
