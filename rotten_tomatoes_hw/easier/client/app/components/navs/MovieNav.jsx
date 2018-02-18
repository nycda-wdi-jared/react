import React, { Component } from 'react';
import { Link } from 'react-router';

export default class MovieNav extends Component {
	render() {
		return (
      		<nav className="navbar navbar-light bg-faded">
                <div className="row">
                    <div className="col-md-3">
                        <Link className="nav-links" to="/">Home</Link>
                    </div>
                    <div className="col-md-8"></div>
                    <div className="col-md-1">
                    	<Link className="nav-links" to="/movies">Movies</Link>
                    </div>
                </div>
			</nav>
		)
	}
};