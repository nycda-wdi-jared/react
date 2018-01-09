import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

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
			headers: {
				Auth: localStorage.getItem('token'),
			},
			credentials: 'include'
        }).then((response) => {
        	if(response.status == 204){
        		browserHistory.push('/');
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
                if(results.message === "unauthorized"){
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
					<ul className="right">
						<Link className="nav-links" onClick={this.logoutUser.bind(this)}>Logout</Link>
					</ul>
				</nav>
				<div className="text-center">
		        	<h1>Welcome to React Passport {this.state.user.name}</h1>
		        </div>
	        </div>
	    );
  	}
};