import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

import Logout from './../auth/Logout';
import UserHomeNav from './../navs/UserHomeNav';

export default class UserHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	user: {}
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
                <UserHomeNav/>
				<div className="text-center">
		        	<h1>Welcome to React Passport {this.state.user.name}</h1>
		        </div>
	        </div>
	    );
  	}
};