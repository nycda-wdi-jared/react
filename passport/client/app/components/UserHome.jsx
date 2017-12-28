import React, { Component } from 'react';
import { Link } from 'react-router';

export default class UserHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
	componentWillMount(){
        fetch('/api/signed-in', {
        }).then((response) => response.json())
        .then((results) => {
        	console.log(results)
        });
	}
  	render() {
	    return (
	        <div>
	       		<nav className="navbar navbar-light bg-faded">
					<Link className="nav-links" to="/">Home</Link>
				</nav>
				<div className="text-center">
		        	<h1>Hello Passport</h1>
		        	<h2>Please Sign up or Sign in</h2>
		        </div>
	        </div>
	    );
  	}
};