import React, { Component } from 'react';
import {browserHistory} from 'react-router';

export default class SignUpForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			disableSubmit: true,
			disableConfInput: true
		};
	}
    signUpForm(e){
    	e.preventDefault();
    	if(this.refs.password.value.length > 6 && this.refs.name.value !== "" && this.refs.username.value !== ""){
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
	            credentials: 'same-origin'
	        }).then((response) => response.json())
	        .then((results) => {
	        	browserHistory.push("/login");
	        });
	    } else if (this.refs.name.value === ""){
	    	alert("Please enter name")
	    } else if (this.refs.username.value === ""){
	    	alert("Please enter username")
	    } else if (this.refs.password.value.length <= 6){
	    	alert("Please enter password of 7 or more characters")
	    }
    }
    passwordEnter(){
    	if(this.refs.password.value.length > 6){
    		this.setState({
    			disableConfInput: false
    		})
    	} else {
    		this.setState({
    			disableConfInput: true
    		})
    	}
    }
    passwordMatch(){
    	const {password, confirmPassword} = this.refs;
    	if(password.value === confirmPassword.value){
    		this.setState({
    			disableSubmit: false
    		})
    	} else {
    		this.setState({
    			disableSubmit: true
    		})
    	}
    }
	render(){
		return(
			<div className="text-center">
	        	<h2>Not a member. Please Sign Up</h2>
				<div className="well center-block" id="sign-in-div">
					<form id="sign-in-form">
						<label>Name</label><br></br>
						<input type="text" ref="name" /><br></br>
						<label>Username</label><br></br>
						<input type="text" ref="username" /><br></br>
						<label>Password</label><br></br>
						<input 
							type="password" 
							ref="password"
							onChange={this.passwordEnter.bind(this)}
						/>
						<br></br>
						<label>Confirm Password</label><br></br>
						<input 
							type="password" 
							ref="confirmPassword"
							onChange={this.passwordMatch.bind(this)}
							disabled={this.state.disableConfInput}
						/>
						<br></br>
						<input 
							className="btn btn-danger" 
							type="submit" 
							onClick={this.signUpForm.bind(this)}
							disabled={this.state.disableSubmit}
						/>
					</form>
				</div>
			</div>
		)
	}
}