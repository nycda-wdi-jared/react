import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HomeNav extends Component {
	render() {
		return (
      		<nav className="navbar navbar-light bg-faded">
                <div className="row">
                    <div className="col-md-3">
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