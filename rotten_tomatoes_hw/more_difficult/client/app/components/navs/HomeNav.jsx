import React, { Component } from 'react';
import { Link } from 'react-router';

import Logout from './../auth/Logout';

export default class HomeNav extends Component {
  	constructor(props) {
		super(props);
	    this.state = {
	    	signedIn: false
	    };
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
			if(!this.state.signedIn){
				return (
          			<nav className="navbar navbar-light bg-faded">
            			<div className="row">
              				<div className="col-md-3">
                				<Link className="nav-links" to="/sign-up">Sign Up</Link>
                				<Link className="nav-links" to="/login">Login</Link>
              				</div>
	              			<div className="col-md-8"></div>
	              			<div className="col-md-1">
	                			<Link className="nav-links" to="/movies">Movies</Link>
	              			</div>
        				</div>
          			</nav>
				)
			} else {
				return (
          			<nav className="navbar navbar-light bg-faded">
            			<div className="row">
                			<div className="col-md-3">
                    			<Link className="nav-links" to="/home">Profile</Link>
                			</div>
                			<div className="col-md-7"></div>
                			<div className="col-md-1">
                  				<Link className="nav-links" to="/movies">Movies</Link>
                  				<Logout />
                			</div>
                			<div className="col-md-1">
                			</div>
            			</div>
          			</nav>
				)
			}
		}
	    return (
	      <div>
	      	{renderLinks()}
	      </div>
	    );
	}
};