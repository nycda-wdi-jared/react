import React, { Component } from 'react';
import { Link } from 'react-router';

import Logout from './Logout';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	signedIn: false
        };
    }
	componentWillMount(){
        fetch('/api/signed-in', {
            headers: {
                Auth: localStorage.getItem('token'),
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'same-origin'
        }).then((response) => response.json())
        .then((results) => {
            if(results.message){
                if(results.message === "signed-in"){
                    this.setState({
                    	signedIn: true
                    })
                }
            }
        });
	}
  	render() {
  		const renderLinks = () => {
  			if(this.state.signedIn){
  				return (
  		      <nav className="navbar navbar-light bg-faded">
  						<Link className="nav-links" to="/home">Profile</Link>
              <Logout />
  					</nav>
  				)
  			} else {
  				return (
  		      <nav className="navbar navbar-light bg-faded">
  						<Link className="nav-links" to="/sign-up">Sign Up</Link>
  						<Link className="nav-links" to="/login">Login</Link>
  					</nav>
  				)
  			}
  		}
	    return (
	        <div>
	        	{renderLinks()}
				    <div className="text-center">
		        	<h1>Hello Passport</h1>
		        	<h2>Please Sign up or Sign in</h2>
		        </div>
	        </div>
	    );
  	}
};
