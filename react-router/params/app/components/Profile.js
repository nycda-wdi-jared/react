// Include React
import React, { Component } from 'react';
import HomeButton from './HomeButton';

export default class Profile extends Component {
  	render() {
	    return (
	        <div>
	        	<HomeButton />
	          	<h1># {this.props.match.params.id}'s Profile Page</h1>
	        </div>
	    );
  	}
};