import React, {Component} from 'react';
import { Link } from 'react-router';

import LogoutForm from './../user_forms/LogoutForm';

export default class ApplicationPageNavBar extends Component {
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="dropdown menu" data-dropdown-menu>
                        <li className="menu-text">JobAppTrack</li>
                        <li><Link to="/userhome">Profile</Link></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <LogoutForm/>
                </div>
            </div>
        )
    }
}