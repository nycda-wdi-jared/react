import React, {Component} from 'react';

import LogoutForm from './../user_forms/LogoutForm';
import UserHomeHeader from './../headers/UserHomeHeader';

export default class MainNavBar extends Component {
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="dropdown menu" data-dropdown-menu>
                        <li className="menu-text">JobAppTrack</li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <div className="grid-x">
                        <div className="small-4 cell">
                            <UserHomeHeader/>
                        </div>
                        <div className="small-3 cell">
                        </div>
                        <div className="small-4 cell">
                            <LogoutForm/>
                        </div>
                        <div className="small-1 cell">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}