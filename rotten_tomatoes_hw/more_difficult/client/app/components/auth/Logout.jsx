import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

export default class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    logoutUser(){
        fetch('/api/logout', {
            method: 'DELETE',
            credentials: 'same-origin'
        }).then((response) => {
        	if(response.status == 204){
        		browserHistory.push('/login');
        	}
        });
    }
  	render() {
	    return ( 
			<a href="#" className="nav-links" onClick={this.logoutUser.bind(this)}>Logout</a>
	    );
  	}
};