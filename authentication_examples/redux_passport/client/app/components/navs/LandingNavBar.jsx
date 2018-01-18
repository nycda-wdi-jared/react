import React, { Component } from 'react';
import { Link } from 'react-router';

export default class LandingNavBar extends Component {
    render() {
        return (
			<div className="top-bar">
			  <div className="top-bar-left">
			    <ul className="dropdown menu" data-dropdown-menu>
			      <li className="menu-text">JobTrackApp</li>
			          <li><Link to="/login">Login</Link></li>
			          <li><Link to="/register">Register</Link></li>
			    </ul>
			  </div>
			</div>
        )
    }
}