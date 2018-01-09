import React, { Component } from 'react';
import { Link } from 'react-router';

export default class PageNotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
	componentWillMount(){
	}
  	render() {
	    return (
	        <div>
				<h1>Page Not found, please go back <Link className="nav-links" to="/">home</Link></h1>
	        </div>
	    );
  	}
};