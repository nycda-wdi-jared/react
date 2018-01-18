import React, {Component} from 'react';
import { Link } from 'react-router';

export default class CreateAccountNavBar extends Component {
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="dropdown menu" data-dropdown-menu>
                        <li className="menu-text">JobAppTrack</li>
			         	<li><Link to="/">Home</Link></li>
			            <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                </div>
            </div>
        )
    }
}