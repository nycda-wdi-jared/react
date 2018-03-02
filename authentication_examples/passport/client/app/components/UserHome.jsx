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
    changePassword(e){
        e.preventDefault();

        if(this.refs.newPassword.value === this.refs.confirmNewPassword.value){
            const inputs = {
                currentPassword: this.refs.currentPassword.value,
                newPassword: this.refs.newPassword.value
            }
            fetch('/api/new-password', {
                method: 'post',
                body: JSON.stringify(inputs),
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json'
                },
                credentials: 'same-origin'
            }).then((response) => response.json())
            .then((results) => {
                console.log(results)
            });
        } else {
            alert('New Passwords Do Not Match');
        }
        $(document).ready(function(){
            $('.modal').modal('close');
        })
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

        $(document).ready(function(){
            $('.modal').modal();
        })
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
                    <a className="waves-effect waves-light btn" href="#modal1">Change Password</a>
		        </div>
                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <form onSubmit={this.changePassword.bind(this)}>
                            <h3>Password Change</h3>
                            <label>Current Password</label>
                            <input type="password" ref="currentPassword"/>
                            <label>New Password</label>
                            <input type="password" ref="newPassword"/>
                            <label>Confirm New Password</label>
                            <input type="password" ref="confirmNewPassword"/>
                            <input type="submit" className="btn btn-info"/>
                        </form>
                    </div>
                </div>
	        </div>
	    );
  	}
};