import React, { Component } from 'react';
import { Link } from 'react-router';

import Logout from './../auth/Logout';

export default class UserHomeNav extends Component {
	render() {
		const renderLinks = () => {
			return (
			    <nav className="navbar navbar-light bg-faded">
	                <div className="row">
	                    <div className="col-md-3">
	                        <Link className="nav-links" to="/">Home</Link>
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
	    return (
	      <div>
	      	{renderLinks()}
	      </div>
	    );
	}
};