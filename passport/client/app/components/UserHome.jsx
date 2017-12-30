import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

import Logout from './Logout';

export default class UserHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	user: {}
        };
    }
    logoutUser(){
        fetch('/api/logout', {
            method: 'DELETE',
            credentials: 'same-origin'
        }).then((response) => {
        	if(response.status == 204){
        		browserHistory.push('/');
        	}
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
            if(results.message){
                if(results.message !== "signed-in"){
                    browserHistory.push("/login")
                } else {
                	this.setState({
                		user: results.user
                	})
                }
            }
        });
	}
  	render() {
	    return (
	        <div>
	       		<nav className="navbar navbar-light bg-faded">
					<Link className="nav-links" to="/">Home</Link>
                    <Logout />
				</nav>
				<div className="text-center">
		        	<h1>Welcome to React Passport {this.state.user.name}</h1>
		        </div>
	        </div>
	    );
  	}
};