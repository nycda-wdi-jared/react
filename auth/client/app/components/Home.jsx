import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
	componentWillMount(){
	}
  	render() {
	    return (
	        <div>
	       		<nav className="navbar navbar-light bg-faded">
					<Link className="nav-links" to="/sign-up">Sign Up</Link>
					<Link className="nav-links" to="/login">Login</Link>
				</nav>
				<div className="text-center">
		        	<h1>Hello Passport</h1>
		        	<h2>Please Sign up or Sign in</h2>
		        </div>
	        </div>
	    );
  	}
};
